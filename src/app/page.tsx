"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Thesis } from "@/components/sections/Thesis";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HoldingArchitecture } from "@/components/sections/HoldingArchitecture";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FlagshipProject } from "@/components/sections/FlagshipProject";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Roadmap } from "@/components/sections/Roadmap";
import { Financials } from "@/components/sections/Financials";
import { Pathway } from "@/components/sections/Pathway";
import { DataRoom } from "@/components/sections/DataRoom";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent-gold selection:text-primary">
      {/* Structural layout guide lines for premium framed design */}
      <div className="absolute inset-x-6 top-0 bottom-0 border-x border-border-hairline pointer-events-none z-10 hidden sm:block" />
      
      {/* Main Header / Navigation */}
      <Header lang={lang} setLang={setLang} />

      {/* Landing Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Section 2: Investment Thesis */}
        <Thesis lang={lang} />

        {/* Section 3: Problem/Solution Gap */}
        <ProblemSolution lang={lang} />

        {/* Section 4: Holding Architecture */}
        <HoldingArchitecture lang={lang} />

        {/* Section 5: Ecosystem & Product Portfolio */}
        <Ecosystem lang={lang} />

        {/* Section 6: Flagship Project Showcase */}
        <FlagshipProject lang={lang} />

        {/* Section 7: Business Model */}
        <BusinessModel lang={lang} />

        {/* Section 8: Growth Roadmap */}
        <Roadmap lang={lang} />

        {/* Section 9: Financial Highlights */}
        <Financials lang={lang} />

        {/* Section 10: Investor Pathway */}
        <Pathway lang={lang} />

        {/* Section 11: Secure Data Room Gate */}
        <DataRoom lang={lang} />

        {/* Section 12: Inquiries Form */}
        <ContactForm lang={lang} />
      </main>

      {/* Main Footer & Compliance Legal Block */}
      <Footer lang={lang} />
    </div>
  );
}
