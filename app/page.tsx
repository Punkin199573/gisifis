"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  Building2,
  Banknote,
  PieChart,
  Lock,
  Star,
  CheckCircle,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/" />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
          style={{ y }}
        />

        <div className="container relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-6xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20"
              >
                GSFS • UK Financial Services • Company No: 12345678
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-balance mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Global Strategic
              </span>
              <br />
              <span className="text-foreground">Financial Solutions</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Part of the Global Financial Consortium, providing sophisticated investment opportunities, business
              financing, and wealth management solutions for HNWI, institutional clients, and sophisticated investors
              across the UK and internationally.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="/loans/business-loan-application">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
                >
                  Apply for Business Loan
                  <ArrowRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/wealth-management">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg border-2 hover:bg-primary/5 bg-transparent"
                >
                  Explore Investment Portfolio
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-black text-primary mb-2">$2.5B+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-black text-secondary mb-2">500+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Successful Projects Funded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-black text-primary mb-2">25+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Countries Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-4 sm:mb-6">
              Premium <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty px-4">
              Comprehensive financial solutions tailored for sophisticated investors and growing businesses
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: PieChart,
                title: "Wealth & Asset Management",
                description:
                  "Professional portfolio management with sophisticated investment strategies for optimal risk-adjusted returns.",
                features: ["Private Placements", "Strategic Funds", "Portfolio Optimization"],
              },
              {
                icon: Building2,
                title: "Project Funding Solutions",
                description:
                  "Global project financing and credit enhancement solutions for large-scale business ventures.",
                features: ["Credit Enhancement", "Collateralized Loans", "Securitization Services"],
              },
              {
                icon: Shield,
                title: "Fiduciary & Trust Services",
                description:
                  "Comprehensive trust services and fiduciary management with the highest governance standards.",
                features: ["Delaware Statutory Trust", "Asset Protection", "Estate Planning"],
              },
              {
                icon: Banknote,
                title: "Securities Lending Programs",
                description:
                  "Institutional-grade lending opportunities to unlock the potential of your fully paid assets.",
                features: ["Passive Yield Generation", "Strategic Leverage", "Risk Management"],
              },
              {
                icon: Lock,
                title: "Credit Enhancement Programs",
                description:
                  "Sophisticated financial structures to improve credit profiles and access favorable financing.",
                features: ["Trade Solutions", "Credit Derivatives", "Risk Mitigation"],
              },
              {
                icon: Award,
                title: "Gold-Backed Investments",
                description: "Secure investment opportunities backed by precious metals and tangible assets.",
                features: ["Trust Certificates", "Asset Backing", "Inflation Protection"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 group">
                  <CardHeader className="pb-4 sm:pb-6">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-heading font-bold mb-2 sm:mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
              Client <span className="text-secondary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Hear from our satisfied clients who have achieved exceptional results with our premium services
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Sarah Chen",
                title: "CEO, TechVentures Global",
                image: "/professional-asian-woman-ceo.png",
                content:
                  "GSFS provided the sophisticated financing structure we needed for our $50M expansion. Their expertise in credit enhancement made the impossible possible.",
                rating: 5,
              },
              {
                name: "Marcus Rodriguez",
                title: "Managing Partner, Rodriguez Holdings",
                image: "/professional-hispanic-businessman.png",
                content:
                  "The wealth management team at GSFS has consistently delivered exceptional returns. Their private placement opportunities are truly world-class.",
                rating: 5,
              },
              {
                name: "Dr. Emily Watson",
                title: "Founder, MedTech Innovations",
                image: "/professional-woman-doctor-entrepreneur.png",
                content:
                  "From initial consultation to project completion, GSFS demonstrated unparalleled professionalism and delivered results that exceeded our expectations.",
                rating: 5,
              },
              {
                name: "James Thompson",
                title: "Chairman, Thompson Industries",
                image: "/professional-senior-businessman-chairman.png",
                content:
                  "Their fiduciary services have been instrumental in protecting and growing our family wealth across multiple generations. Truly exceptional service.",
                rating: 5,
              },
              {
                name: "Priya Patel",
                title: "Investment Director, Patel Capital",
                image: "/professional-indian-woman-investment-director.png",
                content:
                  "The securities lending program has generated consistent passive income while maintaining full control of our assets. Brilliant financial engineering.",
                rating: 5,
              },
              {
                name: "Robert Kim",
                title: "President, Kim Enterprises",
                image: "/professional-korean-businessman-president.png",
                content:
                  "GSFS structured a complex international financing deal that other firms couldn't handle. Their global expertise is unmatched in the industry.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-relaxed italic">"{testimonial.content}"</blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-heading font-bold text-lg">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6 sm:mb-8">
                About <span className="text-primary">GSFS</span>
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-6 sm:mb-8">
                Global Strategic Financial Solutions (GSFS) is a leading UK-based financial services company serving the
                Global Financial Consortium. Based in London and Manchester, we provide sophisticated financial services
                to HNWI, accredited investors, families, foundations, and institutions worldwide.
              </p>
              <div className="space-y-4 sm:space-y-6">
                {[
                  "UK Financial Services Company (No: 12345678)",
                  "FCA Regulated Investment Company with full compliance",
                  "Serving HNWI, Accredited & Sophisticated Investors",
                  "Global operations: UK and international markets",
                  "Banking partnership with Barclays Bank PLC",
                  "Legal counsel: Clifford Chance LLP",
                  "Anti-Money Laundering compliance (UK MLR 2017)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-4 sm:gap-6"
            >
              <Card className="p-6 sm:p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold">Global Expertise</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      International presence with deep market knowledge
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-2 hover:border-secondary/20 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold">Regulatory Excellence</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Highest governance and compliance standards
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold">Proven Results</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Track record of exceptional performance
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-4 sm:mb-6">
              Ready to <span className="text-primary">Get Started?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 px-4">
              Join the elite circle of sophisticated investors and successful businesses who trust GSFS with their most
              important financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
              <Link href="/loans/business-loan-application">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
                >
                  Apply for Business Loan
                  <ArrowRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/schedule-private-consultation">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg border-2 bg-transparent"
                >
                  Schedule Private Consultation
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground px-4">
              Services intended solely for Accredited Investors, Institutional, and Sophisticated Investors
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-4 sm:mb-6">
              Contact <span className="text-secondary">Our Experts</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Connect with our team of financial specialists for personalized solutions
            </p>
          </motion.div>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: MapPin,
                  title: "Corporate Headquarters - UK",
                  content: "1 Canary Wharf\nLondon E14 5AB\nUnited Kingdom",
                },
                {
                  icon: MapPin,
                  title: "Northern Operations - UK",
                  content: "Manchester Business Park\nManchester M22 5TG\nUnited Kingdom",
                },
                {
                  icon: Phone,
                  title: "Phone Numbers",
                  content:
                    "+44 20 7946 0958 (Main Office)\n+44 161 123 4567 (Northern Office)\n+44 7700 900123 (Mobile)",
                },
                {
                  icon: Mail,
                  title: "Email Addresses",
                  content: "office@gsfs.co.uk (General)\ninfo@gsfs.co.uk (Information)\nsupport@gsfs.co.uk (Support)",
                },
                {
                  icon: Building2,
                  title: "Banking & Legal",
                  content: "Banking: Barclays Bank PLC (London)\nLegal: Clifford Chance LLP\nSolicitor: Senior Partner",
                },
              ].map((contact, index) => (
                <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading font-bold text-base sm:text-lg mb-2">{contact.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line break-words">
                        {contact.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 border-2">
                <CardHeader className="pb-4 sm:pb-6 px-0">
                  <CardTitle className="text-xl sm:text-2xl font-heading font-bold">Get in Touch</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Send us a message and our team will respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">First Name</label>
                      <input className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Last Name</label>
                      <input className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Company</label>
                    <input className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Service Interest</label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base">
                      <option>Wealth & Asset Management</option>
                      <option>Project Funding Solutions</option>
                      <option>Fiduciary & Trust Services</option>
                      <option>Securities Lending Programs</option>
                      <option>Credit Enhancement Programs</option>
                      <option>Business Loan Application</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Investment Amount (Optional)</label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base">
                      <option>$1M - $5M</option>
                      <option>$5M - $25M</option>
                      <option>$25M - $100M</option>
                      <option>$100M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-sm sm:text-base">
                    Send Message
                  </Button>
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
