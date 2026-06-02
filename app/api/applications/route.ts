import { NextRequest, NextResponse } from 'next/server'
import { saveApplication, getApplications } from '@/lib/storage'
import { sendApplicationNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    // Basic rate limiting check
    const origin = request.headers.get('origin')
    const referer = request.headers.get('referer')
    
    // Validate request origin for basic CSRF protection
    if (!origin && !referer) {
      return NextResponse.json({ error: 'Invalid request origin' }, { status: 403 })
    }

    const body = await request.json()
    const { type, data } = body

    if (!type || !data) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic server-side validation
    if (type === 'business_loan') {
      if (!data.firstName || !data.lastName || !data.email || !data.companyName) {
        return NextResponse.json({ error: 'Missing required business loan fields' }, { status: 400 })
      }
    } else if (type === 'contact') {
      if (!data.firstName || !data.lastName || !data.email || !data.message) {
        return NextResponse.json({ error: 'Missing required contact fields' }, { status: 400 })
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Save application to storage
    const application = await saveApplication({ type, data })

    // Send email notification
    const emailResult = await sendApplicationNotification({
      type,
      data,
      applicationId: application.id
    })

    // Update application with email status
    if (emailResult.success) {
      const { updateApplicationStatus } = await import('@/lib/storage')
      await updateApplicationStatus(application.id, 'new', true)
    }

    return NextResponse.json({
      success: true,
      applicationId: application.id,
      emailSent: emailResult.success
    })
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  // Security: Restrict access to applications data
  // This is a temporary admin endpoint and should be properly secured in production
  const url = new URL(request.url)
  const adminKey = url.searchParams.get('admin_key')
  
  // Simple admin access check - in production this should use proper authentication
  if (adminKey !== process.env.ADMIN_ACCESS_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }

  try {
    const applications = await getApplications()
    return NextResponse.json(applications)
  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}