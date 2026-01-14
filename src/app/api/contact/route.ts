import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.APPOINTMENT_EMAIL || 'info@mmanico.com';
    const emailSubject = `New Contact Enquiry - ${data.name}`;

    // Format email body
    const emailBody = `
New Contact Enquiry

Client Information:
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Service Category: ${data.service || 'Not specified'}
Preferred Contact Mode: ${data.contactMode || 'Email'}
Preferred Time: ${data.preferredTime || 'Not specified'}

Message:
--------
${data.message}

---
This enquiry was submitted through the M MANI & CO website contact form.
Please respond to the client as per their preferred contact mode.

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    // Email service integration
    // Choose one of the following options and configure environment variables
    
    let emailSent = false;

    // Option 1: Resend (Recommended - Easiest setup)
    // Note: Install with 'npm install resend' if using Resend
    // Temporarily disabled to prevent build errors - uncomment when resend is installed
    /*
    if (process.env.RESEND_API_KEY) {
      try {
        const resendModule = await import('resend');
        const { Resend } = resendModule;
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'website@mmanico.com',
          to: recipientEmail,
          subject: emailSubject,
          text: emailBody,
          html: emailBody.replace(/\n/g, '<br>'),
        });
        emailSent = true;
      } catch (emailError: any) {
        console.error('Resend email error:', emailError);
      }
    }
    */
    // Option 2: Nodemailer (SMTP/Gmail) - Optional dependency
    // Note: Install with 'npm install nodemailer' if using SMTP
    // This is commented out to prevent build errors - uncomment when nodemailer is installed
    /*
    else if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
        
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: recipientEmail,
          subject: emailSubject,
          text: emailBody,
          html: emailBody.replace(/\n/g, '<br>'),
        });
        emailSent = true;
      } catch (emailError: any) {
        console.error('Nodemailer email error:', emailError);
      }
    }
    */
    // Option 3: SendGrid - Optional dependency
    // Note: Install with 'npm install @sendgrid/mail' if using SendGrid
    // This is commented out to prevent build errors - uncomment when @sendgrid/mail is installed
    /*
    else if (process.env.SENDGRID_API_KEY) {
      try {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        await sgMail.send({
          to: recipientEmail,
          from: process.env.SENDGRID_FROM_EMAIL || 'website@mmanico.com',
          subject: emailSubject,
          text: emailBody,
          html: emailBody.replace(/\n/g, '<br>'),
        });
        emailSent = true;
      } catch (emailError: any) {
        console.error('SendGrid email error:', emailError);
      }
    }
    */
    
    // Fallback: Log email details (for development/testing)
    if (!emailSent) {
      console.log('=== CONTACT ENQUIRY ===');
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(`Body:\n${emailBody}`);
      console.log('======================');
      console.log('⚠️  No email service configured. Please set up Resend, Nodemailer, or SendGrid.');
      console.log('See EMAIL_SETUP.md for configuration instructions.');
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Enquiry received successfully',
        emailSent: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}
