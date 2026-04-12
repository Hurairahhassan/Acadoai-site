# AcadoAI Site (Next.js)

This project now runs on Next.js with a Server Action based contact form.

## What happens on contact submit

1. Form submission is handled server-side in app/actions/contact.ts.
2. Data is appended to your Google Sheet.
3. A notification email is sent using Nodemailer.

No separate backend repository is needed. The server code runs inside your Next.js app.

## Setup

1. Install dependencies:

   npm install

2. Copy env template:

   copy .env.example .env.local

3. Fill values in .env.local:

   GOOGLE_SERVICE_ACCOUNT_EMAIL
   GOOGLE_PRIVATE_KEY
   GOOGLE_SHEET_ID
   GOOGLE_SHEET_RANGE (optional, default Sheet1!A:G)
   SMTP_HOST
   SMTP_PORT
   SMTP_SECURE
   SMTP_USER
   SMTP_PASS
   CONTACT_RECEIVER_EMAIL
   CONTACT_SENDER_EMAIL (optional)

4. Run locally:

   npm run dev

## Google Sheets requirements

1. Create a Google Cloud service account.
2. Enable Google Sheets API.
3. Share your target sheet with the service account email as Editor.
4. Use the spreadsheet id from the sheet URL as GOOGLE_SHEET_ID.

## SMTP notes

For Gmail SMTP, use an app password (not your normal account password).

## Deploy

Deploy the same Next.js project to Vercel (or any Node-compatible host) and set the same environment variables there.
