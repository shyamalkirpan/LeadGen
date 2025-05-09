import Link from "next/link"
import { UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function AddNewLead() {
    return (
        <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Leads</h2>
                <Link href={'/addlead'} >
                <Button ><UserPlus />Add New Lead</Button>
                </Link>
        </div>
    )
}