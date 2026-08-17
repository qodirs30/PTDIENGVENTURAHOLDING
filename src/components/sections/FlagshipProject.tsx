"use client";

import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { siteConfig } from "@/data/site";
import { translations } from "@/data/translations";
import { Tree, Barbell, Users, GraduationCap, ShieldCheck } from "@phosphor-icons/react";

interface FlagshipProjectProps {
  lang: "id" | "en";
}

const getPillarIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "nature":
    case "alam":
      return <Tree size={16} />;
    case "adventure":
    case "petualangan":
      return <Barbell size={16} />;
    case "family":
    case "keluarga":
      return <Users size={16} />;
    case "education":
    case "pendidikan":
      return <GraduationCap size={16} />;
    case "conservation":
    case "konservasi":
    default:
      return <ShieldCheck size={16} />;
  }
};

export const FlagshipProject: React.FC<FlagshipProjectProps> = ({ lang }) => {
  const t = translations[lang].flagship;

  return (
    <section id="flagship" className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Decorative side text block */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 rotate-90 origin-bottom-right opacity-[0.02] font-display font-black text-7xl text-off-white tracking-widest pointer-events-none uppercase hidden xl:block">
        FLAGSHIP DEVEL
      </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Project Description & Value Props */}
          <div className="lg:col-span-7">
            <span className="text-[10px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-1">
              {t.overview}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-off-white mb-6 leading-tight">
              {t.mainTitle}
            </h3>
            
            <p className="text-xs text-text-muted leading-relaxed mb-8 font-body">
              {t.desc}
            </p>

            {/* Project Pillars Grid */}
            <div className="space-y-4 mb-8">
              {t.pillars.map((pillar) => (
                <div key={pillar.name} className="flex items-start space-x-3">
                  <div className="p-1.5 rounded bg-surface-card border border-border-hairline text-accent-gold mt-0.5">
                    {getPillarIcon(pillar.name)}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs text-off-white uppercase tracking-wider">
                      {pillar.name}
                    </h4>
                    <p className="text-[11px] text-text-muted leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Button
                variant="primary"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t.cta}
              </Button>
            </div>
          </div>

          {/* Right: High-Impact Visual / Schematic Mock (WebGL/Abstract feel) */}
          <div className="lg:col-span-5">
            <Card variant="glass" showCorners={true} className="relative h-96 flex flex-col justify-between border-accent-gold/20 overflow-hidden">
              {/* Background forest photo */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
                style={{ backgroundImage: `url(${siteConfig.images.forestBg})` }}
              />
              
              {/* Background gradient grid for sci-fi/WebGL technical aesthetic */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,61,40,0.2)_0%,transparent_90%)]" />
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Top corner badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] font-display font-bold uppercase tracking-widest text-accent-gold">
                  {t.assetId}: KFP-01
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-forest-green/30 border border-forest-light/40 text-accent-gold font-semibold uppercase">
                  {t.verified}
                </span>
              </div>

              {/* Central Abstract Asset Art */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full border border-dashed border-accent-gold/30 flex items-center justify-center mb-6 animate-pulse-slow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-forest-green/60 to-forest-light/60 border border-accent-gold/20 flex items-center justify-center text-accent-gold">
                    <Tree size={36} />
                  </div>
                </div>
                
                <h4 className="font-display font-semibold text-sm text-off-white uppercase tracking-wider mb-2">
                  {t.stagingTitle}
                </h4>
                
                <p className="text-[10px] text-text-muted max-w-xs leading-relaxed">
                  {t.stagingDesc}
                </p>
              </div>

              {/* Lower info strip */}
              <div className="relative z-10 flex items-center justify-between border-t border-border-hairline pt-3 mt-auto">
                <span className="text-[9px] text-text-muted">
                  {t.location}
                </span>
                <span className="text-[9px] text-text-muted">
                  {t.elevation}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
