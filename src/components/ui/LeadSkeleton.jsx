import { Skeleton } from "@/components/ui/skeleton"




export default function LeadSkeleton() {
    return (
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
    )}