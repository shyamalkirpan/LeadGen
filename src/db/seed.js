import { db } from './index';
import { leads } from './schema';

const seedData = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        company: "Tech Corp",
        jobTitle: "Software Engineer",
        leadSource: "Website",
        status: "new",
        notes: "Interested in our enterprise solution"
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "9876543210",
        company: "Digital Solutions",
        jobTitle: "Marketing Manager",
        leadSource: "Referral",
        status: "contacted",
        notes: "Follow up next week"
    },
    {
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
        phone: "5551234567",
        company: "Global Industries",
        jobTitle: "CEO",
        leadSource: "LinkedIn",
        status: "qualified",
        notes: "High potential client"
    }
];

async function seed() {
    try {
        console.log('🌱 Starting database seeding...');

        // Insert seed data
        for (const lead of seedData) {
            await db.insert(leads).values(lead);
        }

        console.log('✅ Database seeding completed successfully!');
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

// Run the seed function
seed(); 