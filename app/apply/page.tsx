"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  PieChart,
  Building2,
  Shield,
  Banknote,
  Award,
  FileText,
  Users,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ApplyPage() {
  const applicationTypes = [
    {
      href: "/apply/wealth-management",
      icon: PieChart,
      title: "Wealth Management Application",
      description: "Apply for private placements, strategic funds, and portfolio management services",
      requirements: ["Accredited Investor Status", "Minimum $1M Investment", "KYC Documentation"],
      timeline: "5-7 business days",
      highlight: "Premium Service",
    },
    {
      href: "/apply/project-funding",
      icon: Building2,
      title: "Project Funding Application",
      description: "Secure financing for business ventures, infrastructure, and development projects",
      requirements: ["Business Plan Required", "Minimum $10M Project", "Financial Statements"],
      timeline: "10-14 business days",
      highlight: "Global Reach",
    },
    {
      href: "/apply/securities-lending",
      icon: Banknote,
      title: "Securities Lending Program",
      description: "Generate passive income through our institutional-grade lending program",
      requirements: ["Eligible Securities Portfolio", "Minimum $5M Value", "Custody Agreement"],
      timeline: "3-5 business days",
      highlight: "Passive Income",
    },
    {
      href: "/apply/credit-enhancement",
      icon: Shield,
      title: "Credit Enhancement Services",
      description: "Improve credit profiles and access favorable financing terms",
      requirements: ["Credit Assessment", "Collateral Evaluation", "Risk Analysis"],
      timeline: "7-10 business days",
      highlight: "Enhanced Terms",
    },
  ]

  const applicationProcess = [
    {
      step: "01",
      title: "Initial Application",
      description: "Complete the online application form with your basic information and requirements",
      icon: FileText,
    },
    {
      step: "02",
      title: "Document Submission",
      description: "Upload required documents including KYC, financial statements, and supporting materials",
      icon: Shield,
    },
    {
      step: "03",
      title: "Review & Verification",
      description: "Our compliance team reviews your application and verifies all submitted documentation",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Consultation",
      description: "Schedule a consultation with our specialists to discuss terms and structure",
      icon: Users,
    },
    {
      step: "05",
      title: "Approval & Execution",
      description: "Upon approval, execute agreements and begin your financial journey with GSFS",
      icon: Award,
    },
  ]

  const eligibilityRequirements = [
    {
      category: "Individual Investors",
      requirements: [
        "Accredited Investor status (US) or Sophisticated Investor (International)",
        "Net worth exceeding $1M or annual income over $200K",
        "Investment experience and financial sophistication",
        "Completed KYC and AML documentation",
      ],
    },
    {
      category: "Institutional Clients",
      requirements: [
        "Qualified Institutional Buyer (QIB) status",
        "Assets under management exceeding $100M",
        "Regulatory compliance and proper authorization",
        "Institutional due diligence documentation",
      ],
    },
    {
      category: "Corporate Entities",
      requirements: [
        "Minimum 3 years operational history",
        "Audited financial statements for past 3 years",
        "Strong management team and business plan",
        "Regulatory compliance in jurisdiction of operation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">GSFS</span>
            </div>
            <div>
              <span className="font-heading font-black text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Global Strategic
              </span>
              <div className="text-sm text-muted-foreground font-medium">Financial Solutions</div>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold">
              Application Center
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-balance mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Apply for
              </span>
              <br />
              <span className="text-foreground">Premium Services</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Begin your journey with GSFS by selecting the appropriate application for your investment objectives and
              financial requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">48hrs</div>
                <div className="text-muted-foreground">Initial Review</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-secondary mb-2">95%</div>
                <div className="text-muted-foreground">Approval Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">$1M</div>
                <div className="text-muted-foreground">Minimum Investment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Types */}
      <section className="py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
              Application <span className="text-primary">Types</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Select the application that best matches your investment objectives and financial requirements
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {applicationTypes.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={application.href}>
                  <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 group cursor-pointer">
                    <CardHeader className="pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <application.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                          {application.highlight}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-heading font-bold mb-3">{application.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{application.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                          <ul className="space-y-2">
                            {application.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                                <span className="text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm text-muted-foreground">Processing Time:</span>
                          <span className="text-sm font-semibold">{application.timeline}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                        Start Application
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
              Application <span className="text-secondary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our streamlined application process ensures efficient review while maintaining the highest standards of
              due diligence
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-heading font-black text-primary mb-2">{step.step}</div>
                    <CardTitle className="text-lg font-heading font-bold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
              Eligibility <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Ensure you meet the necessary qualifications before beginning your application
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {eligibilityRequirements.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-heading font-bold text-center mb-4">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {category.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
              Ready to <span className="text-primary">Begin?</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-12">
              Have questions about our application process? Our specialists are here to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/apply/wealth-management">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold bg-transparent">
                  Start Application
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">GSFS</span>
                </div>
                <div>
                  <span className="font-heading font-black text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Global Strategic
                  </span>
                  <div className="text-sm text-muted-foreground font-medium">Financial Solutions</div>
                </div>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Empowering financial growth through innovative investment solutions and strategic partnerships
                worldwide.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">© 2024 Global Strategic Financial Solutions Ltd.</p>
                <p>Regulated by the Financial Conduct Authority (FCA)</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/wealth-management" className="hover:text-primary transition-colors">
                    Wealth Management
                  </Link>
                </li>
                <li>
                  <Link href="/project-funding" className="hover:text-primary transition-colors">
                    Project Funding
                  </Link>
                </li>
                <li>
                  <Link href="/apply" className="hover:text-primary transition-colors">
                    Applications
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-primary transition-colors">
                    Client Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
