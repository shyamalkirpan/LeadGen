'use client'
import { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import AddNewLead from "@/components/ui/AddNewLead";
import LeadSkeleton from "@/components/ui/LeadSkeleton";

export default function LeadsPage() {
    const [pageIndex, setPageIndex] = useState(0)
    const [pageSize, setPageSize] = useState(10)

    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['leads', pageIndex, pageSize],
        queryFn: async () => {
            const response = await fetch(`/api/leads?page=${pageIndex + 1}&pageSize=${pageSize}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return await response.json()
        },
        staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
        cacheTime: 10 * 60 * 1000, // Cache is kept for 10 minutes
        refetchOnWindowFocus: false, // Disable refetch on window focus
        retry: 1, // Only retry once on failure
    })

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl font-bold">Leads</h1>
                <p className="mt-4">This is the leads page.</p>
                <p className="mt-4">You can manage your leads here.</p>
                <AddNewLead />
                {(isPending || isFetching) ? <LeadSkeleton /> :
                    <DataTable
                        columns={columns}
                        data={data?.data || []}
                        pageCount={data?.totalPages || 0}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        onPageChange={setPageIndex}
                        onPageSizeChange={setPageSize}
                    />}
            </div>
        </>
    )
}
