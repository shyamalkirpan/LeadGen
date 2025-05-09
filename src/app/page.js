"use client"

import Link from "next/link"
import { Database, Users, BarChart3, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
// , CardHoverEffect, TypewriterEffect, AnimatedTooltip } from "@/components/ui/aceternity"
import { motion } from "framer-motion"

const tooltipItems = [
  {
    id: 1,
    name: "Lead Management",
    designation: "Centralized Lead Tracking",
    image: <Database className="h-14 w-14 text-blue-600" />
  },
  {
    id: 2,
    name: "Contact Details",
    designation: "Comprehensive Information",
    image: <Users className="h-14 w-14 text-blue-600" />
  },
  {
    id: 3,
    name: "Lead Tracking",
    designation: "Pipeline Monitoring",
    image: <BarChart3 className="h-14 w-14 text-blue-600" />
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
        <BackgroundBeams className="z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
            >
              Streamline Your Lead Management
            </motion.h1>
            <div className="flex flex-col items-center justify-center">
              <TypewriterEffectSmooth
                words={[
                  {
                    text: "Organize ",
                  },
                  {
                    text: "track ",
                  },
                  {
                    text: "and ",
                  },
                  {
                    text: "convert ",
                  },
                  {
                    text: "your ",
                  },
                  {
                    text: "leads ",
                  },
                  {
                    text: "with ",
                  },
                  {
                    text: "our ",
                  },
                  {
                    text: "powerful ",
                  },
                  {
                    text: "CRM ",
                  },
                  {
                    text: "solution",
                    className: "text-blue-500 dark:text-blue-500",
                  },
                ]}
                className="text-center"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/addlead">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Add New Lead
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Link href="/leads">
                  <Users className="mr-2 h-5 w-5" />
                  View All Leads
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Manage Leads
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200">
              Powerful features to help you convert more leads into customers
            </p>
          </motion.div>

          <div className="flex justify-center mb-16">
            <AnimatedTooltip items={tooltipItems} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardContainer className="w-full">
              <CardBody className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <CardItem translateZ="50px" className="w-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Lead Management</h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    Easily add, organize, and track all your leads in one centralized location.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="w-full">
              <CardBody className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <CardItem translateZ="50px" className="w-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Details</h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    Store comprehensive contact information and interaction history for each lead.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="w-full">
              <CardBody className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <CardItem translateZ="50px" className="w-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Lead Tracking</h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    Monitor lead status and progress through your sales pipeline.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white dark:bg-gray-950 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
              Start managing your leads more effectively today.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/addlead">
                <PlusCircle className="mr-2 h-5 w-5" />
                Add Your First Lead
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
