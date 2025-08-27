"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle, Upload, Building2, User, DollarSign, FileText, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function BusinessLoanApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/loans" />

      {/* Header */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold">
              Business Loan Application
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-balance mb-6">
              <span className="gradient-text">Secure Your</span>
              <br />
              <span className="text-foreground">Business Funding</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">
              Complete our comprehensive application to access flexible financing solutions tailored for your business
              growth.
            </p>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-primary">{Math.round(progressPercentage)}% Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-2xl">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-4 mb-4">
                  {currentStep === 1 && <User className="h-8 w-8 text-primary" />}
                  {currentStep === 2 && <Building2 className="h-8 w-8 text-primary" />}
                  {currentStep === 3 && <DollarSign className="h-8 w-8 text-primary" />}
                  {currentStep === 4 && <FileText className="h-8 w-8 text-primary" />}
                  {currentStep === 5 && <Shield className="h-8 w-8 text-primary" />}

                  <div>
                    <CardTitle className="text-2xl font-heading font-bold">
                      {currentStep === 1 && "Personal Information"}
                      {currentStep === 2 && "Business Details"}
                      {currentStep === 3 && "Loan Requirements"}
                      {currentStep === 4 && "Financial Information"}
                      {currentStep === 5 && "Documents & Review"}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {currentStep === 1 && "Tell us about yourself and your role in the business"}
                      {currentStep === 2 && "Provide details about your business operations"}
                      {currentStep === 3 && "Specify your funding needs and preferences"}
                      {currentStep === 4 && "Share your business financial information"}
                      {currentStep === 5 && "Upload documents and review your application"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">First Name *</label>
                        <Input className="h-12" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Last Name *</label>
                        <Input className="h-12" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Email Address *</label>
                        <Input type="email" className="h-12" placeholder="Enter your email address" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Phone Number *</label>
                        <Input type="tel" className="h-12" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Title/Position *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select your position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ceo">CEO/President</SelectItem>
                            <SelectItem value="cfo">CFO</SelectItem>
                            <SelectItem value="owner">Business Owner</SelectItem>
                            <SelectItem value="partner">Partner</SelectItem>
                            <SelectItem value="manager">General Manager</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Ownership Percentage *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select ownership %" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="100">100%</SelectItem>
                            <SelectItem value="75-99">75-99%</SelectItem>
                            <SelectItem value="50-74">50-74%</SelectItem>
                            <SelectItem value="25-49">25-49%</SelectItem>
                            <SelectItem value="less-25">Less than 25%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Business Address *</label>
                      <Input className="h-12 mb-4" placeholder="Street Address" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input className="h-12" placeholder="City" />
                        <Input className="h-12" placeholder="State/Province" />
                        <Input className="h-12" placeholder="ZIP/Postal Code" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Business Details */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Legal Business Name *</label>
                        <Input className="h-12" placeholder="Enter legal business name" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">DBA (if different)</label>
                        <Input className="h-12" placeholder="Doing business as" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Federal Tax ID (EIN) *</label>
                        <Input className="h-12" placeholder="XX-XXXXXXX" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Business Phone *</label>
                        <Input type="tel" className="h-12" placeholder="Business phone number" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Industry *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="construction">Construction</SelectItem>
                            <SelectItem value="professional-services">Professional Services</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="hospitality">Hospitality</SelectItem>
                            <SelectItem value="transportation">Transportation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Business Structure *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select structure" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="llc">LLC</SelectItem>
                            <SelectItem value="corporation">Corporation</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Years in Business *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select years" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-1">Less than 1 year</SelectItem>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="more-10">More than 10 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Number of Employees *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select employee count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5</SelectItem>
                            <SelectItem value="6-10">6-10</SelectItem>
                            <SelectItem value="11-25">11-25</SelectItem>
                            <SelectItem value="26-50">26-50</SelectItem>
                            <SelectItem value="51-100">51-100</SelectItem>
                            <SelectItem value="more-100">More than 100</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Business Description *</label>
                      <Textarea
                        rows={4}
                        placeholder="Describe your business operations, products, and services"
                        className="resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Loan Requirements */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Loan Type *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select loan type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="working-capital">Working Capital</SelectItem>
                            <SelectItem value="equipment-financing">Equipment Financing</SelectItem>
                            <SelectItem value="commercial-real-estate">Commercial Real Estate</SelectItem>
                            <SelectItem value="business-expansion">Business Expansion</SelectItem>
                            <SelectItem value="asset-based">Asset-Based Lending</SelectItem>
                            <SelectItem value="sba">SBA Loan</SelectItem>
                            <SelectItem value="bridge">Bridge Financing</SelectItem>
                            <SelectItem value="revenue-based">Revenue-Based Financing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Loan Amount *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select amount range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                            <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                            <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                            <SelectItem value="5m-25m">$5M - $25M</SelectItem>
                            <SelectItem value="25m-plus">$25M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Preferred Term *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select loan term" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6-months">6 months</SelectItem>
                            <SelectItem value="1-year">1 year</SelectItem>
                            <SelectItem value="2-years">2 years</SelectItem>
                            <SelectItem value="3-years">3 years</SelectItem>
                            <SelectItem value="5-years">5 years</SelectItem>
                            <SelectItem value="7-years">7 years</SelectItem>
                            <SelectItem value="10-years">10 years</SelectItem>
                            <SelectItem value="15-years">15 years</SelectItem>
                            <SelectItem value="20-years">20 years</SelectItem>
                            <SelectItem value="25-years">25 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">When do you need funding? *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1-week">Within 1 week</SelectItem>
                            <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="6-months">Within 6 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Purpose of Loan *</label>
                      <Textarea
                        rows={4}
                        placeholder="Describe how you plan to use the loan funds (e.g., equipment purchase, inventory, expansion, working capital)"
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Collateral Available</label>
                      <div className="space-y-3">
                        {[
                          "Real Estate",
                          "Equipment",
                          "Inventory",
                          "Accounts Receivable",
                          "Securities/Investments",
                          "Personal Guarantee",
                          "Other Assets",
                          "No Collateral Available",
                        ].map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox id={option} />
                            <label htmlFor={option} className="text-sm font-medium">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Financial Information */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Annual Revenue *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select revenue range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-100k">Less than $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                            <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                            <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                            <SelectItem value="5m-25m">$5M - $25M</SelectItem>
                            <SelectItem value="25m-plus">$25M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Monthly Cash Flow *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select cash flow" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="negative">Negative</SelectItem>
                            <SelectItem value="0-10k">$0 - $10K</SelectItem>
                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-plus">$100K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Business Credit Score</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select credit score range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent (80-100)</SelectItem>
                            <SelectItem value="good">Good (60-79)</SelectItem>
                            <SelectItem value="fair">Fair (40-59)</SelectItem>
                            <SelectItem value="poor">Poor (20-39)</SelectItem>
                            <SelectItem value="unknown">Don't Know</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Personal Credit Score *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select credit score range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent (750+)</SelectItem>
                            <SelectItem value="good">Good (700-749)</SelectItem>
                            <SelectItem value="fair">Fair (650-699)</SelectItem>
                            <SelectItem value="poor">Poor (600-649)</SelectItem>
                            <SelectItem value="very-poor">Very Poor (Below 600)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Existing Business Debt *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select debt amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Existing Debt</SelectItem>
                            <SelectItem value="less-50k">Less than $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                            <SelectItem value="500k-plus">$500K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Bank Account Balance *</label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select balance range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-10k">Less than $10K</SelectItem>
                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k-plus">$250K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Primary Bank *</label>
                      <Input className="h-12" placeholder="Enter your primary business bank name" />
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Additional Financial Information</label>
                      <Textarea
                        rows={3}
                        placeholder="Any additional financial information that might help with your application"
                        className="resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Documents & Review */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-4">Required Documents</h3>
                      <p className="text-muted-foreground mb-6">
                        Please upload the following documents to complete your application. All documents should be in
                        PDF format.
                      </p>

                      <div className="grid gap-4">
                        {[
                          { name: "Business Tax Returns (Last 2 Years)", required: true },
                          { name: "Personal Tax Returns (Last 2 Years)", required: true },
                          { name: "Bank Statements (Last 3 Months)", required: true },
                          { name: "Profit & Loss Statement", required: true },
                          { name: "Balance Sheet", required: true },
                          { name: "Business License", required: false },
                          { name: "Articles of Incorporation", required: false },
                          { name: "Commercial Lease Agreement", required: false },
                        ].map((doc, index) => (
                          <Card
                            key={index}
                            className="p-4 border-dashed border-2 hover:border-primary/50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Upload className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <span className="font-medium">{doc.name}</span>
                                  {doc.required && <span className="text-red-500 ml-1">*</span>}
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Upload
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-8">
                      <h3 className="text-xl font-heading font-bold mb-4">Terms and Conditions</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox id="terms" className="mt-1" />
                          <label htmlFor="terms" className="text-sm leading-relaxed">
                            I acknowledge that I have read and agree to the{" "}
                            <Link href="#" className="text-primary hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>
                            .
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox id="consent" className="mt-1" />
                          <label htmlFor="consent" className="text-sm leading-relaxed">
                            I consent to GSFS obtaining my credit report and verifying the information provided in this
                            application.
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox id="accuracy" className="mt-1" />
                          <label htmlFor="accuracy" className="text-sm leading-relaxed">
                            I certify that all information provided in this application is true and accurate to the best
                            of my knowledge.
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h4 className="font-heading font-bold mb-2">What Happens Next?</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Initial review within 24 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Document verification and credit check
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Loan decision within 48-72 hours
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Funding within 3-5 business days upon approval
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary">
                      Submit Application
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
