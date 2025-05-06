"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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

]