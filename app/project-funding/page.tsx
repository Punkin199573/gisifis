"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Building2,
  CheckCircle,
  ArrowLeft,
  Globe,
  Banknote,
  FileText,
  Award,
  Lock,
  Users,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjectFundingPage() {
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
            <Button className="bg-gradient-to-r from-primary to-secondary">Apply for Funding</Button>
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
              Global Project Funding & Credit Enhancement
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-balance mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Project Funding
              </span>
              <br />
              <span className="text-foreground">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Comprehensive project financing and credit enhancement solutions for large-scale business ventures,
              infrastructure projects, and international development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Apply for Project Funding
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Download Funding Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
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
                Global <span className="text-primary">Funding Markets</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                The worldwide funding markets are evolving rapidly, with increasing demands for transparency, regulatory
                compliance, and sophisticated risk management. Our syndication agreements with investment banks and
                institutions enable us to generate quality data that feeds into comprehensive risk management and
                funding policies.
              </p>
              <div className="space-y-6">
                {[
                  "Middle market companies ($10M - $500M turnover)",
                  "Large corporations with strong portfolios",
                  "Mergers and acquisitions financing",
                  "Trade, import/export, and manufacturing projects",
                  "Energy, infrastructure, and real estate developments",
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
                  <Globe className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Global Reach</h3>
                    <p className="text-muted-foreground">Worldwide funding opportunities and partnerships</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-secondary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="h-12 w-12 text-secondary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Risk Management</h3>
                    <p className="text-muted-foreground">Advanced analytics and early-warning systems</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Institutional Network</h3>
                    <p className="text-muted-foreground">Extensive partnerships with global institutions</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              Funding <span className="text-secondary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Comprehensive project financing solutions designed to meet diverse funding requirements across multiple
              industries and geographies
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                href: "/project-funding/collateralized-loans",
                icon: Lock,
                title: "Collateralized Loans",
                description:
                  "Secure financing backed by financial instruments, bonds, and marketable securities with competitive LTV ratios.",
                features: ["Bank Guarantees", "Standby Letters of Credit", "Certificate of Deposits"],
                highlight: "BBB+ Minimum Rating",
              },
              {
                href: "/project-funding/securitization",
                icon: FileText,
                title: "Securitization & Issuance",
                description:
                  "Advanced securitization services and asset issuance through our strategic securities division.",
                features: ["Asset Securitization", "Bond Issuance", "Structured Products"],
                highlight: "Institutional Grade",
              },
              {
                href: "/project-funding/credit-enhancement",
                icon: Shield,
                title: "Credit Enhancement Programs",
                description:
                  "Sophisticated credit enhancement strategies to improve project creditworthiness and access favorable terms.",
                features: ["Risk Mitigation", "Credit Rating Improvement", "Investor Confidence"],
                highlight: "Enhanced Terms",
              },
              {
                href: "/project-funding/leverage-debt",
                icon: TrendingUp,
                title: "Leverage Debt Programs",
                description:
                  "Strategic leverage solutions for complex projects requiring sophisticated financial structures.",
                features: ["Working Capital", "Cash Flow Solutions", "Bridge Financing"],
                highlight: "Flexible Terms",
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

      {/* Credit Enhancement Benefits */}
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
              Credit Enhancement <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our credit enhancement solutions provide significant advantages to project sponsors and investors
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Increased Investor Confidence",
                description:
                  "Credit enhancement measures instill confidence by mitigating risks and attracting risk-averse investors.",
              },
              {
                icon: Banknote,
                title: "Lower Financing Costs",
                description:
                  "Improved credit profiles result in lower interest rates and more favorable financing terms.",
              },
              {
                icon: Globe,
                title: "Expanded Funding Opportunities",
                description:
                  "Access to broader pool of institutional investors, impact investors, and specialized lenders.",
              },
              {
                icon: Award,
                title: "Enhanced Bond Issuance",
                description:
                  "Credit enhancement mechanisms improve bond ratings and increase market demand and liquidity.",
              },
              {
                icon: TrendingUp,
                title: "Accelerated Development",
                description:
                  "Reduced delays in securing financing and enhanced project bankability for faster execution.",
              },
              {
                icon: Shield,
                title: "Long-term Viability",
                description:
                  "Improved financial stability and creditworthiness supporting sustainable project success.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Sources */}
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
                Funding <span className="text-secondary">Sources</span>
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Our extensive network of funding sources enables us to provide comprehensive project financing solutions
                tailored to specific project requirements and objectives.
              </p>
              <div className="space-y-6">
                {[
                  "Nostro accounts and proprietary capital",
                  "Accredited investors and HNWI networks",
                  "Investment bankers and institutional partners",
                  "Hedge funds and private equity firms",
                  "Family offices and financial institutions worldwide",
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
                    Project Financing Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-heading font-black text-primary mb-2">Individual</div>
                    <p className="text-muted-foreground">Customized funding structure</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-heading font-black text-secondary mb-2">Complete</div>
                    <p className="text-muted-foreground">End-to-end financing package</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-heading font-black text-primary mb-2">Global</div>
                    <p className="text-muted-foreground">International market integration</p>
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
              Ready to <span className="text-primary">Fund Your Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Connect with our project financing specialists to explore customized funding solutions for your business
              venture or development project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Apply for Project Funding
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Project funding available for qualified businesses and development initiatives. Minimum project size: $10M
              USD.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
