"use client";

import React, { useState } from "react";
import { Card } from "../ui/Card";
import { translations } from "@/data/translations";
import { TreeStructure, Buildings, ProjectorScreenChart, Coins, ArrowRight, ArrowDown } from "@phosphor-icons/react";

interface HoldingArchitectureProps {
  lang: "id" | "en";
}

export const HoldingArchitecture: React.FC<HoldingArchitectureProps> = ({ lang }) => {
  const [activeNode, setActiveNode] = useState<string>("holding");
  const t = translations[lang].holding;

  const nodeDetails = {
    holding: {
      title: lang === "id" ? "PT Dieng Ventura Holdings" : "PT Dieng Ventura Holdings",
      level: t.level1,
      desc: t.holdingDesc,
      metrics: t.holdingMetrics
    },
    assets: {
      title: lang === "id" ? "Proyek & Aset Lahan Strategis" : "Strategic Land & Project Assets",
      level: t.level2,
      desc: t.assetsDesc,
      metrics: t.assetsMetrics
    },
    units: {
      title: lang === "id" ? "Unit Bisnis Saling Terhubung" : "Interconnected Business Units",
      level: t.level3,
      desc: t.unitsDesc,
      metrics: t.unitsMetrics
    },
    revenues: {
      title: lang === "id" ? "Aliran Pendapatan Terdiversifikasi" : "Diversified Revenue Streams",
      level: t.level4,
      desc: t.revenuesDesc,
      metrics: t.revenuesMetrics
    }
  };

  return (
    <section id="holding-architecture" className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Soft luminous atmospheric bloom */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-forest-green/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-4">
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-4">
            {t.title}
          </h2>
          <p className="text-sm text-text-muted">
            {t.subtitle}
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Interactive diagram flow */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-6 relative">
            
            {/* Holding Node */}
            <div className="w-full max-w-md flex flex-col items-center">
              <button
                onClick={() => setActiveNode("holding")}
                className={`w-full p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
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
                      <h3 className="font-display font-semibold text-sm text-off-white">
                        {nodeDetails.holding.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "holding" ? "translate-x-1" : ""}`} />
                  <ArrowDown size={16} className={`text-text-muted lg:hidden transition-transform duration-300 ${activeNode === "holding" ? "rotate-180" : ""}`} />
                </div>
              </button>
              
              {/* Mobile Inline Detail */}
              {activeNode === "holding" && (
                <div className="lg:hidden w-full mt-2 p-5 rounded bg-surface-card border border-accent-gold/30 text-left animate-fade-in">
                  <span className="text-[9px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-1">
                    {nodeDetails.holding.level}
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed font-body mb-4">
                    {nodeDetails.holding.desc}
                  </p>
                  <div className="p-3 rounded bg-surface-overlay border border-border-hairline">
                    <span className="text-[8px] uppercase tracking-wider font-semibold text-accent-gold block mb-0.5">
                      {t.detailTitle}
                    </span>
                    <p className="text-[11px] text-off-white font-medium">
                      {nodeDetails.holding.metrics}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Link 1 */}
            <div className="w-[1px] h-6 bg-border-hairline" />

            {/* Assets Node */}
            <div className="w-full max-w-md flex flex-col items-center">
              <button
                onClick={() => setActiveNode("assets")}
                className={`w-full p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
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
                      <h3 className="font-display font-semibold text-sm text-off-white">
                        {nodeDetails.assets.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "assets" ? "translate-x-1" : ""}`} />
                  <ArrowDown size={16} className={`text-text-muted lg:hidden transition-transform duration-300 ${activeNode === "assets" ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Mobile Inline Detail */}
              {activeNode === "assets" && (
                <div className="lg:hidden w-full mt-2 p-5 rounded bg-surface-card border border-accent-gold/30 text-left animate-fade-in">
                  <span className="text-[9px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-1">
                    {nodeDetails.assets.level}
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed font-body mb-4">
                    {nodeDetails.assets.desc}
                  </p>
                  <div className="p-3 rounded bg-surface-overlay border border-border-hairline">
                    <span className="text-[8px] uppercase tracking-wider font-semibold text-accent-gold block mb-0.5">
                      {t.detailTitle}
                    </span>
                    <p className="text-[11px] text-off-white font-medium">
                      {nodeDetails.assets.metrics}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Link 2 */}
            <div className="w-[1px] h-6 bg-border-hairline" />

            {/* Units Node */}
            <div className="w-full max-w-md flex flex-col items-center">
              <button
                onClick={() => setActiveNode("units")}
                className={`w-full p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
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
                      <h3 className="font-display font-semibold text-sm text-off-white">
                        {nodeDetails.units.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "units" ? "translate-x-1" : ""}`} />
                  <ArrowDown size={16} className={`text-text-muted lg:hidden transition-transform duration-300 ${activeNode === "units" ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Mobile Inline Detail */}
              {activeNode === "units" && (
                <div className="lg:hidden w-full mt-2 p-5 rounded bg-surface-card border border-accent-gold/30 text-left animate-fade-in">
                  <span className="text-[9px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-1">
                    {nodeDetails.units.level}
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed font-body mb-4">
                    {nodeDetails.units.desc}
                  </p>
                  <div className="p-3 rounded bg-surface-overlay border border-border-hairline">
                    <span className="text-[8px] uppercase tracking-wider font-semibold text-accent-gold block mb-0.5">
                      {t.detailTitle}
                    </span>
                    <p className="text-[11px] text-off-white font-medium">
                      {nodeDetails.units.metrics}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Link 3 */}
            <div className="w-[1px] h-6 bg-border-hairline" />

            {/* Revenues Node */}
            <div className="w-full max-w-md flex flex-col items-center">
              <button
                onClick={() => setActiveNode("revenues")}
                className={`w-full p-4 rounded border text-left transition-all duration-300 cursor-pointer ${
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
                      <h3 className="font-display font-semibold text-sm text-off-white">
                        {nodeDetails.revenues.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight size={16} className={`text-text-muted hidden lg:block transition-transform ${activeNode === "revenues" ? "translate-x-1" : ""}`} />
                  <ArrowDown size={16} className={`text-text-muted lg:hidden transition-transform duration-300 ${activeNode === "revenues" ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Mobile Inline Detail */}
              {activeNode === "revenues" && (
                <div className="lg:hidden w-full mt-2 p-5 rounded bg-surface-card border border-accent-gold/30 text-left animate-fade-in">
                  <span className="text-[9px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-1">
                    {nodeDetails.revenues.level}
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed font-body mb-4">
                    {nodeDetails.revenues.desc}
                  </p>
                  <div className="p-3 rounded bg-surface-overlay border border-border-hairline">
                    <span className="text-[8px] uppercase tracking-wider font-semibold text-accent-gold block mb-0.5">
                      {t.detailTitle}
                    </span>
                    <p className="text-[11px] text-off-white font-medium">
                      {nodeDetails.revenues.metrics}
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Side: Detailed explanation card (Desktop Only) */}
          <div className="lg:col-span-5 h-full hidden lg:flex items-center">
            <Card variant="glass" showCorners={true} className="w-full">
              <span className="text-[10px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-1">
                {nodeDetails[activeNode as keyof typeof nodeDetails].level}
              </span>
              <h3 className="font-display font-bold text-2xl text-off-white mb-4">
                {nodeDetails[activeNode as keyof typeof nodeDetails].title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-body mb-6">
                {nodeDetails[activeNode as keyof typeof nodeDetails].desc}
              </p>
              
              <div className="p-4 rounded bg-surface-overlay border border-border-hairline">
                <span className="text-[9px] uppercase tracking-wider font-semibold text-accent-gold block mb-1">
                  {t.detailTitle}
                </span>
                <p className="text-xs text-off-white font-medium">
                  {nodeDetails[activeNode as keyof typeof nodeDetails].metrics}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
