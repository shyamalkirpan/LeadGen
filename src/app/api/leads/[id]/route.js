import { NextResponse } from 'next/server';
import { db } from '@/db';
import { leads } from '@/db/schema';
import { eq } from 'drizzle-orm';

// Helper function to handle errors
const handleError = (error, message) => {
    console.error(`Error ${message}:`, error);
    return NextResponse.json(
        { error: `Failed to ${message}` },
        { status: 500 }
    );
};

export async function GET(request, { params }) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json(
                { error: 'Lead ID is required' },
                { status: 400 }
            );
        }

        const [lead] = await db
            .select()
            .from(leads)
            .where(eq(leads.id, id));

        if (!lead) {
            return NextResponse.json(
                { error: 'Lead not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: 'Lead fetched successfully',
                data: lead
            },
            { status: 200 }
        );
    } catch (error) {
        return handleError(error, 'fetch lead');
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;

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