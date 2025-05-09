import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Mail, Shield, FileText } from "lucide-react"
import { siGithub } from "simple-icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const FOOTER_LINKS = [
    {
        href: "/privacy",
        label: "Privacy Policy",
        icon: Shield
    },
    {
        href: "/terms",
        label: "Terms of Service",
        icon: FileText
    },
    {
        href: "/contact",
        label: "Contact",
        icon: Mail
    }
]

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background mt-auto">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-muted-foreground">
                                © {new Date().getFullYear()} Lead Management System
                            </p>
                        </div>
                        <nav className="flex items-center gap-4">
                            {FOOTER_LINKS.map((link) => {
                                const Icon = link.icon
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-2 text-sm text-muted-foreground",
                                            "hover:text-primary transition-colors",
                                            "group"
                                        )}
                                    >
                                        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            Built with ❤️ for better lead management
                        </p>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                asChild
                            >
                                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        dangerouslySetInnerHTML={{ __html: siGithub.svg }}
                                    />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}