"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Application {
  id: string
  type: 'business_loan' | 'contact' | 'general_inquiry'
  submittedAt: string
  data: Record<string, any>
  status: 'new' | 'reviewed' | 'processed'
  emailSent: boolean
}

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      // Security: This is a temporary admin page and should be properly secured in production
      // For now, we'll show a message that this requires admin access
      setApplications([])
      setLoading(false)
      
      // In production, this would require proper authentication:
      // const adminKey = prompt('Enter admin access key:')
      // const response = await fetch(`/api/applications?admin_key=${adminKey}`)
      // if (response.ok) {
      //   const data = await response.json()
      //   setApplications(data.sort((a: Application, b: Application) => 
      //     new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      //   ))
      // }
    } catch (error) {
      console.error('Failed to fetch applications:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'reviewed': return 'bg-yellow-100 text-yellow-800'
      case 'processed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'business_loan': return <Building className="h-5 w-5" />
      case 'contact': return <Mail className="h-5 w-5" />
      default: return <FileText className="h-5 w-5" />
    }
  }

  const getTypeName = (type: string) => {
    switch (type) {
      case 'business_loan': return 'Business Loan Application'
      case 'contact': return 'Contact Form'
      case 'general_inquiry': return 'General Inquiry'
      default: return 'Unknown Type'
    }
  }

  const formatFieldName = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation currentPage="/applications" />
        <div className="container py-24">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Loading applications...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="/applications" />
      
      <div className="container py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-black tracking-tight mb-4">
              Applications Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage and review all submissions from the GSFS platform
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Applications List */}
            <div className="lg:col-span-2 space-y-4">
              {applications.length === 0 ? (
                <Card className="p-8 text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Admin Access Required</h3>
                  <p className="text-muted-foreground">
                    This applications dashboard requires proper authentication and admin privileges to view sensitive user data.
                    In production, this page should be secured behind proper authentication.
                  </p>
                </Card>
              ) : (
                applications.map((app) => (
                  <Card 
                    key={app.id} 
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedApp?.id === app.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedApp(app)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {getTypeIcon(app.type)}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{getTypeName(app.type)}</CardTitle>
                            <CardDescription className="text-sm">
                              ID: {app.id}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(app.status)}>
                            {app.status.toUpperCase()}
                          </Badge>
                          {app.emailSent && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              EMAIL SENT
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>
                          {app.data.firstName && app.data.lastName 
                            ? `${app.data.firstName} ${app.data.lastName}` 
                            : app.data.email || 'Anonymous'}
                        </span>
                        <span>{new Date(app.submittedAt).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Application Details */}
            <div className="lg:col-span-1">
              {selectedApp ? (
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {getTypeIcon(selectedApp.type)}
                      </div>
                      Application Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Basic Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span>{getTypeName(selectedApp.type)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge className={getStatusColor(selectedApp.status)}>
                            {selectedApp.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Submitted:</span>
                          <span>{new Date(selectedApp.submittedAt).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email Sent:</span>
                          <span className={selectedApp.emailSent ? 'text-green-600' : 'text-red-600'}>
                            {selectedApp.emailSent ? 'Yes' : 'No'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Form Data</h4>
                      <div className="space-y-2 text-sm max-h-96 overflow-y-auto">
                        {Object.entries(selectedApp.data).map(([key, value]) => (
                          <div key={key} className="flex flex-col gap-1">
                            <span className="text-muted-foreground text-xs">{formatFieldName(key)}:</span>
                            <span className="bg-muted p-2 rounded text-xs break-words">
                              {String(value) || 'N/A'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="p-8 text-center">
                  <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Select an Application</h3>
                  <p className="text-muted-foreground text-sm">
                    Click on an application from the list to view its details.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}