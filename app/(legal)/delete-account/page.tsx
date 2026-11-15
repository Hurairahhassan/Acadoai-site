import type { Metadata } from "next";
import { UserX } from "lucide-react";
import { LegalPage } from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Delete Account and Data Policy | AcadoAI",
  description:
    "Learn how AcadoAI users can request account deletion, personal data deletion, and deletion of user-created content while official school records are retained according to school policies and legal requirements.",
  alternates: { canonical: "/delete-account" },
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
      "When a verified user requests account deletion, AcadoAI will remove the user's access account and delete or anonymize eligible personal data associated with that account, subject to the retention rules explained on this page.",
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


export default function DeleteAccountPage() {
  return (
    <LegalPage
      path="/delete-account"
      crumb="Delete Account"
      eyebrow="Account & data deletion"
      title="Delete Account and Data Policy"
      lead="How AcadoAI users can request deletion of their account, personal data, and content they created, and why official school records may be retained."
      lastUpdated={lastUpdated}
      highlights={highlights}
      notice={{
        text: "For Google Play app listing purposes, the Delete Account URL and Delete Data URL may both point to this page: https://acadoai.com/delete-account.",
      }}
      sections={sections}
      contact={{
        title: "Submit a request",
        text: "Contact AcadoAI for account deletion, personal data deletion, user-created content deletion, or questions about retained school records.",
        href: "mailto:support@acadoai.com?subject=Delete%20My%20AcadoAI%20Account",
      }}
    >
      <div className="mt-10 rounded-3xl bg-paper p-6 ring-1 ring-line sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal text-white">
            <UserX className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="text-2xl font-semibold text-ink">How to request account or data deletion</h2>
            <p className="mt-2 leading-7 text-muted">
              Follow these steps to request deletion of your AcadoAI account, associated personal data, or selected user-created content.
            </p>
          </div>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {requestSteps.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-white p-5 ring-1 ring-line">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-sm font-semibold text-white">{i + 1}</span>
                <h3 className="font-semibold text-ink">{step.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </LegalPage>
  );
}
