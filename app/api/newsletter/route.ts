import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send welcome email using Resend
    await resend.emails.send({
      from: 'Stable Value Capital <noreply@stablevaluecapital.com>',
      to: email,
      subject: 'Welcome to Stable Value Capital Newsletter',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0066FF 0%, #00FFFF 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; }
              .content { padding: 30px; background: #f9fafb; border-radius: 8px; margin-top: 20px; }
              .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Stable Value Capital</h1>
                <p style="margin: 10px 0 0 0;">Premium Wealth Management</p>
              </div>
              <div class="content">
                <p>Hello,</p>
                <p>Thank you for subscribing to our newsletter! You'll now receive exclusive insights, market analysis, and updates about our latest investment opportunities.</p>
                <p>Our team at Stable Value Capital is committed to helping you grow your wealth through strategic investments and expert financial guidance.</p>
                <p style="margin-top: 30px;">Best regards,<br>The Stable Value Capital Team</p>
              </div>
              <div class="footer">
                <p>Stable Value Capital | London, United Kingdom<br>
                © 2024 Stable Value Capital. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Welcome email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
