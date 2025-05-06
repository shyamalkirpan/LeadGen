'use client'
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Skeleton } from "@/components/ui/skeleton"



export default function LeadsPage() {
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const response = await fetch(
                '/api/leads',
            )
            return await response.json()
        },
    })

    if (isPending || isFetching) return <>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl font-bold">Leads</h1>
            <p className="mt-4">This is the leads page.</p>
            <p className="mt-4">You can manage your leads here.</p>
            <div className="rounded-md border">
                <div className="flex items-center py-4">
                    <Skeleton className="h-10 w-[250px]" />
                </div>
                <div className="border-b">
                    <div className="grid grid-cols-5 gap-4 p-4">
                        <Skeleton className="h-8 w-[100px]" />
                        <Skeleton className="h-8 w-[150px]" />
                        <Skeleton className="h-8 w-[120px]" />
                        <Skeleton className="h-8 w-[100px]" />
                        <Skeleton className="h-8 w-[120px]" />
                    </div>
                </div>
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b">
                        <Skeleton className="h-6 w-[120px]" />
                        <Skeleton className="h-6 w-[180px]" />
                        <Skeleton className="h-6 w-[100px]" />
                        <Skeleton className="h-6 w-[80px]" />
                        <Skeleton className="h-6 w-[100px]" />
                    </div>
                ))}
            </div>
        </div>
    </>

    if (error) return 'An error has occurred: ' + error.message


    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl font-bold">Leads</h1>
                <p className="mt-4">This is the leads page.</p>
                <p className="mt-4">You can manage your leads here.</p>
                <DataTable columns={columns} data={data.data} />
            </div>
        </>
    )
}
