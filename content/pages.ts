// Single source of truth for site copy, SEO metadata and page data.
// Product facts follow ACADOAI_PRODUCT_FUNCTIONALITY_RBAC_MARKETING.md — keep claims inside what that reference verifies.
// Screenshots: drop files at the `screen` paths under /public and they replace the illustrations automatically.
// Translations live in content/locales/*.ts and override text only; see getContent() at the bottom.

import type { Locale } from "./i18n";
import ar from "./locales/ar";
import es from "./locales/es";
import ur from "./locales/ur";

export const site = {
  name: "AcadoAI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.acadoai.com").replace(/\/$/, ""),
  // Title and description live in ui.meta so they can be translated.
  keywords: [
    "education management software",
    "education ERP",
    "school management software",
    "AI school management system",
    "student information system",
    "fee challan software",
    "attendance management system",
    "exam and result management",
    "AI teaching tools",
    "AI tutor for students",
  ],
  demoUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/acadoai/acadoa-demo",
  email: "info@acadoai.com",
  supportEmail: "support@acadoai.com",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.acadoai.acadoai_mobile",
  appStoreUrl: "https://apps.apple.com/us/app/acadoai/id6801887949",
  phone: "+92 313 1204236",
  phoneHref: "tel:+923131204236",
  // Comma-separated profile URLs, e.g. https://www.linkedin.com/company/acadoai
  socials: [
    "https://www.linkedin.com/company/acadoai-ems/",
    "https://www.facebook.com/profile.php?id=61590438433278",
    "https://www.instagram.com/acadoaiems/",
  ],
};

export const isExternal = (href: string) => href.startsWith("http");

// Customer numbers: shown only when NEXT_PUBLIC_SHOW_STATS=true and the values are verified.
const stats = [
  { value: process.env.NEXT_PUBLIC_STATS_1_VALUE ?? "", label: "Institutions onboarded" },
  { value: process.env.NEXT_PUBLIC_STATS_2_VALUE ?? "", label: "Students managed" },
  { value: process.env.NEXT_PUBLIC_STATS_4_VALUE ?? "", label: "Countries" },
];
export const showStats = process.env.NEXT_PUBLIC_SHOW_STATS === "true";

// Product facts (verified in the product reference), safe to publish.
const productFacts = [
  { value: "26", label: "Admin modules you can delegate, one by one" },
  { value: "6", label: "Question types for online and paper tests" },
  { value: "8+", label: "Subject-specific AI assistants for students" },
  { value: "3", label: "AI workspaces: leaders, teachers, students" },
];

export type IconName =
  | "database"
  | "server"
  | "key"
  | "lock"
  | "users"
  | "calendar"
  | "check"
  | "wallet"
  | "award"
  | "zap"
  | "sparkles"
  | "bot"
  | "message"
  | "briefcase"
  | "chart"
  | "shield"
  | "phone"
  | "school"
  | "building"
  | "graduation"
  | "book";

export type MockName =
  | "dashboard"
  | "profile"
  | "timetable"
  | "attendance"
  | "challan"
  | "result"
  | "alerts"
  | "lesson"
  | "tutor"
  | "askdata"
  | "chat"
  | "salary"
  | "permissions"
  | "phone"
  | "flashcards";

export type Feature = {
  slug: string;
  name: string;
  icon: IconName;
  mock: MockName;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  screen: string;
  benefits: { title: string; text: string }[];
  capabilities: string[];
};

export const features: Feature[] = [
  {
    slug: "student-information-system",
    name: "Students & Staff",
    icon: "users",
    mock: "profile",
    summary: "Admissions, profiles, imports and staff records in one place.",
    seoTitle: "Student Information System & Staff Records",
    seoDescription:
      "Keep student admissions, profiles, guardians, employee records and class assignments organised in AcadoAI's student information system, with CSV import and role-based access.",
    h1: "Every student and staff record, organised and connected",
    intro:
      "Create admissions, import students and staff in bulk, and keep identity, academic, family and employment details on one profile that the right people can see.",
    screen: "/images/screens/student-information.png",
    benefits: [
      { title: "Admissions and profiles", text: "Registration, class, section, personal, guardian and academic details captured once and reused everywhere." },
      { title: "Bulk import", text: "Download a CSV template, validate rows and create hundreds of student or employee accounts in one go." },
      { title: "Staff for every role", text: "Teachers, coordinators, principals, management staff, accountants and other staff, each with the right workspace." },
      { title: "Safe changes", text: "Typed confirmations for deletion, active/inactive status and sibling-friendly admission validation." },
    ],
    capabilities: [
      "Searchable student and employee directories",
      "Bulk student and employee CSV import",
      "Guardian, family and contact information",
      "Credential export for authorised admins",
      "Active / inactive status management",
      "Profile photos with cropping",
      "Siblings can share a phone number",
      "Typed confirmation before deletion",
    ],
  },
  {
    slug: "classes-timetables",
    name: "Classes & Timetables",
    icon: "calendar",
    mock: "timetable",
    summary: "Classes, sections, subjects, rooms and weekly schedules.",
    seoTitle: "Class, Section & Timetable Management",
    seoDescription:
      "Organise classes, sections, subjects, classrooms, teachers and weekly timetables with substitute management and teacher availability lookup in AcadoAI.",
    h1: "Build your timetable around how your institution really works",
    intro:
      "Set up classes, sections, subjects and rooms, assign teachers and coordinators, and publish a weekly timetable that updates every teacher and student workspace.",
    screen: "/images/screens/timetable.png",
    benefits: [
      { title: "Classes and sections", text: "Create classes and sections, assign coordinators and move students between sections." },
      { title: "Subjects and teachers", text: "Assign teachers to subjects per section, and the courses flow into teacher and student views." },
      { title: "Timetables", text: "Generate a starting template, add periods, rooms and teachers, and edit slots any time." },
      { title: "Substitutes", text: "Look up available teachers and add a substitute to any slot in seconds." },
    ],
    capabilities: [
      "Class and section management",
      "Section coordinator assignment",
      "Physical classroom capacity and facilities",
      "Automatic timetable template",
      "Teacher availability lookup",
      "Substitute teacher management",
      "Section workspace with materials tab",
      "Timetables in teacher and student apps",
    ],
  },
  {
    slug: "attendance-management",
    name: "Attendance & ID Cards",
    icon: "check",
    mock: "attendance",
    summary: "Bulk marking, QR ID cards, timing rules and automatic absences.",
    seoTitle: "Attendance Management System with QR ID Cards",
    seoDescription:
      "Mark student and staff attendance in bulk, scan QR ID cards, apply check-in timing rules and automatically mark absences with AcadoAI's attendance management system.",
    h1: "Attendance that marks itself, and tells you who is missing",
    intro:
      "Teachers mark a class in a few taps, ID cards can be scanned at the gate, timing rules decide present or late, and unrecorded students are marked absent automatically.",
    screen: "/images/screens/attendance.png",
    benefits: [
      { title: "Bulk marking", text: "Present, absent, late or leave for the whole roster, with validation so no student is left unmarked." },
      { title: "QR ID cards", text: "Generate student and employee ID cards and record attendance from a scan." },
      { title: "Timing rules", text: "Check-in windows decide present, late and absent consistently across the institution." },
      { title: "Automatic absences", text: "Students not recorded after the attendance window are marked absent without manual work." },
    ],
    capabilities: [
      "Student and employee daily attendance",
      "Student and employee ID card generation",
      "Attendance machine / scanner workspace",
      "QR or manual identity scanning",
      "Configurable check-in timing rules",
      "Automatic absence marking",
      "Date-range reports and export data",
      "Personal attendance history for every user",
    ],
  },
  {
    slug: "fee-management",
    name: "Fees & Finance",
    icon: "wallet",
    mock: "challan",
    summary: "Automated challans, partial payments, receipts and reports.",
    seoTitle: "Fee Challan & Finance Management Software",
    seoDescription:
      "Automate fee challans, collect partial and multi-month payments, review payment proof, verify receipts by QR code and report revenue, expenses and salaries with AcadoAI.",
    h1: "Fee challans that generate themselves, and a ledger you can trust",
    intro:
      "Set a billing policy once and challans are issued automatically every cycle. Collect partial or multi-month payments, review proof, print verifiable receipts and see every balance in real time.",
    screen: "/images/screens/fee-management.png",
    benefits: [
      { title: "Automatic billing", text: "Monthly billing with issue and due days, class fee structures, a preview before activation and per-student exceptions." },
      { title: "Flexible collection", text: "Partial and line-item payments, multi-month and advance collection in one transaction." },
      { title: "Verifiable receipts", text: "Every receipt carries a QR code and a 5-digit code that confirms its current payment status." },
      { title: "Controlled corrections", text: "Reasoned adjustments, reversals and approval-queued corrections, all with an audit trail." },
    ],
    capabilities: [
      "Automatic fee challan generation",
      "Billing preview before activation",
      "Missing challan detection",
      "Discounts, late fees and fee lines",
      "Student payment-proof review",
      "QR receipt verification on mobile",
      "Payment reversals and audited corrections",
      "Expenses with OCR receipt extraction",
      "Revenue, expense, salary and cash-flow reports",
    ],
  },
  {
    slug: "exams-gradebook",
    name: "Exams & Results",
    icon: "award",
    mock: "result",
    summary: "Tests, exam planning, weighted results and report cards.",
    seoTitle: "Exam Management, Gradebook & Result Cards",
    seoDescription:
      "Create online and paper tests, plan exams and date sheets, configure grading and weightage, approve marks and generate term and annual result cards with AcadoAI.",
    h1: "From test paper to annual result card, in one workflow",
    intro:
      "Build tests with six question types, plan exams and date sheets, enter marks, run the approval queue and generate term and annual result cards with your own grading rules.",
    screen: "/images/screens/exams-gradebook.png",
    benefits: [
      { title: "Tests your way", text: "Online or paper tests with MCQ, true/false, fill-in-the-blank, short, long and matching questions, written manually or with AI." },
      { title: "Exam planning", text: "Exam sessions, subject papers, rooms, invigilators and printable date sheets." },
      { title: "Your grading rules", text: "Result profiles with term and annual weightage, assessment components and grade boundaries." },
      { title: "Approved results", text: "A result approval queue before term and annual cards and class reports are generated." },
    ],
    capabilities: [
      "Online and paper tests",
      "AI question generation",
      "Answer-level review and remarks",
      "Exam planner and date sheets",
      "Exam duties for invigilators",
      "Result profiles, weightage and grade boundaries",
      "Result approval queue",
      "Term and annual result cards",
      "Class result reports with rankings",
    ],
  },
  {
    slug: "automation-alerts",
    name: "Automation & Alerts",
    icon: "zap",
    mock: "alerts",
    summary: "Auto challans and attendance, plus alerts for students who need attention.",
    seoTitle: "Education Automation: Fee Challans, Attendance & Student Alerts",
    seoDescription:
      "AcadoAI automates fee challans and attendance, tracks student performance, identifies students who need attention and alerts admins, teachers and parents.",
    h1: "Let the routine run itself. Get told what needs you.",
    intro:
      "AcadoAI generates fee challans on schedule, marks absences after the attendance window, tracks every student's performance and flags the ones who need attention to admins, teachers and parents.",
    screen: "/images/screens/alerts.png",
    benefits: [
      { title: "Fee challan automation", text: "Challans are issued on the configured day for every class fee structure, with due dates, late fees and exceptions applied." },
      { title: "Attendance automation", text: "QR scans and timing rules record attendance, and unmarked students are marked absent automatically." },
      { title: "Students who need attention", text: "Weak results, falling attendance and incomplete work surface students who need help before term ends." },
      { title: "Alerts to the right people", text: "Admins, teachers and parents are alerted based on each student's performance, along with assignment and test reminders." },
    ],
    capabilities: [
      "Scheduled fee challan generation",
      "Run billing now, on demand",
      "Automatic absence marking",
      "Students-needing-attention list for teachers",
      "Performance-based alerts to admins, teachers and parents",
      "Assignment and test reminders",
      "Push and in-app notifications",
      "Overdue fee visibility by class",
    ],
  },
  {
    slug: "ai-teaching-tools",
    name: "AI Teaching Tools",
    icon: "sparkles",
    mock: "lesson",
    summary: "Lesson plans, assignments, quizzes and slide decks in seconds.",
    seoTitle: "AI Teaching Tools: Lesson Plans, Assignments, Quizzes & Slides",
    seoDescription:
      "Teachers draft lesson plans, assignments with rubrics, quizzes, oral quizzes, infographics and editable presentations with AcadoAI's AI teaching assistant and NoteBookLM.",
    h1: "Prepare tomorrow's lesson in the time it takes to make tea",
    intro:
      "Generate lesson plans, assignments, quizzes and presentations from a topic, then edit them before they reach students. NoteBookLM turns your own documents into summaries, flashcards, quizzes, mind maps and audio.",
    screen: "/images/screens/ai-teaching-tools.png",
    benefits: [
      { title: "Presentations", text: "Classroom decks from class, subject, topic and style, with a full slide editor, teacher notes and export." },
      { title: "Assignments and quizzes", text: "Complete assignments with answer keys, explanations and grading rubrics, plus AI oral quizzes per topic." },
      { title: "Lesson plans and lecture help", text: "Objectives, materials, timed activities and a lecture assistant that reads your files." },
      { title: "NoteBookLM", text: "Upload a document and get grounded chat, summaries, flashcards, quizzes, mind maps and audio overviews." },
    ],
    capabilities: [
      "AI presentation generator and slide editor",
      "AI assignments with rubrics and answer keys",
      "AI lesson plan generator",
      "Lecture assistant with file context",
      "AI oral quiz per topic",
      "Infographics from documents",
      "Document-grounded NoteBookLM",
      "Usage budgets set by the institution",
    ],
  },
  {
    slug: "ai-tutor",
    name: "AI Tutor & Study Tools",
    icon: "bot",
    mock: "tutor",
    summary: "Learning chat, subject assistants and a 3D voice tutor.",
    seoTitle: "AI Tutor for Students: Subject Assistants & 3D Voice Tutor",
    seoDescription:
      "Students learn with AcadoAI's learning instructor, subject-specific AI assistants, document study tools and a 3D voice tutor with an interactive board, in English and Urdu.",
    h1: "A patient tutor for every student, at any hour",
    intro:
      "Students ask questions by text or voice, get subject-specific help, turn notes into study material and learn with a 3D tutor that talks and draws on a visual board.",
    screen: "/images/screens/ai-tutor.png",
    benefits: [
      { title: "Learning instructor", text: "Guided explanations with voice input, read-aloud answers, file context and maths rendering." },
      { title: "Subject assistants", text: "Mathematics, Physics, Chemistry, Biology, English, Urdu, Computer Science and Pakistan Studies, limited to the student's own subjects." },
      { title: "3D voice tutor", text: "Animated tutors Sara and James, hold-to-talk voice, English or everyday Urdu, screen sharing and a visual teaching board." },
      { title: "Study tools", text: "Summaries, flashcards, quizzes, mind maps and audio overviews from the student's own documents." },
    ],
    capabilities: [
      "Ask AI learning instructor",
      "Voice input and read-aloud answers",
      "Subject-specific AI assistants",
      "3D tutor with Sara and James avatars",
      "Interactive board: equations, graphs, diagrams",
      "Step-by-step verified maths",
      "Student NoteBookLM study tools",
      "Monthly AI allowance per role",
    ],
  },
  {
    slug: "reports-analytics",
    name: "Ask Your Data",
    icon: "chart",
    mock: "askdata",
    summary: "Ask questions in plain language, get tables, charts and PDFs.",
    seoTitle: "Ask Your Data: AI Reports & Analytics for Education Leaders",
    seoDescription:
      "Leaders ask questions about their institution's data in plain language and get answers, tables, charts, CSV exports and PDF reports, alongside live dashboards in AcadoAI.",
    h1: "Ask your institution a question. Get the answer.",
    intro:
      "Admins and authorised principals ask about attendance, fees, salaries, expenses and students in plain language, by text or voice, and get tables, charts and downloadable reports.",
    screen: "/images/screens/admin-dashboard.png",
    benefits: [
      { title: "Plain-language questions", text: "\"Show outstanding fees by class for this month\" returns the answer, not a ticket for IT." },
      { title: "Tables, charts and PDFs", text: "Answers include tables and charts, export to CSV and become PDF reports you can edit." },
      { title: "Live dashboard", text: "Students, staff, revenue, dues by class, attendance, admissions and top performers at a glance." },
      { title: "Scoped and governed", text: "Answers use only your organisation's data, with AI budgets and model controls." },
    ],
    capabilities: [
      "Natural-language data questions",
      "Voice input",
      "Table and chart answers",
      "CSV export and PDF reports",
      "Saved conversation history",
      "One-click navigation to the right page",
      "Live finance and attendance dashboard",
      "Dedicated database per institution",
    ],
  },
  {
    slug: "parent-communication",
    name: "Messaging & School Story",
    icon: "message",
    mock: "chat",
    summary: "Realtime messaging, notices and a school social feed.",
    seoTitle: "School Messaging, Announcements & School Story Feed",
    seoDescription:
      "Realtime messaging with files and reactions, audience-targeted announcements and documents, and a school and class story feed with scheduling and comments in AcadoAI.",
    h1: "Keep every conversation inside your institution",
    intro:
      "Realtime messages, targeted notices and a school and class story feed, with recipient rules your admin controls.",
    screen: "/images/screens/messaging.png",
    benefits: [
      { title: "Realtime messaging", text: "Individual and class conversations with files, reactions, edits and unread status." },
      { title: "Recipient rules", text: "The admin decides which roles can contact whom, so students only reach permitted staff." },
      { title: "Notices and documents", text: "Upload documents and announcements for a class, section, subject or staff role." },
      { title: "School and class story", text: "Posts with photos, video and PDFs, scheduled publishing, likes, comments and upcoming events." },
    ],
    capabilities: [
      "Realtime conversations with attachments",
      "Admin-controlled recipient policy",
      "Class and section group chats",
      "Audience-targeted documents and notices",
      "School-wide and class story feeds",
      "Scheduled posts and upcoming events",
      "AI moderation feedback on student posts",
      "Push and in-app notifications",
    ],
  },
  {
    slug: "payroll-hr",
    name: "Payroll & Expenses",
    icon: "briefcase",
    mock: "salary",
    summary: "Salaries, allowances, deductions, bonuses and expenses.",
    seoTitle: "Payroll & Expense Management for Educational Institutions",
    seoDescription:
      "Generate monthly salaries in bulk with allowances, bonuses, deductions, provident fund and tax, add special payments and track expenses with OCR receipt extraction in AcadoAI.",
    h1: "Payroll and expenses without the spreadsheet",
    intro:
      "Generate salaries for one employee or everyone, track every component and payment, and record expenses straight from a photographed receipt.",
    screen: "/images/screens/payroll.png",
    benefits: [
      { title: "Bulk salary generation", text: "Monthly salary records for individuals or the whole staff in one run." },
      { title: "Every component", text: "Base salary, allowances, bonuses, deductions, penalties, provident fund, tax and net salary." },
      { title: "Special payments", text: "Bonus, Eidi, incentives and other one-off payments on top of salary." },
      { title: "Expenses with OCR", text: "Upload a bill, review the extracted fields and save the expense with category and vendor." },
    ],
    capabilities: [
      "Individual and bulk salary generation",
      "Allowances, deductions, PF and tax",
      "Bonus, Eidi and incentive payments",
      "Paid / unpaid status and salary history",
      "Teacher salary statements",
      "Expense categories and vendors",
      "OCR receipt extraction",
      "Salary analytics and trends",
    ],
  },
  {
    slug: "roles-permissions",
    name: "Roles & Permissions",
    icon: "shield",
    mock: "permissions",
    summary: "Delegate 26 admin modules, one by one, with an audit trail.",
    seoTitle: "Role-Based Access Control (RBAC) for Educational Institutions",
    seoDescription:
      "Give principals, management staff and accountants exactly the modules they need. AcadoAI offers 26 delegatable modules, scoped teacher and student workspaces and audited permission changes.",
    h1: "Give each team member exactly the access their work needs",
    intro:
      "Every role gets its own workspace. Your admin can delegate administrative modules one by one to principals, management staff and accountants, and every change is audited.",
    screen: "/images/screens/permissions.png",
    benefits: [
      { title: "26 delegatable modules", text: "From students and attendance to finance, results and messaging, plus 4 modules reserved for principals." },
      { title: "Scoped workspaces", text: "Teachers see only assigned classes, students only their own records and enrolled subjects." },
      { title: "Audited changes", text: "Every permission change records who, what, before and after, and when, with versioned saves." },
      { title: "Instant effect", text: "Changes reach the user's app in real time and unauthorised pages are blocked at screen and server." },
    ],
    capabilities: [
      "10 user roles with their own workspaces",
      "22 common and 4 principal-only modules",
      "Separate result-approval permission",
      "Versioned, conflict-safe permission saves",
      "Access-change audit records",
      "Realtime permission updates",
      "Permission-aware navigation",
      "Admin-controlled messaging recipients",
    ],
  },
  {
    slug: "mobile-app",
    name: "Mobile App",
    icon: "phone",
    mock: "phone",
    summary: "Admin, teacher and student workspaces on Android and iOS.",
    seoTitle: "Education Management Mobile App for Admins, Teachers & Students",
    seoDescription:
      "AcadoAI's mobile app brings dashboards, attendance, finance, receipt verification, messaging, School Story and learning records to admins, teachers and students.",
    h1: "Your institution, in your pocket",
    intro:
      "Native mobile workspaces for admins, teachers and students sign in with a school code and use the same secure data as the web portal.",
    screen: "/images/screens/mobile-app.png",
    benefits: [
      { title: "For admins", text: "Dashboard, directories, approvals, attendance, finance, QR receipt verification, messaging and Ask Your Data." },
      { title: "For teachers", text: "Dashboard, classes, topic planning with video, attendance, tests and marks." },
      { title: "For students", text: "Timetable, courses, attendance, assignments, tests, results, fees and payment proof." },
      { title: "Secure sign-in", text: "School code sign-in, short-lived tokens and encrypted refresh sessions." },
    ],
    capabilities: [
      "School code sign-in",
      "Admin, teacher and student workspaces",
      "QR receipt scanning",
      "Realtime messaging and notifications",
      "School and class story",
      "Delegated staff workspaces",
      "Topic planning with recorded video",
      "Fee payment-proof upload",
    ],
  },
];

export type Solution = {
  slug: string;
  name: string;
  icon: IconName;
  mock: MockName;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  screen: string;
  points: { title: string; text: string }[];
  features: string[];
};

export const solutions: Solution[] = [
  {
    slug: "k-12-schools",
    name: "K-12 Schools",
    icon: "school",
    mock: "dashboard",
    seoTitle: "K-12 School Management Software with AI",
    seoDescription:
      "AI-powered management software for K-12 schools: students, classes, attendance, fee challans, exams and results, messaging and AI tools for teachers and students.",
    h1: "Everything a K-12 school runs on, connected by AI",
    intro: "Admissions, timetables, attendance, fees, exams and communication in one platform, with AI for leaders, teachers and students.",
    screen: "/images/screens/admin-dashboard.png",
    points: [
      { title: "For leadership", text: "A live dashboard, Ask Your Data and alerts for students who need attention." },
      { title: "For teachers", text: "Assigned classes, topic planning, attendance, marking and AI lesson preparation." },
      { title: "For families", text: "Performance alerts and school updates without phone calls." },
    ],
    features: ["student-information-system", "attendance-management", "exams-gradebook", "automation-alerts", "ai-teaching-tools", "fee-management"],
  },
  {
    slug: "private-schools",
    name: "Private Schools",
    icon: "building",
    mock: "challan",
    seoTitle: "Private School Management Software",
    seoDescription:
      "Private school software with automated fee challans, verifiable receipts, institution branding, role-based staff access and AI teaching tools.",
    h1: "Private school software that protects your revenue",
    intro: "Automated challans, partial payments and verifiable receipts, with your own branding and clear staff permissions.",
    screen: "/images/screens/fee-management.png",
    points: [
      { title: "Fewer billing gaps", text: "Automatic challans and missing-challan detection keep every month billed." },
      { title: "Your brand everywhere", text: "Institute name, logo, tagline and contact details across every workspace." },
      { title: "Clear staff roles", text: "Accountants and managers get only the modules they need." },
    ],
    features: ["fee-management", "automation-alerts", "roles-permissions", "ai-teaching-tools", "reports-analytics", "payroll-hr"],
  },
  {
    slug: "colleges",
    name: "Colleges",
    icon: "graduation",
    mock: "result",
    seoTitle: "College Management Software (Education ERP)",
    seoDescription:
      "Education ERP for colleges: student records, classes, exams and weighted results, finance and AI study support for every student.",
    h1: "An education ERP for colleges that students actually use",
    intro: "Records, exams, results and finance for administrators, and AI study support for students.",
    screen: "/images/screens/exams-gradebook.png",
    points: [
      { title: "Weighted results", text: "Result profiles, assessment weightage and grade boundaries you configure." },
      { title: "AI study support", text: "Subject assistants, NoteBookLM study tools and a 3D voice tutor." },
      { title: "Finance in one place", text: "Challans, collections, salaries and expenses with period reports." },
    ],
    features: ["student-information-system", "exams-gradebook", "ai-tutor", "fee-management", "payroll-hr", "reports-analytics"],
  },
  {
    slug: "coaching-academies",
    name: "Coaching Centres & Academies",
    icon: "book",
    mock: "attendance",
    seoTitle: "Coaching Centre & Academy Management Software",
    seoDescription:
      "Manage batches, attendance, frequent tests, fees and student practice for coaching centres and academies with AcadoAI.",
    h1: "Run your academy like a business, teach like a pro",
    intro: "Batches as classes and sections, frequent tests with instant results, automated fees and AI practice between classes.",
    screen: "/images/screens/attendance.png",
    points: [
      { title: "Batches made simple", text: "Map each batch to a class and section with its own schedule and teachers." },
      { title: "Test-heavy workflows", text: "Online and paper tests, bulk marks entry and instant results where allowed." },
      { title: "Practice between classes", text: "AI quizzes, flashcards and a tutor keep students learning." },
    ],
    features: ["exams-gradebook", "attendance-management", "fee-management", "ai-tutor", "automation-alerts", "parent-communication"],
  },
];

const personas = [
  {
    id: "leaders",
    label: "Admins & principals",
    title: "See the whole institution, and ask it anything",
    lead: "A live dashboard of people, attendance and finance, with Ask Your Data for every other question.",
    bullets: [
      "Live revenue, dues by class, attendance and admissions",
      "Ask Your Data with tables, charts and PDF reports",
      "Approval queue for sensitive changes",
      "Delegate modules to principals, managers and accountants",
    ],
    mock: "dashboard" as MockName,
    screen: "/images/screens/admin-dashboard.png",
    href: "/features/reports-analytics",
  },
  {
    id: "teachers",
    label: "Teachers",
    title: "Teach more, prepare less",
    lead: "Assigned classes, topic planning, attendance and marking, with AI to draft the material.",
    bullets: [
      "Today's classes, duties and students needing attention",
      "AI lesson plans, assignments, quizzes and slide decks",
      "Bulk attendance and test marking",
      "Topic resources, recorded lesson video and visibility control",
    ],
    mock: "lesson" as MockName,
    screen: "/images/screens/ai-teaching-tools.png",
    href: "/features/ai-teaching-tools",
  },
  {
    id: "finance",
    label: "Finance teams",
    title: "Fees, salaries and expenses that reconcile",
    lead: "Automated challans, flexible collection and receipts anyone can verify.",
    bullets: [
      "Automatic challans with billing preview",
      "Partial, line-item and multi-month collection",
      "Payment-proof review and QR receipt verification",
      "Salaries, expenses with OCR, and period reports",
    ],
    mock: "challan" as MockName,
    screen: "/images/screens/fee-management.png",
    href: "/features/fee-management",
  },
  {
    id: "students",
    label: "Students",
    title: "Everything for learning, in one place",
    lead: "Timetable, lessons, assignments, tests, results and fees, with AI that helps them study.",
    bullets: [
      "Today's timetable, attendance and pending tasks",
      "Online tests and detailed results",
      "Subject AI assistants and a 3D voice tutor",
      "Flashcards, quizzes and mind maps from their notes",
    ],
    mock: "tutor" as MockName,
    screen: "/images/screens/ai-tutor.png",
    href: "/features/ai-tutor",
  },
];

const aiWorkflows = [
  {
    title: "Ask Your Data",
    text: "Leaders ask \"Show outstanding fees by class for this month\" and get the table, a chart and a PDF report, scoped to their own institution.",
    screen: "/images/ai/ask-your-data-v2.png",
    alt: "An elevated over-the-shoulder view of a principal using AcadoAI Ask Your Data to review fees by class",
  },
  {
    title: "AI teaching assistant",
    text: "Teachers draft lesson plans, assignments with rubrics, quizzes and editable slide decks, then review them before class.",
    screen: "/images/ai/ai-teaching-assistant.png",
    alt: "An elevated over-the-shoulder view of a female teacher preparing a science lesson with AcadoAI AI teaching assistant",
  },
  {
    title: "Study tools from any document",
    text: "NoteBookLM turns a chapter or notes into a grounded chat, summary, flashcards, quizzes, mind maps and audio overviews.",
    screen: "/images/ai/document-study-tools-v3.png",
    alt: "A boy and girl studying biology flashcards together using AcadoAI document study tools, viewed from above and behind",
  },
  {
    title: "3D voice tutor",
    text: "Students talk to Sara or James, in English or everyday Urdu, while the tutor works through equations and diagrams on a visual board.",
    screen: "/images/ai/3d-voice-tutor-v3.png",
    alt: "A boy and girl learning mathematics together with the AcadoAI 3D voice tutor, viewed from above and behind",
  },
];

const automations = [
  {
    icon: "wallet" as IconName,
    title: "Fee challans, on autopilot",
    text: "Set the billing policy once. Challans are generated for every class on the issue day, with due dates, late fees and per-student exceptions applied.",
    points: ["Billing preview before activation", "Missing challan detection", "Run billing now"],
  },
  {
    icon: "check" as IconName,
    title: "Attendance that records itself",
    text: "QR ID card scans and timing rules decide present or late, and anyone not recorded after the window is marked absent.",
    points: ["QR / ID card scanning", "Check-in timing rules", "Automatic absence marking"],
  },
  {
    icon: "chart" as IconName,
    title: "Performance, tracked continuously",
    text: "Results, attendance and submissions are tracked for every student, and the ones who need attention are identified automatically.",
    points: ["Students needing attention", "Pass / fail and attendance rates", "Missing work tracking"],
  },
];

const faqs = [
  { q: "What does AcadoAI include?", a: "Student and staff records, classes and timetables, attendance, tests, exams and results, fees and finance, payroll, messaging and School Story, plus AI tools for leaders, teachers and students. Enabled modules depend on your institution's setup." },
  { q: "What does AcadoAI automate?", a: "Fee challans are generated on your billing schedule, unrecorded students are marked absent after the attendance window, and student performance is tracked so those who need attention are flagged to admins, teachers and parents." },
  { q: "Can we control staff permissions?", a: "Yes. Your admin can delegate 26 administrative modules one by one to principals, management staff and accountants. Teachers and students work only within their assigned classes and own records, and every permission change is audited." },
  { q: "Does AcadoAI support partial fee payments?", a: "Yes. You can collect partial and line-item payments, collect several months at once, review student-uploaded payment proof and issue receipts that can be verified by QR code or a 5-digit code." },
  { q: "What AI tools are available for teachers and students?", a: "Teachers get lesson plans, assignments, quizzes, presentations, a lecture assistant and NoteBookLM. Students get a learning instructor, subject-specific assistants, document study tools and a 3D voice tutor. AI usage follows the allowance your institution sets." },
  { q: "Where is our data stored?", a: "By default, your dedicated database and server are hosted in secure European data centres. If your country requires data to stay local, we can deploy your database and server in a data centre in your own country." },
  { q: "Is there a mobile app?", a: "Yes. AcadoAI's mobile app has admin, teacher and student workspaces covering dashboards, attendance, finance, receipt verification, messaging, School Story and learning records." },
];

// No fixed subscription: each institution gets a package sized to its users and operations.
const pricingSteps = [
  { title: "We study your operations", text: "Number of students and staff, campuses, and the modules your institution actually uses." },
  { title: "We size your system", text: "How much database space and file storage you need, and the right server configuration for your load." },
  { title: "You get a custom package", text: "One clear price for your complete system, with no fixed plan tiers and nothing you don't use." },
];

const pricingFactors = [
  { icon: "users" as IconName, title: "Users", text: "Students, teachers, staff and parents who use the system." },
  { icon: "check" as IconName, title: "Modules", text: "Only the operations you run, from fees and attendance to payroll." },
  { icon: "database" as IconName, title: "Database & storage", text: "Dedicated database size and file storage matched to your records." },
  { icon: "server" as IconName, title: "Server configuration", text: "A dedicated cloud server sized for your usage, in Europe or your own country." },
  { icon: "sparkles" as IconName, title: "AI credits", text: "Buy extra AI credits whenever you need them, only for what you use." },
];

const pricingIncludes = [
  "Dedicated database and cloud server",
  "Hosting in Europe or in your own country",
  "2 months free trial",
  "Free data migration by our team",
  "Free staff training",
  "Admin, teacher and student mobile apps",
  "Role and module permissions",
];

// Onboarding phases shown on the pricing page. Keep timings in line with what the team actually delivers.
const rolloutPhases = [
  {
    when: "Week 1",
    title: "Discovery & assessment",
    text: "We meet your team to understand your students, staff, campuses, fee structure and the operations you want to run on AcadoAI.",
    deliverables: ["Requirements summary", "Custom package proposal"],
  },
  {
    when: "Week 1–2",
    title: "System setup",
    text: "We provision your dedicated database and cloud server, sized to your users, then configure classes, timetables, fee plans and staff roles.",
    deliverables: ["Dedicated server live", "Institution configured", "Roles and permissions set"],
  },
  {
    when: "Week 2–3",
    title: "Data migration",
    text: "Our team imports your students, staff, fee records and results from spreadsheets or your old system, free of cost, and checks every record with you.",
    deliverables: ["Verified data import", "Migration report"],
  },
  {
    when: "Week 3",
    title: "Staff training",
    text: "Hands-on sessions for admins, accountants and teachers on the web portal and mobile apps, at no extra cost.",
    deliverables: ["Trained staff", "User guides", "Mobile apps set up"],
  },
  {
    when: "Week 4",
    title: "Go-live & free trial",
    text: "Your institution goes live and your 2-month free trial starts, with our team on hand for questions and quick fixes.",
    deliverables: ["Institution live", "2-month free trial", "Priority support"],
  },
  {
    when: "Ongoing",
    title: "Review & scale",
    text: "We review usage with you and adjust storage, server capacity and AI credits as your institution grows.",
    deliverables: ["Usage reviews", "Capacity upgrades", "AI credit top-ups"],
  },
];

// Shown on the pricing page after the rollout plan. Only list support the team actually provides.
const readiness = {
  checklist: [
    "Student, staff and fee data verified with your team",
    "Fee plans and challans tested on a real billing cycle",
    "Roles and module permissions reviewed by your admin",
    "Attendance windows and alerts configured",
    "Mobile apps installed for admins and teachers",
    "Parents and students ready to log in",
  ],
  training: [
    { icon: "building" as IconName, role: "Admins & principals", text: "Dashboards, Ask Your Data, staff permissions and institution settings." },
    { icon: "wallet" as IconName, role: "Accountants", text: "Fee plans, challans, partial payments, receipts, payroll and expenses." },
    { icon: "book" as IconName, role: "Teachers", text: "Attendance, tests and results, assignments and AI teaching tools." },
    { icon: "graduation" as IconName, role: "Students & parents", text: "Simple guides for the mobile app, results, fees and the AI tutor." },
  ],
  support: [
    { icon: "message" as IconName, title: "Email support", text: "Send questions any time to our support team." },
    { icon: "phone" as IconName, title: "Phone support", text: "Talk to our team directly when something needs quick help." },
    { icon: "users" as IconName, title: "Training for new staff", text: "New teachers or accountants joining later can be trained too." },
    { icon: "chart" as IconName, title: "Usage reviews", text: "Regular check-ins to adjust storage, server capacity and AI credits." },
  ],
};

const securityPoints = [
  { icon: "database" as IconName, title: "Your own database", text: "No shared databases. Your institution's data is stored in its own dedicated database, fully isolated from every other school." },
  { icon: "server" as IconName, title: "Dedicated cloud server", text: "Each institution runs on its own secure cloud server with independent access control." },
  { icon: "key" as IconName, title: "You own your data", text: "The institution owner has complete control: export, manage or delete your data at any time." },
  { icon: "lock" as IconName, title: "Enterprise-grade security", text: "Encrypted data transfer, secure sessions, role and module permissions, and audit trails for every change." },
];

// Interface copy for every component. Placeholders like {name} are filled with fill().
const ui = {
  meta: {
    title: "AcadoAI – AI-Powered Education Management Software",
    description:
      "AI-powered education management software for schools, colleges and academies: fees, attendance, exams, staff, parent messaging and AI teaching tools.",
  },
  common: {
    bookDemo: "Book a demo",
    seePricing: "See pricing",
    contactSales: "Contact sales",
    home: "Home",
    homeLabel: "AcadoAI home",
    product: "Product",
    features: "Features",
    solutions: "Solutions",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    company: "Company",
    breadcrumb: "Breadcrumb",
    skip: "Skip to content",
  },
  nav: {
    main: "Main",
    seeItLive: "See it live",
    tour: "A 30-minute tour, tailored to your school.",
    byInstitution: "By institution",
    pricingBlurb: "Flexible packages built around your institution.",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "AI-powered education management",
    title: "Education management software, connected by AI.",
    highlight: "connected",
    lead: "Manage students, attendance, fees, exams and staff in one AI-powered platform. AcadoAI automates the routine, flags students who need attention, and keeps leaders, teachers, parents and students connected.",
    explore: "Explore features",
    points: ["Automated fee challans", "Role-based access", "AI for every role"],
    imageAlt: "Teacher and student using AcadoAI on a tablet",
  },
  heroVisual: {
    needAttention: "3 students need attention",
    roles: ["Admin", "Teacher", "Parent"],
    alertsSent: "Alerts sent automatically",
    attendance: "Today's attendance",
    autoMarked: "Auto-marked",
    challans: "March challans generated",
    billing: "Billing policy · automatic",
  },
  stats: { label: "AcadoAI at a glance" },
  logoWall: {
    title: "Institutions using AcadoAI",
    lead: "Meet the schools and academies already on board.",
    coaching: "Coaching Centre",
    school: "School",
    logo: "{name} logo",
  },
  modules: {
    eyebrow: "The platform",
    title: "Everything your institution runs on, in one place",
    lead: "Thirteen connected modules share the same students, classes and permissions, so nothing is typed twice.",
  },
  automation: {
    eyebrow: "Automation",
    title: "The routine runs itself. You hear about what matters.",
    lead: "AcadoAI watches attendance, results, assignments and fees for every student, then alerts the right people when someone needs attention.",
    inputs: ["Attendance", "Test & exam results", "Assignments", "Fee balances"],
    outputs: ["Admin alert", "Teacher alert", "Parent alert"],
    engine: "tracks & detects",
    reminders: "Assignment & test reminders",
    cta: "How automation works",
  },
  personas: {
    eyebrow: "For every role",
    title: "Built for everyone who keeps education running",
    lead: "Each person sees exactly what they need, and the AI does the repetitive part of their job.",
    tabs: "Roles",
    explore: "Explore for {role}",
    demo: "AcadoAI demo for {role}",
    watch: "Watch the demo for {role}",
  },
  ai: {
    eyebrow: "AI built into daily work",
    title: "Practical AI for leaders, teachers and students.",
    lead: "Different AI tools for different jobs, working inside your institution's own records, with usage allowances you control.",
    cta: "Explore AI features",
  },
  access: {
    eyebrow: "Roles & permissions",
    title: "Give each team member exactly the access their work needs.",
    lead: "Every role has its own workspace. Your admin delegates administrative modules one by one, and every change is audited.",
    roles: [
      { role: "School Admin", text: "Full institution administration and permission control" },
      { role: "Principal", text: "Scoped dashboard plus granted modules, incl. approvals and Ask Your Data" },
      { role: "Management & Accountant", text: "Only the modules the admin delegates" },
      { role: "Teacher & Coordinator", text: "Assigned classes, sections and students" },
      { role: "Student", text: "Own learning, results, attendance and fees" },
    ],
    cta: "Roles & permissions",
    meta: "Versioned saves · audit records · realtime updates",
    modules: "admin modules you can delegate, one by one",
    imageAlt: "AcadoAI permission editor for an accountant",
  },
  mobile: {
    eyebrow: "Mobile app",
    title: "Keep education work within reach.",
    lead: "Native mobile workspaces for admins, teachers and students, signed in with a school code and running on the same secure data as the web portal.",
    sides: [
      { title: "Admin", text: "Dashboard, approvals, attendance, finance, QR receipt verification and Ask Your Data." },
      { title: "Teacher", text: "Today's classes, topic planning with video, attendance, tests and marks." },
      { title: "Student", text: "Timetable, courses, assignments, tests, results, fees and payment proof." },
    ],
    cta: "Mobile app",
    imageAlt: "Actual AcadoAI mobile app sign-in screen",
  },
  security: {
    eyebrow: "Security & privacy",
    title: "Your data.",
    titleHighlight: "Your control.",
    lead: "Every institution on AcadoAI gets its own dedicated database and server, completely separate from other schools. Your data belongs to you, not us.",
    residencyEyebrow: "Data residency",
    residencyTitle: "Your data, in your country.",
    residencyText:
      "Your dedicated database and server are hosted in secure European data centres by default. If local rules require your data to stay at home, we deploy AcadoAI on servers in a data centre in your own country.",
    europeTitle: "Europe by default",
    europeText: "Secure European data centres for every institution.",
    localTitle: "Your own country",
    localText: "Local deployment when your data must stay in-country.",
  },
  testimonials: {
    eyebrow: "What our users say",
    title: "Trusted by schools and academies",
    lead: "Hear from the people who run their institutions on AcadoAI every day.",
    quotes: [
      "AcadoAI brought our admissions, attendance and fee records into one place. Fee challans now go out on time without the end-of-month rush, and our staff spend far less time on paperwork.",
      "Parents can now see attendance and results on their phones, and our teachers use the AI tools to prepare quizzes and lessons quickly. Running the school feels calmer and far more organised.",
      "In a coaching centre, every student's progress matters. AcadoAI flags students who need attention early, so we can follow up with them and their parents before small gaps become big ones.",
    ],
  },
  faq: { title: "Questions institutions ask us", lead: "Can't find your answer? Our team replies within one business day." },
  contact: {
    eyebrow: "Book a demo",
    title: "Tell us about your institution. We'll show you the rest.",
    lead: "Share a few details and we'll reply within one business day with a tailored walkthrough of AcadoAI.",
    sales: "Sales",
    support: "Support",
    phone: "Phone",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    mobile: "Mobile number",
    organization: "Organization name",
    institutionType: "Institution type",
    types: ["School (K-12)", "College", "University", "Coaching Centre / Academy"],
    message: "What would you like to see?",
    optional: "(optional)",
    messagePlaceholder: "Number of students, campuses, current software…",
    errRequired: "Please fill in your name, email, mobile number and organization name.",
    errEmail: "Please enter a valid email address.",
    errPhone: "Please enter a valid mobile number, e.g. +92 300 1234567.",
    errConfig: "Email service is not configured yet. Please try again later.",
    errSend: "We couldn't send your request right now. Please try again, or email us at {email}.",
    sending: "Sending…",
    submit: "Request my demo",
    thanks: "Thank you, {name}!",
    received: "Your demo request for {org} has been received. Our team will contact you within one business day.",
    confirmation: "A confirmation is on its way to {email}.",
    pickTime: "Pick a demo time now",
    close: "Close",
  },
  ctaBand: { title: "See AcadoAI running your institution.", lead: "A 30-minute demo, tailored to how your institution works." },
  footer: {
    tagline: "AI-powered education management for administration, teaching, finance and student learning.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    deleteAccount: "Delete Account",
    rights: "All rights reserved.",
    social: "AcadoAI on {network}",
  },
  offer: {
    eyebrow: "Special offer",
    titleStart: "Start with",
    titleHighlight: "2 months free",
    lead: "Switch to AcadoAI with zero risk. We handle the move for you.",
    perks: [
      { title: "2 months free trial", text: "Run your whole institution on AcadoAI before you pay anything." },
      { title: "Free data migration", text: "Our team moves your students, staff and fee records for you." },
      { title: "Free staff training", text: "We train your admins, accountants and teachers at no cost." },
    ],
    cta: "Claim free trial",
    close: "Close offer",
    launcher: "2 months free",
    launcherMore: "trial",
  },
  stores: { appStore: "Download on the", googlePlay: "Get it on" },
  notFound: {
    eyebrow: "Error 404",
    title: "We couldn't find that page",
    lead: "The link may be old or mistyped. Start from the home page or explore what AcadoAI can do.",
    home: "Back to home",
  },
  featurePage: {
    benefitsEyebrow: "Why institutions choose AcadoAI {name}",
    benefitsTitle: "What you get",
    capabilities: "Capabilities",
    inside: "Inside {name}",
    related: "Works with the rest of the platform",
    screenAlt: "AcadoAI {name} screen",
    alts: {
      "reports-analytics": "A school principal reviewing fees by class and downloadable reports using AcadoAI Ask Your Data",
      "ai-tutor": "A boy and girl learning with AcadoAI AI Tutor and Study Tools, with a 3D teacher and visual maths board",
      "student-information-system": "A school administrator and students reviewing the AcadoAI Students and Staff directory together",
      "mobile-app": "Actual AcadoAI mobile app admin dashboard with student, staff and class management",
    } as Record<string, string>,
  },
  featureGrid: { eyebrow: "Related features", title: "Everything connected" },
  solutionPage: {
    eyebrow: "For {name}",
    benefitsEyebrow: "Built for {name}",
    benefitsTitle: "Why it works for you",
    modulesEyebrow: "The modules you'll use",
    modulesTitle: "AcadoAI for {name}",
    alts: {
      "coaching-academies": "A realistic coaching academy classroom with batch desks, exam preparation materials, a whiteboard and AcadoAI batch schedule",
      colleges: "A college campus on an open book with a graduation cap, diploma and AcadoAI results dashboard",
      "private-schools": "A private school principal and finance manager reviewing AcadoAI fee collection and verified receipts",
      "k-12-schools": "A K-12 teacher helping a boy and girl learn with AcadoAI at a classroom desk",
    } as Record<string, string>,
  },
  aboutPage: {
    metaTitle: "About AcadoAI – AI-first Education Management",
    metaDescription: "AcadoAI builds AI-first school management software so educators spend less time on administration and more time on teaching.",
    eyebrow: "About AcadoAI",
    title: "We build the software we wished our schools had",
    lead: "AcadoAI brings administration, teaching, finance and learning into one AI-first platform, so schools can focus on students.",
    missionEyebrow: "Our mission",
    missionTitle: "Give every educator back the hours admin takes away.",
    missionLead: "Schools run on dozens of disconnected tools, spreadsheets and phone calls. We replace them with one calm system where AI handles the repetitive work.",
    heroAlt: "AcadoAI branding with a school, open book and connected administration, learning, finance and AI symbols",
    missionAlt: "A teacher spending time on a science activity with a boy and girl in a bright classroom",
    values: [
      { title: "Teachers first", text: "Every feature is judged by one question: does it give a teacher time back?" },
      { title: "AI that earns its place", text: "AI belongs where it removes real work, not as a badge on the box." },
      { title: "Privacy by design", text: "Each school's data is isolated and only visible to the people who need it." },
    ],
  },
  contactPage: {
    metaTitle: "Contact Sales & Book a Demo",
    metaDescription: "Book a personalised AcadoAI demo or contact our sales and support team. We reply within one business day.",
    title: "Let's talk about your school",
    lead: "Book a demo, ask about pricing or get help from support.",
  },
  pricingPage: {
    metaTitle: "Pricing – Custom School Management Software Packages",
    metaDescription:
      "No fixed subscription. AcadoAI builds a custom package for each school based on users, modules, storage and server needs, with a 2-month free trial.",
    title: "Flexible pricing, built around your institution",
    lead: "No fixed subscription. We size your complete system to your users and operations, so you only pay for what you need.",
    modulesEyebrow: "Modules",
    modulesTitle: "Modules you can include",
  },
  pricing: {
    factorsEyebrow: "What shapes your price",
    factorsTitle: "You pay for what your institution uses.",
    factorsLead: "No fixed monthly tiers. Your package is built from these five things.",
    includes: "Every package includes",
    quote: "Get your custom quote",
    talk: "Talk to sales",
  },
  pricingVisual: {
    label: "Example of a custom AcadoAI package",
    eyebrow: "Example package",
    title: "Your custom system",
    sizing: "Sizing…",
    users: "Users",
    usersUnit: " students & staff",
    database: "Dedicated database",
    storage: "File storage",
    aiCredits: "AI credits",
    perMonth: " / month",
    server: "Dedicated cloud server",
    serverSpec: "4 vCPU · 8 GB RAM · Europe or your country",
    modules: ["Fees", "Attendance", "Exams", "Payroll", "AI tools"],
    ready: "Package ready",
    readySub: "No fixed plan · pay for what you use",
  },
  rollout: {
    eyebrow: "Onboarding",
    title: "AcadoAI implementation & rollout plan",
    lead: "A phased rollout with clear deliverables at every step, so your institution moves to AcadoAI without disrupting daily work.",
    deliverables: "Deliverables",
  },
  readinessSection: {
    eyebrow: "Before and after go-live",
    title: "Operational readiness, training & support",
    lead: "We check that your institution is ready before it goes live, train every role, and stay with you after launch.",
    readyEyebrow: "Operational readiness",
    checklistTitle: "Go-live checklist",
    checklistLead: "Your institution goes live only when every item is signed off with your team.",
    trainingEyebrow: "Training",
    trainingTitle: "Role-based training, free of cost",
    trainingLead: "Each team learns only what their daily work needs, on the web portal and mobile apps.",
    supportEyebrow: "Support",
    supportTitle: "We stay with you after launch",
  },
};

const en = {
  ui,
  productFacts,
  stats,
  features,
  solutions,
  personas,
  aiWorkflows,
  automations,
  faqs,
  pricingSteps,
  pricingFactors,
  pricingIncludes,
  rolloutPhases,
  readiness,
  securityPoints,
};

export type Content = typeof en;
type DeepPartial<T> = T extends string ? string : T extends readonly (infer U)[] ? DeepPartial<U>[] : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
export type Translation = DeepPartial<Content>;

// Translations only carry text; slugs, icons and image paths always come from English.
function merge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (typeof base === "string") return (typeof over === "string" && over ? over : base) as T;
  if (Array.isArray(base)) return base.map((item, i) => merge(item, (over as unknown[])[i])) as T;
  if (base && typeof base === "object") {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(over as object)) out[key] = merge((base as Record<string, unknown>)[key], (over as Record<string, unknown>)[key]);
    return out as T;
  }
  return base;
}

const translations: Partial<Record<Locale, Translation>> = { ur, ar, es };
const cache = new Map<Locale, Content>();

export function getContent(lang: Locale): Content {
  if (lang === "en") return en;
  let c = cache.get(lang);
  if (!c) cache.set(lang, (c = merge(en, translations[lang])));
  return c;
}

/** Fills {placeholders} in a translated string. */
export const fill = (text: string, vars: Record<string, string | number>) => text.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));

export const getNav = (c: Content) => ({
  product: c.features.map((f) => ({ name: f.name, href: `/features/${f.slug}`, summary: f.summary, icon: f.icon })),
  solutions: c.solutions.map((s) => ({ name: s.name, href: `/solutions/${s.slug}`, icon: s.icon })),
});

// English data for routing (slugs) and other locale-independent code.
export { stats, productFacts };
