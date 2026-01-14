import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = process.env.APPOINTMENT_EMAIL || 'info@mmanico.com';
    const emailSubject = `New Appointment Booking Request - ${data.name}`;

    // Format email body
    const emailBody = `
New Appointment Booking Request

Client Information:
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service Required: ${data.serviceRequired || 'Not specified'}
Preferred Date: ${data.preferredDate || 'Not specified'}
Preferred Time: ${data.preferredTime || 'Not specified'}

Additional Message:
${data.message || 'No additional message provided'}

---
This appointment request was submitted through the M MANI & CO website.
Please confirm availability and respond to the client.

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    // Email service integration
    // Choose one of the following options and configure environment variables
    
    let emailSent = false;

    // Option 1: Resend (Recommended - Easiest setup)
    // Note: Install with 'npm install resend' if using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        // Dynamic import with error handling for missing module
        const resendModule = await import('resend').catch((err: any) => {
          if (err.code === 'MODULE_NOT_FOUND') {
            console.warn('Resend not installed. Install with: npm install resend');
            return null;
          }
          throw err;
        });
        
        if (resendModule) {
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
        }
      } catch (emailError: any) {
        if (emailError?.code === 'MODULE_NOT_FOUND' || emailError?.message?.includes('Cannot find module')) {
          console.warn('Resend not installed. Install with: npm install resend');
        } else {
          console.error('Resend email error:', emailError);
        }
      }
    }
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
      console.log('=== APPOINTMENT BOOKING REQUEST ===');
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(`Body:\n${emailBody}`);
      console.log('===================================');
      console.log('⚠️  No email service configured. Please set up Resend, Nodemailer, or SendGrid.');
      console.log('See EMAIL_SETUP.md for configuration instructions.');
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Appointment request received successfully',
        emailSent: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Appointment API error:', error);
    return NextResponse.json(
      { error: 'Failed to process appointment request' },
      { status: 500 }
    );
  }
}
