"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, TrendingUp, PieChart, Banknote, CheckCircle, Building2, Globe, Lock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function WealthManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage="/wealth-management" />

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
              Wealth & Asset Management
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-balance mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Premium Wealth
              </span>
              <br />
              <span className="text-foreground">Management Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Sophisticated investment strategies and portfolio management services designed exclusively for accredited
              investors, sophisticated investors, and qualified institutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Download Prospectus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Comprehensive wealth management solutions tailored to your investment objectives and risk profile
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                href: "/wealth-management/private-placements",
                icon: PieChart,
                title: "Private Placements & Strategic Funds",
                description:
                  "Exclusive investment opportunities in private placements and strategic funds with attractive risk-adjusted returns.",
                features: ["Minimum Investment: $1M USD", "Reg D 506(c) for US Investors", "Reg S for International"],
                highlight: "SEC Approved",
              },
              {
                href: "/wealth-management/lending-program",
                icon: Banknote,
                title: "Fully Paid Lending Program",
                description:
                  "Generate passive income through our institutional-grade securities lending program while maintaining asset ownership.",
                features: ["Credit Enhancement", "Passive Yield Generation", "Strategic Leverage"],
                highlight: "Institutional Grade",
              },
              {
                href: "/wealth-management/portfolio-management",
                icon: TrendingUp,
                title: "Portfolio Management",
                description:
                  "Professional portfolio management with sophisticated strategies and risk management frameworks.",
                features: ["Conservative Management", "High Liquidity", "BBB+ Rated Assets"],
                highlight: "25% Conservative Assets",
              },
              {
                href: "/wealth-management/credit-enhancement",
                icon: Shield,
                title: "Credit Enhancement Strategies",
                description:
                  "Advanced credit enhancement strategies to optimize your investment portfolio and risk profile.",
                features: ["Bank Avalized Notes", "Government Bonds", "Treasury Securities"],
                highlight: "AA+ Rated Minimum",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 group cursor-pointer">
                    <CardHeader className="pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                          {service.highlight}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-heading font-bold mb-3">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                        Learn More
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

      {/* Investment Criteria */}
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
                Investment <span className="text-secondary">Criteria</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Our wealth management services are exclusively designed for qualified investors who meet specific
                regulatory requirements and investment thresholds.
              </p>
              <div className="space-y-6">
                {[
                  "Accredited Investors (US) - $1M+ net worth or $200K+ annual income",
                  "Sophisticated Investors (International) - Professional investment experience",
                  "Qualified Institutional Buyers (QIBs) - $100M+ in securities",
                  "Minimum Investment Threshold: $1M USD per unit",
                  "All transactions secured at GSFS Fiduciary & Trust Facilities",
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
                  <Lock className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Secure Transactions</h3>
                    <p className="text-muted-foreground">UCC Article 9 secured transactions with collateral backing</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-secondary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="h-12 w-12 text-secondary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">SEC registered with full regulatory approvals</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Global Reach</h3>
                    <p className="text-muted-foreground">International investment opportunities and structures</p>
                  </div>
                </div>
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
              Ready to <span className="text-primary">Invest?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Join our exclusive circle of sophisticated investors and access premium wealth management opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Start Application Process
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Schedule Private Meeting
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Investment opportunities intended solely for Accredited Investors, Institutional, and Sophisticated
              Investors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
