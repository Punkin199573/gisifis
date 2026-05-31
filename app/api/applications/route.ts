import { NextRequest, NextResponse } from 'next/server'
import { addFormSubmission } from '@/lib/supabase'
import { sendApplicationNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save form submission to Supabase
    const result = await addFormSubmission({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
    })

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    const submissionId = result.data?.[0]?.id

    // Send admin notification email
    await sendApplicationNotification({
      type: 'contact',
      data: { firstName, lastName, email, phone, subject, message },
      applicationId: submissionId,
    })

    return NextResponse.json({
      success: true,
      submissionId,
      message: 'Form submitted successfully',
    })
  } catch (error) {
    console.error('[v0] Error processing form submission:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
