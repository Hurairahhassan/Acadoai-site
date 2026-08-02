import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  ExternalLink,
  FileLock2,
  Mail,
  ShieldCheck,
  Trash2,
  UserX,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Account and Data Policy | AcadoAI",
  description:
    "Learn how AcadoAI users can request account deletion, personal data deletion, and deletion of user-created content while official school records are retained according to school policies and legal requirements.",
};

const lastUpdated = "August 2, 2026";

const requestSteps = [
  {
    title: "Send Your Request",
    body: "Email support@acadoai.com from the email address connected to your AcadoAI account. Use the subject line 'Delete My AcadoAI Account' or 'Delete My AcadoAI Data'.",
  },
  {
    title: "Include Account Details",
    body: "Please include your full name, registered email address, phone number if used, institution or school name, user role, and whether you want full account deletion or deletion of specific personal data/content.",
  },
  {
    title: "Verification",
    body: "We may ask for reasonable verification before processing the request so that account or data changes are made only for the correct user.",
  },
  {
    title: "Processing",
    body: "After verification, eligible personal data and user-created content will be deleted, anonymized, or made inaccessible within a reasonable processing period, usually within 30 days unless a longer period is required for security, backup recovery, legal, or institutional reasons.",
  },
];

const dataDeleted = [
  "AcadoAI account profile information, such as name, registered email, phone number, profile photo, and account preferences.",
  "Login credentials, authentication tokens, device identifiers used for push notifications, and app session data linked only to the user account.",
  "Personal support requests, optional profile details, and other personal information directly provided by the user, where deletion is legally and operationally permitted.",
  "Content the user personally created or uploaded within the app, such as personal notes, files, comments, drafts, or uploads, where that content is not required as an official school record.",
];

const dataRetained = [
  "Academic records, attendance, examination results, fee records, certificates, progress history, and other official school records created or maintained by the school administration.",
  "Records that the school is required or permitted to keep under its own policies, education rules, accounting requirements, audit obligations, dispute handling, or applicable law.",
  "Security logs, fraud-prevention records, backup copies, billing records, or legal compliance records that must be retained for a limited period.",
  "Anonymized, aggregated, or de-identified information that no longer identifies a specific user and is used for analytics, reporting, service reliability, or product improvement.",
];

const sections = [
  {
    title: "1. Overview",
    body: [
      "Users can request deletion of their AcadoAI account and associated personal data.",
      "Users may also delete content they personally created or uploaded within the app.",
      "Academic records, attendance, examination results, fee records, and other official school records created or maintained by the school administration are not deleted upon user request, as they are institutional records and may be retained according to the school's policies or applicable legal requirements.",
      "This page may be used as both the Delete Account URL and Delete Data URL for AcadoAI because it explains account deletion, partial data deletion, data retained by schools, and the request process.",
    ],
  },
  {
    title: "2. Account Deletion",
    body: [
      "When a verified user requests account deletion, AcadoAI will remove or disable the user's access account and delete or anonymize eligible personal data associated with that account, subject to the retention rules explained on this page.",
      "If the account is managed by a school, academy, or other institution, the institution may need to confirm the account status or preserve official records. Account deletion removes personal access to AcadoAI but does not erase official school records that belong to the institution.",
    ],
  },
  {
    title: "3. Partial Data Deletion",
    body: [
      "Users may request deletion of specific personal data without deleting the full account. For example, a user may request deletion of optional profile details, uploaded files, personal notes, or other content they personally created in the app.",
      "If requested data is part of an official school record, AcadoAI may be unable to delete it directly. In that case, the user should contact the school administration because the school controls official academic, attendance, examination, and fee records.",
    ],
  },
  {
    title: "4. Data We Delete or Anonymize",
    body: dataDeleted,
  },
  {
    title: "5. Data We Retain",
    body: dataRetained,
  },
  {
    title: "6. Retention Period",
    body: [
      "Eligible account and personal data deletion requests are normally processed within 30 days after verification. Some information may remain in encrypted backups or system logs for a limited period before automatic removal through normal backup rotation.",
      "Official school records may be retained for as long as required by the school, school policy, accounting requirements, education rules, audit needs, legal obligations, or legitimate institutional purposes.",
    ],
  },
  {
    title: "7. School-Managed Accounts",
    body: [
      "AcadoAI is an education management platform used by schools, administrators, teachers, parents, and students. Many records inside the platform are created or maintained by the school rather than by AcadoAI or the individual user.",
      "For school-managed accounts, AcadoAI may coordinate with the relevant school administrator before deleting, disabling, correcting, or exporting data. This protects students, parents, teachers, and institutions from accidental deletion of official records.",
    ],
  },
  {
    title: "8. Contact for Requests",
    body: [
      "To request account deletion or data deletion, email support@acadoai.com or info@acadoai.com. Please use the email address connected to your AcadoAI account whenever possible.",
      "If you are a student or parent using an account provided by a school, you may also contact your school administrator for help with official records, corrections, or institution-controlled data.",
    ],
  },
];

const highlights = [
  "Personal account data can be deleted or anonymized after verification.",
  "User-created uploads and content can be deleted when they are not official records.",
  "Official school records are retained according to school policies and legal requirements.",
];

const makeSectionId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function DeleteAccountPage() {
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
                <Trash2 className="h-4 w-4" />
                Account and Data Deletion
              </span>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Delete Account and Data Policy
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                This page explains how AcadoAI users can request deletion of
                their account, personal data, and content they created or
                uploaded, and why official school records may be retained.
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
                For Google Play app listing purposes, the Delete Account URL
                and Delete Data URL may both point to this page:
                https://acadoai.com/delete-account.
              </div>

              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <UserX className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black leading-tight text-slate-950">
                      How to Request Account or Data Deletion
                    </h2>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      Follow these steps to request deletion of your AcadoAI
                      account, associated personal data, or selected
                      user-created content.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {requestSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                          {index + 1}
                        </span>
                        <h3 className="text-base font-black text-slate-950">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {sections.map((section) => {
                const id = makeSectionId(section.title);
                const isDeleteSection = section.title.includes("Delete");
                const isRetainSection = section.title.includes("Retain");

                return (
                  <article
                    key={section.title}
                    id={id}
                    className="scroll-mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                        {isRetainSection ? (
                          <FileLock2 className="h-5 w-5" />
                        ) : isDeleteSection ? (
                          <Database className="h-5 w-5" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5" />
                        )}
                      </div>
                      <div className="min-w-0">
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
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-black">Submit a Request</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Contact AcadoAI for account deletion, personal data
                      deletion, user-created content deletion, or questions
                      about retained school records.
                    </p>
                  </div>
                  <a
                    href="mailto:support@acadoai.com?subject=Delete%20My%20AcadoAI%20Account"
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
