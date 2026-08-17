# MASTER PROMPT 03 — FULL-STACK ENGINEERING, SEO, SECURITY, TESTING & DEPLOYMENT

## Project
Build a production-ready landing page for **PT Dieng Ventura Holdings** using MASTER PROMPT 01 and MASTER PROMPT 02.

## Recommended stack
Prefer:
- Next.js with App Router
- TypeScript
- Tailwind CSS
- accessible component primitives
- ESLint
- Prettier
- Git
- Vercel deployment

If the selected AI builder uses an equivalent stack, preserve the same architectural principles.

## Architecture
Use a clean, scalable structure similar to:

src/
  app/
    layout
    page
    globals.css
    sitemap
    robots
  components/
    layout/
    sections/
    ui/
  data/
    site.ts
    projects.ts
    products.ts
    investment.ts
  lib/
  public/
    images/
    icons/
    documents/

Keep content/data separate from UI components wherever practical.

## Core requirements

### Landing page
Implement:
- responsive navigation;
- hero;
- investment thesis;
- problem/solution;
- holding architecture;
- tourism ecosystem;
- Karangsari Forest Park;
- 10-product portfolio;
- business model;
- growth roadmap;
- validated financial section;
- investor pathway;
- data room CTA;
- contact CTA;
- footer.

### Forms
Create an investor inquiry form with:
- name;
- organization;
- email;
- phone/WhatsApp optional;
- investor type;
- investment interest;
- message;
- consent checkbox.

Validation:
- required fields;
- valid email;
- spam protection strategy;
- clear success/error states;
- accessible labels.

Do not hard-code a fake backend.

If no backend is connected, implement a safe placeholder adapter and clearly mark:
**FORM_BACKEND_REQUIRED_BEFORE_PRODUCTION**

## Environment variables
Use .env.example for values such as:
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_ANALYTICS_ID
- CONTACT_FORM_ENDPOINT
- optional CMS/document access variables

Never commit secrets.

## SEO
Implement:
- title;
- meta description;
- canonical URL;
- Open Graph;
- Twitter/X metadata;
- sitemap.xml;
- robots.txt;
- favicon;
- manifest where appropriate;
- structured data.

Use Organization and WebSite structured data.
Add LocalBusiness only if the relevant facts are verified and appropriate.

Do not invent:
- phone;
- address;
- social URLs;
- registration numbers;
- ratings;
- awards.

## Performance
Target strong Core Web Vitals.

Requirements:
- optimize images;
- use modern formats;
- lazy-load below-fold media;
- minimize JavaScript;
- avoid unnecessary libraries;
- use server rendering where practical;
- prevent layout shift;
- preload only truly critical assets.

## Security
Apply:
- secure headers;
- CSP strategy appropriate to the deployment;
- no secrets in client code;
- sanitized form inputs;
- rate limiting strategy for public forms;
- safe external links;
- dependency hygiene;
- no exposed private documents.

Do not expose the Investor Data Room publicly unless an actual access-control system has been implemented.

## Legal / investor compliance
The public landing page must not:
- guarantee investment returns;
- represent projections as facts;
- publish confidential term sheets;
- expose private cap tables;
- claim regulatory approvals without evidence;
- claim ownership/rights without documentation.

Use an investment disclaimer where financial projections or investment opportunities are discussed.

## Analytics
Prepare an analytics abstraction for:
- hero CTA click;
- investor materials click;
- project CTA click;
- investor form start;
- investor form submit;
- data room request.

Do not add invasive tracking by default.

## Testing checklist

### Functional
- navigation works;
- all CTAs work;
- mobile menu works;
- form validation works;
- success/error states work;
- external links work;
- no dead buttons;
- no console errors.

### Responsive
Test:
- 360px
- 390px
- 768px
- 1024px
- 1440px
- 1920px

### Browser
Test current:
- Chrome
- Edge
- Safari
- Firefox

### Accessibility
Check:
- keyboard-only navigation;
- focus states;
- heading order;
- labels;
- alt text;
- contrast;
- reduced motion.

### SEO
Check:
- metadata;
- canonical;
- sitemap;
- robots;
- structured data;
- social preview;
- indexability.

### Performance
Check:
- Lighthouse;
- Core Web Vitals;
- image payload;
- JS payload;
- layout shift;
- mobile performance.

### Security
Check:
- secrets;
- headers;
- form abuse;
- exposed endpoints;
- public/private document separation;
- dependency vulnerabilities.

## GitHub repository

Recommended:
PT-Dieng-Ventura-Holdings-Website

Branches:
- main
- develop
- feature/*

Commit examples:
- feat: build investor landing page
- feat: add ecosystem section
- fix: mobile navigation
- perf: optimize hero imagery
- seo: add metadata and structured data

Repository should include:
- README.md
- .gitignore
- .env.example
- package configuration
- source code
- public assets
- deployment instructions
- content/data documentation

Never commit:
- .env.local
- passwords
- API keys
- private investor files
- confidential legal documents
- personal data

## Deployment to Vercel

Production flow:

Local development
→ GitHub
→ Pull Request
→ Review
→ main
→ Vercel Preview
→ QA
→ Production

Configure:
- project;
- build command;
- environment variables;
- production domain;
- DNS;
- HTTPS;
- analytics;
- redirects;
- monitoring.

Use Vercel Preview Deployments for every meaningful change.

## Domain
Prepare configuration for:
**[FINAL DOMAIN TO BE PROVIDED]**

Do not invent the final domain.

## Production acceptance criteria

The website is ready only when:
- build passes;
- lint passes;
- no console errors;
- responsive checks pass;
- accessibility checks pass;
- SEO checks pass;
- performance is acceptable;
- forms are connected or explicitly marked pending;
- confidential documents are protected;
- financial figures are validated;
- legal disclaimers are reviewed;
- GitHub repository is clean;
- Vercel production deployment succeeds.

## Final developer instruction
Act as a senior full-stack engineer, UI/UX engineer, SEO engineer and security-conscious technical lead.

Do not fabricate business, legal or financial facts.

When source information is missing, create a clearly labeled placeholder and make it easy to replace through centralized data files.

Produce clean, maintainable, scalable code suitable for future expansion into:
- investor portal;
- secure data room;
- project microsites;
- booking;
- CMS;
- analytics;
- CRM;
- additional destinations/business units.

The first release is a premium public landing page, but the architecture must not block future full-stack expansion.
