"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Building2,
  Banknote,
  CheckCircle,
  Calculator,
  Clock,
  Award,
  FileText,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/loans" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold">
              Business Loan Solutions
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-balance mb-6">
              <span className="gradient-text">Business Loans</span>
              <br />
              <span className="text-foreground">Tailored for Growth</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty max-w-3xl mx-auto mb-12">
              Access flexible financing solutions designed for ambitious businesses. From working capital to expansion
              funding, we provide the resources you need to achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/loans/business-loan-application">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
                >
                  Apply Now
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-16 px-12 text-lg border-2 bg-transparent"
              >
                Calculate Loan
                <Calculator className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">
              Loan <span className="text-secondary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Comprehensive financing options for every stage of your business journey
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Commercial Real Estate",
                amount: "$1M - $50M",
                rate: "From 4.5% APR",
                term: "5-30 years",
                description:
                  "Acquire, refinance, or develop commercial properties with competitive rates and flexible terms.",
                features: ["Purchase & Refinance", "Construction Loans", "Bridge Financing", "SBA 504 Programs"],
              },
              {
                icon: TrendingUp,
                title: "Business Expansion",
                amount: "$100K - $10M",
                rate: "From 5.2% APR",
                term: "1-10 years",
                description: "Fuel your growth with working capital, equipment financing, and expansion loans.",
                features: ["Working Capital", "Equipment Financing", "Inventory Funding", "Market Expansion"],
              },
              {
                icon: Banknote,
                title: "Asset-Based Lending",
                amount: "$500K - $25M",
                rate: "From 6.0% APR",
                term: "6 months - 5 years",
                description: "Leverage your assets for immediate capital with our collateralized lending programs.",
                features: ["Accounts Receivable", "Inventory Financing", "Equipment Collateral", "Real Estate Backed"],
              },
              {
                icon: Shield,
                title: "SBA Loans",
                amount: "$50K - $5M",
                rate: "From 3.8% APR",
                term: "Up to 25 years",
                description: "Government-backed loans with favorable terms for qualified small businesses.",
                features: ["SBA 7(a) Loans", "SBA Express", "Microloans", "Export Loans"],
              },
              {
                icon: Clock,
                title: "Bridge Financing",
                amount: "$250K - $15M",
                rate: "From 7.5% APR",
                term: "3-24 months",
                description: "Short-term financing solutions for time-sensitive opportunities and transitions.",
                features: ["Quick Approval", "Flexible Terms", "Interest-Only Options", "Fast Funding"],
              },
              {
                icon: Award,
                title: "Revenue-Based Financing",
                amount: "$100K - $5M",
                rate: "Factor Rate 1.1-1.5x",
                term: "6-36 months",
                description: "Alternative financing based on your business revenue with no fixed monthly payments.",
                features: ["No Fixed Payments", "Revenue Percentage", "Fast Approval", "No Collateral Required"],
              },
            ].map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary/20 group">
                  <CardHeader className="pb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <loan.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold mb-3">{loan.title}</CardTitle>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Loan Amount:</span>
                        <span className="text-sm font-bold text-secondary">{loan.amount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Interest Rate:</span>
                        <span className="text-sm font-bold text-secondary">{loan.rate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Term:</span>
                        <span className="text-sm font-bold text-secondary">{loan.term}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{loan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/loans/business-loan-application">
                      <Button className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                        Apply for This Loan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">
              Simple <span className="text-primary">Application Process</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Get approved in as little as 24 hours with our streamlined process
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Submit Application",
                description:
                  "Complete our secure online application with your business information and financing needs.",
                icon: FileText,
              },
              {
                step: "02",
                title: "Document Review",
                description: "Our team reviews your documents and may request additional information if needed.",
                icon: Users,
              },
              {
                step: "03",
                title: "Underwriting",
                description:
                  "Our underwriters evaluate your application and provide a loan decision within 24-48 hours.",
                icon: Shield,
              },
              {
                step: "04",
                title: "Funding",
                description: "Once approved, funds are typically available within 3-5 business days.",
                icon: Banknote,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Application Form */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">
                Quick <span className="text-secondary">Loan Application</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Get started with our quick application form. Our team will review your information and contact you
                within 24 hours.
              </p>
              <div className="space-y-6">
                {[
                  "Fast 24-hour pre-approval process",
                  "Competitive rates starting from 3.8% APR",
                  "Flexible terms up to 30 years",
                  "No prepayment penalties",
                  "Dedicated relationship manager",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 shadow-2xl">
                <CardHeader className="pb-6 px-0">
                  <CardTitle className="text-2xl font-heading font-bold">Loan Application</CardTitle>
                  <CardDescription className="text-base">
                    Complete this form to get started with your loan application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">First Name *</label>
                      <Input className="h-12" placeholder="Enter first name" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Last Name *</label>
                      <Input className="h-12" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Business Name *</label>
                    <Input className="h-12" placeholder="Enter business name" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Email Address *</label>
                      <Input type="email" className="h-12" placeholder="Enter email address" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Phone Number *</label>
                      <Input type="tel" className="h-12" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Loan Type *</label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select loan type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial-real-estate">Commercial Real Estate</SelectItem>
                          <SelectItem value="business-expansion">Business Expansion</SelectItem>
                          <SelectItem value="asset-based">Asset-Based Lending</SelectItem>
                          <SelectItem value="sba">SBA Loans</SelectItem>
                          <SelectItem value="bridge">Bridge Financing</SelectItem>
                          <SelectItem value="revenue-based">Revenue-Based Financing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Loan Amount *</label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select amount range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50k-250k">$50K - $250K</SelectItem>
                          <SelectItem value="250k-1m">$250K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-25m">$5M - $25M</SelectItem>
                          <SelectItem value="25m-plus">$25M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Business Description</label>
                    <Textarea
                      rows={4}
                      placeholder="Briefly describe your business and how you plan to use the loan funds"
                      className="resize-none"
                    />
                  </div>

                  <Link href="/loans/business-loan-application">
                    <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-base font-semibold">
                      Start Full Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy. Your information is
                    secure and will only be used for loan processing purposes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
