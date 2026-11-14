# AcadoAI — Product, Functionality, RBAC & Marketing Content Reference

**Prepared:** 14 November 2026 (Asia/Karachi)  
**Purpose:** A detailed product reference for developing the AcadoAI marketing website.  
**Audience:** Founder, product team, website developer, designer, and copywriter.  
**Language:** English for reusable website copy, with a short Roman Urdu usage guide.

> **Roman Urdu guide:** Is file mein AcadoAI ke product modules, har role ka kaam, RBAC permissions, AI tools, finance, web/mobile coverage aur marketing copy di gayi hai. Website par copy use karte waqt “Partial”, “Prototype” aur “Not verified” wali cheez ko live feature ke taur par advertise na karein. Technical permission keys sirf developer reference ke liye hain; public website par simple feature names use karein.

## Contents

1. Evidence and scope
2. Product overview and positioning
3. RBAC: roles, permissions, and access boundaries
4. Detailed feature catalogue
5. Current additions and important implementation details
6. End-to-end product workflows
7. Ready-to-use marketing website copy
8. Website pages and content structure
9. Claims that need confirmation before publication
10. Source map and maintenance notes

## 1. Evidence and scope

This reference combines the existing **11 October 2026 complete feature inventory** with targeted inspection of the local product source on **14 November 2026**. Current code was inspected for role definitions, delegated access, route guards, messaging policy, finance routes, receipt verification, reconciliation, notifications, AI reports, the mobile gateway, and the tutor documentation.

The feature catalogue preserves the breadth of the existing inventory. It is a documented implementation inventory with targeted current checks, **not a fresh end-to-end test of every feature or confirmation that every feature is deployed**.

### 1.1 Evidence labels

| Label | Meaning | Website use |
|---|---|---|
| Code-supported | Implementation, route, service, or relevant configuration was inspected | Describe the capability without promising deployment availability or measured outcomes |
| Inventory-supported | Included in the prior complete inventory; not individually exercised in this review | Suitable for a product content draft; confirm in the release/demo before launch |
| Configuration-dependent | Requires school permissions, service configuration, enabled integrations, or usage allowance | Explain availability through the school's setup or agreed plan |
| Partial / Prototype | A screen exists but uses samples, placeholders, or incomplete integration | Keep out of the live-feature list; label as planned only if the roadmap is approved |
| Not verified | Evidence does not establish a deployment, certification, commercial promise, or complete workflow | Do not publish as a confirmed fact |

**Platform labels in Section 4:** Web = React portal; Mobile = Flutter implementation reported in the inventory; API = backend support; AI = AI-backed feature. These labels do not prove App Store/Play Store availability, complete platform parity, or live service health.

### 1.2 Sources reviewed

- Main product workspace: `/Users/mac/D_Drive/acadoai`.
- Existing feature inventory: `ACADOAI_COMPLETE_FEATURES.md` in that workspace.
- Current marketing workspace: `/Users/mac/D_Drive/Acadoai-site`.
- Main mobile implementation reviewed: `Acadoai-Flutterapp` inside the product workspace.
- An additional mobile workspace exists at `/Users/mac/D_Drive/Acadoai-mobileapp`; its release/branch parity was not established.
- No production database, real student records, secret environment values, or live customer accounts were needed for this document.

## 2. Product overview and positioning

### 2.1 What is AcadoAI?

**AcadoAI is an AI-powered education management platform that connects school administration, teaching, student learning, finance, attendance, assessments, and communication through role-based web and mobile workspaces.**

It combines three product areas:

1. **School operations:** student and employee records, classes, sections, subjects, timetables, attendance, exams, results, fees, payroll, expenses, and institutional settings.
2. **Teaching and learning:** assignments, tests, resources, lesson/topic planning, AI teaching-content generation, student assistants, document-based study tools, and a 3D voice tutor.
3. **Leadership and collaboration:** dashboards, Ask Your Data, reports, delegated access, approvals, messaging, and school/class story feeds.

### 2.2 Who is it for?

| Audience | Main needs addressed | Positioning boundary |
|---|---|---|
| Schools | Daily administration, classroom workflows, attendance, fees, results, communication | Strongest fit evidenced by the current school/class/section model |
| Private schools | Fee visibility, staff coordination, teaching support, institutional branding | Avoid promising dedicated infrastructure unless contractually included |
| Coaching centres and academies | Batch-like classes/sections, frequent tests, schedules, fees, study support | Map academy batches onto the existing class/section structure |
| Colleges | Student records, classes, exams, finance, AI study support | Validate institution-specific academic rules before promising a complete rollout |
| School groups | Separate organizations and platform-level tenant administration | Consolidated group/campus comparison reporting is not established by tenancy alone |
| Universities | Possible use of shared records, teaching, and finance capabilities | Credit registration, transcripts, hostel, research, and full university ERP workflows are not verified |

### 2.3 Benefits by audience

- **Owners and administrators:** maintain operational records and review attendance, academics, and finance in connected workspaces.
- **Principals:** use a scoped leadership dashboard and only the administrative modules granted by the school admin.
- **Management staff:** handle delegated operational responsibilities without receiving full administrator access.
- **Accountants:** manage permitted finance workflows, payment evidence, receipts, expenses, salaries, and reports.
- **Teachers and coordinators:** manage assigned classes, topics, attendance, assignments, assessments, and teaching materials.
- **Students:** access their timetable, learning resources, assignments, tests, results, attendance, fee information, and AI study support.
- **Families:** receive school information through the institution's supported communication setup. A complete independent parent-account workflow is not verified.

### 2.4 Main product differentiators

- Administration and classroom learning share the same school context.
- AI is available for leadership queries, teacher preparation, and student study.
- Delegated administrative access can be granted separately across **26 module keys**.
- Finance supports component-level and partial payments, multi-month collection, evidence review, and receipt verification.
- Document-grounded study tools create summaries, flashcards, quizzes, mind maps, and audio overviews.
- The standalone 3D tutor offers voice interaction, animated avatars, and a visual teaching board.
- Responsive web workflows are complemented by Flutter mobile workspaces.

These are product distinctions, not claims of superiority over a named competitor or guaranteed academic/financial results.

## 3. RBAC: roles, permissions, and access boundaries

### 3.1 RBAC in plain language

**RBAC means Role-Based Access Control.** A person's role establishes their workspace and responsibilities. For Principal, Management Staff, and Accountant, the school admin can additionally grant individual modules. Class assignments, organization membership, record ownership, and recipient policy further restrict what a person can access.

A useful description is:

> Give each team member access to the tools they need, with school-controlled permissions for administrative workspaces and scoped access to teaching and student records.

This is module-level delegation plus role- and context-based checks. Do not describe it as a universal custom-role builder or a complete per-field/per-action permission editor.

### 3.2 Roles present in the current user model

| Role | Internal value | Workspace and intended responsibility | Key boundary |
|---|---|---|---|
| Super Admin | `superadmin` | Platform organizations, organization admins, AI limits/models/usage | Platform role; not a normal school employee account |
| School Admin | `admin` | Institution administration, users, access assignment, academics, finance, settings | Operates within the institution; tenant access management requires this role |
| Principal | `principal` | Scoped admin dashboard and individually granted modules | Principal status does not automatically grant all modules |
| Management Staff | `management_staff` | Delegated school operations | Only granted common modules; no general automatic admin dashboard |
| Accountant | `accountant` | Finance-oriented delegated workspace; additional common modules if granted | Finance requires its grant; the role is not inherently a full admin or necessarily finance-only |
| Coordinator | `coordinator` | Teacher workspace, assigned classes/sections and coordination | No automatic institution-wide administrative access |
| Teacher | `teacher` | Assigned classes, topics, attendance, assignments, tests, learning content | Assigned teaching context and backend rules apply |
| Student | `student` | Own learning, attendance, results, fees, messages, AI tools | Own account, enrolled class/section, and permitted audience |
| Store Manager | `store_manager` | Supported staff identity and messaging-policy category | A complete inventory/procurement/store-management module is not evidenced |
| Other Staff | `other` | General staff identity and supported staff communication | Do not imply a standalone full-featured workspace |

**Parent distinction:** Web route guards accept `parent` for student-facing pages, but the inspected core user model does **not** include `parent` in its role enum. Independent parent creation, parent-child linking, sibling switching, and complete parent API access were not established. Treat the dedicated Parent Portal as **partial/unverified**.

**Vice Principal distinction:** Mobile helpers recognize several Vice Principal aliases; the current user model stores `principal`, and the employee profile has a `principalType` field. Do not present Vice Principal as a separately verified, uniformly implemented permission tier.

### 3.3 Role capability matrix

**Full** = normal institution-admin scope; **Grant** = explicit delegated permission; **Assigned** = teaching assignment; **Own** = personal records. All entries remain subject to the relevant endpoint's role/action rules.

| Area | School Admin | Principal | Management | Accountant | Teacher / Coordinator | Student |
|---|---|---|---|---|---|---|
| Institution dashboard | Full | Scoped dashboard | No automatic access | No automatic access | Own teaching dashboard | Own student dashboard |
| Students and employees | Full | Grant | Grant | Grant or required reference reads | Assigned student/class views | Own permitted profile |
| Classes and subjects | Full | Grant | Grant | Grant | Assigned | Enrolled class and subjects |
| Student/staff attendance administration | Full | Separate grants | Separate grants | Separate grants | Assigned student attendance; own staff history | Own attendance |
| ID cards and attendance machine | Full | Separate grants | Separate grants | Separate grants | No general admin access | No general admin access |
| Finance administration | Full | Grant | Grant | Grant | Own salary | Own fees and payment proof |
| Tests | Full | Grant | Grant | Grant if assigned | Assigned tests and marks | Assigned attempts and results |
| Result entry/cards/reports | Full | Separate grants | Separate grants | Separate grants | Authorized academic actions | Own published results |
| Exam planning/history | Full | Separate grants | Separate grants | Separate grants | Duties and authorized academic views | Relevant date sheets |
| General administrative approvals | Full | Principal-only grant | Not grantable | Not grantable | No general admin queue | No general admin queue |
| Ask Your Data | Supported admin | Principal-only grant | Not grantable | Not grantable | Separate teacher AI tools | Separate student AI tools |
| General Settings and uploads | Full | Principal-only grants | Not grantable | Not grantable | Own settings/resources | Own settings/submissions |
| Messaging | Institution capabilities | Grant + recipient policy | Grant + recipient policy | Grant + recipient policy | Recipient policy | Recipient policy |
| School/Class Story | Full | Grant | Grant | Grant | Assigned audience | Permitted class audience |
| Change delegated permissions | School Admin only | No | No | No | No | No |
| Manage tenants and platform AI policy | Super Admin workspace | No | No | No | No | No |

**Important:** General administrative approvals (`approvals`) and academic results approvals (`results_approval_queue`) are different permissions. A module grant permits entry to a module; it does not guarantee that every action inside it is authorized.

### 3.4 Exact delegated module inventory

The following **22 common modules** can be granted to Principal, Management Staff, or Accountant. None should be assumed enabled by default.

| Permission key | Display name | Functional scope |
|---|---|---|
| `course_management` | Course Management | School subject/course administration |
| `class_management` | Class Management | Classes, sections, and associated allocation workflows |
| `students` | Students | Student directory and permitted student management |
| `employees` | Employees | Employee directory and permitted staff management |
| `attendance_students` | Student Attendance | Student marking, history, and reports |
| `attendance_employees` | Employee Attendance | Staff marking, history, and reports |
| `attendance_machine` | Attendance Machine | Attendance-device/scanner workspace |
| `attendance_student_id_cards` | Student ID Cards | Student identity-card workflows |
| `attendance_employee_id_cards` | Employee ID Cards | Staff identity-card workflows |
| `finance` | Finance Management | Fees, payments, salaries, expenses, receipts, and finance reporting |
| `class_story` | School Story | Permitted school-feed operations |
| `class_tests` | Class Tests | Test creation/management and supported result workflows |
| `results_marks_entry` | Marks Entry | Academic assessment marks workspace |
| `results_approval_queue` | Result Approval Queue | Academic result-review queue, subject to action checks |
| `results_term_cards` | Term Cards | Term result-card workflows |
| `results_annual_cards` | Annual Cards | Consolidated annual result-card workflows |
| `results_class_report` | Class Report | Class-level academic reports |
| `exams_planner` | Exam Planner | Exam-session planning |
| `exams_plans` | Exam Plans | Scheduled/managed exam plans |
| `exams_date_sheets` | Date Sheets | Exam schedule documents |
| `exams_history` | Exam History | Previous exam sessions/papers |
| `messaging` | Messaging | Administrative messaging workspace, with recipient policy |

The following **4 additional modules are grantable only to Principal** among delegated roles:

| Permission key | Display name | Functional scope |
|---|---|---|
| `approvals` | Approvals | General administrative request review |
| `ask_your_data` | Ask Your Data | Organization-scoped school-data AI assistant |
| `general_settings` | General Settings | Permitted institution settings |
| `uploads` | Uploads | Administrative document/notice distribution |

Delegated users also have these **3 fixed personal module identifiers**: `my_profile`, `my_attendance`, and `my_salary`. These describe personal access, not institution-wide directory, attendance, or payroll rights. Their exact presentation varies by client.

### 3.5 Permission-management behavior

- The tenant's **School Admin** lists eligible delegated users and changes their module grants.
- The target user must belong to the same organization, have a supported delegated role, and be active.
- Unsupported module keys and modules disallowed for the target role are rejected.
- Permission updates carry a version; conflicting saves require a reload instead of silently overwriting another change.
- The backend records the actor, target, old/new modules, version, and timestamp in the access audit event.
- A real-time `accessPermissionsUpdated` event informs the affected user's client that permissions changed.
- Navigation and route boundaries use the current grants. Unauthorized routes redirect or display an unavailable-access page.
- API middleware enforces module checks; important finance paths explicitly consult persisted user permissions.
- Legacy `attendance` grants expand into the five attendance modules.
- Legacy `results` grants expand into academic result/exam modules **excluding** `results_approval_queue`; approval access must be granted separately.

### 3.6 Approvals and sensitive actions

General approvals support review, approve/reject actions, notes, and audit context. A request's behavior depends on its route configuration, role, and delegated-module context.

For example, fee amount corrections explicitly queue Accountant and Principal changes with `queueDelegatedRoles: true`. Other payment, reversal, and collection routes also invoke approval middleware, but that middleware can allow an already-authorized delegated module action to execute directly unless the route explicitly requires queuing.

**Website-safe wording:** “Role-based permissions, approval workflows, and audit records support controlled administrative and finance changes.”

Do not claim that every accountant transaction requires approval, or that every sensitive action uses the same universal approval policy.

### 3.7 Messaging permissions are separate

The school admin can configure which recipient categories each supported role may contact. The policy supports staff roles, the school admin, assigned students, classmates, class groups, and institution-wide groups where permitted.

| Role | Default recipient categories in the inspected policy |
|---|---|
| Student | School admin, principal, own class teachers |
| Teacher / Coordinator | School admin, principal, teachers, coordinators, assigned students, assigned class groups |
| Principal / Management / Accountant | Broad staff/student/group categories, excluding student-specific “own classmates” and “own class teachers” shortcuts |
| Store Manager / Other Staff | School admin |

These are **recipient-policy defaults**, not automatic grants to the administrative Messaging module. The school can customize policy. Classmate chat is not enabled for students by default. Teacher/coordinator class groups remain limited to assigned sections.

### 3.8 Organization, class, and ownership boundaries

- Organization membership scopes school records and identity uniqueness.
- Teacher/coordinator assignments determine relevant sections and students.
- Student enrollment determines subjects, materials, tests, and class feed visibility.
- Personal fees, salaries, attendance, results, and conversations use their own ownership/role rules.
- School-wide and class/section story audiences are differentiated.
- The mobile gateway selects the school backend using authenticated tenant context.
- These are implementation mechanisms, not proof of an external security certification or a complete independent security audit.

## 4. Detailed feature catalogue

**Catalogue provenance:** Adapted from the 11 October complete feature inventory. The current role and policy explanations in Section 3 take precedence over older shorthand in the inventory. Section 5 adds important capabilities/details found in the current source. Feature-specific availability depends on the deployed release and school configuration.

### 4.1 Shared Platform Features

#### Authentication and Account Security

- **Role-based sign-in** *(Web, Mobile, API)* — Authenticates users and sends them to the correct Admin, Teacher, Student, Coordinator, Accountant, Management, Principal, or Super Admin workspace. Parent-compatible web routes are partial; see Section 3.2.
- **JWT-protected sessions** *(Web, Mobile, API)* — Secures application routes and backend APIs with authenticated user tokens and role checks.
- **Automatic session expiry** *(Web)* — Logs a user out when the token expires, clears cached data, and returns the user to the login screen with an expiry message.
- **Mobile access and refresh tokens** *(Mobile, API, Gateway)* — Uses short-lived access tokens with encrypted refresh-token sessions for safer persistent mobile login.
- **Logout and session revocation** *(Web, Mobile, API)* — Supports standard logout, mobile-session logout, and administrative revocation of a user’s active sessions.
- **Password reset request workflow** *(Web, API)* — Users can request a password reset; authorized administrators verify the request and issue or regenerate a one-time reset code.
- **Password change** *(Web, Mobile, API)* — Authenticated users can change their password after confirming the current password.
- **Password visibility and validation controls** *(Web)* — Login and settings forms include visibility toggles, confirmation matching, validation, loading states, and user-friendly error messages.

#### Roles, Permissions, and Tenant Isolation

- **Multi-organization tenancy** *(API, AI, Gateway)* — School data and AI queries are scoped by organization so one institution cannot access another institution’s records.
- **Role-based route protection** *(Web, API)* — Admin, teacher, coordinator, student, parent, delegated staff, and super-admin routes are protected at both UI and API levels.
- **Delegated staff access** *(Web, Mobile, API)* — Principals, management staff, and accountants can receive module-by-module access instead of unrestricted administrator access.
- **Delegated module management** *(Web, Mobile, API)* — Admins can grant access to students, employees, classes, courses, attendance, finance, tests, results, exams, messaging, uploads, settings, School Story, and Ask Your Data.
- **Permission-aware navigation** *(Web, Mobile)* — Users only see modules they are allowed to access, and unauthorized URLs redirect to the first permitted module or an access-unavailable page.
- **Principal-scoped dashboard** *(Web, API)* — Principals can use an admin-style dashboard while remaining restricted to their assigned permissions.
- **Accountant finance workspace** *(Web, API)* — Accountants can receive the Finance grant plus required reference reads, and can also receive other common module grants. The Accountant role does not imply full administrator access.
- **Coordinator teacher workspace** *(Web, Mobile, API)* — Coordinators use the teacher workspace and can access their assigned teaching and class functions.
- **Parent-compatible student route guards** *(Web, Partial)* — The web guards allow a parent role into the student layout, but the core user model and a complete parent account/linking workflow are not verified. See Section 3.2.

#### Profiles, Branding, and User Experience

- **Institute branding** *(Web, Mobile, API)* — Institute name, logo, tagline, principal name, contact information, address, website, and academic year can be stored and shown across workspaces.
- **User profile management** *(Web, Mobile, API)* — Users can view and update permitted personal, contact, academic, family, and employment information.
- **Profile photo and avatar upload** *(Web, Mobile, API)* — Supports image upload, preview/cropping, storage, and updated avatars throughout the application.
- **Responsive layouts** *(Web)* — Admin, teacher, and student workspaces include desktop, tablet, and mobile navigation with collapsible sidebars.
- **Loading, empty, and error states** *(Web, Mobile)* — Main modules provide skeletons, retry actions, empty-state messages, validation feedback, and toast notifications.
- **Search, filter, sort, and pagination patterns** *(Web, Mobile)* — Large user, finance, message, content, test, and academic lists can be narrowed and browsed efficiently.
- **PDF and file preview** *(Web)* — Images, PDFs, and supported documents can be previewed without leaving the application; files can also be opened or downloaded.
- **S3 media storage with signed access** *(Web, API)* — Uploaded images, documents, audio, and videos are stored through presigned URLs instead of public object ACLs.
- **Multipart large-file uploads** *(Web, API)* — Large media uploads use multipart transfer, retry/status handling, and real-time progress reporting.
- **Push and in-app notifications** *(Web, Mobile, API)* — Devices can register for notifications; users can list notifications and mark one or all as read.
- **Real-time messaging transport** *(Web, Mobile, API)* — Messaging uses Socket.IO/realtime services for incoming messages and conversation updates.

---

### 4.2 Admin Side Features

#### 4.2.1 Admin Dashboard

- **Organization overview** *(Web, Mobile, API)* — Shows total students, employees/teachers, classes, subjects, revenue, expenses, salaries, fees, and profit indicators.
- **Live finance snapshot** *(Web, Mobile, API)* — Displays current-month revenue, collected and unpaid fees, unpaid invoices, today’s expenses, salary outflow, and profit/loss.
- **Income versus outflow trends** *(Web, Mobile, API)* — Charts compare fee revenue against expenses and salaries over time.
- **Class-wise dues** *(Web, Mobile, API)* — Summarizes outstanding fee amounts by class so administrators can find high-balance groups.
- **Student and staff attendance snapshot** *(Web, Mobile, API)* — Shows today’s present, absent, and late totals for both students and employees.
- **Admissions and hiring trends** *(Web, Mobile, API)* — Reports recent student admissions and employee hiring activity.
- **Top performers and grade insights** *(Web, Mobile, API)* — Surfaces top students and high-level academic performance information.
- **Recent activity and live calendar** *(Web, Mobile)* — Provides a current calendar/time display and a concise operational activity feed.
- **Dashboard refresh and caching** *(Web)* — Dashboard queries are cached and periodically refreshed, with manual retry when loading fails.

#### 4.2.2 User Management

- **Student directory** *(Web, Mobile, API)* — Lists students with search, filters, pagination, class/section context, status, and profile access.
- **Employee directory** *(Web, Mobile, API)* — Lists teachers and other staff with role, designation, department, status, and contact information.
- **Add student admission** *(Web, API)* — Creates a student account and admission profile with registration, class, section, personal, guardian, and academic data.
- **Add employee/staff account** *(Web, API)* — Creates staff accounts for teachers, coordinators, principals, management staff, accountants, and other supported roles.
- **Edit student and employee records** *(Web, API)* — Updates user account data and associated student or employee profiles.
- **Detailed profile view** *(Web, Mobile, API)* — Opens a full user profile with identity, academic/employment, family, and contact information.
- **Single-user deletion** *(Web, API)* — Deletes an eligible user after an explicit typed confirmation to reduce accidental removal.
- **Bulk user deletion** *(Web, API)* — Allows multiple selected records to be deleted with a second confirmation step.
- **Bulk student import** *(Web, API)* — Downloads a CSV template, validates uploaded student rows, and creates student records in bulk.
- **Bulk employee import** *(Web, API)* — Downloads an employee CSV template and imports validated staff accounts in bulk.
- **Credential/password export** *(Web, API)* — Exports employee credentials and section-level student credentials for authorized administrators.
- **Sibling-friendly admission validation** *(API)* — Allows siblings to share a phone number while keeping birth-form ID and registration number unique.
- **User status management** *(Web, API)* — Supports active/inactive state changes and related filtering in user lists.
- **Staff access assignment** *(Mobile, API)* — Admin mobile workspace can review and configure delegated module permissions for supported staff roles.

#### 4.2.3 Course and Subject Management

- **Subject catalogue** *(Web, Mobile, API)* — Creates, lists, searches, edits, and deletes school subjects.
- **Subject metadata** *(Web, API)* — Stores subject name, code, marks/credit-related values, and a descriptive summary.
- **Teacher subject assignment** *(Web, API)* — Assigns or removes teachers against subjects in a specific class section.
- **Course visibility to teachers and students** *(Web, Mobile, API)* — Assigned courses flow into teacher course planning and student course/topic views.

#### 4.2.4 Class, Section, Classroom, and Timetable Management

- **Class CRUD** *(Web, Mobile, API)* — Creates, views, edits, searches, and deletes classes with name and description.
- **Section CRUD** *(Web, Mobile, API)* — Creates, updates, searches, and deletes sections within a class.
- **Section coordinator assignment** *(Web, API)* — Assigns or changes the coordinator responsible for a section.
- **Student section assignment** *(Web, API)* — Adds available students to a section and removes or transfers students as authorized.
- **Teacher section assignment** *(Web, API)* — Associates teachers with the section and its subjects.
- **Section workspace** *(Web)* — Provides Teachers, Students, Subjects, Schedule, and Teaching Material tabs for one section.
- **Class/section statistics** *(Web)* — Shows counts for teachers, students, subjects, and schedule-related information.
- **Classroom management** *(Web, API)* — Creates, searches, edits, and deletes physical classrooms with room number, capacity, facilities, location, and notes.
- **Timetable creation** *(Web, API)* — Creates a schedule for a class/section and adds subject, teacher, classroom, period, and time slots.
- **Timetable editing and deletion** *(Web, API)* — Updates or removes schedules and individual schedule slots.
- **Automatic timetable template** *(API)* — Generates a starting schedule template for a selected class and section.
- **Teacher availability lookup** *(API)* — Finds available teachers while administrators prepare timetable slots.
- **Substitute teacher management** *(API)* — Adds or removes a substitute teacher for an existing timetable slot.

#### 4.2.5 Approvals and Administrative Requests

- **Approval queue** *(Web, Mobile, API)* — Lists pending and historical administrative requests with entity and action filters.
- **Request detail review** *(Web, API)* — Opens the full request, changed fields, requester information, and audit context before a decision.
- **Approve or reject requests** *(Web, Mobile, API)* — Authorized admins can accept or reject a request and attach an optional review note.
- **Password reset verification** *(Web, API)* — Reviews identity evidence, records the verification method, and approves or rejects password-reset requests.
- **One-time reset code generation** *(Web, API)* — Generates, copies, and if necessary regenerates a reset code for an approved request.
- **Approval history** *(Web, API)* — Keeps previously reviewed requests available for audit and follow-up.

#### 4.2.6 Class Tests and Quizzes

- **Create class tests** *(Web, Mobile, API)* — Builds online or paper tests for a selected class, section, subject, date, time limit, and total marks.
- **Question type support** *(Web, API)* — Supports multiple-choice, true/false, fill-in-the-blank, short answer, long answer, and matching-column questions.
- **Manual question authoring** *(Web)* — Teachers/admins can add, duplicate, reorder, edit, and remove questions and answer options.
- **AI question generation/import** *(Web, AI)* — Generates questions or imports suitable AI-created assignments into a class test.
- **Test scheduling and publication status** *(Web, API)* — Saves draft, scheduled, active, or other supported test states and controls student availability.
- **Recurring test settings** *(Web, API)* — Supports one-time and configured recurrence values where enabled by the test form.
- **Paper test mode** *(Web, API)* — Creates tests intended for offline/paper delivery while retaining digital result entry.
- **Edit and delete tests** *(Web, Mobile, API)* — Updates test details/questions or removes a test after confirmation.
- **Test detail and student roster** *(Web, API)* — Shows test information, assigned students, submission state, and marks.
- **Bulk paper-test marks entry** *(Web, API)* — Saves paper-test results for many students in a single operation.
- **Per-student answer review** *(Web, API)* — Reviews answers, toggles correctness, awards question marks, and adds question-level or overall remarks.

#### 4.2.7 Exam Planning

- **Exam plan creation** *(Web, API)* — Creates a named exam session for an academic year, scope, exam type/term, classes, and sections.
- **Subject paper setup** *(Web, API)* — Adds exam subjects with dates, times, marks, rooms, teachers, and invigilator information.
- **Exam plan editing and deletion** *(Web, API)* — Updates complete sessions or individual subject papers and removes obsolete plans.
- **Scheduled exam plans** *(Web, API)* — Separates planned/draft exams from scheduled sessions ready for marks entry.
- **Date-sheet generation** *(Web, API)* — Produces a class-and-section-specific date sheet from the scheduled exam plan.
- **Date-sheet print/download** *(Web)* — Opens a print-friendly date sheet that can be printed or saved as PDF.
- **Exam history** *(Web, API)* — Searches and filters past sessions by plan, subject, teacher, room, year, and status.
- **Exam duty assignment** *(Web, API)* — Stores invigilator/teacher duty details that also appear on the teacher dashboard.
- **Audit notes for exam changes** *(Web, API)* — Captures contextual notes when changing important exam plan state.

#### 4.2.8 Academic Results

- **Result profile builder** *(Web, API)* — Creates reusable result structures that define term/annual calculation rules, assessments, weights, grades, and remarks.
- **Term and annual weightage** *(Web, API)* — Configures how term results contribute to an annual result.
- **Assessment/component weightage** *(Web, API)* — Maps quizzes, tests, assignments, and other components into result calculations.
- **Grade boundary management** *(Web, API)* — Defines grade names, minimum/maximum scores, GPA values, and remarks.
- **Assessment setup** *(Web, API)* — Creates, lists, edits, and archives/deletes subject assessments for a class, section, term, and result profile.
- **Marks-entry workspace** *(Web, API)* — Filters by exam plan, class, section, and subject, then displays the appropriate student marks grid.
- **Bulk marks saving** *(Web, API)* — Saves marks for multiple students and supports draft/submitted status changes.
- **Result approval queue** *(Web, API)* — Lets admins review a paper’s student marks before final approval.
- **Term result cards** *(Web, API)* — Generates and displays a selected student’s term result card with subjects, marks, grades, and remarks.
- **Annual result cards** *(Web, API)* — Generates annual consolidated result cards from configured terms and weightages.
- **Result-card remarks** *(Web, API)* — Adds or updates authorized teacher/admin remarks on generated result cards.
- **Class result report** *(Web, API)* — Shows subject summaries and student rankings for a selected class, section, term, or annual report type.
- **Result report export** *(Web, API)* — Exposes export-ready class report data for downloading or external processing.
- **Exam-term CRUD** *(Web, API)* — Adds, lists, edits, and deletes terms used by tests and the academic-results system.

#### 4.2.9 Attendance and ID Cards

- **Student daily attendance** *(Web, Mobile, API)* — Loads a class/section roster for a date and marks students present, absent, late, or on leave in bulk.
- **Employee daily attendance** *(Web, Mobile, API)* — Records daily attendance status for teachers and staff.
- **Attendance filters and search** *(Web, Mobile)* — Filters records by date, class, section, person, and attendance state.
- **Attendance summaries** *(Web, Mobile, API)* — Calculates present, absent, late, leave, unmarked, and attendance-rate totals.
- **Date-range attendance reports** *(Web, API)* — Generates student or employee attendance reports across a selected date range.
- **Attendance export data** *(Web, API)* — Supplies report-ready records for CSV/Excel-style export.
- **Individual student attendance history** *(Web, API)* — Opens a student’s attendance entries, summary, and monthly/section history.
- **Student ID card generation** *(Web, API)* — Produces student identity cards with profile and scannable identification data.
- **Employee ID card generation** *(Web, API)* — Produces staff identity cards for attendance and institutional identification.
- **Attendance machine dashboard** *(Web, API)* — Shows machine attendance status and provides manual/scanner-driven attendance actions.
- **Attendance timing rules** *(Web, API)* — Configures check-in timing boundaries used to decide present, late, and absent states.
- **QR/manual scan attendance** *(Web, API)* — Records attendance from a scanned or entered identity value.
- **Automatic absence marking** *(API)* — Marks unrecorded students absent after the configured attendance window.

#### 4.2.10 Finance Management

- **Fee challan creation** *(Web, Mobile, API)* — Creates student fee challans with billing period, due date, fee lines, discounts, late fees, and notes.
- **Challan search and filters** *(Web, Mobile)* — Finds challans by student, registration number, class, section, status, month, year, and fee type.
- **Challan detail and payment ledger** *(Web, API)* — Shows original charges, adjustments, paid amounts, balance, transaction details, and payment history.
- **Partial and line-item payment collection** *(Web, API)* — Records payments against selected fee components instead of requiring the full balance at once.
- **Multi-month/advance collection** *(Web, API)* — Previews and collects several future billing months in one transaction with monthly allocation details.
- **Payment proof review** *(Web, API)* — Reviews student-uploaded proof and approves or rejects the payment entry.
- **Challan adjustments and corrections** *(Web, API)* — Adds audited positive or negative fee-line corrections with a required reason.
- **Challan status and due-date updates** *(Web, API)* — Changes due date, payment state, and other supported challan fields.
- **Challan and collection deletion** *(Web, API)* — Permanently removes an eligible challan or collection only after typed confirmation.
- **Fee receipt generation and printing** *(Web)* — Opens a print-ready fee receipt for a challan or multi-month collection.
- **Automatic fee billing policy** *(Web, API)* — Configures manual, monthly, or other supported billing modes with issue day, due day, and class fee rules.
- **Billing preview before activation** *(Web, API)* — Shows which students and amounts will be billed before automatic challan generation is enabled.
- **Run billing now** *(Web, API)* — Allows an authorized user to execute the active billing policy immediately.
- **Per-student billing exception** *(Web, API)* — Overrides or disables the normal billing cycle for a specific student with an audit reason.
- **Class fee structures** *(Web, API)* — Configures class-level fee components, amounts, frequency, and anchor month.
- **Bank account management** *(Web, API)* — Adds, edits, searches, and deletes institutional bank accounts and payment instructions shown to students.
- **Salary generation** *(Web, Mobile, API)* — Generates monthly salary records for individual employees or in bulk.
- **Salary calculation** *(Web, API)* — Tracks base salary, allowances, bonuses, deductions, penalties, provident fund, taxes, net salary, and status.
- **Special salary payments** *(Web, API)* — Adds bonus, Eidi, incentive, or other one-off payment items.
- **Salary payment and history** *(Web, Mobile, API)* — Marks salaries paid/unpaid, filters records, and opens detailed employee salary history.
- **Expense CRUD** *(Web, Mobile, API)* — Adds, lists, views, edits, and deletes expenses with category, subcategory, vendor, date, amount, method, and receipt.
- **OCR expense extraction** *(Web, AI/API)* — Uploads a receipt or bill, extracts fields, lets the admin review them, and uses them to populate an expense.
- **Expense payment status** *(Web, API)* — Tracks whether an expense is pending or paid and records the associated payment information.
- **Finance reporting dashboard** *(Web, API)* — Provides overview, revenue, expense, salary, and trend tabs for a selected reporting period.
- **Finance KPIs** *(Web, API)* — Calculates challans issued, submitted fees, pending amount, current charges, arrears, expenses, salary outflow, cash flow, and profit/loss.
- **Revenue and expense charts** *(Web)* — Visualizes monthly cash movement, class-wise revenue, revenue status, expense categories, and payment methods.
- **Salary analytics** *(Web)* — Shows paid/unpaid totals, salary trends, unique employees, and special-payment breakdowns.
- **Finance report export** *(Web, API)* — Provides downloadable/printable finance report data for the selected period.

#### 4.2.11 Document Uploads and Announcements

- **Audience-based document upload** *(Web, API)* — Uploads a titled document for students, teachers, or other staff audiences.
- **Class/section/subject targeting** *(Web, API)* — Restricts student documents to the intended class, section, and subject.
- **Staff-role targeting** *(Web, API)* — Sends documents or notices to a selected employee role.
- **Uploaded-document library** *(Web, API)* — Lists uploaded documents with search, metadata, preview, edit, and deletion.
- **Class announcements** *(Web, API)* — Creates notices for a selected class and exposes them to the correct students and teachers.
- **Attachment support** *(Web, API)* — Notices can include supported files that recipients can preview or download.

#### 4.2.12 Admin Messaging

- **Conversation creation** *(Web, Mobile, API)* — Starts individual or scoped conversations with students, classes/sections, teachers, or employee roles.
- **Live message thread** *(Web, Mobile, API)* — Sends and receives messages in a realtime conversation view.
- **File attachments** *(Web, Mobile, API)* — Adds images, documents, audio, video, and other allowed files to a new conversation or message.
- **Recipient directory and targeting** *(Web, API)* — Chooses recipients by type, class, section, individual student, employee role, or employee.
- **Conversation search and unread state** *(Web, Mobile, API)* — Searches chats, displays unread status, and marks opened conversations as read.
- **Message editing and deletion** *(Web, Mobile, API)* — Edits or deletes eligible messages; entire conversations can also be removed.
- **Message reactions** *(Web, Mobile, API)* — Adds or updates emoji reactions and displays who reacted.
- **Multi-message selection** *(Web)* — Selects messages in an admin conversation for supported bulk actions.

#### 4.2.13 Ask Your Data and Admin AI

- **Natural-language school data queries** *(Web, Mobile, AI)* — Admins can ask questions about their organization’s live data instead of building manual database queries.
- **Tenant-scoped MCP data tools** *(AI)* — The School Management Bot queries organization-filtered collections through a controlled set of MCP tools.
- **Operational and academic analytics** *(AI)* — The bot can retrieve counts, distributions, attendance, fees, salaries, expenses, classes, students, and other school data.
- **Tables and chart artifacts** *(Web, AI)* — AI answers can include structured tables and chart-ready artifacts in addition to narrative summaries.
- **Conversation history** *(Web, AI)* — Stores organization-scoped admin conversations so previous analysis can be reopened.
- **Conversation deletion safeguard** *(Web, AI)* — Requires typed confirmation before permanently deleting a saved AI conversation.
- **Educational data file upload** *(Web, AI)* — The additional AI Education Assistant can upload and retain supported datasets for analysis.
- **AI dataset analysis** *(Web, AI)* — Generates metrics, charts, correlations, trends, recommendations, limitations, and follow-up chat answers from uploaded data.

#### 4.2.14 School Story

- **School-wide social feed** *(Web, Mobile, API)* — Admins can publish school-wide updates while viewing posts from the institution’s story feed.
- **Quick announcements and rich posts** *(Web, Mobile)* — Supports fast text announcements as well as full posts with media and scheduling.
- **Image, video, document, and PDF posts** *(Web, Mobile, API)* — Uploads rich media with progress feedback and previews it inside the feed.
- **Scheduled publishing** *(Web, API)* — Schedules a post for a future date/time and allows the schedule to be removed before publishing.
- **Post search and incremental updates** *(Web, API)* — Searches feed content and detects new posts without forcing a full-page refresh.
- **Likes, comments, and threaded replies** *(Web, Mobile, API)* — Users can react to a post, comment, reply to comments, and edit/delete eligible contributions.
- **Upcoming story events** *(Web, API)* — Creates and displays upcoming school or class events alongside the feed.
- **Role-aware post visibility** *(API)* — Enforces school-wide versus class/section visibility so users only receive posts within their permitted scope.

#### 4.2.15 General Settings

- **Institute profile settings** *(Web, API)* — Updates brand identity, logo, institute details, principal, contact information, website, address, and academic year.
- **Terms and conditions** *(Web, API)* — Administrators can edit the institution’s terms while delegated users can view the published content.
- **Privacy policy retrieval** *(API)* — Provides authenticated access to the organization’s saved privacy policy.
- **Fee currency setting** *(Web, API)* — Sets the currency symbol used across fee, salary, expense, and finance interfaces.
- **School rules management** *(Web, API)* — Adds and maintains institutional rule titles and descriptions.
- **Academic result settings** *(Web, API)* — Opens result profiles, assessment weightage, grading rules, and related academic calculation configuration.
- **Bank and challan settings** *(Web, API)* — Configures bank accounts and the details/instructions printed or shown with fee challans.
- **Admin profile settings** *(Web, API)* — Updates administrator name, email, phone number, and avatar.
- **System preferences** *(Web)* — Stores supported interface preferences such as language and display-related values.
- **Security settings** *(Web, API)* — Changes account password and exposes security-focused controls from the settings area.
- **Classroom settings** *(Web, API)* — Manages physical rooms directly from General Settings.

---

### 4.3 Teacher Side Features

#### 4.3.1 Teacher Dashboard

- **Teacher profile header** *(Web, Mobile, API)* — Shows the teacher’s name, avatar, assigned role, and institute branding.
- **Total student and section summary** *(Web, Mobile, API)* — Counts students across the teacher’s assigned sections.
- **Today’s classes** *(Web, Mobile, API)* — Displays today’s timetable, periods, subjects, sections, rooms, and substitutions.
- **Student attendance rate** *(Web, Mobile, API)* — Summarizes the monthly attendance rate for assigned students.
- **Student pass/fail rate** *(Web, Mobile, API)* — Presents high-level performance counts for the teacher’s students.
- **Exam duties** *(Web, Mobile, API)* — Shows assigned invigilation or exam responsibilities.
- **Assignment and submission summary** *(Web, Mobile, API)* — Reports open assignments, due work, and submission progress.
- **Students needing attention** *(Web, Mobile, API)* — Highlights students with weak performance, attendance, or incomplete work.
- **Teacher’s own attendance** *(Web, Mobile, API)* — Displays the teacher’s attendance history and current attendance metrics.
- **Announcements and notifications** *(Web, Mobile, API)* — Shows recent institutional notices and teacher-relevant alerts.
- **Assigned sections and birthdays** *(Web, Mobile, API)* — Lists teaching assignments and students with birthdays today.
- **Salary summary** *(Web, Mobile, API)* — Displays recent salary status and key payment totals.

#### 4.3.2 My Classes

- **Assigned class and section list** *(Web, Mobile, API)* — Lists only the classes and sections allocated to the logged-in teacher/coordinator.
- **Class search** *(Web, Mobile)* — Searches assigned classes by name and description.
- **Section overview** *(Web, API)* — Shows section information and provides Teachers, Students, Subjects, Assignments, Materials, and Schedule views.
- **Teacher directory inside a class** *(Web, API)* — Displays other assigned teachers and their subject responsibilities.
- **Student roster and profile details** *(Web, API)* — Searches students and opens personal, family, academic, status, and benefit information.
- **Subject list** *(Web, Mobile, API)* — Shows subjects the teacher handles in the selected section.
- **Class timetable** *(Web, Mobile, API)* — Presents weekly periods, rooms, teachers, and substitute information for the section.

#### 4.3.3 Course and Topic Management

- **Assigned course dashboard** *(Web, Mobile, API)* — Shows each assigned subject together with its class and section.
- **Topic calendar and daily teaching plan** *(Web, Mobile, API)* — Organizes topics by date and separates today, upcoming, recent, and completed teaching work.
- **Create and edit topics** *(Web, Mobile, API)* — Stores chapter, topic name, date/time, lesson details, and teaching objectives.
- **Topic status workflow** *(Web, Mobile, API)* — Marks a topic as draft, planned, in progress, or completed.
- **Topic deletion** *(Web, Mobile, API)* — Removes an obsolete topic after confirmation.
- **Teaching resource attachments** *(Web, Mobile, API)* — Uploads up to the supported file count and attaches documents, images, or other resources to a topic.
- **Recorded lesson video** *(Web, Mobile, API)* — Uploads or records a lesson video and makes it available from the topic detail page.
- **Student visibility control** *(Web, Mobile, API)* — Shows or hides a topic and its learning content from the assigned students.
- **AI oral quiz generation** *(Web, Mobile, AI)* — Generates an oral quiz for a topic with selectable question type and count, then supports answer reveal.
- **Topic progress statistics** *(Mobile)* — Shows total, completed, upcoming, and draft topic counts.

#### 4.3.4 Announcements and Teaching Materials

- **Class announcement list** *(Web, Mobile, API)* — Shows announcements relevant to the teacher’s assigned classes and sections.
- **Announcement search and class filter** *(Web)* — Finds notices by text and narrows them to a selected class.
- **Announcement attachment preview** *(Web, API)* — Previews or downloads supported files attached to a notice.
- **Teaching material creation** *(Web, API)* — Uploads a titled, described, typed resource against a section subject.
- **Teaching material search and filters** *(Web)* — Searches materials and filters the list by resource type.
- **Teaching material edit/delete** *(Web, API)* — Updates metadata/files or removes an outdated teaching resource.

#### 4.3.5 Attendance

- **Assigned-section attendance** *(Web, Mobile, API)* — Selects an assigned class and section and loads its student roster for a date.
- **Bulk attendance marking** *(Web, Mobile, API)* — Marks all students present, absent, late, or on leave and saves the roster together.
- **Individual attendance updates** *(Web, API)* — Changes or deletes a previously saved attendance entry.
- **Unmarked student validation** *(Web)* — Prevents an incomplete bulk submission and highlights how many students still need a status.
- **Attendance overview and history** *(Web, Mobile, API)* — Shows daily totals, past attendance dates, and detailed records.
- **Attendance search** *(Web)* — Finds a student by name, email, or enrollment/registration identifier.
- **Teacher self-attendance report** *(Web, Mobile, API)* — Gives teachers access to their own attendance range and status history.

#### 4.3.6 Assignments and Grading

- **Assignment creation** *(Web, API)* — Creates class assignments with title, type, subject, description, assigned/due dates, points, result inclusion, and attachments.
- **Assignment list and filters** *(Web, API)* — Searches assignments and filters them by class or section.
- **Assignment editing and deletion** *(Web, API)* — Updates assignment instructions, dates, settings, and files or removes an assignment.
- **Submission tracking** *(Web, API)* — Displays total students and counts for completed, submitted, in-progress, and missing work.
- **Student-level progress** *(Web, API)* — Opens each student’s status, submission time, files, and previous grade information.
- **Submission file preview/download** *(Web)* — Lets teachers inspect uploaded student work in the browser or download the original file.
- **Grading and feedback** *(Web, API)* — Awards marks within the assignment total, sets submission status, and saves written feedback.
- **Teacher submission correction** *(Web, API)* — Allows an authorized teacher to update a student’s recorded submission details.
- **Assignment result inclusion** *(Web, API)* — Controls whether assignment marks contribute to academic results.

#### 4.3.7 Class Tests and Results

- **Teacher test management** *(Web, Mobile, API)* — Creates, searches, filters, views, edits, changes status, and deletes tests for assigned sections.
- **Manual and AI-generated questions** *(Web, AI)* — Builds tests manually or generates new questions through AI.
- **Paper and online delivery** *(Web, API)* — Supports paper tests for manual marks entry and online tests for student attempts.
- **Student result entry** *(Web, Mobile, API)* — Records or bulk-saves marks for students and adds overall remarks.
- **Answer-level review** *(Web, API)* — Reviews a student’s individual responses, correctness, awarded marks, and per-question remarks.
- **Subject marks upload** *(Web, API)* — Saves marks for all students in a class/section/subject combination.
- **Marks-entry workspace** *(Web, Mobile, API)* — Teachers can access the shared academic marks-entry flow for authorized assessments.
- **Result inclusion settings** *(Web, API)* — Tests can be configured to contribute to or remain outside formal result calculations.

#### 4.3.8 AI Teaching Assistant

- **AI presentation generation** *(Web, AI)* — Generates a classroom slide deck from class, section, subject, topic, instructions, slide count, and design style.
- **Professional slide editor** *(Web)* — Edits the generated deck title, focus, slide content, bullet points, visuals, and speaker/teacher notes.
- **Presentation history** *(Web, AI)* — Saves generated presentations and lists recent decks for reopening.
- **Presentation export** *(Web, AI)* — Supports server-generated downloadable presentation output where configured.
- **AI assignment generation** *(Web, AI)* — Creates a complete assignment from topic, question type, instructions, question count, and answer-key preference.
- **Generated assignment editor** *(Web)* — Edits title, instructions, questions, options, answers, explanations, learning objectives, and grading rubric.
- **Assignment generation history** *(Web, AI)* — Lists previous AI assignments and allows saved items to be reopened or managed.
- **AI lesson plan generation** *(Web, AI)* — Produces lesson objectives, materials, structured activities, timings, and instructional guidance.
- **Lecture assistant chat** *(Web, AI)* — Answers teaching questions and develops lecture content in a threaded chat interface.
- **Lecture file context** *(Web, AI)* — Accepts documents and images as context for teaching-help questions.
- **AI infographic generation** *(AI/API)* — Generates an infographic structure and optional image from an uploaded teacher document, with history and PNG export.
- **AI usage budget enforcement** *(AI)* — Checks the organization/role’s monthly AI budget before a request and records cost/tokens after completion.

#### 4.3.9 Teacher NoteBookLM

- **Teacher document library** *(Web, AI)* — Uploads and processes teacher documents for retrieval, summarization, and content generation.
- **Document-grounded chat** *(Web, AI)* — Answers questions using the selected document rather than relying only on general model knowledge.
- **Document summary** *(Web, AI)* — Produces a structured summary of the uploaded source.
- **Flashcard generation** *(Web, AI)* — Creates configurable study flashcards from document content.
- **Quiz generation** *(Web, AI)* — Builds a customizable quiz from the selected document.
- **Audio overview** *(Web, AI)* — Generates an audio explanation/overview with customization and playback controls.
- **Mind-map generation** *(Web, AI)* — Converts document concepts into a visual mind map.
- **Generated asset history** *(Web, AI)* — Stores and retrieves the teacher’s generated NotebookLM materials.

#### 4.3.10 Teacher Messaging and Class Story

- **Teacher conversations** *(Web, API)* — Starts conversations with a class, section, student, staff role, or employee and sends realtime messages.
- **Attachments, reactions, editing, and deletion** *(Web, API)* — Supports file messages, emoji reactions, message edits, message deletion, and conversation deletion.
- **Conversation search and read status** *(Web, API)* — Searches chats and marks opened threads as read.
- **Class Story feed** *(Web, API)* — Publishes and views classroom activities, milestones, updates, and media for assigned students.
- **Audience selection** *(Web, API)* — Targets a story post to an assigned class/section or, where permitted, a broader audience.
- **Story media and PDF support** *(Web, API)* — Uploads images, video, documents, and PDFs with large-file progress support.
- **Scheduled class posts** *(Web, API)* — Publishes immediately or schedules a class story post for later.
- **Likes, comments, replies, and events** *(Web, API)* — Supports social engagement and upcoming classroom events within the feed.

#### 4.3.11 Teacher Finance and Settings

- **Salary history** *(Web, Mobile, API)* — Shows paid, pending, and historical salary records for the logged-in teacher.
- **Current salary breakdown** *(Web, API)* — Displays base salary, additions, deductions, tax, provident fund, penalties, and net salary.
- **Annual salary summary** *(Web, API)* — Summarizes salary totals across the selected year.
- **Salary report download options** *(Web)* — Provides teacher-facing report/download actions for available salary statements.
- **Teacher profile management** *(Web, API)* — Updates teacher information and profile photo.
- **Teacher account security** *(Web, API)* — Changes the account password with current-password verification.
- **Notification preferences** *(Web)* — Controls supported teacher notification categories and delivery preferences.
- **Language and interface preferences** *(Web)* — Stores supported display and language preferences.

---

### 4.4 Student Side Features

#### 4.4.1 Student Dashboard

- **Personalized dashboard** *(Web, Mobile, API)* — Shows the student’s name, profile, class, section, registration details, and institute branding.
- **Today’s timetable** *(Web, Mobile, API)* — Displays the day’s subjects, periods, teachers, rooms, and substitutions.
- **Today’s attendance status** *(Web, Mobile, API)* — Shows whether the student is present, absent, late, on leave, or not yet marked.
- **Pending task summary** *(Web, Mobile, API)* — Counts outstanding assignments and highlights items due today.
- **Monthly attendance rate** *(Web, Mobile, API)* — Summarizes present and absent counts for the current month.
- **Fee due summary** *(Web, Mobile, API)* — Shows outstanding balance and warns when payments are overdue.
- **Scheduled class tests** *(Web, Mobile, API)* — Lists upcoming and active tests with date/time and subject information.
- **Assignment snapshot** *(Web, Mobile, API)* — Displays recent assignments, due dates, and submission status.
- **Alerts and announcements** *(Web, Mobile, API)* — Surfaces relevant school/class notices and urgent student alerts.
- **Profile summary** *(Web, Mobile, API)* — Gives quick access to core identity and academic information.

#### 4.4.2 My Class, Courses, and Schedule

- **Class information** *(Web, Mobile, API)* — Shows the student’s enrolled class and section details.
- **Teacher directory** *(Web, Mobile, API)* — Lists teachers connected to the student’s class, including their assigned subjects.
- **Subject directory** *(Web, Mobile, API)* — Lists the subjects assigned to the student’s section.
- **Course detail pages** *(Web, Mobile, API)* — Opens one subject and displays teacher-published topics, descriptions, objectives, dates, and learning resources.
- **Topic attachments and video** *(Web, API)* — Previews/downloads teacher attachments and plays recorded lesson videos available to students.
- **Weak-topic lecture recommendations** *(Web, AI)* — Recommends relevant lectures for weak topics identified from the student’s learning/performance context.
- **Weekly class schedule** *(Web, Mobile, API)* — Displays the section timetable by day and period with subject, teacher, room, and substitute details.
- **Subject list from timetable** *(Web)* — Provides a quick consolidated list of subjects appearing in the schedule.

#### 4.4.3 Announcements and Class Materials

- **Student announcements** *(Web, API)* — Displays notices targeted to the student’s class/section or broader school audience.
- **Announcement detail** *(Web)* — Opens the full title, description, creator, date, audience information, and attachment.
- **Attachment preview/download** *(Web)* — Previews images, PDFs, and supported files or downloads the original.
- **Class-material library** *(Web, API)* — Lists teacher/admin resources available to the student’s section.
- **Material search and subject filtering** *(Web)* — Searches by title, description, subject, or creator and filters by assigned subject.
- **Grid and list views** *(Web)* — Switches the class-material library between visual cards and a compact list.
- **Material detail page** *(Web)* — Shows full resource metadata, description, section information, and all attached files.

#### 4.4.4 Attendance Report

- **Attendance KPI cards** *(Web, Mobile, API)* — Shows overall rate, attended count, present, late, absent, and leave totals.
- **Attendance health indicator** *(Web)* — Converts the student’s attendance percentage into an easy-to-understand status and progress view.
- **Date-range and status filters** *(Web, API)* — Narrows attendance records by the selected period and attendance state.
- **Daily attendance history** *(Web, Mobile, API)* — Displays each attendance date, check-in status, timings, and related notes where available.

#### 4.4.5 Assignments

- **Assignment inbox** *(Web, Mobile, API)* — Lists all assignments issued to the student’s section.
- **Assignment status tabs** *(Web, Mobile)* — Separates all, active, overdue, and completed assignments.
- **Search and subject filter** *(Web)* — Finds work by title, description, subject, or teacher.
- **Assignment detail** *(Web, Mobile, API)* — Shows instructions, teacher, subject, issue/due dates, marks, result inclusion, and attached files.
- **File-based submission** *(Web, Mobile, API)* — Uploads one or more supported files and an optional note for the teacher.
- **Submission preview** *(Web)* — Previews selected files before sending the assignment.
- **Resubmission** *(Web, API)* — Allows another submission when the assignment and current status permit it.
- **Submission and grade status** *(Web, Mobile, API)* — Shows submitted time, progress/status, teacher feedback, marks, and completion information.

#### 4.4.6 Tests and Quizzes

- **Tests and quizzes list** *(Web, Mobile, API)* — Shows all tests assigned to the student’s class and section.
- **Test status tabs** *(Web, Mobile)* — Separates available, scheduled, in-progress, submitted, and overdue tests.
- **Search and subject filter** *(Web)* — Finds tests by title, description, or subject.
- **Authenticated test start** *(Web, API)* — Starts an eligible online test and records the student attempt.
- **Timed test experience** *(Web)* — Displays progress, remaining time, question navigation, and supported answer controls.
- **Multiple question formats** *(Web, API)* — Supports MCQ, true/false, fill blank, short/long answer, and matching-column responses.
- **Test submission** *(Web, API)* — Submits the completed attempt and saves answers/results.
- **Instant result view where allowed** *(Web, API)* — Shows score, percentage, and answer review based on test settings.
- **Detailed test result history** *(Web, API)* — Opens a past test with marks, response correctness, explanations, and teacher remarks.

#### 4.4.7 Exam Date Sheets and Results

- **Exam date-sheet list** *(Web, Mobile, API)* — Lists exam sessions/date sheets relevant to the student’s class and section.
- **Date-sheet search and details** *(Web)* — Searches by plan or subject and opens the complete schedule with dates, times, marks, rooms, and instructions.
- **Date-sheet print/download** *(Web)* — Creates a print-friendly exam schedule that can be saved as PDF.
- **Result-card library** *(Web, Mobile, API)* — Lists generated term and annual result cards available to the student.
- **Result search** *(Web)* — Searches result cards by title, class, or grade.
- **Detailed result card** *(Web, Mobile)* — Displays subjects, assessments, obtained/total marks, grades, GPA/percentage, remarks, and overall outcome.
- **Legacy academic result view** *(Web, API)* — Also exposes test, subject-mark, assignment, term, and generated-result summaries in the older results route.
- **Result PDF export** *(Web)* — Converts the legacy result card view into a downloadable PDF.

#### 4.4.8 Ask AI Learning Instructor

- **General learning chat** *(Web, AI)* — Lets a student ask questions, share an attempt, and receive guided explanations from the AcadoAI Learning Instructor.
- **Conversation management** *(Web, AI)* — Creates multiple chats, reloads history, renames/selects conversations, and deletes unwanted chats.
- **File-assisted questions** *(Web, AI)* — Attaches supported documents or images to provide context for a question.
- **Voice input** *(Web)* — Uses the browser microphone to turn speech into a message.
- **Read-aloud responses** *(Web)* — Speaks an AI answer aloud and allows playback to be stopped.
- **Edit and regenerate** *(Web, AI)* — Edits a previous prompt and requests a newly generated answer.
- **Copy response** *(Web)* — Copies an AI response to the clipboard.
- **Math and rich Markdown rendering** *(Web)* — Displays formatted Markdown, equations, tables, and supported chart content.
- **AI budget and model controls** *(AI)* — Enforces the student role’s monthly allowance and uses the configured model for the feature.

#### 4.4.9 Subject AI Assistants

- **Assigned-subject validation** *(Web, AI)* — Only shows assistants for subjects actually assigned to the student’s class/section.
- **Subject-specific tutoring** *(Web, AI)* — Provides specialized assistants for Mathematics, Physics, Chemistry, Biology/Science, English, Urdu, Computer Science, Pakistan Studies, and general subjects where configured.
- **Per-subject teaching behavior** *(AI)* — Applies different instructional prompts, terminology, response language, and problem-solving style for each subject.
- **Subject conversation history** *(Web, AI)* — Stores chat history separately for each student and subject.
- **Clear subject chat** *(Web, AI)* — Deletes the current subject assistant’s conversation history after confirmation.
- **Context file upload** *(Web, AI)* — Uploads a document or image for the chosen subject assistant to use as context.
- **Image preview inside chat** *(Web)* — Opens an attached or generated image at full size.

#### 4.4.10 3D AI Tutor

- **One-time authenticated launch** *(Web, API)* — Launches the standalone tutor through a short-lived, single-use code exchanged for an HttpOnly session cookie; the main JWT is never placed in the URL.
- **Subject and topic selection** *(Web)* — Starts a lesson for an assigned subject and a student-entered learning topic.
- **Animated 3D teacher avatars** *(Web, AI)* — Offers reviewed Sara and James avatar/voice combinations in a 3D classroom.
- **Realtime voice tutoring** *(Web, AI)* — Uses hold-to-talk microphone input and low-latency spoken AI responses.
- **English and Pakistani Urdu instruction** *(Web, AI)* — Starts in simple English and can switch to everyday Pakistani Urdu when the student asks.
- **Interactive visual board** *(Web, AI)* — Renders validated equations, steps, sets, tables, charts, shapes, fractions, clocks, number lines, coordinate graphs, timelines, cycles, comparisons, and labeled diagrams.
- **Verified math solving** *(Web, AI)* — Uses a restricted local math evaluator and step-by-step board delivery for supported numerical work.
- **Subject-aware tutoring policies** *(AI)* — Chooses an appropriate tutoring profile for reasoning, language, science, or other subject families.
- **Screen sharing** *(Web)* — Lets the student share a screen with the tutor, preview the shared content, mute/unmute, and stop sharing.
- **Tutor usage limits and conflict handling** *(Web, API)* — Enforces launch/credit limits and shows clear access, expired-session, or session-conflict messages.

#### 4.4.11 Student NoteBookLM

- **Source document upload** *(Web, AI)* — Uploads and processes study documents into a personal source library.
- **Document selection and summary** *(Web, AI)* — Opens a source and shows its AI-generated summary and extracted learning context.
- **Document-grounded chat** *(Web, AI)* — Answers student questions using the selected source.
- **Audio overview generation** *(Web, AI)* — Creates customizable audio explanations and stores them for playback.
- **Mind-map generation** *(Web, AI)* — Produces a visual map of concepts and relationships from the document.
- **Flashcard generation** *(Web, AI)* — Builds customizable flashcard sets for active recall.
- **Quiz generation** *(Web, AI)* — Creates configurable practice quizzes with an interactive quiz viewer.
- **Creative Studio history** *(Web, AI)* — Lists generated audio, mind maps, flashcards, and quizzes for reuse.

#### 4.4.12 Fees and Payments

- **My challans** *(Web, Mobile, API)* — Lists paid, unpaid, partially paid, pending-review, and overdue fee challans.
- **Fee breakdown** *(Web, API)* — Shows each fee component, discount, late fee, paid amount, and remaining balance.
- **Bank/payment instructions** *(Web, API)* — Displays the institute’s configured bank account and payment directions.
- **Offline payment allocation** *(Web, API)* — Lets a student choose how much of the payment applies to each outstanding fee line.
- **Payment proof upload** *(Web, Mobile, API)* — Uploads a receipt/challan image or document with transaction/reference number for admin review.
- **Payment upload history** *(Web, API)* — Shows previously submitted proofs and their current review status.
- **Paid fee history** *(Web, Mobile, API)* — Filters historical payments by term and academic year and totals paid versus pending amounts.
- **Receipt preview/download** *(Web, API)* — Opens an approved fee receipt for viewing, printing, or downloading.
- **Student challan generation route** *(Web, Mobile)* — Provides the UI flow for generating or retrieving a student challan where enabled by the institution.

#### 4.4.13 Student Messaging and Class Story

- **Student conversations** *(Web, Mobile, API)* — Starts chats with school employees or classmates only when the current school messaging policy permits those recipients. Default student targets are admin, principal, and own class teachers.
- **Realtime text and file messages** *(Web, Mobile, API)* — Sends messages and supported attachments and receives conversation updates live.
- **Conversation search and unread status** *(Web, Mobile, API)* — Searches chats and records when a conversation is read.
- **Edit, delete, and react** *(Web, Mobile, API)* — Edits or deletes eligible messages/conversations and adds emoji reactions.
- **Class Story feed** *(Web, Mobile, API)* — Shows posts visible to the student’s class/section and allows student posts where permitted.
- **Student post creation** *(Web, Mobile, API)* — Shares class activities using text, media, optional scheduling, and the student’s automatically resolved audience.
- **AI content moderation feedback** *(Web, API)* — Displays a warning when submitted story content is flagged by moderation checks.
- **Likes, comments, and threaded replies** *(Web, Mobile, API)* — Supports feed engagement while enforcing role and audience visibility.
- **Upcoming class events** *(Web, API)* — Shows upcoming events relevant to the student beside the story feed.

#### 4.4.14 Student Settings

- **Student profile view/edit** *(Web, Mobile, API)* — Manages username, registration, class/section, gender, blood group, religion, caste, national ID, medical details, and identification marks.
- **Contact and address details** *(Web, API)* — Updates allowed phone, address, and additional information fields.
- **Educational background** *(Web, API)* — Stores previous school, board roll number, previous grade, and related links.
- **Family and guardian information** *(Web, API)* — Maintains siblings/family identifier plus father and mother contact, identity, profession, and income details.
- **Profile photo upload** *(Web, Mobile, API)* — Uploads and updates the student avatar.
- **Password change** *(Web, API)* — Changes the password with current-password and confirmation validation.
- **Notification and language preferences** *(Web)* — Stores supported student notification and language settings.

---

### 4.5 Super Admin and Platform Operations

- **Organization management** *(Web, API)* — Creates, lists, edits, activates/deactivates, and deletes tenant organizations.
- **Organization type and status** *(Web, API)* — Stores school/coaching or other supported organization type and operational status.
- **Organization admin management** *(Web, API)* — Creates organization admins and assigns or reassigns them to an institution.
- **Admin password reset** *(Web, API)* — Updates an organization administrator’s password from the Super Admin workspace.
- **Admin activation and deletion** *(Web, API)* — Deactivates, reactivates, or removes an organization administrator.
- **Platform attention dashboard** *(Web)* — Highlights organizations or administrators requiring operational attention.
- **AI monthly role limits** *(Web, AI)* — Sets monthly AI spending/usage limits per organization and role and shows configured-role totals.
- **AI model selection** *(Web, AI)* — Chooses the model used by each supported assistant/feature and can enable dual-model configurations.
- **AI usage analytics** *(Web, AI)* — Filters usage by organization, role, and date range and reports cost, requests, tokens, and active users.
- **Per-user AI usage drill-down** *(Web, AI)* — Searches users and displays detailed usage/cost records for the chosen role.

---

### 4.6 Mobile Application Coverage

The Flutter application implements native workspaces that consume the same secured APIs. It does not yet expose every web-only AI creation tool, but it covers the main operational workflows below.

#### Admin Mobile

- **Admin dashboard** — Native overview of people, classes, attendance, finance, trends, dues, admissions, hiring, and recent activity.
- **Student and employee directories** — Searchable, paginated lists with detailed profile sheets.
- **Course and class management** — Subject, class, section, teacher, student, and assignment views for supported administrative operations.
- **Approvals** — Mobile review and approve/reject actions for administrative requests.
- **Attendance** — Student and employee attendance management from the mobile workspace.
- **Finance** — Mobile fee, challan, salary, expense, and report views supported by the admin finance repository.
- **Class tests** — Test list/detail and supported test management/result actions.
- **Messaging and notifications** — Realtime admin conversations plus mobile notification handling.
- **School Story** — School feed browsing, posting, media, reactions, comments, and event-related data.
- **Ask Your Data** — Mobile access to saved/queryable school-management AI conversations.
- **Delegated staff access** — Access-control screens and personal delegated workspaces for principal, management, and accountant roles.

#### Teacher Mobile

- **Teacher dashboard** — Native dashboard for timetable, students, attendance, performance, assignments, duties, announcements, and salary summary.
- **Classes and rosters** — Assigned classes, section details, teachers, students, subjects, and schedules.
- **Course/topic management** — Course list, daily plan, topic CRUD, resources, recorded video, statuses, visibility, and AI oral quizzes.
- **Announcements** — Teacher-specific announcement list and attachment access.
- **Attendance** — Bulk student attendance and history for assigned sections.
- **Class tests and results** — Native test list and marks/result workflows supported by teacher learning APIs.

#### Student Mobile

- **Student dashboard** — Native summary of timetable, attendance, assignments, tests, fees, announcements, and profile.
- **My Class and courses** — Class details, teacher/subject lists, subject topics, resources, and recorded content.
- **Attendance report** — Attendance totals and daily record history.
- **Assignments and tests** — Assignment list/submission information, available tests, attempts/results, and filters.
- **Results and schedule** — Result-card information and the student’s weekly timetable.
- **Pay fees** — Challan, fee, payment-proof, and fee-history workflows supported by the student APIs.
- **Messaging** — Native realtime conversations, recipient selection, messages, files, reactions, edits, and deletion.
- **Class Story** — Native class feed and supported posting/engagement actions.

---

### 4.7 Backend, Storage, and Reliability Features

- **Node.js school-management API** — Provides the core auth, users, classes, attendance, finance, results, messaging, story, notification, and profile endpoints.
- **FastAPI AI service** — Provides student assistants, Ask AI, NotebookLM, teacher content generation, admin School Management Bot, MCP tools, and AI-budget enforcement.
- **Mobile API gateway** — Resolves tenants, proxies approved requests, encrypts refresh tokens, applies rate limits, caches safe proxy responses, and records gateway logs.
- **MongoDB persistence** — Stores organization-scoped profiles, academic records, finance data, conversations, posts, AI history, budgets, and configuration.
- **S3-compatible object storage** — Stores uploaded resources, story media, documents, assignment files, receipts, AI artifacts, and generated outputs.
- **Presigned download URLs** — Gives time-limited access to private files instead of exposing public bucket objects.
- **Large upload recovery** — Multipart initiation, part URLs, status checks, completion, and abort endpoints support resilient large uploads.
- **File type and size validation** — Upload middleware and UI checks reject unsupported or oversized files with actionable errors.
- **CORS-aware PDF/media delivery** — Exposes the headers required for previews, downloads, range requests, and PDF viewers.
- **Organization-aware AI budgets** — Tracks requests, tokens, and cost per organization/role/user and blocks calls after the configured limit.
- **Configurable AI models** — Reads model assignments per feature instead of hard-coding a single provider for all AI tools.
- **Audit-oriented confirmations** — High-impact deletes and finance corrections require typed confirmations or mandatory reasons.
- **Automated tests** — Gateway, tenant, auth, proxy, timeout, JWT, logging, tutor protocol, learning-state, board, and math behavior have test coverage in the repository.

---

### 4.8 Prototype or Partial Features

These screens/routes are present in the codebase, but they should not be described as fully production-integrated until their sample/static data or placeholder behavior is replaced.

- **Admin Performance Analytics** *(Partial/Prototype)* — A polished student/teacher/trend analytics UI exists, but its chart and ranking datasets are currently hard-coded.
- **Admin Certificates** *(Partial/Prototype)* — Certificate form, preview, search, local list, delete, and print controls exist, but records are sample/local data and printing is not fully implemented.
- **Admin Reports route** *(Partial/Prototype)* — The route renders successfully, but the current screen explicitly contains test placeholder content.
- **Student Teacher Appointments** *(Partial/Prototype)* — Booking, calendar, teacher search, appointment type, and appointment-history UI exists using sample teacher/appointment data.
- **Student Learning Paths** *(Partial/Prototype)* — Browse, search, expand, progress, and completion views exist using sample learning-path data.
- **Student Internship Opportunities** *(Partial/Prototype)* — A routed company/opportunity discovery screen exists, but no complete production API workflow is evident.
- **Student Admission Letter** *(Partial/Prototype)* — Print/download UI exists, but the displayed admission record is currently hard-coded.
- **Standalone API Test screen** *(Developer Utility)* — A routed admin diagnostics screen fetches students, teachers, and courses for integration testing; it is not an end-user feature.
- **Question Bank tab** *(Planned UI)* — The test builder displays “Question Bank Coming Soon”; manual and AI question creation are the implemented options.
- **NotebookLM video overview button** *(Partial/Prototype)* — A Video Overview control is visible in Creative Studio, while the completed generated asset flows are audio, mind maps, flashcards, and quizzes.

---

## 5. Current additions and important implementation details

These details supplement the older inventory. They are supported by inspected code/routes or the current rollout documentation, and were not exercised against a live deployment during this review.

### 5.1 Finance controls and collection workflows

| Capability | Product detail | Customer value / publication boundary |
|---|---|---|
| Missing challan detection | Administrative route and page identify student/month fee challans that are missing and support explicit generation | Helps finance staff find billing gaps; do not imply historical accounts are automatically rewritten |
| Student fee history | Dedicated student-level finance history with billing and collection context | Easier review of a student's fee position |
| Multi-month collection | Preview and record outstanding or advance fee collections across billing months | Handle several months in one collection workflow |
| Payment reversals | Routes support reversing individual payments and consolidated collections, with accounting validation | Correct mistakes through reviewed workflows; not arbitrary deletion of financial history |
| Paid fee corrections | A fee amount correction workflow exists; Accountant/Principal requests explicitly use queued review | Controlled corrections with stated reason and audit context |
| Receiver and receipt-time information | Current finance documentation specifies accounting date separately from server receipt time and receiver-name snapshots | Distinguish when money was received from its accounting period; old records may lack this evidence |
| Duplicate protection | Current rollout documents unique billing/payment/request identity protections | Helps prevent duplicate processing; verify indexes and transactional deployment before promising behavior |
| Payment evidence review | Student-uploaded payment proof can be reviewed | Evidence submission is not the same as an online bank/card payment integration |
| Legacy reconciliation | Explicit preview/review for historical records, confirmed payment evidence, unsupported paid records, or duplicates | Historical corrections remain deliberate, audited decisions |
| Reconciliation reporting boundary | Documented historical reconciliation payments are excluded from new-cash revenue reporting | Avoid treating reviewed historical evidence as newly collected cash |

The presence of a refund model alone is not evidence of a complete public refund product. Describe only the supported correction/reversal workflow until refund handling is demonstrated.

### 5.2 Fee receipt verification

- Protected finance APIs can verify a receipt from a code.
- The current finance rollout describes permanent **five-digit manual codes**, including leading zeros, unique within a school.
- Printed QR codes use an opaque receipt identity; they do not need to contain student names or amounts.
- Individual payment, multi-month collection, and challan receipt identities are distinguished.
- The mobile finance workspace includes a receipt-verification flow for scanning a QR or entering the code.
- Verification rechecks the server's current payment status. A QR/code is a lookup identifier; the displayed student and amount must match the printed receipt.
- Camera permission, a compatible rebuilt app, and a network connection are needed for mobile scanning.
- The five-digit format has a finite identity space; do not advertise unlimited receipt identifiers.

**Website copy:** “Issue fee receipts and verify their current payment status through a school-controlled verification workflow.”

### 5.3 Ask Your Data: queries, files, voice, and navigation

Current routes and service implementations include:

- School-data questions in natural language.
- Persistent conversation history and history deletion.
- Streamed progress stages followed by the completed answer.
- Tabular answer artifacts and CSV export payloads.
- PDF report generation with data collection, calculation, rendering, and download handling.
- Report block retrieval and report text-editing/rewrite workflows.
- An audio-transcription endpoint; the mobile source includes a voice-input widget.
- Validated navigation actions that can take an authorized user to a relevant product page after they click.
- Model selection, AI budget enforcement, and usage recording.

**Current access:** The inspected School Management Bot declares Admin and Principal as its user-facing roles; Principal requires `ask_your_data`. Do not imply that every role, including Super Admin, automatically receives this exact chat workflow just because it has other AI controls.

**Data scope:** Questions use controlled backend tools and organization-scoped context. Do not claim the assistant supports every database field, always provides correct answers, or can make arbitrary school-record changes.

**Architecture caution:** `AI_DATA_GATEWAY.md` describes a Node-based gateway design, but the referenced `src/ai-data/aiDataRegistry.js` was absent in the inspected tree. The current bot imports `SchoolMCPServer` and calls `scoped_to_organization`. Treat that separate document as design/rollout context, not proof that its exact gateway implementation is active.

**Sample demo questions** — illustrative requests, not preverified outputs:

- “Show outstanding fees by class for this month.”
- “Summarize student attendance for the selected date range.”
- “Compare fee collections and recorded expenses for this period.”
- “Prepare a PDF attendance summary for this class.”
- “Open the student attendance page.”

Avoid using real student names or private school figures in public demo prompts/screenshots.

### 5.4 Notifications and reminders

The current notification-event service supports message pushes, assignment notifications/reminders, test notifications/reminders, and teacher-assignment events. Notification delivery depends on registered devices, service configuration, and client support.

The existence of these events does not establish all of the marketing site's broader claims about automated parent absence alerts, predictive grade-decline alerts, AI attendance-anomaly detection, SMS, WhatsApp, email reminders, or scheduled overdue-fee reminders. Validate each channel/event before advertising it.

### 5.5 Mobile gateway and school selection

- The Flutter app signs in using a school code and user credentials.
- A gateway resolves the school tenant and forwards requests to the appropriate school backend.
- Gateway auth routes include login, refresh, logout, account lookup, password-reset requests, and reset completion.
- Tenant administration supports school configuration, activation/deactivation, backend routing, and branding metadata.
- Tenant routing configuration and school business data have separate responsibilities.
- A backend-per-school routing design supports deployment separation, but does not prove that every commercial plan currently includes a dedicated server and database.
- Flutter targets Android and iOS; signed releases, app-store publication, and actual device parity were not verified.

### 5.6 AI usage governance

- Organization/role budgets can limit monthly AI consumption.
- Usage analytics report requests, tokens, and recorded cost, including user-level drill-down.
- Supported AI features can use configured models.
- Student tutoring, teacher generation, and leadership assistance have different feature contexts.
- Model availability, content generation, audio, storage, and live tutoring depend on working configured services and the available allowance.

Do not promise unlimited AI, guaranteed response time, guaranteed accuracy, or a fixed number of supported languages without an agreed and tested offering.

## 6. End-to-end product workflows

### 6.1 School setup and staff access

1. Platform operator creates/configures the school organization and school admin.
2. School admin enters institute branding, contact details, academic year, and relevant policies.
3. Admin creates/imports staff and students.
4. Admin defines subjects, classes, sections, rooms, and teaching assignments.
5. Admin sets grading/result rules, exam terms, fee structures, banks, and billing policy.
6. Admin grants supported modules to Principal, Management Staff, and Accountant.
7. Staff and students sign in to the workspaces allowed by their roles and grants.

### 6.2 Admission to classroom participation

1. Create a student admission/profile or import validated student rows.
2. Assign the student to the appropriate class and section.
3. Record authorized guardian/contact and academic information.
4. Make the relevant timetable, subjects, materials, and assignments available.
5. Record daily attendance and track personal attendance history.
6. Issue and track fees according to the school's billing setup.

A fully self-service public admission portal and a live-generated admission letter are not established by these internal admission workflows.

### 6.3 Teacher preparation and delivery

1. Teacher opens assigned classes/subjects and reviews today's schedule.
2. Teacher creates a topic with objectives, dates, status, resources, and optional lesson video.
3. Teacher uses AI to draft a lesson plan, assignment, oral quiz, or presentation where available.
4. Teacher reviews and edits generated material before classroom use.
5. Teacher controls topic visibility and shares materials with the assigned students.
6. Students study the material, submit work, and receive marks/feedback.

### 6.4 Assessment to term/annual results

1. Define terms, assessment components, weights, grade boundaries, and result profiles.
2. Plan exams/papers and publish relevant date sheets.
3. Create online or paper tests and assignments as required.
4. Students attempt assigned online work; teachers enter paper/assessment marks.
5. Authorized staff review submissions and complete applicable result approval steps.
6. Generate term/annual result cards and class-level reports.
7. Students view their available results and feedback.

### 6.5 Fee collection and evidence

1. Configure class fee components, billing period, due dates, and any student exception.
2. Preview/generate challans manually or through enabled automatic billing.
3. Student views fee lines, balances, and institution bank/payment instructions.
4. Student pays through the institution's external/offline payment process and submits proof where needed.
5. Authorized finance staff review proof or record the collected payment and component allocations.
6. The system updates the ledger and exposes a receipt/collection view.
7. Finance staff verify receipts, review fee history, and use the applicable correction/reversal process if needed.
8. Finance reporting summarizes recorded revenue, outstanding balances, expenses, and salary outflow.

This workflow should not be described as integrated online card charging, automatic bank settlement, or bank reconciliation unless the relevant integration is separately demonstrated.

### 6.6 Student AI study support

1. Student opens Ask AI, an assigned-subject assistant, or their document study workspace.
2. Student asks a question or provides supported source material.
3. The selected AI feature produces explanations or study assets within the configured allowance.
4. Student can revisit available chat or generated-asset history.
5. For the standalone 3D tutor, the student launches an authorized session, chooses the subject/topic, and interacts by voice and visual board.

### 6.7 Communication and school community

1. Admin defines the role-to-recipient messaging policy.
2. Authorized users start a permitted direct/class/group conversation.
3. Participants exchange messages and supported attachments.
4. Teachers/admins publish relevant announcements and school/class story posts.
5. Audience checks determine which users receive the content.
6. Users engage through supported comments, replies, reactions, and notification flows.

## 7. Ready-to-use marketing website copy

The following is **proposed copy based on the evidence above**. It does not set prices, contractual terms, release dates, or availability guarantees.

### 7.1 Brand positioning

**Short descriptor:** AI-powered school management and learning platform.

**One-line description:** Connect school operations, teaching, student learning, and finance in one role-based platform.

**Short product paragraph:** AcadoAI brings student records, attendance, classes, exams, results, fees, payroll, and communication into connected workspaces. Teachers get tools for planning and preparing learning content, students get AI-assisted study support, and school leaders can explore institutional data through natural-language questions and reports.

### 7.2 Homepage hero

**Eyebrow:** AI-powered education management

**Headline:** Your school operations and learning, connected.

**Supporting text:** Manage students, attendance, fees, exams, and staff while giving teachers and students practical AI tools for their daily work.

**Primary CTA:** Book a Demo

**Secondary CTA:** Explore Features

**Supporting feature line:** School administration · Teaching tools · Student learning · Finance · Role-based access

### 7.3 Homepage feature summaries

| Feature title | Ready-to-use description |
|---|---|
| Student & Staff Management | Keep student profiles, admissions, employee records, and class assignments organized in one place. |
| Classes & Timetables | Organize subjects, sections, rooms, teachers, and daily schedules around your school's structure. |
| Attendance & ID Cards | Record student and employee attendance, review history, and manage supported identity-card and scanner workflows. |
| Fees & Finance | Manage challans, partial payments, multi-month collections, payment evidence, receipts, salaries, and expenses. |
| Exams & Results | Plan exams, collect marks, configure grading rules, and generate term and annual result cards. |
| AI Teaching Tools | Draft lesson plans, assignments, quizzes, and presentations, then review and refine them before use. |
| AI Student Support | Help students explore subject questions and turn source documents into reusable study materials. |
| Ask Your Data | Ask school-data questions in plain language and work with supported answers, tables, and reports. |
| Messaging & School Story | Share updates, files, and classroom moments with the audiences your school permits. |
| Controlled Access | Assign administrative modules to eligible staff and keep teaching and student work scoped to their responsibilities. |

### 7.4 Role-based solution copy

**For school administrators:** Keep admissions, records, attendance, academic planning, fees, and communication connected, with clear permissions for the people handling each responsibility.

**For principals:** Review a scoped school dashboard and use the administrative modules your school has authorized for your role.

**For finance teams:** Review student balances, collect and allocate payments, verify receipts, manage salary and expense records, and prepare period-based finance reports.

**For teachers:** Work from assigned classes and subjects, plan topics, share resources, mark attendance, assess student work, and use AI to prepare teaching material.

**For students:** Find your timetable, lessons, assignments, tests, results, attendance, and fee information, with AI tools to support independent study.

**For school communication:** Keep school notices, class updates, messages, and shared files connected to the right school and classroom audiences.

### 7.5 AI section

**Headline:** Practical AI for the work around learning.

**Intro:** AcadoAI provides different AI tools for school leaders, teachers, and students, with usage controls configured for the institution.

- **Leadership:** Explore supported school records through Ask Your Data and generate reports.
- **Teachers:** Draft lesson plans, assignments, quizzes, presentations, and document-based learning resources.
- **Students:** Ask subject questions, study uploaded documents, and create flashcards, quizzes, mind maps, and audio overviews.
- **3D tutoring:** Use an animated, voice-based tutor with an interactive teaching board where the feature is enabled.

**Supporting note:** AI features depend on the school's configuration and usage allowance. Teachers review generated teaching material before publishing or using it.

### 7.6 Finance section

**Headline:** See the detail behind every fee balance.

**Body:** Manage fee components, challans, discounts, outstanding balances, partial payments, and multi-month collections. Review submitted payment evidence, issue receipts, and use controlled correction workflows when records need attention.

**Supporting line:** Fees, salaries, expenses, and reporting in a connected finance workspace.

### 7.7 RBAC and security section

**Headline:** Give each team member the access their work needs.

**Body:** AcadoAI combines role-based workspaces with module permissions for principals, management staff, and accountants. Teaching assignments, student enrollment, recipient rules, and organization context help define access across the platform.

**Feature bullets:**

- Module-level delegated administrative access.
- Scoped teaching and student workspaces.
- School-controlled messaging recipients.
- Access-change audit records and versioned permission updates.
- Authenticated sessions and time-limited file access where supported.

Avoid adding certification badges or “permissions on every record” guarantees that this review has not established.

### 7.8 Mobile section

**Headline:** Keep school work within reach.

**Body:** Flutter mobile workspaces bring supported administrative, teacher, and student workflows to phones, including dashboards, attendance, learning records, finance views, messaging, and class updates.

Use actual approved store links and released-device screenshots when available. Do not put a store badge on the site solely because the Flutter source exists.

### 7.9 Suggested FAQ answers

**What does AcadoAI include?**  
Student and staff records, classes and schedules, attendance, assessments, results, finance, communication, and AI-supported teaching and learning tools. Enabled modules depend on the school's setup.

**Can we control staff permissions?**  
Yes. The school admin can assign eligible administrative modules to Principal, Management Staff, and Accountant accounts. Other users work within their role and assigned teaching or student context.

**Does AcadoAI support partial fee payments?**  
The finance implementation supports partial/component-level payments, along with multi-month collection and payment history.

**Can students submit payment proof?**  
Yes. Supported fee workflows let students upload payment evidence for review. This is separate from an integrated online payment gateway.

**What AI tools are available for teachers?**  
The product inventory includes lesson planning, assignment and quiz generation, presentation creation, lecture assistance, and document-based study-content tools. Availability depends on the enabled feature and service configuration.

**What AI tools are available for students?**  
General learning chat, assigned-subject assistants, document-based study tools, and the enabled 3D tutor experience.

**Is there a mobile application?**  
A Flutter mobile implementation supports administrative, teacher, and student workspaces. Use the published release links and confirmed feature list for your offering.

**Does it include a separate parent portal?**  
Some web route guards accept a parent role, but a complete standalone parent account and child-linking workflow has not been verified in the current core model. Confirm the released parent experience before offering it publicly.

### 7.10 Roman Urdu product summary

AcadoAI aik AI-powered education management platform hai jahan school administration, teachers aur students ke liye alag workspaces hain. Is mein admissions aur profiles, classes aur sections, subjects aur timetable, attendance, assignments, tests, exams, results, fees, salaries, expenses, messaging aur school/class story shamil hain. Teachers AI se lesson plans, assignments, quizzes aur presentations tayyar kar sakte hain. Students learning chat, subject assistants, document-based study tools aur enabled 3D tutor use kar sakte hain. Principal, Management Staff aur Accountant ko school admin module-wise access deta hai. Har feature ki availability deployed version, permissions aur school configuration par depend karti hai.

## 8. Website pages and content structure

These are recommended content destinations for the marketing website. They are not additional product features or a commitment to build every suggested page.

### 8.1 Existing marketing routes

| Existing page/route | Content to use from this reference |
|---|---|
| `/` | Product positioning, hero, core modules, role value, AI, finance, access, demo CTA |
| `/features/student-information-system` | Profiles, admissions/imports, classes, records, permission boundaries |
| `/features/attendance-management` | Student/staff attendance, history, timings, ID cards, scanner workflows |
| `/features/fee-management` | Challans, billing, payments, evidence, receipts, corrections, finance reporting |
| `/features/exams-gradebook` | Tests, exam planning, marks, profiles/weights, result cards |
| `/features/ai-teaching-tools` | Lesson plans, quizzes, assignments, slides, lecture help, document tools |
| `/features/ai-tutor` | Student chat, subject assistants, 3D tutor; avoid an unsupported language count |
| `/features/parent-communication` | Reframe around verified school communication until parent account support is confirmed |
| `/features/payroll-hr` | Employee records, salary items, status/history, expenses; verify attendance-linked calculation claims |
| `/features/reports-analytics` | Live dashboard/finance/result reports and Ask Your Data; distinguish prototype analytics |
| `/solutions/[slug]` | Audience-specific examples using implemented modules |
| `/pricing` | Owner-approved plans, limits, onboarding, support, AI allowance, and commercial terms |
| `/about` | Product purpose and verified team/company information |
| `/customers` | Only approved customer evidence, logos, testimonials, and case studies |
| `/contact` | Demo/contact form and approved contact details |
| `/privacy-policy`, `/terms-and-conditions`, `/delete-account` | Actual approved policies and account-handling process |

### 8.2 Optional future content pages

- Roles & Permissions.
- Messaging & School Story.
- Classes, Subjects & Timetables.
- Student Study Tools.
- Mobile App.

Create them if there is enough useful, distinct content and a real navigation need. They can also remain sections on existing pages.

### 8.3 Suggested homepage order

1. Clear product headline and demo CTA.
2. Real product screenshot or approved walkthrough.
3. School operations feature overview.
4. Role-specific benefits.
5. AI workflows for leaders, teachers, and students.
6. Fee and finance workflow.
7. Permissions and verified security mechanisms.
8. Approved customer evidence, if available.
9. Focused FAQ.
10. Demo/contact CTA.

### 8.4 Screenshot/demo evidence to capture

| Screen | What it should prove |
|---|---|
| Admin dashboard | Institution summary and data-driven operational cards |
| Student/employee directory | Real profile/record organization using demo data |
| Classes and timetable | Class, section, subject, teacher, and room relationships |
| Attendance | Roster marking and attendance history |
| Fee challan and ledger | Components, allocated payment, remaining balance, and history |
| Receipt verification | Server-confirmed receipt lookup using demo records |
| Teacher AI tool | Editable generated teaching content |
| Student study tools | A document-based summary or generated flashcard/quiz |
| 3D tutor | The released avatar, voice interaction, and visual board |
| RBAC editor | Actual module selection for a delegated staff account |
| Messaging/Story | Permitted recipients and school/class audience |

Use synthetic or approved anonymized records. Do not present sample dashboard statistics as customer outcome evidence.

## 9. Claims that need confirmation before publication

### 9.1 Current marketing copy that exceeds the inspected evidence

| Claim or content | Evidence gap | Safer treatment |
|---|---|---|
| Complete standalone Parent App / Parent Portal | Web guards mention parents; current core role enum lacks `parent` | Market verified school communication and confirm the separate parent experience |
| 40+ tutor languages | Current tutor documentation confirms English/Pakistani Urdu behavior; a broader count was not tested | Name tested languages only; use feature-specific language claims |
| Automatic parent absence alerts | Notification infrastructure does not by itself prove this event/audience | Demonstrate the exact flow before publishing |
| AI attendance-anomaly and declining-grade alerts | Static analytics and broad marketing copy do not establish a working alert pipeline | Describe attendance/performance visibility without predictive claims |
| Automatic overdue-fee reminders | Billing generation and due-status logic do not prove scheduled recipient notifications | Describe billing automation and outstanding-balance tracking |
| Automatic attendance-linked payroll | Salary breakdowns and attendance records do not prove the calculation linkage | Describe salary generation, components, history, and reporting |
| Automated certificate generation | Certificate screen uses sample/local data | Keep as prototype until integrated |
| Fully live Performance Analytics page | That dedicated page has hard-coded chart datasets | Use actual live dashboards, finance reports, and result reports |
| Dedicated server/database for every school/plan | Multi-tenant context and routed backends do not prove every production infrastructure contract | Publish only the confirmed deployment arrangement |
| Consolidated cross-campus leadership reporting | Organization management is not a group reporting feature | Describe separate organization management until group reports are demonstrated |
| All web features also available on mobile | AI authoring and other flows vary by client | Publish a released mobile feature list |
| Integrated online payment gateway | Reviewed flow is external/offline payment evidence and staff-recorded payments | State supported collection/proof/receipt workflow |
| Full university ERP | University-specific enrollment, credits, transcripts, hostel, etc. are not established | Limit copy to validated institutional workflows |
| App Store / Google Play availability | Source/build configuration is not proof of publication | Use verified live store listings |
| Unlimited AI / instant generation | Budget and provider limits exist | Publish actual plan allowances and measured behavior |
| 99.9% uptime / SLA | No monitoring evidence or approved SLA reviewed | Use only an agreed service commitment |
| “500+ schools”, “2M+ students”, “40+ countries” | Marketing defaults exist without supporting customer evidence | Hide until verified and approved |
| Named customer logos/testimonials and time-saved claims | Existing copy includes placeholder/testimonial material | Replace with approved customer evidence or omit |
| Guaranteed rollout in days or measured academic gains | No delivery contract or outcome study reviewed | Describe the workflow and agree onboarding scope separately |
| SOC 2 / ISO / GDPR / FERPA certification or blanket compliance | No independent audit or legal basis reviewed | Use precise implementation descriptions and approved legal wording |
| WhatsApp/SMS/email integrations, SSO, biometrics, offline sync | Not established by the inspected implementation | Do not add to the feature list without specific evidence |

### 9.2 Prototype features from the inventory

The following remain excluded from the confirmed live-feature offering unless a newer integrated release is demonstrated:

- Dedicated Admin Performance Analytics page.
- Certificate management/generation screen.
- General Admin Reports placeholder route.
- Teacher appointment booking.
- Student learning paths.
- Internship opportunity workflow.
- Student admission-letter screen with fixed sample content.
- Question Bank “Coming Soon” tab.
- NotebookLM video-overview control.

The Admin Reports placeholder does **not** mean all reporting is absent: finance reports, attendance reports, class result reports, and Ask Your Data reports are separate implemented areas.

### 9.3 Features not established by this review

Do not infer library circulation, transport/GPS, hostel management, procurement/inventory, cafeteria, alumni/fundraising, biometric-device compatibility, public admissions/payment gateways, or a general integration marketplace from the education-ERP label. These can be discussed as future scope only if the product owner confirms them.

## 10. Source map and maintenance notes

Paths below are relative to the main product workspace unless stated otherwise. They help maintain this reference without treating marketing copy as proof of product behavior.

| Source | What it establishes |
|---|---|
| `ACADOAI_COMPLETE_FEATURES.md` | Existing broad feature inventory and prototype distinctions, dated 11 October 2026 |
| `agri-savant-04/src/router/routes.tsx` | Registered admin, teacher, student, results/exams, and superadmin routes |
| `agri-savant-04/src/router/RouteGuards.tsx` | Workspace roles, parent-compatible student guards, delegated routing |
| `agri-savant-04/src/authorization/delegatedAccess.ts` | Web module keys, labels, route map, permission parsing, legacy grants |
| `acadoai_api/src/models/user.model.js` | Persisted role enum, delegated module storage, active/inactive users, tenant-scoped identities |
| `acadoai_api/src/models/employeeProfile.model.js` | Staff profile and `principalType` metadata |
| `acadoai_api/src/constants/delegatedAccess.js` | 22 common modules, 4 Principal-only modules, 3 fixed personal modules |
| `acadoai_api/src/middleware/moduleAccess.middleware.js` | Server module checks, persisted finance permission checks, tenant-admin boundary |
| `acadoai_api/src/controllers/access.controller.js` | Same-school permission updates, active-user validation, version conflicts, access audit/event |
| `acadoai_api/src/routes/access.routes.js` | Access lookup and school-admin-only permission/messaging-policy management |
| `acadoai_api/src/services/messagingPolicy.service.js` | Recipient categories, defaults, class/section boundaries, permitted conversation types |
| `acadoai_api/src/middleware/approval.middleware.js` | Route-specific queuing and direct-action audit behavior |
| `acadoai_api/src/routes/admin.route.js` | Principal scoped dashboard, directories, approvals, payroll/expense routes |
| `acadoai_api/src/routes/challan.route.js` | Billing, payment/collection history, reversals, corrections, missing challans, receipt verification, legacy reconciliation |
| `acadoai_api/src/routes/result.route.js` | Academic module gates for marks, approval queue, cards, exams, reports |
| `acadoai_api/docs/finance-safety-rollout.md` | Finance rollout requirements, receipt identity/scanning, historical reconciliation boundaries |
| `acadoai_api/src/services/notificationEvents.service.js` | Supported push event/reminder categories |
| `acadoai_backend/src/admin/routes/school_Management_bot.py` | Ask Your Data roles, history, transcription, reports, artifacts, progress, navigation |
| `acadoai_backend/src/admin/services/report_service.py` | PDF generation, report data/facts, blocks, editing/rewrite flows |
| `acadoai_backend/src/security.py` | AI endpoint authentication and relevant role/module checks |
| `Acadoai-Flutterapp/lib/features/auth/domain/role_access.dart` | Mobile role helpers and Vice Principal aliases |
| `Acadoai-Flutterapp/lib/features/access` | Mobile delegated access and messaging-policy UI |
| `Acadoai-Flutterapp/lib/features/admin` | Mobile finance, receipt verification, Ask Your Data, operational pages |
| `Acadoai-Flutterapp/README.md` | Flutter targets and school-code/gateway-based sign-in architecture |
| `acadoai_gateway_api/README.md` and `src/modules/auth/auth.routes.js` | Tenant routing, gateway responsibilities, login/refresh/logout/password reset |
| `3d-tutor/README.md` | One-time launch, hold-to-talk, reviewed avatar voices, board/math behavior |
| Marketing workspace `content/pages.ts` | Existing website routes/copy, draft stats/personas/testimonials; these are claims to validate |
| Marketing workspace `components/Security.tsx` | Existing infrastructure/security marketing wording to confirm before publication |

### Maintenance rule

When a feature changes, update its catalogue entry, role/module access, web/mobile coverage, and any website claim that depends on it. A route, model, or design document alone is not proof of a complete released workflow.

**Verification performed for this deliverable:** source/document inspection, permission-key consistency checks, Markdown structure/source-path checks, and confirmation that only this documentation file was added by this task.

**Not performed:** application build/tests, live API/database checks, production deployment review, physical-device testing, app-store verification, external security/compliance review, or independent validation of customer/pricing/outcome claims.
