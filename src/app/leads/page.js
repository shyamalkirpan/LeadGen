'use client'
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import AddNewLead from "@/components/ui/AddNewLead";
import LeadSkeleton from "@/components/ui/LeadSkeleton";
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
    if (error) return 'An error has occurred: ' + error.message
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl font-bold">Leads</h1>
                <p className="mt-4">This is the leads page.</p>
                <p className="mt-4">You can manage your leads here.</p>
                <AddNewLead />
                {(isPending || isFetching) ? <LeadSkeleton/> : 
                <DataTable columns={columns} data={data.data} />}
            </div>
        </>
    )
}
