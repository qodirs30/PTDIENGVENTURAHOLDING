export interface Product {
  id: string;
  name: string;
  category: "Experience" | "Accommodation" | "F&B" | "Education" | "Nature";
  description: string;
  details: string;
}

export const products: Product[] = [
  {
    id: "prod-01",
    name: "Forest Experience",
    category: "Experience",
    description: "Immersive nature journeys guided by local conservation experts in Karangsari Forest Park.",
    details: "Guided explorations of pristine high-altitude montane forests, showcasing local flora and geological history."
  },
  {
    id: "prod-02",
    name: "Forest Walk",
    category: "Experience",
    description: "Elevated, low-impact canopy walks designed for safe, breathtaking scenic strolls.",
    details: "Specially designed elevated wooden boardwalks that allow visitors of all ages to experience the forest without damaging the fragile forest floor."
  },
  {
    id: "prod-03",
    name: "Agroforestry Experience",
    category: "Nature",
    description: "Interactive agroforestry tours connecting visitors with sustainable highland farming.",
    details: "Hands-on participation in cultivating endemic plants, mountain berries, and highland coffee alongside local farmers."
  },
  {
    id: "prod-04",
    name: "Family Camping",
    category: "Accommodation",
    description: "Premium, fully-equipped family camping grounds blending comfort and wilderness.",
    details: "Pre-pitched spacious tents, safety-first amenities, campfire circles, and tailored activities for multi-generational families."
  },
  {
    id: "prod-05",
    name: "Camping Experience",
    category: "Accommodation",
    description: "Adventure-oriented, raw camping spaces for seasoned outdoor enthusiasts.",
    details: "Strategically located wilderness camping spots offering panoramic views of Dieng's misty valleys and starry night skies."
  },
  {
    id: "prod-06",
    name: "Rumah Makan Keluarga",
    category: "F&B",
    description: "A warm, family-style culinary hub serving authentic local and highland recipes.",
    details: "Traditional Javanese architectural dining pavilion prioritizing locally sourced organic ingredients, fresh trout, and farm-to-table dishes."
  },
  {
    id: "prod-07",
    name: "Kedai Kopi & Teh Pegunungan",
    category: "F&B",
    description: "Sip single-origin mountain coffee and herbal tea blends overlooking misty valleys.",
    details: "A cozy mountainside cafe specializing in locally grown Dieng Arabica coffee, Carica tea, and traditional herbal infusions."
  },
  {
    id: "prod-08",
    name: "Night Forest Experience",
    category: "Experience",
    description: "Guided night expeditions uncovering the active nocturnal life and bioluminescent flora.",
    details: "Controlled evening trail walks focusing on ecological education, soundscapes, and observation of nocturnal forest creatures."
  },
  {
    id: "prod-09",
    name: "Bird Watching & Wildlife Tracking",
    category: "Nature",
    description: "Specialized photographic and binoculars excursions tracking endemic mountain birds.",
    details: "Silent tracking led by professional guides, targeting endemic bird species of the Dieng volcanic highlands."
  },
  {
    id: "prod-10",
    name: "Sekolah Alam",
    category: "Education",
    description: "Environmental workshops and outdoor educational programs for youth and institutions.",
    details: "Curriculum-aligned nature camps, ecological field trips, team building, and community conservation workshops."
  }
];
