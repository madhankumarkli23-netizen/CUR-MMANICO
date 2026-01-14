# Email Setup Guide for Appointment Booking

## Overview

The appointment booking system sends email notifications to **info@mmanico.com** when clients book appointments. You need to configure an email service to enable this functionality.

## Quick Setup Options

### Option 1: Resend (Recommended - Easiest)

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create a free account (100 emails/day free)

2. **Get API Key**
   - Go to API Keys section
   - Create a new API key
   - Copy the key

3. **Install Resend**
   ```bash
   npm install resend
   ```

4. **Configure Environment Variables**
   Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   APPOINTMENT_EMAIL=info@mmanico.com
   ```

5. **Update API Route**
   Uncomment the Resend code in `src/app/api/appointment/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   await resend.emails.send({
     from: 'website@mmanico.com', // Use your verified domain
     to: recipientEmail,
     subject: emailSubject,
     text: emailBody,
     html: emailBody.replace(/\n/g, '<br>'),
   });
   ```

---

### Option 2: Nodemailer (Gmail/SMTP)

1. **Install Nodemailer**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Configure Environment Variables**
   Add to `.env.local`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=website@mmanico.com
   APPOINTMENT_EMAIL=info@mmanico.com
   ```

   **For Gmail:**
   - Enable 2-factor authentication
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the app password as `SMTP_PASS`

3. **Update API Route**
   Uncomment the Nodemailer code in `src/app/api/appointment/route.ts`

---

### Option 3: SendGrid

1. **Sign up for SendGrid**
   - Go to [sendgrid.com](https://sendgrid.com)
   - Free tier: 100 emails/day

2. **Get API Key**
   - Go to Settings > API Keys
   - Create API Key with "Mail Send" permissions

3. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

4. **Configure Environment Variables**
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   APPOINTMENT_EMAIL=info@mmanico.com
   ```

5. **Update API Route**
   Add to `src/app/api/appointment/route.ts`:
   ```typescript
   import sgMail from '@sendgrid/mail';
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   await sgMail.send({
     to: recipientEmail,
     from: 'website@mmanico.com',
     subject: emailSubject,
     text: emailBody,
     html: emailBody.replace(/\n/g, '<br>'),
   });
   ```

---

## How It Works

1. **Client fills appointment form** → Clicks "Book Appointment" button
2. **Form submits** → Data sent to `/api/appointment`
3. **Email sent** → Notification sent to info@mmanico.com with:
   - Client name, email, phone
   - Service required
   - Preferred date & time
   - Additional message
4. **WhatsApp alert** → Formatted message opens in WhatsApp
5. **Confirmation** → Client sees success message

## Email Format

The email sent to info@mmanico.com will contain:

```
Subject: New Appointment Booking Request - [Client Name]

New Appointment Booking Request

Client Information:
-------------------
Name: [Client Name]
Email: [Client Email]
Phone: [Client Phone]
Service Required: [Service]
Preferred Date: [Date]
Preferred Time: [Time]

Additional Message:
[Message if provided]

---
This appointment request was submitted through the M MANI & CO website.
Please confirm availability and respond to the client.

Submitted at: [Timestamp]
```

## Testing

1. **Test locally:**
   - Fill out the appointment form
   - Check console logs (currently logs email details)
   - Check your email inbox

2. **Test in production:**
   - Deploy with environment variables configured
   - Submit a test appointment
   - Verify email delivery

## Troubleshooting

- **Emails not sending?**
  - Check environment variables are set correctly
  - Verify API keys are valid
  - Check email service logs/dashboard
  - Ensure domain is verified (for Resend/SendGrid)

- **WhatsApp not opening?**
  - Check `NEXT_PUBLIC_WHATSAPP_NUMBER` is set
  - Verify WhatsApp Web/App is installed

## Security Notes

- Never commit API keys to git
- Use environment variables for all sensitive data
- Verify email domain ownership
- Use HTTPS in production
- Consider rate limiting for API route

---

**Need Help?** Contact: info@mmanico.com
