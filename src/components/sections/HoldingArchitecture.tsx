"use client";

import React, { useState } from "react";
import { Card } from "../ui/Card";
import { TreeStructure, Buildings, ProjectorScreenChart, Coins, ArrowRight, ArrowDown } from "@phosphor-icons/react";

export const HoldingArchitecture: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("holding");

  const nodes = {
    holding: {
      title: "PT Dieng Ventura Holdings",
      level: "Level 1: Holding Parent",
      desc: "Centralized institutional management, strategic capitalization, regulatory compliance, corporate governance, and branding control.",
      metrics: "Corporate coordination across all subsidiaries."
    },
    assets: {
      title: "Strategic Land & Tourism Assets",
      level: "Level 2: Projects & Assets",
      desc: "Development of flagship locations, starting with the Karangsari Forest Park. Acquisition of high-appreciation assets in tourism zones.",
      metrics: "Flagship: Karangsari Forest Park (Licensing secured)."
    },
    units: {
      title: "Interconnected Business Units",
      level: "Level 3: Operations & Brands",
      desc: "Modular operational units (Accommodation, F&B, Education, Retail, Adventure) sharing resources and marketing budgets.",
      metrics: "10 core products managed under shared operational services."
    },
    revenues: {
      title: "Diversified Revenue Streams",
      level: "Level 4: Capital Inflows",
      desc: "Direct consumer ticket bookings, accommodation stays, farm-to-table dining, local product sales, event hosting, and educational fees.",
      metrics: "6+ integrated cash flow channels."
    }
  };

  return (
    <section className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Soft luminous atmospheric bloom */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-forest-green/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-4">
            Ecosystem Structure
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-4">
            Holding Company Architecture
          </h2>
          <p className="text-sm text-text-muted">
            Our corporate structure is designed to mitigate operating risks through diversification while maximizing synergy.
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Interactive diagram flow */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-6 relative">
            {/* Holding Node */}
            <button
              onClick={() => setActiveNode("holding")}
              className={`w-full max-w-md p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
                activeNode === "holding"
                  ? "bg-accent-gold/10 border-accent-gold shadow-lg shadow-accent-gold/5"
                  : "bg-surface-card border-border-hairline hover:border-text-muted/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded ${activeNode === "holding" ? "bg-accent-gold/20 text-accent-gold" : "bg-surface-overlay text-text-muted"}`}>
                    <Buildings size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-muted block">Level 1</span>
                    <h3 className="font-display font-semibold text-sm text-off-white">PT Dieng Ventura Holdings</h3>
                  </div>
                </div>
                <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "holding" ? "translate-x-1" : ""}`} />
                <ArrowDown size={16} className="text-text-muted lg:hidden" />
              </div>
            </button>

            {/* Link 1 */}
            <div className="w-[1px] h-6 bg-border-hairline" />

            {/* Assets Node */}
            <button
              onClick={() => setActiveNode("assets")}
              className={`w-full max-w-md p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
                activeNode === "assets"
                  ? "bg-accent-gold/10 border-accent-gold shadow-lg shadow-accent-gold/5"
                  : "bg-surface-card border-border-hairline hover:border-text-muted/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded ${activeNode === "assets" ? "bg-accent-gold/20 text-accent-gold" : "bg-surface-overlay text-text-muted"}`}>
                    <TreeStructure size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-muted block">Level 2</span>
                    <h3 className="font-display font-semibold text-sm text-off-white">Projects & Land Assets</h3>
                  </div>
                </div>
                <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "assets" ? "translate-x-1" : ""}`} />
                <ArrowDown size={16} className="text-text-muted lg:hidden" />
              </div>
            </button>

            {/* Link 2 */}
            <div className="w-[1px] h-6 bg-border-hairline" />

            {/* Units Node */}
            <button
              onClick={() => setActiveNode("units")}
              className={`w-full max-w-md p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
                activeNode === "units"
                  ? "bg-accent-gold/10 border-accent-gold shadow-lg shadow-accent-gold/5"
                  : "bg-surface-card border-border-hairline hover:border-text-muted/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded ${activeNode === "units" ? "bg-accent-gold/20 text-accent-gold" : "bg-surface-overlay text-text-muted"}`}>
                    <ProjectorScreenChart size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-muted block">Level 3</span>
                    <h3 className="font-display font-semibold text-sm text-off-white">Operating Business Units</h3>
                  </div>
                </div>
                <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "units" ? "translate-x-1" : ""}`} />
                <ArrowDown size={16} className="text-text-muted lg:hidden" />
              </div>
            </button>

            {/* Link 3 */}
            <div className="w-[1px] h-6 bg-border-hairline" />

            {/* Revenues Node */}
            <button
              onClick={() => setActiveNode("revenues")}
              className={`w-full max-w-md p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
                activeNode === "revenues"
                  ? "bg-accent-gold/10 border-accent-gold shadow-lg shadow-accent-gold/5"
                  : "bg-surface-card border-border-hairline hover:border-text-muted/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded ${activeNode === "revenues" ? "bg-accent-gold/20 text-accent-gold" : "bg-surface-overlay text-text-muted"}`}>
                    <Coins size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-muted block">Level 4</span>
                    <h3 className="font-display font-semibold text-sm text-off-white">Integrated Revenue Channels</h3>
                  </div>
                </div>
                <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "revenues" ? "translate-x-1" : ""}`} />
                <ArrowDown size={16} className="text-text-muted lg:hidden" />
              </div>
            </button>
          </div>

          {/* Right Side: Detailed explanation card */}
          <div className="lg:col-span-5 h-full flex items-center">
            <Card variant="glass" showCorners={true} className="w-full">
              <span className="text-[10px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-1">
                {nodes[activeNode as keyof typeof nodes].level}
              </span>
              <h3 className="font-display font-bold text-2xl text-off-white mb-4">
                {nodes[activeNode as keyof typeof nodes].title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-body mb-6">
                {nodes[activeNode as keyof typeof nodes].desc}
              </p>
              
              <div className="p-4 rounded bg-surface-overlay border border-border-hairline">
                <span className="text-[9px] uppercase tracking-wider font-semibold text-accent-gold block mb-1">
                  Key Metric / Details
                </span>
                <p className="text-xs text-off-white font-medium">
                  {nodes[activeNode as keyof typeof nodes].metrics}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
