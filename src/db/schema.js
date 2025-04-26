import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';
//import { relations } from 'drizzle-orm';

// Define the 'leads' table

//     id: 1,
//     "name": "shyamal kirpan",
//     "email": "shyamalkirpan20@gmail.com",
//     "phone": "9503605589",
//     "company": "asd",
//     "jobTitle": "",
//     "leadSource": "referral",
//     "status": "contacted",
//     "notes": "asd"
// 
export const leads = pgTable('leads', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: varchar('email', { length: 256 }).notNull().unique(),
    phone: varchar('phone', { length: 20 }),
    company: text('company'),
    jobTitle: text('job_title'),
    leadSource: text('lead_source'),
    status: text('status'),
    notes: text('notes'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});