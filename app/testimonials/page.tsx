"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  CheckCircle,
  Quote,
  Building2,
  TrendingUp,
  Award,
  Globe,
  Users,
  Banknote,
} from "lucide-react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function TestimonialsPage() {
  const featuredTestimonials = [
    {
      name: "Sarah Chen",
      title: "CEO & Founder",
      company: "TechVentures Global",
      location: "Singapore",
      image: "/professional-asian-woman-ceo.png",
      service: "Project Funding",
      amount: "$50M",
      content:
        "GSFS provided the sophisticated financing structure we needed for our $50M expansion into Southeast Asian markets. Their expertise in credit enhancement made what seemed impossible, possible. The team's deep understanding of international regulations and their extensive network of institutional partners was instrumental in securing favorable terms that traditional banks couldn't match.",
      results: ["50% faster funding process", "2.3% lower interest rates", "Global market expansion achieved"],
      rating: 5,
      featured: true,
    },
    {
      name: "Marcus Rodriguez",
      title: "Managing Partner",
      company: "Rodriguez Holdings",
      location: "Mexico City",
      image: "/professional-hispanic-businessman.png",
      service: "Wealth Management",
      amount: "$25M",
      content:
        "The wealth management team at GSFS has consistently delivered exceptional returns through their private placement opportunities. Their sophisticated approach to portfolio diversification and risk management has outperformed our previous advisors by significant margins. The level of personalized service and attention to detail is truly world-class.",
      results: ["18.7% annual returns", "35% portfolio diversification", "Risk reduction of 40%"],
      rating: 5,
      featured: true,
    },
  ]

  const clientTestimonials = [
    {
      name: "Dr. Emily Watson",
      title: "Founder & Chief Medical Officer",
      company: "MedTech Innovations",
      location: "Boston, USA",
      image: "/professional-woman-doctor-entrepreneur.png",
      service: "Credit Enhancement",
      amount: "$15M",
      content:
        "From initial consultation to project completion, GSFS demonstrated unparalleled professionalism and delivered results that exceeded our expectations. Their credit enhancement strategies helped us secure FDA approval funding at terms we never thought possible.",
      results: ["FDA approval secured", "30% cost savings", "6-month timeline acceleration"],
      rating: 5,
    },
    {
      name: "James Thompson",
      title: "Executive Chairman",
      company: "Thompson Industries",
      location: "London, UK",
      image: "/professional-senior-businessman-chairman.png",
      service: "Fiduciary Services",
      amount: "$100M+",
      content:
        "Their fiduciary services have been instrumental in protecting and growing our family wealth across multiple generations. The trust structures they've established provide both security and flexibility for our international operations.",
      results: ["Multi-generational planning", "Tax optimization achieved", "Global asset protection"],
      rating: 5,
    },
    {
      name: "Priya Patel",
      title: "Investment Director",
      company: "Patel Capital",
      location: "Mumbai, India",
      image: "/professional-indian-woman-investment-director.png",
      service: "Securities Lending",
      amount: "$30M",
      content:
        "The securities lending program has generated consistent passive income while maintaining full control of our assets. Their risk management framework and institutional-grade counterparties provide peace of mind.",
      results: ["4.2% passive yield", "Zero principal loss", "Enhanced liquidity"],
      rating: 5,
    },
    {
      name: "Robert Kim",
      title: "President & CEO",
      company: "Kim Enterprises",
      location: "Seoul, South Korea",
      image: "/professional-korean-businessman-president.png",
      service: "International Financing",
      amount: "$75M",
      content:
        "GSFS structured a complex international financing deal that other firms couldn't handle. Their global expertise and regulatory knowledge across multiple jurisdictions is unmatched in the industry.",
      results: ["Multi-jurisdiction compliance", "Currency risk mitigation", "Accelerated expansion"],
      rating: 5,
    },
    {
      name: "Alexandra Volkov",
      title: "Chief Financial Officer",
      company: "Nordic Energy Solutions",
      location: "Stockholm, Sweden",
      image: "/professional-scandinavian-woman-cfo.png",
      service: "Green Project Funding",
      amount: "$40M",
      content:
        "Their expertise in sustainable project financing helped us secure funding for our renewable energy initiative. The ESG-focused investor network they provided access to was exactly what we needed.",
      results: ["Carbon neutral achieved", "ESG compliance", "Sustainable growth model"],
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      title: "Managing Director",
      company: "Gulf Investment Group",
      location: "Dubai, UAE",
      image: "/professional-middle-eastern-businessman.png",
      service: "Islamic Finance",
      amount: "$60M",
      content:
        "GSFS's understanding of Sharia-compliant financing structures is exceptional. They successfully structured our real estate development project while maintaining full compliance with Islamic banking principles.",
      results: ["Sharia compliance achieved", "Regulatory approval", "Community development"],
      rating: 5,
    },
    {
      name: "Isabella Santos",
      title: "Founder",
      company: "Santos Agribusiness",
      location: "São Paulo, Brazil",
      image: "/professional-latina-businesswoman.png",
      service: "Trade Finance",
      amount: "$20M",
      content:
        "Their trade finance solutions transformed our agricultural export business. The credit enhancement instruments they provided opened doors to markets we couldn't access before.",
      results: ["Market expansion", "Export growth 150%", "Supply chain optimization"],
      rating: 5,
    },
    {
      name: "David Mitchell",
      title: "Chairman",
      company: "Mitchell Family Office",
      location: "Toronto, Canada",
      image: "/professional-canadian-businessman-chairman.png",
      service: "Family Office Services",
      amount: "$200M+",
      content:
        "The comprehensive family office services have streamlined our multi-generational wealth management. Their discretion, expertise, and global perspective align perfectly with our family's values.",
      results: ["Wealth preservation", "Next-gen preparation", "Philanthropic structuring"],
      rating: 5,
    },
  ]

  const industryStats = [
    { industry: "Technology", count: "150+", icon: Building2 },
    { industry: "Healthcare", count: "85+", icon: Award },
    { industry: "Energy", count: "120+", icon: TrendingUp },
    { industry: "Real Estate", count: "200+", icon: Globe },
    { industry: "Manufacturing", count: "95+", icon: Users },
    { industry: "Financial Services", count: "75+", icon: Banknote },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage="/testimonials" />

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
              Client Success Stories
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-balance mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Trusted by
              </span>
              <br />
              <span className="text-foreground">Global Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Discover how GSFS has helped sophisticated investors, entrepreneurs, and institutions achieve their
              financial objectives through our premium services and expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-secondary mb-2">$2.5B+</div>
                <div className="text-muted-foreground">Capital Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials */}
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
              Featured <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              In-depth case studies showcasing transformational results achieved through our premium financial services
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-6">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-20 w-20 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <h3 className="text-2xl font-heading font-bold">{testimonial.name}</h3>
                        <p className="text-lg text-muted-foreground">{testimonial.title}</p>
                        <p className="text-primary font-semibold">{testimonial.company}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          {testimonial.service}
                        </Badge>
                        <div className="text-2xl font-heading font-black text-secondary">{testimonial.amount}</div>
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <blockquote className="text-lg leading-relaxed italic pl-6">{testimonial.content}</blockquote>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span className="text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
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
              Industry <span className="text-secondary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our diverse client portfolio spans multiple industries and sectors worldwide
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-6">
            {industryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="space-y-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-heading font-black text-secondary">{stat.count}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.industry}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Grid */}
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
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Hear directly from our clients about their experiences and results achieved through our services
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-heading font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.service}
                      </Badge>
                      <span className="text-lg font-heading font-bold text-secondary">{testimonial.amount}</span>
                    </div>

                    <blockquote className="text-sm leading-relaxed italic mb-4">"{testimonial.content}"</blockquote>

                    <div className="space-y-2 pt-4 border-t">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-xs font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
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
              Join Our <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Experience the same level of exceptional service and results that our clients have achieved. Let us help
              you reach your financial objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                Start Your Success Story
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg border-2 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Services available for qualified investors and businesses. Contact us to discuss your specific
              requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
