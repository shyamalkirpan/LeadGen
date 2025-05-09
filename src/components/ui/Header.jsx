"use client"

import { Button } from "@/components/ui/button"
import { Database, Menu, Home, Users, Info, Settings } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/ModeToggle"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
    SheetFooter,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
    { href: "/", label: "Home", icon: Home },
    { href: "/leads", label: "Leads", prefetch: true, icon: Users },
    { href: "/about", label: "About", icon: Info },
    { href: "/settings", label: "Settings", icon: Settings },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Database className="h-6 w-6 transition-transform hover:scale-110" />
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Lead Management System
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            {...item.prefetch && { prefetch: true }}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                "hover:text-primary hover:underline underline-offset-4"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Link
                        href="/leads"
                        prefetch={true}
                        className="hidden md:block"
                    >
                        <Button
                            variant="outline"
                            className="transition-all hover:scale-105"
                        >
                            Dashboard
                        </Button>
                    </Link>

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-primary/10"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                            <SheetHeader className="p-6 pb-2">
                                <SheetTitle className="text-xl font-bold">
                                    Navigation Menu
                                </SheetTitle>
                            </SheetHeader>
                            <Separator />
                            <nav className="flex flex-col p-6">
                                {NAV_ITEMS.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 px-2 py-3 text-sm font-medium transition-colors",
                                                "hover:text-primary hover:bg-primary/5 rounded-md",
                                                "group"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                                            {item.label}
                                        </Link>
                                    )
                                })}
                            </nav>
                            <Separator />
                            <SheetFooter className="p-6">
                                <Link
                                    href="/leads"
                                    prefetch={true}
                                    className="w-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Button
                                        variant="default"
                                        className="w-full transition-all hover:scale-105"
                                    >
                                        Dashboard
                                    </Button>
                                </Link>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}