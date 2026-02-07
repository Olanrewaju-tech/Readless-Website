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
      from: 'Readless <onboarding@resend.dev>', // Change this to your domain
      to: email,
      subject: 'Welcome to Readless Waitlist! 🎉',
      html: `
        <h1>You're on the list!</h1>
        <p>Thanks for joining the Readless waitlist. We'll notify you as soon as we launch.</p>
        <p>Get ready to understand the human mind, one chapter at a time!</p>
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