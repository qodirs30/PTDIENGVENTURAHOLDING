export interface RoadmapPhase {
  phase: string;
  title: string;
  status: "completed" | "active" | "upcoming";
  bullets: string[];
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    bullets: [
      "Incorporation of PT Dieng Ventura Holdings",
      "Land acquisition and licensing for flagship Karangsari Forest Park",
      "Development of master architectural and business designs",
      "Validation of financial model with core partners"
    ]
  },
  {
    phase: "Phase 2",
    title: "Scale",
    status: "active",
    bullets: [
      "Phase 1 construction of Karangsari Forest Park infrastructure",
      "Launch of primary camping and forest experience products",
      "Opening of core F&B units (Rumah Makan Keluarga & Kedai Kopi)",
      "Strategic local community partner onboarding"
    ]
  },
  {
    phase: "Phase 3",
    title: "Ecosystem",
    status: "upcoming",
    bullets: [
      "Integration of Sekolah Alam educational programs",
      "Expansion into adventure sports and specialized wildlife tracking",
      "Launch of local product distribution and retail branding",
      "Opening of premium accommodation expansion units"
    ]
  },
  {
    phase: "Phase 4",
    title: "Platform",
    status: "upcoming",
    bullets: [
      "Unified digital booking and loyalty platform launch",
      "Franchising/licensing of successful experience brands to other regions",
      "Development of secondary high-altitude tourism destinations",
      "Ecosystem-wide carbon credit and conservation initiatives"
    ]
  }
];

export interface PathwayStep {
  step: string;
  title: string;
  description: string;
}

export const pathway: PathwayStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Submit inquiry, review public materials, and establish initial contact with our investment lead."
  },
  {
    step: "02",
    title: "Review",
    description: "Receive credential access to the Investor Data Room and review core investment pitch documents."
  },
  {
    step: "03",
    title: "Due Diligence",
    description: "Validate licensing, land asset status, community agreements, and operational projections."
  },
  {
    step: "04",
    title: "Valuation",
    description: "Jointly review and align on valuation matrices, equity allocation, and investment parameters."
  },
  {
    step: "05",
    title: "Term Sheet",
    description: "Draft and sign mutually agreed term sheets outlining capital call schedules and investor rights."
  },
  {
    step: "06",
    title: "Closing",
    description: "Execute final agreements, capitalize the escrow/operational accounts, and begin the partnership."
  }
];
