import type { Metadata } from "next";
import {
  ArrowLeft,
  Database,
  ExternalLink,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AcadoAI",
  description:
    "AcadoAI Privacy Policy: how we access, collect, use, share, retain, and protect information for our education management platform, website, and mobile applications.",
  alternates: {
    canonical: "https://acadoai.com/privacy-policy",
  },
};

const lastUpdated = "October 3, 2026";

const sections = [
  {
    title: "1. Scope and Who We Are",
    body: [
      "This Privacy Policy applies to AcadoAI, including the AcadoAI website, web dashboard, institution portals, mobile applications, AI-powered features, communications, support channels, and related services (collectively, the Services). It explains how AcadoAI accesses, collects, uses, shares, retains, and protects user and device information.",
      "AcadoAI is the developer and service provider identified in this policy. Schools, academies, colleges, training centers, and other institutions that use AcadoAI may decide what information is entered into the Services and which users may access it. In those cases, the institution is responsible for its own notices, permissions, and instructions for the information it controls.",
    ],
  },
  {
    title: "2. Information We Access or Collect",
    body: [
      "Account and profile information: name, email address, phone number where provided, institution name, user role, profile photo where provided, login credentials, account settings, and authentication or session information.",
      "Education and institution information: student, parent, guardian, teacher, staff, administrator, and authorized-user information; admissions details; class, attendance, assignment, grade, examination, certificate, timetable, academic-progress, and school-record information entered by an institution or authorized user.",
      "Financial and operational information: fee status, invoices, payment-related records, staff or institution operational records, and other information entered to manage an institution. AcadoAI does not publish financial or government-identification information.",
      "Communications and content: messages, notices, support requests, contact-form submissions, files, notes, assignments, reports, feedback, and other content that users or institutions submit. When an AI feature is used, we may process the prompt, selected source material, and generated output needed to provide that feature.",
      "Device and technical information: IP address, browser or app version, device and operating-system information, log data, security events, diagnostics, and notification-device tokens when notifications are enabled. This information helps us secure, operate, troubleshoot, and improve the Services.",
      "Optional device permissions and uploads: a mobile feature may request access to a camera, files, notifications, or similar device capability only when needed for the feature you choose to use. We process the resulting photo, file, notification token, or other content only to provide that requested feature. AcadoAI does not use precise location, contacts, SMS, call logs, or microphone data unless a future feature clearly asks for the relevant permission and provides the required notice and consent.",
    ],
  },
  {
    title: "3. How We Use Information",
    body: [
      "We use information to create and administer accounts; authenticate users; provide school administration, teaching, learning, finance, reporting, communication, and AI features; respond to support requests; process user-selected uploads; and deliver requested notifications.",
      "We also use information to protect accounts and systems, prevent fraud and misuse, maintain backups, diagnose technical issues, meet legal obligations, enforce our agreements, and improve service reliability. We use aggregated or de-identified information for analytics and product improvement where permitted by law.",
      "We do not sell personal or sensitive user data. We do not use education records, account information, or AI prompts for targeted advertising.",
    ],
  },
  {
    title: "4. How Information Is Shared",
    body: [
      "Information is shared with the school or institution that manages the account and with users the institution authorizes through role-based access controls. For example, a teacher, parent, student, administrator, or finance user may see information relevant to their permitted role.",
      "We may share information with service providers that help us operate the Services, such as cloud hosting, secure infrastructure, email and notification delivery, customer support, authentication, payment processing where applicable, analytics, and AI service providers. These providers may process information only on our instructions and for the purpose of providing their services to AcadoAI, subject to appropriate contractual, technical, or organizational safeguards.",
      "We may disclose information where required to comply with applicable law, a valid legal request, to protect the security or rights of users and AcadoAI, or as part of a business transaction such as a merger or acquisition with legally required notice. We do not share personal or sensitive user data with third parties in exchange for money.",
    ],
  },
  {
    title: "5. AI-Powered Features",
    body: [
      "AcadoAI may provide AI features for lesson planning, quiz and assignment generation, learning support, summaries, reports, analytics, and question answering. When an authorized user uses an AI feature, the information entered into that feature is processed to generate the requested result and maintain, secure, and support that feature.",
      "Users and institutions must avoid entering information they are not authorized to share. Authorized staff must review AI-generated output before relying on it for grading, academic decisions, discipline, finance, official records, or other high-impact decisions. AI-generated output may be incomplete or inaccurate.",
    ],
  },
  {
    title: "6. Security",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards designed to protect personal and sensitive information. These measures include access controls, role-based permissions, authentication protections, secure transmission using HTTPS, restricted operational access, monitoring, and institution-level data separation where supported by the service configuration.",
      "No method of transmission or storage is completely secure. Users must protect their login credentials and promptly notify AcadoAI or their institution administrator if they suspect unauthorized account access.",
    ],
  },
  {
    title: "7. Data Retention and Deletion",
    body: [
      "We retain personal information while an account, institution subscription, or service relationship is active and afterward only as needed for the purposes described in this policy, including backup rotation, security, audit, dispute resolution, legal compliance, and legitimate institutional administration.",
      "Users can request deletion of their AcadoAI account or eligible personal data through our public Delete Account and Data page at https://acadoai.com/delete-account. Verified requests are normally processed within 30 days. When an account is deleted, we delete or anonymize the account information and eligible user-created content associated with it, subject to the limited retention described in this policy.",
      "Official academic, attendance, examination, fee, certificate, and other school records may be retained when the institution controls those records or is required or permitted to retain them by school policy, education rules, accounting requirements, audit needs, dispute handling, or applicable law. For full details, see the Delete Account and Data page.",
    ],
  },
  {
    title: "8. Children, Students, and School-Managed Accounts",
    body: [
      "AcadoAI is designed for educational institutions and may be used by students, including minors, when an institution, parent, guardian, or other legally authorized representative creates, invites, approves, or manages the account. Institutions are responsible for obtaining any notices, permissions, or consents required for the information they submit or manage through the Services.",
      "A student or parent/guardian may contact the relevant institution administrator or AcadoAI at the contact details below to request access, correction, deletion, or help with personal information, subject to applicable law and the institution's control of official records.",
    ],
  },
  {
    title: "9. Your Choices and Permissions",
    body: [
      "You can update certain account information through your institution administrator or account settings where available. You may manage device permissions, including notifications, camera, and files, through your device settings. Turning off a permission may limit a related feature.",
      "Where consent is required for a personal or sensitive data permission, AcadoAI will provide an in-app disclosure explaining the data, purpose, and sharing before requesting consent or the relevant device permission. A privacy policy does not replace any required in-app disclosure or consent.",
    ],
  },
  {
    title: "10. International Transfers",
    body: [
      "AcadoAI and our service providers may process information in countries other than the country where you live. Where required, we use appropriate safeguards for international data transfers and process information in accordance with applicable privacy and data-protection laws.",
    ],
  },
  {
    title: "11. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy to reflect changes in our Services, data practices, legal requirements, or security practices. We will post the updated policy on this page and revise the Last updated date. Material changes may also be communicated through the Services or other reasonable channels when required.",
    ],
  },
  {
    title: "12. Contact Us",
    body: [
      "For privacy questions, data requests, account deletion, or concerns about this Privacy Policy, contact AcadoAI at support@acadoai.com or info@acadoai.com. Please include your name, institution, account email, and a clear description of your request so we can respond appropriately.",
    ],
  },
];

const highlights = [
  "Explains data access, collection, use, and sharing across the app and website.",
  "Identifies AcadoAI, its privacy contacts, and school-managed account roles.",
  "Links to a public account and data deletion process.",
];

const makeSectionId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <header className="border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 items-center">
            <img
              src="/images/acado-edu-sys.svg"
              alt="AcadoAI Education Management"
              className="h-12 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[220px]"
            />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.34),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(16,185,129,0.2),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
                <FileText className="h-4 w-4" />
                AcadoAI Legal Information
              </span>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                This Privacy Policy explains how AcadoAI handles user and
                device information for our education management platform,
                website, and mobile applications.
              </p>
              <p className="mt-5 text-sm font-bold text-blue-100">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-10">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <ShieldCheck className="mb-3 h-5 w-5 text-blue-700" />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-black uppercase text-slate-500">
                  On This Page
                </h2>
                <nav className="mt-4 space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.title}
                      href={`#${makeSectionId(section.title)}`}
                      className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-8">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-950">
                This is AcadoAI&apos;s public Privacy Policy. For Google Play,
                use this exact URL in the Privacy policy field:
                {" "}
                <span className="font-bold">
                  https://acadoai.com/privacy-policy
                </span>
              </div>

              {sections.map((section) => (
                <article
                  key={section.title}
                  id={makeSectionId(section.title)}
                  className="scroll-mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <h2 className="text-2xl font-black leading-tight text-slate-950">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}

              <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-black">Privacy Contact</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Send privacy, account, data, or app-store questions to
                      AcadoAI support.
                    </p>
                  </div>
                  <a
                    href="mailto:support@acadoai.com?subject=AcadoAI%20Privacy%20Request"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                  >
                    <Mail className="h-4 w-4" />
                    support@acadoai.com
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
