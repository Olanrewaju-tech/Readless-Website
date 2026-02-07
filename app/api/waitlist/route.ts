import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Save to database
    await sql`
      INSERT INTO waitlist (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING;
    `;

    // Send welcome email
    await resend.emails.send({
      from: 'Readless <hello@getreadless.tech>', // Change this to your domain
      to: email,
      subject: "You're in Welcome to Readless!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #2C3135 0%, #1A1D21 100%); padding: 40px 20px; text-align: center;">
              <img src="https://getreadless.tech/images/logo.png" alt="Readless Logo" style="width: 80px; height: 80px; margin-bottom: 20px;">
              <h1 style="color: #F5B800; margin: 0; font-size: 28px; font-weight: bold;">You're in.</h1>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <p style="color: #2C3135; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Hi there,
              </p>
              
              <p style="color: #2C3135; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                Thanks for joining the Readless waitlist — we'll email you as soon as we open access.
              </p>
              
              <h2 style="color: #2C3135; font-size: 20px; font-weight: bold; margin: 30px 0 20px;">
                What happens next
              </h2>
              
              <ul style="color: #2C3135; font-size: 16px; line-height: 1.8; margin-bottom: 30px; padding-left: 20px;">
                <li>You'll get an invite link when your spot is ready</li>
                <li>Early access spots go out in batches</li>
                <li>You'll also receive launch-only perks reserved for waitlist members</li>
              </ul>
              
              <div style="background-color: #FFF9E6; border-left: 4px solid #F5B800; padding: 20px; margin: 30px 0;">
                <p style="color: #2C3135; font-size: 16px; line-height: 1.6; margin: 0;">
                  <strong>If you want Readless to feel built for you, hit reply with one line:</strong><br>
                  What do you want Readless to help you do faster?
                </p>
              </div>
              
              <p style="color: #2C3135; font-size: 16px; line-height: 1.6; margin-top: 40px;">
                The Readless Team
              </p>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">
                Understanding the human mind, one chapter at a time.
              </p>
              <p style="color: #999; font-size: 12px; margin: 15px 0 0;">
                © 2026 Readless. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}