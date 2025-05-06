'use client'
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
export default function LeadsPage() {
    const [leads, setLeads] = useState([]);

    // fetch leads from /api/leads
    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await fetch("/api/leads");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setLeads(data.data);
            } catch (error) {
                console.error("Error fetching leads:", error);
            }
        };
        fetchLeads();
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl font-bold">Leads</h1>
                <p className="mt-4">This is the leads page.</p>
                <p className="mt-4">You can manage your leads here.</p>
                <DataTable columns={columns} data={leads} />
            </div>
        </>
    )
}
