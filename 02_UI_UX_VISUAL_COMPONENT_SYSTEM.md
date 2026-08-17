# MASTER PROMPT 02 — UI/UX, VISUAL SYSTEM & COMPONENT DESIGN

## Project
Design and implement a premium investor-facing landing page for **PT Dieng Ventura Holdings** using the content architecture from MASTER PROMPT 01.

## Design objective
Create the visual language of a **modern investment holding company connected to nature and destination development**.

The visual identity should feel:
- institutional;
- premium;
- credible;
- cinematic;
- modern Indonesian;
- nature-led;
- investment-grade.

Avoid:
- generic tourism templates;
- cheap travel-agency aesthetics;
- excessive gradients;
- excessive animations;
- stock-photo overload;
- cluttered dashboards;
- childish icons.

## Visual direction

### Color system
Primary:
- Deep Forest Green
- Charcoal / Near Black
- Off White

Secondary:
- Earth Brown
- Muted Gold accent

Use CSS variables/tokens so colors can be changed centrally.

### Typography
Use a modern sans-serif system with:
- strong display heading;
- highly readable body;
- tabular/financial numerals;
- clear hierarchy.

Do not use more than two font families.

## Page structure

### Header
Desktop:
- logo left;
- navigation center/right;
- CTA button;
- sticky on scroll.

Navigation:
- Vision
- Ecosystem
- Projects
- Investment
- Data Room
- Contact

Mobile:
- compact header;
- accessible menu;
- prominent investor CTA.

### Hero
Use a cinematic Dieng / forest visual with a dark readability overlay.

Hero elements:
- eyebrow: TOURISM & INVESTMENT HOLDING COMPANY
- H1: Building an Integrated Tourism, Nature & Investment Ecosystem
- supporting copy
- primary CTA
- secondary CTA
- subtle trust/location line

Hero should communicate the business in under 5 seconds.

### Investment thesis section
Use 4–6 premium cards with restrained iconography.

### Holding architecture
Use a responsive ecosystem diagram:
PT Dieng Ventura Holdings
→ Projects / Assets
→ Business Units
→ Revenue Streams

On mobile, transform diagram into a vertical flow.

### Ecosystem section
Use an interactive but lightweight visual system.

Hover states can reveal short descriptions, but all information must remain accessible without hover.

### Flagship project
Create a premium split layout:
- visual;
- project narrative;
- five positioning pillars;
- CTA to project information.

### Product portfolio
Use a responsive grid for the 10 products.

Each card:
- image/visual;
- product name;
- one-line description;
- optional category tag.

Avoid large amounts of text.

### Business model
Use a visual revenue architecture rather than a dense table.

### Roadmap
Use a four-stage timeline:
Foundation → Scale → Ecosystem → Platform

### Financial section
Use high-impact KPI cards ONLY when validated data exists.

If values are not available, use a “Financial Model in Validation” state rather than fake numbers.

### Investor pathway
Use a horizontal process on desktop and vertical timeline on mobile.

### Data room
Create a secure-looking document-access section without implying actual authentication unless it is implemented.

### Final CTA
Strong full-width section with premium background visual.

### Footer
Include:
- company name;
- location;
- legal/disclaimer link;
- privacy;
- contact;
- social links only if officially available.

## Component system
Build reusable components:
- Header
- MobileNav
- Hero
- SectionHeading
- CTAButton
- TrustBadge
- ThesisCard
- HoldingDiagram
- EcosystemMap
- ProjectFeature
- ProductCard
- RevenueArchitecture
- Roadmap
- FinancialKPI
- InvestorProcess
- DataRoomCTA
- Footer
- Cookie/Privacy notice if required

## Responsive breakpoints
Design for:
- 360px mobile
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop
- 1920px wide desktop

Check:
- no horizontal overflow;
- no clipped text;
- no broken diagrams;
- buttons remain tappable;
- typography scales appropriately.

## Motion
Use subtle motion only:
- fade/slide on section entry;
- gentle image movement;
- restrained hover states;
- no autoplay-heavy effects;
- respect prefers-reduced-motion.

## Accessibility
Target WCAG 2.2 AA principles:
- semantic HTML;
- keyboard navigation;
- visible focus;
- sufficient contrast;
- alt text;
- accessible buttons and links;
- form labels;
- reduced-motion support.

## Image rules
Use optimized responsive images.
Every image must have:
- descriptive alt text;
- appropriate aspect ratio;
- lazy loading below the fold;
- responsive source sizing.

Do not use unlicensed third-party images in production.

## Output
Generate the complete UI system, page layout, component hierarchy, interaction states and responsive behavior required to implement the landing page.
