"use client";

import React, { useState } from "react";
import { Card } from "../ui/Card";
import { translations } from "@/data/translations";
import { CheckCircle, Circle, PlayCircle } from "@phosphor-icons/react";

interface RoadmapProps {
  lang: "id" | "en";
}

export const Roadmap: React.FC<RoadmapProps> = ({ lang }) => {
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
  const t = translations[lang].roadmap;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={18} className="text-accent-gold" />;
      case "active":
        return <PlayCircle size={18} className="text-accent-gold animate-pulse-slow" />;
      case "upcoming":
      default:
        return <Circle size={18} className="text-text-muted" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return t.completed;
      case "active":
        return t.active;
      case "upcoming":
      default:
        return t.upcoming;
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Atmosphere corner bloom */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-green/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

        {/* Desktop timeline horizontal track */}
        <div className="hidden lg:flex items-stretch justify-between relative mb-12 gap-6">
          {/* Horizontal connection line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-hairline -translate-y-1/2 z-0" />

          {t.phases.map((phase) => {
            const isHovered = hoveredPhase === phase.phase;
            return (
              <div
                key={phase.phase}
                className="relative z-10 flex-1 flex flex-col items-center text-center cursor-default"
                onMouseEnter={() => setHoveredPhase(phase.phase)}
                onMouseLeave={() => setHoveredPhase(null)}
              >
                {/* Node icon indicator */}
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center mb-6 transition-all duration-300 ${
                    phase.status === "completed"
                      ? "bg-accent-gold/10 border-accent-gold"
                      : phase.status === "active"
                      ? "bg-forest-light/20 border-accent-gold scale-110"
                      : "bg-surface-card border-border-hairline"
                  }`}
                >
                  {getStatusIcon(phase.status)}
                </div>

                <Card
                  variant="glass"
                  showCorners={isHovered}
                  className={`w-full text-left transition-all duration-300 ${
                    isHovered ? "border-accent-gold/40 translate-y-[-4px]" : "border-border-hairline"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 border-b border-border-hairline/60 pb-2">
                    <span className="text-[9px] font-display font-semibold text-accent-gold uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                      phase.status === "completed" ? "bg-accent-gold/20 text-accent-gold" :
                      phase.status === "active" ? "bg-forest-glow/30 text-accent-gold" : "bg-surface-overlay text-text-muted"
                    }`}>
                      {getStatusText(phase.status)}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-off-white mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2 text-[10px] text-text-muted leading-relaxed font-body">
                    {phase.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-accent-gold mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Mobile timeline vertical track */}
        <div className="lg:hidden relative border-l border-border-hairline pl-8 ml-4 space-y-8">
          {t.phases.map((phase) => (
            <div key={phase.phase} className="relative">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[42px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center bg-primary z-10 ${
                  phase.status === "active" ? "border-accent-gold animate-pulse-slow" : "border-border-hairline"
                }`}
              >
                {getStatusIcon(phase.status)}
              </div>

              <Card variant="glass" showCorners={phase.status === "active"} className="relative">
                <div className="flex items-center justify-between mb-3 border-b border-border-hairline/60 pb-2">
                  <span className="text-[9px] font-display font-semibold text-accent-gold uppercase tracking-wider">
                    {phase.phase} — {phase.title}
                  </span>
                  <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                    phase.status === "completed" ? "bg-accent-gold/20 text-accent-gold" :
                    phase.status === "active" ? "bg-forest-glow/30 text-accent-gold" : "bg-surface-overlay text-text-muted"
                  }`}>
                    {getStatusText(phase.status)}
                  </span>
                </div>
                <ul className="space-y-2 text-[10px] text-text-muted leading-relaxed font-body">
                  {phase.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
