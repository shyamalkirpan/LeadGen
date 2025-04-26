import { NextResponse } from 'next/server';
import { db } from '@/db';
import { leads } from '@/db/schema';
import { eq, and, like, or, desc, asc } from 'drizzle-orm';

// Helper function to validate required fields
const validateRequiredFields = (body, requiredFields) => {
    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
};

// Helper function to handle errors
const handleError = (error, message) => {
    console.error(`Error ${message}:`, error);
    return NextResponse.json(
        { error: `Failed to ${message}` },
        { status: 500 }
    );
};

export async function POST(request) {
    try {
        const body = await request.json();
        validateRequiredFields(body, ['name', 'email', 'phone', 'company']);

        const [newLead] = await db.insert(leads).values({
            name: body.name,
            email: body.email,
            phone: body.phone,
            company: body.company,
            jobTitle: body.jobTitle || '',
            leadSource: body.leadSource || '',
            status: body.status || 'new',
            notes: body.notes || ''
        }).returning();

        return NextResponse.json(
            {
                message: 'Lead submitted successfully',
                data: newLead
            },
            { status: 201 }
        );
    } catch (error) {
        if (error.message.includes('Missing required fields')) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        }
        return handleError(error, 'submit lead');
    }
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const search = searchParams.get('search');
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = (page - 1) * limit;
        const sortBy = searchParams.get('sortBy') || 'createdAt';
        const sortOrder = searchParams.get('sortOrder') || 'desc';

        let query = db.select().from(leads);

        // Apply filters if provided
        if (status) {
            query = query.where(eq(leads.status, status));
        }

        if (search) {
            query = query.where(
                or(
                    like(leads.name, `%${search}%`),
                    like(leads.email, `%${search}%`),
                    like(leads.company, `%${search}%`),
                    like(leads.phone, `%${search}%`)
                )
            );
        }

        // Get total count for pagination
        const [{ count }] = await db.select({ count: leads.id }).from(leads);

        // Apply sorting and pagination
        const allLeads = await query
            .orderBy(sortOrder === 'desc' ? desc(leads[sortBy]) : asc(leads[sortBy]))
            .limit(limit)
            .offset(offset);

        return NextResponse.json(
            {
                message: 'Leads fetched successfully',
                data: allLeads,
                pagination: {
                    total: count,
                    page,
                    limit,
                    totalPages: Math.ceil(count / limit)
                },
                filters: {
                    status,
                    search,
                    sortBy,
                    sortOrder
                }
            },
            { status: 200 }
        );
    } catch (error) {
        return handleError(error, 'fetch leads');
    }
}

export async function PUT(request) {
    try {
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json(
                { error: 'Lead ID is required' },
                { status: 400 }
            );
        }

        const [updatedLead] = await db
            .update(leads)
            .set({
                ...updateData,
                updatedAt: new Date()
            })
            .where(eq(leads.id, id))
            .returning();

        if (!updatedLead) {
            return NextResponse.json(
                { error: 'Lead not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: 'Lead updated successfully',
                data: updatedLead
            },
            { status: 200 }
        );
    } catch (error) {
        return handleError(error, 'update lead');
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'Lead ID is required' },
                { status: 400 }
            );
        }

        const [deletedLead] = await db
            .delete(leads)
            .where(eq(leads.id, id))
            .returning();

        if (!deletedLead) {
            return NextResponse.json(
                { error: 'Lead not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: 'Lead deleted successfully',
                data: deletedLead
            },
            { status: 200 }
        );
    } catch (error) {
        return handleError(error, 'delete lead');
    }
}