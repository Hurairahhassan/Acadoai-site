import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | AcadoAI",
  description:
    "Read the Terms and Conditions for using AcadoAI's education management platform, website, and mobile applications.",
};

const lastUpdated = "July 26, 2026";

const sections = [
  {
    title: "1. Acceptance of These Terms",
    body: [
      "These Terms and Conditions govern access to and use of AcadoAI, including our website, dashboards, portals, mobile applications, AI tools, communication features, and related services. By accessing, registering for, downloading, or using AcadoAI, you confirm that you have read, understood, and agreed to these Terms.",
      "If you use AcadoAI on behalf of a school, college, academy, training center, company, or other organization, you represent that you have authority to accept these Terms for that organization. If you do not agree with these Terms, you must not use the services.",
    ],
  },
  {
    title: "2. Who May Use AcadoAI",
    body: [
      "AcadoAI is designed for educational institutions, administrators, teachers, staff, students, parents, and authorized partners. Student accounts and minor user accounts must be created, invited, or approved by an authorized institution, parent, guardian, or legally permitted representative.",
      "You may use AcadoAI only in compliance with applicable laws, education rules, institutional policies, and these Terms. You are responsible for ensuring that the information you provide is accurate, current, and complete.",
    ],
  },
  {
    title: "3. Institution and Administrator Responsibilities",
    body: [
      "Institutions and account administrators are responsible for configuring user roles, permissions, academic records, fee records, messaging groups, class structures, and access controls. Administrators must grant access only to users who are authorized to view or manage the relevant information.",
      "Institutions are responsible for obtaining any required notices, consents, approvals, or permissions from parents, guardians, students, staff, or other users before uploading, processing, or sharing their information through AcadoAI.",
    ],
  },
  {
    title: "4. Accounts, Passwords, and Security",
    body: [
      "Users are responsible for maintaining the confidentiality of their login credentials and for all activity that occurs under their accounts. You must notify your institution administrator or AcadoAI support immediately if you suspect unauthorized access, credential misuse, or a security incident.",
      "You must not share accounts, attempt to access another user's account, bypass permissions, probe the platform for vulnerabilities, or interfere with the operation of AcadoAI systems.",
    ],
  },
  {
    title: "5. Educational Records and User Content",
    body: [
      "Schools and authorized users may upload or create student records, attendance records, grades, assignments, fee details, staff records, messages, files, notes, reports, and other educational or operational content. As between AcadoAI and the institution, the institution retains responsibility for the accuracy, legality, and permitted use of that content.",
      "You grant AcadoAI a limited permission to host, process, transmit, display, and use submitted content only as needed to provide, secure, support, improve, and maintain the services, subject to applicable law and any written agreement with your institution.",
    ],
  },
  {
    title: "6. Privacy, Data Protection, and Retention",
    body: [
      "AcadoAI treats education data, personal data, and account information with care and uses administrative, technical, and organizational safeguards intended to protect confidentiality, integrity, and availability. Access to institutional data is controlled through role-based permissions and account settings.",
      "Personal data may be retained while an account, school subscription, or service relationship remains active, and for a reasonable period afterward where needed for backup, security, audit, dispute resolution, legal compliance, or legitimate administrative purposes. Users who need account deletion or correction should contact their institution administrator or AcadoAI support. Some anonymized, aggregated, or non-identifying information may be retained for analytics, service improvement, and reporting.",
    ],
  },
  {
    title: "7. AI Features and Educational Use",
    body: [
      "AcadoAI may include AI-powered features such as lesson planning, quiz generation, learning assistance, analytics, summaries, drafts, reports, and question-answer tools. AI outputs are generated from available inputs and patterns and may be incomplete, inaccurate, outdated, or unsuitable for a particular learner or curriculum.",
      "Teachers, administrators, and other qualified users must review AI outputs before relying on them for instruction, grading, academic decisions, financial decisions, disciplinary action, official notices, or legal compliance. AcadoAI does not replace professional judgment, institutional review, or human supervision.",
    ],
  },
  {
    title: "8. Acceptable Use",
    body: [
      "You agree not to use AcadoAI to upload, create, send, or distribute unlawful, harmful, abusive, harassing, defamatory, discriminatory, obscene, misleading, infringing, or unauthorized content. You must not use the services for spam, malware, phishing, scraping, credential harvesting, surveillance without authority, or any activity that violates the rights or safety of another person.",
      "You must not reverse engineer, copy, resell, sublicense, overload, disrupt, or attempt to gain unauthorized access to AcadoAI, its infrastructure, its source code, its models, its databases, or accounts belonging to other users or institutions.",
    ],
  },
  {
    title: "9. Communications and Notifications",
    body: [
      "AcadoAI may support in-app messages, email notifications, circulars, fee reminders, academic notices, parent communication, and administrative alerts. Institutions and users are responsible for ensuring messages are lawful, accurate, respectful, and sent only to appropriate recipients.",
      "Operational, security, billing, and account-related messages may be sent as part of the services. Marketing communications, where used, will be handled according to applicable consent and unsubscribe requirements.",
    ],
  },
  {
    title: "10. Fees, Trials, and Subscriptions",
    body: [
      "Certain AcadoAI services may be offered through paid subscriptions, free trials, pilots, custom deployments, or institution-level agreements. Pricing, billing cycles, cancellation rules, included features, implementation services, taxes, and renewal terms may be described in an order form, invoice, subscription screen, app store listing, or written agreement.",
      "If you purchase through Apple App Store, Google Play, or another marketplace, the marketplace's payment, refund, cancellation, and subscription rules may also apply. Unless required by law or a separate written agreement, fees already paid are not automatically refundable.",
    ],
  },
  {
    title: "11. Mobile Applications and App Stores",
    body: [
      "When you download or use an AcadoAI mobile application from an app store, you must also follow the app store's terms, device requirements, and usage rules. App store providers are not responsible for AcadoAI content, support, claims, maintenance, warranties, or data handling except as required by their own terms and applicable law.",
      "Some mobile features may require internet access, device permissions, notifications, camera access, file access, or other device capabilities. You can manage permissions through your device settings, though disabling permissions may limit functionality.",
    ],
  },
  {
    title: "12. Intellectual Property",
    body: [
      "AcadoAI, including its software, design, interface, logos, trademarks, workflows, documentation, text, graphics, and platform technology, is owned by AcadoAI or its licensors and is protected by intellectual property laws. These Terms do not transfer ownership of AcadoAI technology to any user or institution.",
      "Subject to these Terms and any applicable subscription or written agreement, AcadoAI grants authorized users a limited, revocable, non-exclusive, non-transferable right to access and use the services for permitted educational and administrative purposes.",
    ],
  },
  {
    title: "13. Third-Party Services",
    body: [
      "AcadoAI may integrate with third-party services such as email providers, calendar tools, payment processors, authentication providers, cloud hosting services, analytics tools, app stores, or AI providers. Third-party services may be governed by their own terms and privacy practices.",
      "AcadoAI is not responsible for third-party services that it does not control, but we aim to work with providers that support reliable, secure, and appropriate operation of the platform.",
    ],
  },
  {
    title: "14. Service Availability and Changes",
    body: [
      "We work to keep AcadoAI reliable and available, but we do not guarantee uninterrupted or error-free operation. Maintenance, updates, security work, internet failures, hosting issues, third-party outages, emergencies, or events beyond our reasonable control may affect availability.",
      "We may update, improve, suspend, replace, or discontinue features from time to time. Where practical, material changes affecting active institutional customers will be communicated through reasonable channels.",
    ],
  },
  {
    title: "15. Termination or Suspension",
    body: [
      "AcadoAI may suspend or terminate access if we reasonably believe that a user or institution has violated these Terms, created security risk, failed to pay applicable fees, misused the services, infringed rights, or acted in a way that may harm AcadoAI, users, institutions, students, staff, or the public.",
      "Institutions may request account closure according to their agreement or support process. Termination does not remove obligations that by their nature should survive, including payment obligations, confidentiality, intellectual property protections, disclaimers, liability limits, and dispute provisions.",
    ],
  },
  {
    title: "16. Disclaimers",
    body: [
      "AcadoAI is provided on an as-is and as-available basis to the maximum extent permitted by law. We do not promise that the services will meet every requirement, produce perfect results, prevent every error, or remain available at all times.",
      "Educational, administrative, financial, analytics, and AI-generated information should be reviewed by qualified users before action is taken. Users and institutions remain responsible for official records, academic decisions, compliance decisions, communications, and financial administration.",
    ],
  },
  {
    title: "17. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, AcadoAI will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, goodwill, data, use, or business opportunity arising from or related to the services.",
      "Where liability cannot be excluded, AcadoAI's total liability will be limited to the amount paid for the services giving rise to the claim during the period permitted by applicable law, unless a separate written agreement states otherwise.",
    ],
  },
  {
    title: "18. Indemnity",
    body: [
      "You agree to defend, indemnify, and hold harmless AcadoAI, its team, contractors, partners, and licensors from claims, losses, liabilities, damages, costs, and expenses arising from your misuse of the services, violation of these Terms, unauthorized content, infringement of rights, or breach of applicable law.",
    ],
  },
  {
    title: "19. Governing Terms and Conflicts",
    body: [
      "If an institution has a signed written agreement with AcadoAI, that agreement may include additional or different terms for the institution's subscription, deployment, privacy, support, or data processing. If there is a conflict between these public Terms and a signed written agreement, the signed written agreement controls for that institution.",
      "These Terms are intended to operate to the fullest extent allowed by applicable law. If any provision is found unenforceable, the remaining provisions will continue in effect.",
    ],
  },
  {
    title: "20. Changes to These Terms",
    body: [
      "We may update these Terms from time to time to reflect service changes, legal requirements, security practices, or operational needs. The updated version will be posted on this page with a revised last updated date. Continued use of AcadoAI after updates become effective means you accept the updated Terms.",
    ],
  },
  {
    title: "21. Contact Us",
    body: [
      "Questions about these Terms, account access, data requests, app store review, or legal notices can be sent to AcadoAI at info@acadoai.com or support@acadoai.com. Please include your name, institution, contact information, and a clear description of your request so we can respond appropriately.",
    ],
  },
];

const highlights = [
  "Applies to the website, web dashboard, institution portals, and mobile apps.",
  "Written for schools, teachers, parents, students, and administrators.",
  "Includes AI content, data retention, acceptable use, subscriptions, and app store terms.",
];

export default function TermsAndConditionsPage() {
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
                Legal Information
              </span>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Terms and Conditions
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Please read these Terms carefully before using AcadoAI. They
                explain the rules for accessing our education management
                platform, AI tools, portals, website, and mobile applications.
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
                      href={`#${section.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}`}
                      className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      {section.title.replace(/^\d+\.\s*/, "")}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-8">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
                These Terms are provided for product and app store publication
                purposes and should be reviewed by a qualified legal
                professional for your company, jurisdiction, and final business
                policies.
              </div>

              {sections.map((section) => {
                const id = section.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");

                return (
                  <article
                    key={section.title}
                    id={id}
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
                );
              })}

              <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-black">Need Help?</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Contact AcadoAI for account, app store, data, or legal
                      questions.
                    </p>
                  </div>
                  <a
                    href="mailto:support@acadoai.com"
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
