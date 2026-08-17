"use client";

import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Tree, Barbell, Users, GraduationCap, ShieldCheck } from "@phosphor-icons/react";

const pillars = [
  { name: "Nature", icon: <Tree size={16} />, desc: "Preserving high-altitude volcanic forest ecology and rich endemic biodiversity." },
  { name: "Adventure", icon: <Barbell size={16} />, desc: "Low-impact physical exploration, sky canopy walks, and mountain trails." },
  { name: "Family", icon: <Users size={16} />, desc: "Multi-generational premium camping and shared wilderness activities." },
  { name: "Education", icon: <GraduationCap size={16} />, desc: "Structured Sekolah Alam curriculum and outdoor environmental workshops." },
  { name: "Conservation", icon: <ShieldCheck size={16} />, desc: "Reforestation projects, wildlife monitoring, and community inclusive protection." },
];

export const FlagshipProject: React.FC = () => {
  return (
    <section id="flagship" className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-green/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-4">
            Flagship Project
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-4">
            Karangsari Forest Park
          </h2>
          <p className="text-sm text-text-muted">
            Our premier ecotourism asset developing sustainable infrastructure inside Dieng&apos;s pristine volcanic highlands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Project Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] text-accent-gold font-display font-semibold uppercase tracking-wider block mb-2">
              Destination Overview
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-off-white mb-6">
              A Nature-Based Ecosystem Built for Preservation and Experience
            </h3>
            
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8 font-body">
              Karangsari Forest Park is a thoughtfully designed flagship destination built around forest immersion, family-focused camping, and agroforestry. It offers controlled nature adventures, highland F&B units, and conservation facilities, all built on a low-impact architecture that protects the forest ecosystem.
            </p>

            {/* Pillars */}
            <div className="space-y-4 mb-8">
              {pillars.map((pillar) => (
                <div key={pillar.name} className="flex items-start space-x-3">
                  <div className="p-1.5 rounded bg-surface-card border border-border-hairline text-accent-gold mt-0.5">
                    {pillar.icon}
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
                Request Project Details
              </Button>
            </div>
          </div>

          {/* Right: High-Impact Visual / Schematic Mock (WebGL/Abstract feel) */}
          <div className="lg:col-span-5">
            <Card variant="glass" showCorners={true} className="relative h-96 flex flex-col justify-between border-accent-gold/20">
              {/* Background gradient grid for sci-fi/WebGL technical aesthetic */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,61,40,0.15)_0%,transparent_70%)]" />
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Top corner badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] font-display font-bold uppercase tracking-widest text-accent-gold">
                  Asset ID: KFP-01
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-forest-green/30 border border-forest-light/40 text-accent-gold font-semibold uppercase">
                  Licensing Verified
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
                  Flagship Development Staging
                </h4>
                
                <p className="text-[10px] text-text-muted max-w-xs leading-relaxed">
                  Licensing and master designs completed. Site planning utilizes zero-emission architecture and local building materials.
                </p>
              </div>

              {/* Bottom detail row */}
              <div className="relative z-10 flex items-center justify-between border-t border-border-hairline/60 pt-4 text-[9px] text-text-muted uppercase tracking-wider">
                <span>Location: Dieng, Central Java</span>
                <span>Elevation: ~2,000m ASL</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
