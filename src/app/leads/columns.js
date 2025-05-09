"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpDown } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const deleteLead = async (leadId) => {
    const response = await fetch(`/api/leads/${leadId}`, {
        method: "DELETE",
    })

    if (!response.ok) {
        console.error("Failed to delete lead")
        toast.error("Failed to delete lead", {
            description: `Lead could not be deleted. Please try again later.`,
        });
        return
    }

    const data = await response.json()
    console.log("Lead deleted successfully", data)

    toast.success("Lead Deleted successfully", {
        description: `${data.data.name} has been removed from your leads.`
    });
}

export const columns = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => {
            const phone = row.getValue("phone")
            const formatted = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")

            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "status",
        cell: ({ row }) => {
            const status = row.getValue("status")
            let colorClass = "bg-gray-100 text-gray-800" // default

            if (status === "new") colorClass = "bg-blue-100 text-blue-800"
            else if (status === "contacted") colorClass = "bg-green-100 text-green-800"
            else if (status === "qualified") colorClass = "bg-yellow-100 text-yellow-800"
            else if (status === "unqualified") colorClass = "bg-red-100 text-red-800"

            return <Badge className={colorClass}>{status}</Badge>
        },
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "leadSource",
        header: "Lead Source",
    },

    {
        id: "actions",
        cell: ({ row }) => {
            const lead = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(lead.id)}
                        >
                            Copy Lead ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Lead</DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => {
                            // console.log("Delete Lead clicked"); // Debug log
                            e.preventDefault();
                            if (!lead) {
                                console.error("Lead is undefined"); // Debug log
                                return;
                            }
                            console.log("Del lead", lead);
                            deleteLead(lead.id);
                        }}>
                            Delete Lead
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]