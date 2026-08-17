"use client";

import React from "react";
import { Button } from "../ui/Button";
import { siteConfig } from "@/data/site";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-primary border-b border-border-hairline">
      {/* Premium ambient light background (Atmosphere-Background style) */}
      <div className="absolute inset-0 z-0">
        {/* Soft green/emerald light blobs drifting slowly */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-forest-green/20 blur-[130px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-forest-glow/10 blur-[150px] rounded-full animate-float" />
        
        {/* Soft dithered layout feel / background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0f0d_95%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Guide lines & L-shape brackets (Framed-Grid-Layout style) */}
      <div className="absolute inset-x-6 top-24 bottom-0 border-x border-border-hairline pointer-events-none z-10 hidden sm:block">
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent-gold/30 -ml-[1px]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent-gold/30 -mr-[1px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        {/* Trust badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-surface-card/80 border border-border-hairline backdrop-blur-sm mb-8 animate-pulse-slow">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          <span className="text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase">
            {siteConfig.trustLabel}
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-off-white mb-6 leading-[1.1]">
          Building an Integrated{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-forest-light to-accent-gold bg-[size:200%] animate-pulse-slow">
            Tourism, Nature & Investment
          </span>{" "}
          Ecosystem
        </h1>

        {/* Support Paragraph */}
        <p className="text-sm sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          PT Dieng Ventura Holdings develops interconnected tourism assets, brands, projects, and business units designed to create long-term economic value while strengthening local communities and protecting nature.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const el = document.getElementById("thesis");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore the Opportunity
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const el = document.getElementById("data-room");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Investor Materials
          </Button>
        </div>
      </div>
      
      {/* Down arrow marker */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 z-20">
        <span className="text-[9px] uppercase tracking-widest text-text-muted">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
};
