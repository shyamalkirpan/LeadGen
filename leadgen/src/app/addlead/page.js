"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Database } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

// Form schema with validation
const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z
        .string()
        .min(10, {
            message: "Please enter a valid phone number.",
        })
        .optional(),
    company: z
        .string()
        .min(2, {
            message: "Company name must be at least 2 characters.",
        })
        .optional(),
    jobTitle: z.string().optional(),
    leadSource: z.string({
        required_error: "Please select a lead source.",
    }),
    status: z.string({
        required_error: "Please select a status.",
    }),
    notes: z
        .string()
        .max(500, {
            message: "Notes must not exceed 500 characters.",
        })
        .optional(),
})

export default function AddLeadPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Initialize form with react-hook-form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            jobTitle: "",
            leadSource: "",
            status: "new",
            notes: "",
        },
    })

    // Form submission handler
    async function onSubmit(values) {
        setIsSubmitting(true)

        try {
            // In a real application, you would send this data to your API
            console.log(values)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            toast.success("Lead added successfully", {
                description: `${values.firstName} ${values.lastName} has been added to your leads.`
            })

            // Reset form
            form.reset()

            // Optionally redirect to leads list
            // router.push("/leads")
        } catch (error) {
            toast.error("Error", {
                description: "There was a problem adding the lead. Please try again."
            })
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Database className="h-6 w-6" />
                        <span className="text-xl font-bold">Lead Management System</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                            Home
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Leads
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Reports
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Settings
                        </Link>
                    </nav>
                    <Button variant="outline">Dashboard</Button>
                </div>
            </header>

            <main className="flex-1 container py-10">
                <div className="mx-auto max-w-3xl space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Add New Lead</h1>
                        <p className="text-muted-foreground mt-2">
                            Enter the details of your new lead. Fields marked with * are required.
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john.doe@example.com" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="(123) 456-7890" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Acme Inc." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="jobTitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Job Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Marketing Manager" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="leadSource"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Lead Source *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a lead source" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="website">Website</SelectItem>
                                                    <SelectItem value="referral">Referral</SelectItem>
                                                    <SelectItem value="social_media">Social Media</SelectItem>
                                                    <SelectItem value="email_campaign">Email Campaign</SelectItem>
                                                    <SelectItem value="event">Event</SelectItem>
                                                    <SelectItem value="cold_call">Cold Call</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Status *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a status" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="new">New</SelectItem>
                                                    <SelectItem value="contacted">Contacted</SelectItem>
                                                    <SelectItem value="qualified">Qualified</SelectItem>
                                                    <SelectItem value="proposal">Proposal</SelectItem>
                                                    <SelectItem value="negotiation">Negotiation</SelectItem>
                                                    <SelectItem value="won">Won</SelectItem>
                                                    <SelectItem value="lost">Lost</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="notes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Notes</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Add any additional information about this lead..."
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Maximum 500 characters</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end gap-4">
                                <Button variant="outline" type="button" onClick={() => form.reset()}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Saving..." : "Add Lead"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </main>

            <footer className="w-full border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Lead Management System. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
