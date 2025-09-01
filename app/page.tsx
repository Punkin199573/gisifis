"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const ArrowRight = () => (
  <svg className="ml-3 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9"
    />
  </svg>
)

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

const Banknote = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const PieChart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
    />
  </svg>
)

const Lock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
    />
  </svg>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/" />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="container relative z-10 pt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-6 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20"
              >
                GSFS • UK Financial Services • Company
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-balance mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Global Strategic
              </span>
              <br />
              <span className="text-foreground">Financial Solutions</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              Part of the Global Financial Consortium, providing sophisticated investment opportunities, business
              financing, and wealth management solutions for HNWI, institutional clients, and sophisticated investors
              across the UK and internationally.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Link href="/loans/business-loan-application">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
                >
                  Apply for Business Loan
                  <ArrowRight />
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
            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
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
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-4 sm:mb-6">
              Premium <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty px-4">
              Comprehensive financial solutions tailored for sophisticated investors and growing businesses
            </p>
          </div>

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
                features: ["London Statutory Trust", "Asset Protection", "Estate Planning"],
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
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
              Client <span className="text-secondary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Hear from our satisfied clients who have achieved exceptional results with our premium services
            </p>
          </div>

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
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-4 sm:space-y-6">
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
                  "UK Financial Services Company",
                  "FCA Regulated Investment Company with full compliance",
                  "Serving HNWI, Accredited & Sophisticated Investors",
                  "Global operations: UK and international markets",
                  "Banking partnership with HSBC bank",
                  "Anti-Money Laundering compliance (UK MLR 2017)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6">
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
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
                  <ArrowRight />
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
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-4 sm:mb-6">
              Contact <span className="text-secondary">Our Experts</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Connect with our team of financial specialists for personalized solutions
            </p>
          </div>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            <div className="space-y-6 sm:space-y-8">
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
                  content: "+44 7700 144320 (UK Office)\n+1 979 618 8876 (US Office)\n+44 7700 144320 (WhatsApp)",
                },
                {
                  icon: Mail,
                  title: "Email Addresses",
                  content: "info@gsfs.co.uk (General)\nsupport@gsfs.co.uk (Information)\nsupport@gsfs.co.uk (Support)",
                },
                {
                  icon: Building2,
                  title: "Banking & Legal",
                  content: "Banking: HSBC bank (London)\nSolicitor: Senior Partner",
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
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
