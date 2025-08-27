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
  Lock,
  Banknote,
  FileText,
  AlertTriangle,
  Building2,
  DollarSign,
  Award,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CollateralizedLoansPage() {
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
              href="/project-funding"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Project Funding
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary">Apply for Loan</Button>
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
              Collateralized Instruments & Securities Loans
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-balance mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Collateralized
              </span>
              <br />
              <span className="text-foreground">Loan Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Secure financing backed by valuable financial instruments, bonds, and marketable securities. Access
              capital while retaining ownership of your assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How <span className="text-primary">It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our collateralized loan process is designed to provide efficient access to capital while maintaining the
              security of your valuable financial instruments
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Collateral Pledge",
                description:
                  "Borrower pledges financial instruments such as bonds or marketable securities as collateral",
                icon: Lock,
              },
              {
                step: "02",
                title: "Valuation & LTV",
                description:
                  "We evaluate the instruments and determine loan amount based on loan-to-value ratio and liquidity",
                icon: TrendingUp,
              },
              {
                step: "03",
                title: "Terms Negotiation",
                description:
                  "Interest rates, repayment schedule, and loan duration are negotiated based on risk profile",
                icon: FileText,
              },
              {
                step: "04",
                title: "Ongoing Management",
                description:
                  "Continuous monitoring of collateral value with margin calls if values fall below thresholds",
                icon: Shield,
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

      {/* Eligible Instruments */}
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
              Eligible <span className="text-secondary">Instruments</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              We accept a wide range of high-quality financial instruments as collateral for our loan programs
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Bank Guarantees",
                description: "Issued by BBB+ rated banks minimum",
                ltv: "Up to 85%",
                features: ["Bank backing", "High liquidity", "Low risk"],
              },
              {
                icon: FileText,
                title: "Standby Letters of Credit",
                description: "From qualified financial institutions",
                ltv: "Up to 80%",
                features: ["Trade finance", "Payment security", "Global acceptance"],
              },
              {
                icon: Lock,
                title: "Blocked Funds",
                description: "Segregated account deposits",
                ltv: "Up to 90%",
                features: ["Direct control", "Immediate access", "Full transparency"],
              },
              {
                icon: Award,
                title: "Certificates of Deposit",
                description: "From rated banking institutions",
                ltv: "Up to 85%",
                features: ["Fixed terms", "Guaranteed returns", "FDIC insured"],
              },
            ].map((instrument, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <instrument.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                        {instrument.ltv}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-heading font-bold mb-2">{instrument.title}</CardTitle>
                    <CardDescription className="text-sm">{instrument.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {instrument.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-xs font-medium">{feature}</span>
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

      {/* Loan Terms & Structure */}
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
                Loan <span className="text-primary">Structure</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Our collateralized loans are structured to provide competitive terms while maintaining appropriate risk
                management protocols for both borrower and lender protection.
              </p>
              <div className="space-y-6">
                {[
                  "Minimum issuance: $20M USD for bank instruments",
                  "Loan-to-Value ratios: 70-90% depending on instrument type",
                  "Competitive interest rates based on collateral quality",
                  "Flexible repayment schedules and loan durations",
                  "Bank-to-bank engagement for instrument delivery",
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
                    <h3 className="text-2xl font-heading font-bold">$20M Minimum</h3>
                    <p className="text-muted-foreground">Minimum instrument issuance amount</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-secondary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="h-12 w-12 text-secondary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Competitive Rates</h3>
                    <p className="text-muted-foreground">Based on collateral quality and risk</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Bank-to-Bank</h3>
                    <p className="text-muted-foreground">Secure institutional delivery process</p>
                  </div>
                </div>
              </Card>
            </motion.div>
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
              A streamlined process designed for efficiency while maintaining the highest standards of due diligence
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {[
              {
                step: "01",
                title: "Funding Application",
                description: "Submit application with Ready, Willing and Able (RWA) and Authority to Verify (ATV)",
                icon: FileText,
              },
              {
                step: "02",
                title: "Loan Offer",
                description: "Receive collateralized loan offer and term sheet based on instrument evaluation",
                icon: Banknote,
              },
              {
                step: "03",
                title: "Due Diligence",
                description: "Bank-to-bank verification and due diligence on submitted instruments and documentation",
                icon: Shield,
              },
              {
                step: "04",
                title: "Banking Engagement",
                description: "Coordinate delivery of instruments through secure bank-to-bank channels",
                icon: Building2,
              },
              {
                step: "05",
                title: "Funds Transfer",
                description: "Upon instrument delivery, loan funds are transferred to designated accounts",
                icon: TrendingUp,
              },
              {
                step: "06",
                title: "Loan Management",
                description: "Ongoing monitoring and management of collateral and loan performance",
                icon: Lock,
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
                    <div className="text-3xl font-heading font-black text-primary mb-4">{step.step}</div>
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Considerations */}
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
                Risk <span className="text-secondary">Management</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                While collateralized loans provide access to capital without selling assets, proper risk management is
                essential for both borrowers and lenders to ensure successful outcomes.
              </p>
              <div className="space-y-6">
                {[
                  "Continuous monitoring of collateral values and market conditions",
                  "Margin call procedures if instrument values decline significantly",
                  "Professional risk assessment and management protocols",
                  "Clear documentation and legal frameworks for all transactions",
                  "Regular reporting and communication with all stakeholders",
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
            >
              <Card className="p-8 border-2 border-orange-200 bg-orange-50/50">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <AlertTriangle className="h-12 w-12 text-orange-600" />
                    <CardTitle className="text-2xl font-heading font-bold text-orange-800">
                      Important Considerations
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-orange-200">
                    <h4 className="font-heading font-bold text-orange-800 mb-2">Collateral Requirements</h4>
                    <p className="text-sm text-orange-700">
                      Borrowers must maintain collateral values above minimum thresholds throughout the loan term.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-orange-200">
                    <h4 className="font-heading font-bold text-orange-800 mb-2">Market Volatility</h4>
                    <p className="text-sm text-orange-700">
                      Instrument values may fluctuate, potentially requiring additional collateral or partial repayment.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-orange-200">
                    <h4 className="font-heading font-bold text-orange-800 mb-2">Professional Guidance</h4>
                    <p className="text-sm text-orange-700">
                      Consult with financial professionals to assess risks and develop appropriate management
                      strategies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              Access <span className="text-primary">Capital Today</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Unlock the value of your financial instruments while maintaining ownership. Apply for a collateralized
              loan and access the capital you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Apply for Collateralized Loan
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Instrument Evaluation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Minimum instrument value: $20M USD. All instruments must be issued by BBB+ rated institutions or higher.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
