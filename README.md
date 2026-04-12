# AcadoAI Site (Next.js)

This project now runs on Next.js with an EmailJS-based contact form.

## What happens on contact submit

1. Form submission is handled server-side in app/actions/contact.ts.
2. The form sends an email via EmailJS from the browser.

No separate backend repository is needed for email delivery.

## Setup

1. Install dependencies:

   npm install

2. Copy env template:

   copy .env.example .env.local

3. Fill values in .env.local:

   NEXT_PUBLIC_EMAILJS_SERVICE_ID
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

4. Run locally:

   npm run dev

## EmailJS notes

Create a template in EmailJS using variables:

first_name
last_name
user_email
institution_type
message
submitted_at

## Deploy

Deploy the same Next.js project to Vercel (or any Node-compatible host) and set the same environment variables there.
