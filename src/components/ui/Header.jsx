"use client"

import { Button } from "@/components/ui/button"
import { Database, Menu } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/ModeToggle"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/leads", label: "Leads", prefetch: true },
        // { href: "/addlead", label: "Add Lead" },
        { href: "/about", label: "About" },
        { href: "#", label: "Settings" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-center relative">
                <div className="flex-1 flex items-center pl-2 gap-2">
                    <Database className="h-6 w-6" />
                    <span className="text-xl font-bold">Lead Management System</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            {...item.prefetch && { prefetch: true }}
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 absolute right-4">
                    <ModeToggle />
                    <Link href={'/leads'} prefetch={true}> <Button variant="outline" className="hidden md:flex">Dashboard</Button></Link>

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle>Navigation Menu</SheetTitle>
                            <nav className="flex flex-col gap-4 mt-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-sm font-medium hover:underline underline-offset-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Link href={'/leads'} prefetch={true} > <Button variant="outline">Dashboard</Button></Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}