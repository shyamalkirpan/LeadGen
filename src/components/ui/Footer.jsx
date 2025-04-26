import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t py-6 md:py-0 bg-background mt-auto">
            <div className="container flex items-center justify-around gap-4 md:h-16 mx-auto">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                    © {new Date().getFullYear()} Lead Management System. All rights reserved.
                </p>
                <nav className="flex gap-4">
                    <Link 
                        href="#" 
                        className="text-sm text-muted-foreground hover:underline underline-offset-4"
                    >
                        Privacy Policy
                    </Link>
                    <Link 
                        href="#" 
                        className="text-sm text-muted-foreground hover:underline underline-offset-4"
                    >
                        Terms of Service
                    </Link>
                    <Link 
                        href="#" 
                        className="text-sm text-muted-foreground hover:underline underline-offset-4"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
}