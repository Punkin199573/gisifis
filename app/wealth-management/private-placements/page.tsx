"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  FileText,
  DollarSign,
  Globe,
  Award,
  Lock,
  Building2,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PrivatePlacementsPage() {
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
              href="/wealth-management"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Wealth Management
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary">Apply Now</Button>
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
              Private Placements & Strategic Funds
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-balance mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Exclusive Investment
              </span>
              <br />
              <span className="text-foreground">Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Access sophisticated private placement opportunities and strategic funds designed for accredited investors
              seeking diversified portfolios and attractive returns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-32">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-8">
                Investment <span className="text-primary">Structure</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Our private placements are structured to provide sophisticated investors with access to exclusive
                investment opportunities while maintaining the highest standards of regulatory compliance and risk
                management.
              </p>
              <div className="space-y-6">
                {[
                  "SEC approved Private Placement Memorandum (PPM)",
                  "Minimum investment: $1M USD per unit",
                  "Eligible for Accredited and Sophisticated Investors",
                  "All transactions secured at GSFS Fiduciary & Trust Facilities",
                  "Expansion opportunities from $5M USD using Promissory Notes",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <Card className="p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <DollarSign className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">$1M Minimum</h3>
                    <p className="text-muted-foreground">Entry threshold for qualified investors</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-secondary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-12 w-12 text-secondary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">SEC Approved</h3>
                    <p className="text-muted-foreground">Full regulatory compliance and approvals</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Lock className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Secured Transactions</h3>
                    <p className="text-muted-foreground">UCC Article 9 secured with collateral backing</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
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
              Regulatory <span className="text-secondary">Framework</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our private placements operate under comprehensive regulatory frameworks ensuring investor protection and
              compliance
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "US Investors - Reg D 506(c)",
                description: "For American accredited investors under SEC Regulation D 506(c) framework",
                features: ["SEC Registration", "Accredited Investor Verification", "General Solicitation Permitted"],
              },
              {
                icon: Globe,
                title: "International - Reg S",
                description: "For sophisticated investors worldwide excluding US persons under Regulation S",
                features: ["Offshore Transactions", "No US Person Restrictions", "International Compliance"],
              },
              {
                icon: Award,
                title: "Institutions - Rule 144A",
                description: "For Qualified Institutional Buyers (QIBs) under Rule 144A framework",
                features: ["$100M+ Securities Threshold", "Institutional Grade", "Enhanced Liquidity"],
              },
            ].map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                      <framework.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold mb-3">{framework.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{framework.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {framework.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
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

      {/* Asset Allocation */}
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
              Asset <span className="text-primary">Allocation</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Strategic asset allocation designed to optimize risk-adjusted returns while maintaining liquidity and
              security
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8 border-2">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-heading font-bold text-center mb-4">
                  Conservative Portfolio
                </CardTitle>
                <div className="text-center">
                  <div className="text-6xl font-heading font-black text-secondary mb-2">25%</div>
                  <p className="text-muted-foreground">High Liquidity Deposits</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Conservative financial management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>High liquidity deposits</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Capital preservation focus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-heading font-bold text-center mb-4">Growth Portfolio</CardTitle>
                <div className="text-center">
                  <div className="text-6xl font-heading font-black text-primary mb-2">75%</div>
                  <p className="text-muted-foreground">Asset-Backed Securities</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Bank Avalized Notes (BBB+ minimum)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>US Treasury Bills & Notes (50% minimum, AA+)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Government & Corporate Bonds</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
              A streamlined process designed to ensure regulatory compliance while providing efficient access to
              investment opportunities
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Eligibility Verification",
                description: "Submit KYC documentation to verify accredited investor status",
                icon: FileText,
              },
              {
                step: "02",
                title: "Initial Inquiry",
                description: "Contact our investor relations team to express investment interest",
                icon: Building2,
              },
              {
                step: "03",
                title: "Due Diligence",
                description: "Review offering documents, PPM, and subscription agreements",
                icon: Shield,
              },
              {
                step: "04",
                title: "Investment Execution",
                description: "Complete subscription process and fund transfer to secure facilities",
                icon: TrendingUp,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="text-4xl font-heading font-black text-primary mb-4">{step.step}</div>
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-8">
              Start Your <span className="text-primary">Investment Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Join our exclusive network of sophisticated investors and access premium private placement opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Begin Application Process
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Download Investment Guide
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Investment opportunities intended solely for Accredited Investors, Institutional, and Sophisticated
              Investors. Minimum investment: $1M USD.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
