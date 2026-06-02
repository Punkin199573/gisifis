"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, TrendingUp, Shield, Globe, Award, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage="/" />

      {/* Hero Section */}
      <section className="flex-1 pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  Strategic Capital Management
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 font-heading">
                Premium Wealth Management for Discerning Investors
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Stable Value Capital provides sophisticated investment solutions and strategic capital allocation for high-net-worth individuals and institutional investors globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
                    Start Investing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-6xl opacity-30 font-bold text-primary">SVC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading">Why Choose Stable Value Capital</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to wealth management combines expertise, innovation, and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Institutional Trust",
                description: "Trusted by institutions and HNWI clients with robust compliance and risk management frameworks."
              },
              {
                icon: TrendingUp,
                title: "Strategic Returns",
                description: "Data-driven investment strategies focused on sustainable growth and capital preservation."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Access to international markets and opportunities with local market expertise."
              },
              {
                icon: Award,
                title: "Expert Advisory",
                description: "Seasoned portfolio managers and financial strategists with decades of combined experience."
              },
              {
                icon: CheckCircle,
                title: "Transparent Process",
                description: "Clear communication and detailed reporting on all investments and portfolio performance."
              },
              {
                icon: TrendingUp,
                title: "Wealth Optimization",
                description: "Comprehensive tax planning and estate management strategies tailored to your goals."
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-gray-200 hover:border-primary/30 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2 font-heading">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your investment objectives and risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Wealth Management",
                description: "Personalized portfolio management for high-net-worth individuals seeking comprehensive asset management."
              },
              {
                title: "Strategic Investments",
                description: "Access to curated investment opportunities across multiple asset classes and geographies."
              },
              {
                title: "Capital Allocation",
                description: "Expert guidance on optimal capital deployment across your portfolio and market opportunities."
              },
              {
                title: "Financial Advisory",
                description: "Strategic consulting on wealth preservation, tax optimization, and long-term financial planning."
              }
            ].map((service, index) => (
              <Card key={index} className="border-primary/20 bg-gradient-to-br from-white to-primary/5 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 font-heading">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Link href="/contact" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$2B+", label: "Assets Under Management" },
              { value: "500+", label: "Client Relationships" },
              { value: "20+", label: "Years of Excellence" },
              { value: "Global", label: "Market Coverage" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold font-heading mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 font-heading">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our team of expert advisors to discuss your financial goals and investment objectives.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
