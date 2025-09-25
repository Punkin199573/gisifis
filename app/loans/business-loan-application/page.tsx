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
import { ArrowRight, ArrowLeft, CheckCircle, Upload, Building2, User, DollarSign, FileText, Shield, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  title: string
  ownershipPercentage: string
  streetAddress: string
  city: string
  state: string
  zipCode: string

  // Business Details
  companyName: string
  dba: string
  federalTaxId: string
  businessPhone: string
  industry: string
  businessType: string
  companyAge: string
  numberOfEmployees: string
  website: string
  businessDescription: string

  // Loan Requirements
  loanAmount: string
  loanTerm: string
  timeframe: string
  loanPurpose: string
  collateral: string[]

  // Financial Information
  annualRevenue: string
  monthlyCashFlow: string
  businessCreditScore: string
  personalCreditScore: string
  existingDebt: string
  bankBalance: string
  primaryBank: string
  additionalFinancialInfo: string

  // Terms and Conditions
  termsAccepted: boolean
  consentAccepted: boolean
  accuracyAccepted: boolean
}

export default function BusinessLoanApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const totalSteps = 5

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    ownershipPercentage: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    companyName: "",
    dba: "",
    federalTaxId: "",
    businessPhone: "",
    industry: "",
    businessType: "",
    companyAge: "",
    numberOfEmployees: "",
    website: "",
    businessDescription: "",
    loanAmount: "",
    loanTerm: "",
    timeframe: "",
    loanPurpose: "",
    collateral: [],
    annualRevenue: "",
    monthlyCashFlow: "",
    businessCreditScore: "",
    personalCreditScore: "",
    existingDebt: "",
    bankBalance: "",
    primaryBank: "",
    additionalFinancialInfo: "",
    termsAccepted: false,
    consentAccepted: false,
    accuracyAccepted: false,
  })

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCollateralChange = (collateralType: string, checked: boolean) => {
    if (checked) {
      updateFormData('collateral', [...formData.collateral, collateralType])
    } else {
      updateFormData('collateral', formData.collateral.filter(c => c !== collateralType))
    }
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone && formData.title && formData.ownershipPercentage && formData.streetAddress && formData.city && formData.state && formData.zipCode)
      case 2:
        return !!(formData.companyName && formData.federalTaxId && formData.businessPhone && formData.industry && formData.businessType && formData.companyAge && formData.numberOfEmployees)
      case 3:
        return !!(formData.loanAmount && formData.loanTerm && formData.timeframe && formData.loanPurpose)
      case 4:
        return !!(formData.annualRevenue && formData.monthlyCashFlow && formData.personalCreditScore && formData.existingDebt && formData.bankBalance && formData.primaryBank)
      case 5:
        return formData.termsAccepted && formData.consentAccepted && formData.accuracyAccepted
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitApplication = async () => {
    if (!validateStep(5)) {
      setSubmitError("Please complete all required fields and accept the terms.")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'business_loan',
          data: formData
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        setSubmitError(result.error || 'Failed to submit application')
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressPercentage = (currentStep / totalSteps) * 100

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation currentPage="/loans" />
        <div className="container py-24">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-20 w-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-heading font-black mb-4">Application Submitted Successfully!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your business loan application. We have received your submission and will review it within 24 hours.
                You will receive an email confirmation shortly at {formData.email}.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>What happens next:</strong>
                </p>
                <ul className="text-left max-w-md mx-auto space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Initial review within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Document verification and credit check
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Loan decision within 48-72 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Funding within 3-5 business days upon approval
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

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
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Secure Your</span>
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
                      {currentStep === 5 && "Review your information and submit your application"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {submitError && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{submitError}</span>
                  </div>
                )}

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
                        <Input 
                          className="h-12" 
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => updateFormData('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Last Name *</label>
                        <Input 
                          className="h-12" 
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => updateFormData('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Email Address *</label>
                        <Input 
                          type="email" 
                          className="h-12" 
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Phone Number *</label>
                        <Input 
                          type="tel" 
                          className="h-12" 
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Title/Position *</label>
                        <Select value={formData.title} onValueChange={(value) => updateFormData('title', value)}>
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
                        <Select value={formData.ownershipPercentage} onValueChange={(value) => updateFormData('ownershipPercentage', value)}>
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
                      <Input 
                        className="h-12 mb-4" 
                        placeholder="Street Address"
                        value={formData.streetAddress}
                        onChange={(e) => updateFormData('streetAddress', e.target.value)}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input 
                          className="h-12" 
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => updateFormData('city', e.target.value)}
                        />
                        <Input 
                          className="h-12" 
                          placeholder="State/Province"
                          value={formData.state}
                          onChange={(e) => updateFormData('state', e.target.value)}
                        />
                        <Input 
                          className="h-12" 
                          placeholder="ZIP/Postal Code"
                          value={formData.zipCode}
                          onChange={(e) => updateFormData('zipCode', e.target.value)}
                        />
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
                        <Input 
                          className="h-12" 
                          placeholder="Enter legal business name"
                          value={formData.companyName}
                          onChange={(e) => updateFormData('companyName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">DBA (if different)</label>
                        <Input 
                          className="h-12" 
                          placeholder="Doing business as"
                          value={formData.dba}
                          onChange={(e) => updateFormData('dba', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Federal Tax ID (EIN) *</label>
                        <Input 
                          className="h-12" 
                          placeholder="XX-XXXXXXX"
                          value={formData.federalTaxId}
                          onChange={(e) => updateFormData('federalTaxId', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Business Phone *</label>
                        <Input 
                          type="tel" 
                          className="h-12" 
                          placeholder="Business phone number"
                          value={formData.businessPhone}
                          onChange={(e) => updateFormData('businessPhone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Industry *</label>
                        <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="construction">Construction</SelectItem>
                            <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="transportation">Transportation</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Business Type *</label>
                        <Select value={formData.businessType} onValueChange={(value) => updateFormData('businessType', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="llc">LLC</SelectItem>
                            <SelectItem value="corporation">Corporation</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                            <SelectItem value="non-profit">Non-Profit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Years in Business *</label>
                        <Select value={formData.companyAge} onValueChange={(value) => updateFormData('companyAge', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select years in business" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup (Less than 1 year)</SelectItem>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="11-20">11-20 years</SelectItem>
                            <SelectItem value="20-plus">20+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Number of Employees *</label>
                        <Select value={formData.numberOfEmployees} onValueChange={(value) => updateFormData('numberOfEmployees', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select number of employees" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 (Just me)</SelectItem>
                            <SelectItem value="2-5">2-5</SelectItem>
                            <SelectItem value="6-10">6-10</SelectItem>
                            <SelectItem value="11-25">11-25</SelectItem>
                            <SelectItem value="26-50">26-50</SelectItem>
                            <SelectItem value="50-plus">50+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Business Website</label>
                      <Input 
                        className="h-12" 
                        placeholder="https://www.yourbusiness.com"
                        value={formData.website}
                        onChange={(e) => updateFormData('website', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Business Description</label>
                      <Textarea
                        rows={4}
                        placeholder="Briefly describe your business, products, or services"
                        className="resize-none"
                        value={formData.businessDescription}
                        onChange={(e) => updateFormData('businessDescription', e.target.value)}
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
                        <label className="text-sm font-semibold mb-2 block">Loan Amount Requested *</label>
                        <Select value={formData.loanAmount} onValueChange={(value) => updateFormData('loanAmount', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select loan amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="1m-plus">$1,000,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block">Preferred Loan Term *</label>
                        <Select value={formData.loanTerm} onValueChange={(value) => updateFormData('loanTerm', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select loan term" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6-months">6 months</SelectItem>
                            <SelectItem value="1-year">1 year</SelectItem>
                            <SelectItem value="2-years">2 years</SelectItem>
                            <SelectItem value="3-years">3 years</SelectItem>
                            <SelectItem value="4-years">4 years</SelectItem>
                            <SelectItem value="5-years">5 years</SelectItem>
                            <SelectItem value="5-plus">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">When do you need funding? *</label>
                      <Select value={formData.timeframe} onValueChange={(value) => updateFormData('timeframe', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Purpose of Loan *</label>
                      <Textarea
                        rows={4}
                        placeholder="Describe how you plan to use the loan funds (e.g., equipment purchase, inventory, expansion, working capital)"
                        className="resize-none"
                        value={formData.loanPurpose}
                        onChange={(e) => updateFormData('loanPurpose', e.target.value)}
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
                            <Checkbox 
                              id={option} 
                              checked={formData.collateral.includes(option)}
                              onCheckedChange={(checked) => handleCollateralChange(option, checked as boolean)}
                            />
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
                        <Select value={formData.annualRevenue} onValueChange={(value) => updateFormData('annualRevenue', value)}>
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
                        <Select value={formData.monthlyCashFlow} onValueChange={(value) => updateFormData('monthlyCashFlow', value)}>
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
                        <Select value={formData.businessCreditScore} onValueChange={(value) => updateFormData('businessCreditScore', value)}>
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
                        <Select value={formData.personalCreditScore} onValueChange={(value) => updateFormData('personalCreditScore', value)}>
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
                        <Select value={formData.existingDebt} onValueChange={(value) => updateFormData('existingDebt', value)}>
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
                        <Select value={formData.bankBalance} onValueChange={(value) => updateFormData('bankBalance', value)}>
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
                      <Input 
                        className="h-12" 
                        placeholder="Enter your primary business bank name"
                        value={formData.primaryBank}
                        onChange={(e) => updateFormData('primaryBank', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Additional Financial Information</label>
                      <Textarea
                        rows={3}
                        placeholder="Any additional financial information that might help with your application"
                        className="resize-none"
                        value={formData.additionalFinancialInfo}
                        onChange={(e) => updateFormData('additionalFinancialInfo', e.target.value)}
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
                        Please note the following documents will be required after your initial application is approved:
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
                            className="p-4 border-dashed border-2 bg-muted/30"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <span className="font-medium">{doc.name}</span>
                                {doc.required && <span className="text-red-500 ml-1">*</span>}
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-8">
                      <h3 className="text-xl font-heading font-bold mb-4">Terms and Conditions</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="terms" 
                            className="mt-1"
                            checked={formData.termsAccepted}
                            onCheckedChange={(checked) => updateFormData('termsAccepted', checked)}
                          />
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
                          <Checkbox 
                            id="consent" 
                            className="mt-1"
                            checked={formData.consentAccepted}
                            onCheckedChange={(checked) => updateFormData('consentAccepted', checked)}
                          />
                          <label htmlFor="consent" className="text-sm leading-relaxed">
                            I consent to GSFS obtaining my credit report and verifying the information provided in this
                            application.
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="accuracy" 
                            className="mt-1"
                            checked={formData.accuracyAccepted}
                            onCheckedChange={(checked) => updateFormData('accuracyAccepted', checked)}
                          />
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
                    disabled={currentStep === 1 || isSubmitting}
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      disabled={!validateStep(currentStep)}
                      className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={submitApplication}
                      disabled={!validateStep(5) || isSubmitting}
                      className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <CheckCircle className="h-4 w-4" />
                        </>
                      )}
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