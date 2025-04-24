import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Database, Users, BarChart3, Rocket, Shield, Code } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Database className="h-6 w-6" />
                        <span className="text-xl font-bold">Lead Management System</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Home
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            About
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Features
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Pricing
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            Contact
                        </Link>
                    </nav>
                    <Button>Get Started</Button>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Us</h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    At the heart of every great sales and marketing organization lies one critical asset:
                                    <span className="font-bold"> quality leads</span>. We built the
                                    <span className="font-bold"> Lead Management System</span> (LMS) MVP to empower teams to capture,
                                    organize, and act on those leads faster and smarter than ever before.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Our Mission</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Streamline Lead Management</h2>
                                <p className="text-muted-foreground md:text-xl">
                                    To streamline the way businesses collect, manage, and nurture customer leads—enabling sales and
                                    marketing professionals to spend less time on data wrangling and more time closing deals.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Our Vision</div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Maximize Every Opportunity</h2>
                                <p className="text-muted-foreground md:text-xl">
                                    We envision a world where every lead is tracked, every opportunity is maximized, and teams operate
                                    with full confidence in their data. By delivering a rock-solid backend foundation, we pave the way for
                                    powerful, user-friendly front‐end applications that drive growth and revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Do</h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Our comprehensive lead management solution helps you at every stage of the process.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Database className="h-12 w-12 mb-4 text-primary" />
                                    <h3 className="text-xl font-bold">Capture & Store</h3>
                                    <p className="text-center text-muted-foreground mt-2">
                                        Seamlessly ingest lead information from web forms, ads, and other touchpoints into a centralized
                                        PostgreSQL database.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Users className="h-12 w-12 mb-4 text-primary" />
                                    <h3 className="text-xl font-bold">Manage & Organize</h3>
                                    <p className="text-center text-muted-foreground mt-2">
                                        Provide a RESTful API to create, read, update, and delete lead records—complete with robust
                                        validation and error handling.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <BarChart3 className="h-12 w-12 mb-4 text-primary" />
                                    <h3 className="text-xl font-bold">Scale & Integrate</h3>
                                    <p className="text-center text-muted-foreground mt-2">
                                        Designed as an MVP with future growth in mind, our Dockerized services and modular architecture
                                        ensure you can integrate additional features with minimal effort.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our LMS MVP?</h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Our solution offers unique advantages that set us apart from the competition.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Rocket className="h-12 w-12 mb-4 text-primary" />
                                    <h3 className="text-xl font-bold">Speed of Development</h3>
                                    <p className="text-center text-muted-foreground mt-2">
                                        Get up and running in under a week—our lean scope and clear deliverables accelerate time-to-value.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Shield className="h-12 w-12 mb-4 text-primary" />
                                    <h3 className="text-xl font-bold">Reliability & Quality</h3>
                                    <p className="text-center text-muted-foreground mt-2">
                                        Industry-standard testing, transaction‐safe ORM, and error‐handling middleware mean you can trust
                                        your data.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <Code className="h-12 w-12 mb-4 text-primary" />
                                    <h3 className="text-xl font-bold">Future-Proof</h3>
                                    <p className="text-center text-muted-foreground mt-2">
                                        Whether you're a small startup or an enterprise division, our system's modular design and
                                        containerized setup scale to your needs.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Tech Stack</h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Built with modern, reliable technologies to ensure performance and scalability.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl mt-8">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[200px]">Layer</TableHead>
                                        <TableHead>Technology</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">Language</TableCell>
                                        <TableCell>JavaScript (Node.js) / Python</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Framework</TableCell>
                                        <TableCell>Next.js / FastAPI</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Database</TableCell>
                                        <TableCell>PostgreSQL</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">ORM</TableCell>
                                        <TableCell>Prisma / SQLAlchemy</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Testing</TableCell>
                                        <TableCell>Jest / Pytest</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Deployment</TableCell>
                                        <TableCell>Docker, Vercel / Render</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">API Docs</TableCell>
                                        <TableCell>Swagger (optional), Postman</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    A small, dedicated group of backend engineers and DevOps specialists who live and breathe clean
                                    architecture, automated testing, and seamless deployment. We're passionate about shipping reliable
                                    APIs and building tools that teams love to use.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
                            <div className="flex flex-col items-center space-y-4">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="Team Member"
                                    width={200}
                                    height={200}
                                    className="rounded-full object-cover"
                                />
                                <div className="space-y-2 text-center">
                                    <h3 className="text-xl font-bold">Backend Lead</h3>
                                    <p className="text-sm text-muted-foreground">Expert in API design and database optimization</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="Team Member"
                                    width={200}
                                    height={200}
                                    className="rounded-full object-cover"
                                />
                                <div className="space-y-2 text-center">
                                    <h3 className="text-xl font-bold">DevOps Specialist</h3>
                                    <p className="text-sm text-muted-foreground">Focused on containerization and CI/CD pipelines</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="Team Member"
                                    width={200}
                                    height={200}
                                    className="rounded-full object-cover"
                                />
                                <div className="space-y-2 text-center">
                                    <h3 className="text-xl font-bold">Database Architect</h3>
                                    <p className="text-sm text-muted-foreground">Specializes in data modeling and query optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Transform Your Lead Management?
                                </h2>
                                <p className="mx-auto max-w-[700px] md:text-xl">
                                    Get started with our LMS MVP today and see the difference quality lead management can make.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button variant="secondary" size="lg">
                                    Request a Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                                >
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Lead Management System. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
