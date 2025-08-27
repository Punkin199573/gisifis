"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  CheckCircle,
  Banknote,
  PieChart,
  Lock,
  Award,
  Building2,
  DollarSign,
} from "lucide-react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LendingProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/wealth-management/lending-program" />

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
              Securities & Asset Lending Program
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-balance mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fully Paid
              </span>
              <br />
              <span className="text-foreground">Lending Program</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Generate passive income through our institutional-grade securities lending program while maintaining full
              ownership and control of your assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
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
                Program <span className="text-primary">Benefits</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Our fully paid lending program allows you to unlock the hidden potential of your securities portfolio
                while maintaining complete ownership and control of your assets.
              </p>
              <div className="space-y-6">
                {[
                  "Generate passive income from your existing securities",
                  "Maintain full ownership and voting rights",
                  "Institutional-grade counterparty risk management",
                  "Flexible terms and competitive lending rates",
                  "Professional portfolio optimization services",
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
                  <TrendingUp className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Passive Yield</h3>
                    <p className="text-muted-foreground">Generate consistent income from your holdings</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-secondary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-12 w-12 text-secondary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Credit Enhancement</h3>
                    <p className="text-muted-foreground">Improve your overall portfolio performance</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <PieChart className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Strategic Leverage</h3>
                    <p className="text-muted-foreground">Optimize your investment strategy</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It <span className="text-secondary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              A sophisticated lending mechanism that maximizes the utility of your fully paid securities
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Asset Evaluation",
                description: "We assess your securities portfolio for lending eligibility and optimization potential",
                icon: PieChart,
              },
              {
                step: "02",
                title: "Program Setup",
                description: "Establish lending parameters and risk management protocols for your assets",
                icon: Building2,
              },
              {
                step: "03",
                title: "Active Lending",
                description: "Your securities are lent to qualified institutional borrowers at competitive rates",
                icon: Banknote,
              },
              {
                step: "04",
                title: "Income Generation",
                description: "Receive regular passive income while maintaining full ownership of your assets",
                icon: DollarSign,
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

      {/* Eligible Securities */}
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
              Eligible <span className="text-primary">Securities</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              A wide range of securities qualify for our lending program, each with specific lending parameters and
              yield potential
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Government Securities",
                description: "US Treasury Bills, Notes, and Bonds with AA+ ratings or higher",
                features: ["Highest lending rates", "Maximum liquidity", "Minimal risk"],
                yield: "2.5% - 4.2%",
              },
              {
                icon: Building2,
                title: "Corporate Bonds",
                description: "Investment-grade corporate bonds rated BBB+ and above",
                features: ["Competitive rates", "Diversified exposure", "Credit enhancement"],
                yield: "3.1% - 5.8%",
              },
              {
                icon: Lock,
                title: "Bank Instruments",
                description: "Bank Avalized Notes, SBLCs, and Certificates of Deposit",
                features: ["Bank backing", "Secured lending", "Institutional grade"],
                yield: "2.8% - 4.9%",
              },
            ].map((security, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <security.icon className="h-8 w-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                        {security.yield}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold mb-3">{security.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{security.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {security.features.map((feature, idx) => (
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

      {/* Risk Management */}
      <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
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
                Our comprehensive risk management framework ensures the safety and security of your assets while
                maximizing lending opportunities and returns.
              </p>
              <div className="space-y-6">
                {[
                  "Institutional-grade counterparty due diligence",
                  "Daily mark-to-market collateral management",
                  "Diversified borrower base across multiple sectors",
                  "Real-time monitoring and risk assessment",
                  "Professional indemnity insurance coverage",
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
              <Card className="p-8 border-2">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-heading font-bold text-center mb-6">
                    Risk Mitigation Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Collateral Management</h4>
                      <p className="text-sm text-muted-foreground">Daily monitoring and adjustment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-lg">
                    <Building2 className="h-8 w-8 text-secondary flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Counterparty Screening</h4>
                      <p className="text-sm text-muted-foreground">Rigorous institutional vetting</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <Lock className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Asset Protection</h4>
                      <p className="text-sm text-muted-foreground">Segregated custody and insurance</p>
                    </div>
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
              Unlock Your <span className="text-primary">Portfolio's Potential</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Start generating passive income from your securities while maintaining full ownership and control.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Start Lending Program
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Portfolio Assessment
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Program available for qualified investors with eligible securities portfolios. Contact us for a
              personalized assessment.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
