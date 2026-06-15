# NBW Grant Program — Presentation Planning Package
*For Perplexity slide deck and Frank's live walkthrough*
*Generated from live prototype at city-phoenix-nbw-grant-prototype.pages.dev*

---

## 1. EXECUTIVE SUMMARY

**What the prototype is.**
This is a fully interactive, browser-based prototype of a redesigned City of Phoenix Neighborhood Block Watch (NBW) Grant Program website and applicant/admin portal. It includes a public-facing informational site, a logged-in applicant experience with a multi-step application wizard, and a staff administration portal with review, scoring, and reporting tools. All content is realistic and specific to the Phoenix NBW program — dollar amounts, dates, organization names, staff names, and application IDs are consistent throughout.

**What kind of presentation it supports.**
The prototype is designed to support a concept approval presentation — one where the goal is to secure buy-in for a digital transformation of an existing grant program. It is a design-and-flow demonstration, not a technical or infrastructure pitch. The prototype allows a presenter to walk stakeholders through the full lifecycle of a grant application, from public discovery through staff review and award, without needing any real data or backend system.

**Likely audience and what they will care about.**
The board and Grant Oversight Committee are likely non-technical administrators, elected officials, or program managers. They will evaluate this primarily on whether it looks professional and trustworthy, whether it makes the program easier to manage and more accessible to community members, and whether it reduces staff burden. They will not care about technology choices. They will notice inconsistencies, label confusion, or anything that seems unfinished.

---

## 2. SITEMAP

```
PUBLIC SITE (top navigation bar)
├── Home (/)
├── About (/about)
├── Eligibility (/eligibility)
├── How to Apply (/how-to-apply)
├── Grant Categories (/grant-categories)
├── FAQs (/faqs)
│     └── 10 accordion items [expand on click — collapsed by default]
├── News (/news)
└── Contact (/contact)
      └── Contact form [modal-style form on same page]

AUTHENTICATION (standalone, no layout shell)
└── Sign In (/sign-in)
      ├── Applicant Sign In tab [default]
      └── Staff / Admin tab [switches to staff login]

APPLICANT PORTAL (left sidebar navigation)
├── Dashboard (/portal/dashboard)
├── My Applications (/portal/applications)
│     └── Application Detail (/portal/applications/:id)
│           └── Sample: APP-2024-0089
├── New Application (/portal/applications/new) [5-step wizard]
│     ├── Step 1: Organization Info
│     ├── Step 2: Project Details
│     ├── Step 3: Budget Request
│     ├── Step 4: Documents
│     └── Step 5: Review & Submit
├── My Documents (/portal/documents)
├── Messages (/portal/messages)
└── Account Settings (/portal/settings)

ADMIN PORTAL (left sidebar navigation)
├── Dashboard (/admin/dashboard)
├── Applications Queue (/admin/applications)
│     └── Application Review (/admin/applications/review)
│           └── Evaluation & Scoring (/admin/applications/evaluate)
│                 └── Request More Info (/admin/applications/request-info)
├── Grant Cycles (/admin/cycles)
├── Funded Projects (/admin/funded)
├── Reports (/admin/reports)
├── User Management (/admin/users)
└── Program Settings (/admin/settings)
```

---

## 3. PAGE INVENTORY

| Page | Route | Purpose | Main Content Blocks (top to bottom) | Main Actions | Presentation-Worthy | Notes |
|------|--------|---------|--------------------------------------|--------------|---------------------|-------|
| Home | / | Program introduction and entry point | FY alert banner, hero headline + tagline, key dates bar, 4 stats, 3-column info panel (eligibility, categories, process), CTA section | Apply Now, Learn How It Works, Create an Account | **Yes** | Strong first impression. Stats ($2.1M, 380+ orgs, 15 years) add immediate credibility. |
| About | /about | Program history and mission | Mission statement, timeline (2010–2025), funded project examples, stats, office contact | None (informational) | Maybe | Good for context slide but not a live demo screen. Timeline is clean. |
| Eligibility | /eligibility | Who qualifies | Organization requirements checklist (✓), ineligible list (✗), two sidepanel CTAs | Contact Us, Register Block Watch, Apply Now | **Yes** | ✓/✗ format is clear and visually strong. Good to show briefly. |
| How to Apply | /how-to-apply | Step-by-step process | 6 numbered steps with descriptions, key dates table, document checklist, final CTA | Start Your Application | **Yes** | One of the strongest public pages. Numbered flow is intuitive and persuasive. |
| Grant Categories | /grant-categories | What gets funded | 5 category cards with max amounts and eligible items | Apply Now | **Yes** | Clear, specific, visually organized. Dollar amounts make it concrete. |
| FAQs | /faqs | Common questions | 10 collapsed accordion items, "Contact" CTA at bottom | Expand/collapse each FAQ | Maybe | **Risk:** FAQ answers are hidden behind accordion click. In a live demo, clicking to open looks like work. Pre-open one or two before the walkthrough. |
| News | /news | Program announcements | 4 articles with date, tag badge, and summary | None (read-only) | No | Not needed for board presentation. Useful as a support slide. |
| Contact | /contact | Office contact and inquiry form | Office info, application support contact, contact form (name, email, org, subject, message) | Send Message | Maybe | Shows the program has a support path. Not needed live unless asked. |
| Sign In | /sign-in | Authentication gateway | City of Phoenix branding, two tabs (Applicant / Staff Admin), email + password form, Create Account link | Sign In, Create Account, Back to Program Website | **Yes** | The two-tab structure is the key moment — it shows role-based access visually. Point to it explicitly. |
| Portal Dashboard | /portal/dashboard | Applicant home base | Welcome banner (Jane / Sunnyslope Block Watch), deadline warning alert, 3 stat cards, recent applications table, messages panel | Continue Application, View All | **Yes** | Best single screen in the portal. Personalized, actionable, deadline-driven. |
| My Applications | /portal/applications | Application history list | Table of 3 apps with status badges (Draft / Funded / Funded) | View detail links | Maybe | Redundant with dashboard for demo purposes. Skip unless asked. |
| Application Detail | /portal/applications/:id | Single app status view | Project summary (title, category, amounts), 5-event timeline, award details, disbursement, completion report status | View Messages | **Yes** | Timeline showing application lifecycle (submitted → reviewed → info requested → funded) is compelling. |
| New Application (Wizard) | /portal/applications/new | 5-step form wizard | Step indicator, step content changes per step (org info → project → budget → documents → review) | Continue, Back, Submit | **Yes** | Most interactive screen in the prototype. Step indicator alone communicates system sophistication. |
| My Documents | /portal/documents | Document library | Table of 5 uploaded files with type, size, date, usage count | Upload Document, View, Delete | Maybe | Good to mention but not worth dwelling on. |
| Messages | /portal/messages | Communication thread list | 3 message threads with sender, date, preview | Click to read | Maybe | Shows the communication channel. Brief mention only. |
| Account Settings | /portal/settings | Profile management | Personal info, org details, notification preferences | Save | No | Not needed for board demo. Too granular. |
| Admin Dashboard | /admin/dashboard | Program command center | 4 status stat cards, pending queue table with Review buttons, budget progress bar, upcoming deadlines | Review links | **Yes** | Powerful screen. Shows program scale and staff control at a glance. |
| Applications Queue | /admin/applications | Full queue with filters | Status filter tabs, category filter, sortable table of 7 apps with reviewer assignments | Filter, Review | **Yes** | Filter tabs are impressive in live demo. Shows workload management. |
| Application Review | /admin/applications/review | Single application deep review | Org info, full project narrative, itemized budget, document checklist, reviewer assignment, internal notes | Score Application, Request Info | **Yes** | Most detailed admin screen. Shows system captures everything staff needs. |
| Evaluation | /admin/applications/evaluate | Scoring rubric | 5 criteria with point inputs (100 pts total), evaluator notes, recommendation radio buttons | Submit Evaluation, Save Draft | **Yes** | Interactive scoring is impressive. Shows the program has structured rigor. |
| Request More Info | /admin/applications/request-info | Compose request to applicant | Checkbox list of required items, message textarea, response deadline | Send Request | No | Too granular for board. Mention it exists, don't demo it. |
| Grant Cycles | /admin/cycles | Cycle management | Table of 3 cycles (Open / Closed), close/edit controls | Close Cycle, Edit | No | Administrative detail. Skip. |
| Funded Projects | /admin/funded | Post-award tracking | Overdue alert banner, table of 5 funded projects with disbursement and report status | — | Maybe | The "overdue" alert is a good accountability proof point. Could mention briefly. |
| Reports | /admin/reports | Data export hub | 4 report type cards with cycle selector, PDF/CSV export buttons, program overview stats | Export PDF, Export CSV | Maybe | Good for mentioning accountability/transparency, but not a demo screen. |
| User Management | /admin/users | Staff account management | Staff accounts table, applicant search | Invite Staff, Edit, Search | No | Too operational. Skip. |
| Program Settings | /admin/settings | Program configuration | Eligibility rules inputs, scoring criteria point values, email template links | Save Settings, Edit Template | No | Too deep. Not for board. |

---

## 4. NAVIGATION MODEL

**Public site navigation:** Horizontal top bar with 8 links (About, Eligibility, How to Apply, Grant Categories, FAQs, News, Contact) plus Sign In and Apply Now buttons. Clean and conventional. A first-time viewer will immediately understand this is a program website with a clear call to action.

**Applicant portal navigation:** Collapsible left sidebar, 56px wide items with emoji icons, badge support (unread messages), and a deadline reminder at the bottom. Role is clearly communicated by the header.

**Admin portal navigation:** Left sidebar, wider than portal (w-60), grouped with divider labels (APPLICATIONS, PROGRAM MANAGEMENT, SYSTEM), red badge on queue count. Visually distinct from the applicant portal — gray-900/gray-800 vs blue.

**Breadcrumbs:** Present in the admin flow only (Queue → APP-2025-0201 → Evaluate). Absent in the public site and applicant portal.

**Role branching:** Sign In page uses a two-tab design — Applicant Sign In / Staff / Admin. This is the single visual moment that communicates the dual-audience architecture. After sign-in, each role sees a completely different interface.

**What a first-time viewer will understand immediately:**
- The public site is for community members applying for grants
- The portal is for applicants to manage their applications
- The admin side is for City of Phoenix staff to manage the program

**What may confuse a first-time viewer:**
- The Sign In page tabs are small and easy to miss — the Staff / Admin tab may not be noticed unless the presenter points to it
- Navigating directly to /admin/dashboard without signing in works (no auth wall in the prototype) — do not draw attention to this
- "FY2025–26" terminology may be unfamiliar to some board members — consider briefly defining it
- The FAQs page looks empty until you click an accordion — pre-expand one before the walkthrough

---

## 5. DEMO PRIORITY SCREENS

| # | Screen | Why Show It | Message It Proves | Est. Speaking Time | Speaker Line |
|---|--------|-------------|-------------------|--------------------|--------------|
| 1 | Home | Sets the stage, professional, data-rich | "The program has a clear public face" | 45 sec | "This is what a resident sees the moment they look for the NBW grant — a professional, city-branded landing page with the information they need." |
| 2 | How to Apply | Clearest proof of process simplicity | "Applying is no longer confusing" | 30 sec | "Six steps, plain language, all key dates in one place. No more hunting through PDFs or calling the office to figure out what to submit." |
| 3 | Grant Categories | Makes funding tangible | "Applicants know exactly what they can request" | 30 sec | "Every category has a clear maximum dollar amount and a list of eligible expenses. No ambiguity, no back-and-forth." |
| 4 | Sign In (with tab switch) | Shows role architecture visually | "One system, two audiences" | 20 sec | "From the same sign-in page, a community member enters the applicant portal, and a city staff member enters the administration system." |
| 5 | Portal Dashboard | Most personalized, most compelling portal screen | "Applicants have full visibility into their status" | 45 sec | "Jane from Sunnyslope Block Watch logs in and sees her deadline, her application history, and any messages from the program office — all on one screen." |
| 6 | New Application Wizard (Step 1–2) | Interactive, impressive | "The application is guided and modern" | 60 sec | "Instead of a PDF form, applicants move through five structured steps. The system validates as they go and saves their progress." |
| 7 | Application Detail (Timeline) | Shows full lifecycle | "Applicants always know where they stand" | 30 sec | "Every application has a full status timeline — submitted, under review, additional info requested, funded. No more wondering." |
| 8 | Admin Dashboard | Command-center view | "Staff have complete program visibility" | 45 sec | "Program staff see 47 applications, 14 pending review, budget committed vs. remaining — everything needed to manage the cycle without spreadsheets." |
| 9 | Application Review | Full-detail staff screen | "Staff have everything in one place" | 45 sec | "The reviewer sees the full project narrative, itemized budget, all uploaded documents, and can assign the application and leave internal notes — no paper folders." |
| 10 | Evaluation & Scoring | Most interactive admin screen | "Decisions are structured, not arbitrary" | 45 sec | "Each application is scored on five published criteria, 100 points total. The system totals the score in real time and records the recommendation." |

---

## 6. DO NOT DEMO

| Screen | Reason |
|--------|--------|
| Account Settings | Notification preferences and profile fields. Adds no value for a board audience. |
| Request More Info | Too granular. The existence of this feature can be mentioned verbally during the Application Review screen. |
| Grant Cycles | Pure operational admin. The board does not need to see cycle open/close controls. |
| User Management | Staff account tables. Technical and internal. |
| Program Settings | Point configuration and email templates. This will invite micro-management questions from the committee. |
| News page | Flat content list. Nothing interactive or compelling to show. |
| My Applications list | Redundant with the dashboard. The dashboard already shows application history. |
| My Documents | Mention it exists ("documents are reusable across cycles") but don't navigate there. |
| FAQs | Only show if asked directly. The collapsed accordions look like an empty page at first glance. |

---

## 7. WALKTHROUGH ORDER

| Step | Screen | Why It Comes Here | Est. Time | Transition Sentence |
|------|--------|-------------------|-----------|---------------------|
| 1 | Home | Anchors the audience in the program — familiar ground | 45 sec | "Let me show you the program from a resident's point of view first, then we'll look at the staff side." |
| 2 | How to Apply | Immediately answers "how does this work?" | 30 sec | "From the home page, anyone can see exactly how to apply in six steps." |
| 3 | Grant Categories | Makes the money tangible | 30 sec | "And they can see precisely what's eligible for funding before they even start the form." |
| 4 | Eligibility | Confirms qualification quickly | 20 sec | "Eligibility is just as clear — two lists, no ambiguity." |
| 5 | Sign In | Transitions into the portal, shows role split | 20 sec | "When a resident is ready to apply, they sign in here — and this is also where our staff enters the administration system." |
| 6 | Portal Dashboard | First portal screen — most impactful | 45 sec | "This is what an applicant sees after they log in — their deadline, their history, and any messages from the program office." |
| 7 | New Application Wizard | Most interactive screen in the demo | 60 sec | "Starting an application is a guided process — five steps, auto-saved, with document upload built in." |
| 8 | Application Detail | Shows full lifecycle tracking | 30 sec | "Once submitted, the applicant has a complete timeline of every action taken on their application." |
| 9 | Admin Dashboard | Pivots to the staff view — shift in audience perspective | 45 sec | "Now let's switch to what program staff see when they log in as administrators." |
| 10 | Applications Queue | Shows workload management | 30 sec | "Staff see every application in the cycle, can filter by status or category, and assign reviewers." |
| 11 | Application Review | Full review workflow | 45 sec | "Clicking into any application gives the reviewer everything — narrative, budget, documents, notes — in one place." |
| 12 | Evaluation & Scoring | Closes the admin story on a high note | 45 sec | "And every decision is scored on a published 100-point rubric. The system records the recommendation and generates the record." |

**Total estimated walkthrough time: approximately 8–9 minutes.** Leave 3–5 minutes for questions.

---

## 8. SLIDE DECK INPUTS FOR PERPLEXITY

### A. Deck Title Options

1. **A Modern Grant Portal for Phoenix Neighborhoods** — Proposal for the NBW Grant Program Digital Redesign
2. **From Paper to Portal** — Modernizing the City of Phoenix Neighborhood Block Watch Grant Program
3. **The NBW Grant Program, Reimagined** — A Concept Proposal for the Board and Grant Oversight Committee

---

### B. One-Sentence Core Message

The City of Phoenix Neighborhood Block Watch Grant Program can better serve its 380+ community organizations and reduce staff burden with a purpose-built digital portal that guides applicants through a clear process and gives staff real-time visibility into every application.

---

### C. Slide Outline

| # | Slide Title | Purpose | Key Points (max 3) | Show Live Prototype? |
|---|-------------|---------|---------------------|----------------------|
| 1 | Program Overview | Frame the NBW program for context | 15 years, 380+ orgs funded, $2.1M awarded to date | No |
| 2 | The Problem Today | Establish the need for change | Paper/PDF process is confusing to applicants; staff manage via spreadsheets; no single source of status | No |
| 3 | The Concept: A Purpose-Built Portal | Introduce the solution | Three zones: public site, applicant portal, admin portal; one platform, two audiences | No |
| 4 | The Public Website | Show the applicant-facing entry point | Professional, city-branded; clear eligibility and process; prominent deadlines and CTAs | **Yes** |
| 5 | The Applicant Experience | Walk through the portal | Personalized dashboard with deadline alerts; guided 5-step application wizard; full status tracking | **Yes** |
| 6 | The Admin Experience | Walk through the staff side | Real-time queue management; structured 100-point scoring rubric; budget tracking and reporting | **Yes** |
| 7 | The Application Lifecycle | Show end-to-end in one view | Resident applies → staff reviews → decision recorded → funds disbursed → report submitted | No (use Application Detail screenshot) |
| 8 | What This Solves | Connect the dots for the board | Applicants know exactly what to do and where they stand; staff have complete visibility; program has an audit trail | No |
| 9 | Implementation Approach | Reduce perceived risk | Prototype built on modern, low-cost infrastructure; phased rollout possible; no custom backend required for Phase 1 | No |
| 10 | Next Steps | Close with a clear ask | Approve concept; designate program office point of contact; establish timeline for Phase 1 scope | No |

---

### D. Prototype Screenshots Needed

Capture the following screens for the deck (full-width browser, no browser chrome visible):

1. **Home** — full page or hero section through stats bar
2. **How to Apply** — 6-step numbered list
3. **Grant Categories** — all 5 category cards
4. **Sign In** — showing both Applicant and Staff/Admin tabs
5. **Portal Dashboard** — showing Jane's welcome, deadline alert, and stat cards
6. **New Application Wizard** — Step 1 (org info form) with step indicator visible
7. **Application Detail** — 5-event timeline column
8. **Admin Dashboard** — stat cards + pending queue + budget bar
9. **Applications Queue** — full table with status filter tabs visible
10. **Application Review** — showing project narrative + budget table
11. **Evaluation & Scoring** — showing the 5-criteria rubric with point inputs

---

### E. Talking Points

**Slide 1 — Program Overview**
- The NBW Grant Program has operated for 15 years and funded over 380 organizations across Phoenix
- The program distributes up to $250,000 per fiscal year in awards up to $5,000 each
- It is a proven program with community trust — the goal is modernization, not reinvention

**Slide 2 — The Problem Today**
- Applicants currently navigate PDFs, paper forms, or inconsistent online instructions
- Staff track applications in spreadsheets with no shared status view
- There is no audit trail, no structured review process, and no self-service status check for applicants
- The result is unnecessary staff burden and a confusing experience for the community members this program exists to serve

**Slide 3 — The Concept**
- The prototype demonstrates a three-zone system: a public informational site, an applicant self-service portal, and a staff administration portal
- All three are part of a single platform — applicants and staff access the same system through role-based sign-in
- This is not a new program — it is the same NBW Grant Program delivered through a modern digital experience

**Slide 4 — Public Website**
- The public site gives every potential applicant the same information: who qualifies, what gets funded, how to apply, and when
- Key dates are displayed prominently on the home page and reinforced throughout
- The site is city-branded and accessible from any device

**Slide 5 — Applicant Experience**
- After signing in, applicants see a personalized dashboard with their deadline, their application history, and any messages from the program office
- The application itself is a guided five-step wizard — no ambiguity about what to provide at each stage
- Every application has a full status timeline so applicants always know where they stand without calling the office

**Slide 6 — Admin Experience**
- Staff see a real-time dashboard: how many applications are submitted, pending review, under review, and decided
- The applications queue is filterable by status and category, with reviewer assignments visible at a glance
- Every application review records the full project narrative, budget, documents, internal notes, and a structured 100-point score

**Slide 7 — Application Lifecycle**
- The prototype demonstrates the full lifecycle from public discovery through completion report
- Every stage is recorded: submitted, reviewed, additional info requested, decision, disbursement, completion
- This creates an automatic audit trail the program has not previously had

**Slide 8 — What This Solves**
- Community members get a clear, self-service experience — fewer calls, fewer errors, fewer missed deadlines
- Staff spend time reviewing applications, not managing logistics
- The program committee gets transparency: real-time data on budget committed, applications pending, and compliance status

**Slide 9 — Implementation**
- The prototype is built on production-grade infrastructure and deployed publicly today
- Phase 1 can focus on the public site and applicant portal with a simple staff intake process
- Phase 2 can add the full admin portal and scoring workflow
- Cost and timeline to be determined with program office input

**Slide 10 — Next Steps**
- Board approval of the concept
- Program office designates a point of contact to validate content and workflow
- FrontFrame scopes Phase 1 for budget and timeline estimate
- Target: live for the FY2026–27 grant cycle

---

## 9. REVIEW RISKS

### Content and Logic Risks

| Risk | Detail |
|------|--------|
| Authentication is not enforced | Any URL (/portal/dashboard, /admin/dashboard) is accessible without signing in. Do not draw attention to this. Navigate only from the Sign In page during the demo to maintain the illusion of access control. |
| FAQs appear empty | The accordion items are collapsed by default. The page looks like it has no content until clicked. Pre-expand 2–3 items before the walkthrough. |
| Budget math may invite questions | The admin dashboard shows $198,400 requested across 47 applications but only $43,500 committed. This means fewer than 12 applications approved of 47 submitted — a low ratio that may draw scrutiny. Be ready to explain this is mid-cycle data. |
| "FY2025–26" terminology | Non-program audiences may not understand "FY." Consider briefly defining it in the presentation. |
| Completion report overdue alert | The Funded Projects page shows "1 completion report overdue — Central City Block Watch." This is realistic, but if shown, it may invite questions about compliance enforcement. Only show this page if demonstrating accountability features is intentional. |

### Labeling and Copy Issues

| Issue | Location | Detail |
|-------|----------|--------|
| "Staff / Admin" tab label | Sign In page | The forward slash reads oddly. Consider "Staff & Admin" or just "Staff Login." |
| "Region: Earth" | Cloudflare success screen | This appeared during deployment — not visible in the live site. No action needed. |
| Emoji icons in admin sidebar | Admin portal nav | The grouped sidebar uses no icons in some sections. Minor inconsistency with the applicant portal. |
| "Training" vs "Training & Education" | Applications Queue table | The category column shows "Training" but other screens show "Training & Education" and "Safety Training & Education." Inconsistent labeling across three screens. |
| "My Applications" sidebar label | Applicant portal | The sidebar label says "My Applications" but the nav link appears to go to the same list as the dashboard preview. Slight duplication. |
| Abbreviation "NBW" | Used throughout | The acronym is used without definition on several pages. Fine for internal audiences; may need one-time definition in the presentation. |

### Visual and Polish Risks

| Issue | Detail |
|-------|--------|
| No 404 page | Navigating to an invalid route shows a blank screen. Not a demo risk if Frank stays on the planned path. |
| No loading states | Clicking between pages is instant (SPA), which is actually an advantage in a demo — but note that final implementation will need loading feedback. |
| Portal accessible on mobile | The layout was built for desktop. If someone in the audience tries to open the URL on their phone during the presentation, the experience will be degraded. Mention "desktop-optimized prototype" proactively. |
| Application wizard does not save state | Refreshing the New Application page resets to Step 1. If the browser refreshes mid-demo, the wizard resets. |

---

## 10. RECOMMENDED NEXT EDITS BEFORE PRESENTATION

### Critical Before Presentation

1. **Fix "Training" label inconsistency** — Applications Queue shows "Training" but all other screens say "Training & Education" or "Safety Training & Education." Pick one and apply it everywhere. Recommend: "Safety Training."

2. **Pre-expand FAQ accordion items** — The page looks empty by default. Either pre-expand 2–3 items in the component code, or add a subtitle like "Click any question to expand the answer" so the page doesn't look broken.

3. **Change Sign In tab label from "Staff / Admin" to "Staff Sign In"** — Cleaner, more professional, and removes the ambiguous slash.

4. **Confirm the live URL for board** — `city-phoenix-nbw-grant-prototype.pages.dev` looks like a test URL. `phoenix-grant.frontframe.co` is better. Verify the custom domain is active before the presentation.

### Important If Time Allows

5. **Add a visible "Demo Mode" or "Prototype" label** — A small badge in the footer or header that says "Concept Prototype — Not a Live System" sets the right expectation and pre-empts questions about when this will be built.

6. **Add a 404 page** — A simple "Page not found — Return Home" screen prevents a blank white screen if Frank accidentally navigates off-path.

7. **Make Sign In form functional enough to redirect** — Currently, clicking Sign In from the Applicant tab could just navigate directly to /portal/dashboard. This makes the demo flow cleaner and more convincing.

8. **Add "Draft" badge to the My Applications top row** — The dashboard shows the FY2025-26 application as "Draft" in a stat card, but clicking into My Applications, the status badges should be consistently styled. Verify the "Draft" badge renders in orange/amber and is clearly differentiated from "Funded."

### Nice to Have

9. **Scroll-to-top behavior on page navigation** — If the browser remembers scroll position between pages, add a scroll-to-top on route change so each new page starts at the top during the walkthrough.

10. **Add Frank's name or a demo user** — Currently the portal says "Welcome back, Jane." Consider changing the name to something more generic like "Welcome back, [Your Name]" or creating a second named demo persona to suggest the system serves multiple users.

11. **News page timestamp** — "Jun 25, 2025" on the FY2025–26 announcement is close to the current date, which is good. Verify dates feel current relative to when the presentation occurs.

12. **Footer content** — The public site footer shows contact info and links. Verify all footer links navigate correctly or remove non-functional ones before a live demo.
