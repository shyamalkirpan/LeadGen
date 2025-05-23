"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Database } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"

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
    const queryClient = useQueryClient()

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

    // Create mutation for adding a lead
    const createLeadMutation = useMutation({
        mutationFn: async (values) => {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${values.firstName} ${values.lastName}`,
                    email: values.email,
                    phone: values.phone,
                    company: values.company,
                    jobTitle: values.jobTitle,
                    leadSource: values.leadSource,
                    status: values.status,
                    notes: values.notes
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to submit lead');
            }

            return response.json();
        },
        onSuccess: (data, variables) => {
            // Invalidate and refetch leads query
            queryClient.invalidateQueries({ queryKey: ['leads'] });

            toast.success("Lead added successfully", {
                description: `${variables.firstName} ${variables.lastName} has been added to your leads.`
            });

            // Reset form
            form.reset();

            // Optionally redirect to leads list
            // router.push("/leads")
        },
        onError: (error) => {
            toast.error("Error", {
                description: error.message || "There was a problem adding the lead. Please try again."
            });
        }
    });

    // Form submission handler
    async function onSubmit(values) {
        createLeadMutation.mutate(values);
    }

    return (<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-2xl space-y-8">
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
                                            <SelectItem value="Website">Website</SelectItem>
                                            <SelectItem value="Referral">Referral</SelectItem>
                                            <SelectItem value="Social Media">Social Media</SelectItem>
                                            <SelectItem value="Email Campaign">Email Campaign</SelectItem>
                                            <SelectItem value="Event">Event</SelectItem>
                                            <SelectItem value="Cold Call">Cold Call</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
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
                        <Button type="submit" disabled={createLeadMutation.isPending}>
                            {createLeadMutation.isPending ? "Saving..." : "Add Lead"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    </div>
    )
}
