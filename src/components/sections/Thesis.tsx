"use client";

import React from "react";
import { Card } from "../ui/Card";
import { translations } from "@/data/translations";
import { ChartLineUp, ShieldCheck, TreeEvergreen, HardHat, UsersFour, Coins } from "@phosphor-icons/react";

const icons = [
  <TreeEvergreen key="1" size={32} className="text-accent-gold" />,
  <Coins key="2" size={32} className="text-accent-gold" />,
  <ChartLineUp key="3" size={32} className="text-accent-gold" />,
  <ShieldCheck key="4" size={32} className="text-accent-gold" />,
  <UsersFour key="5" size={32} className="text-accent-gold" />,
  <HardHat key="6" size={32} className="text-accent-gold" />,
];

interface ThesisProps {
  lang: "id" | "en";
}

export const Thesis: React.FC<ThesisProps> = ({ lang }) => {
  const t = translations[lang].thesis;

  return (
    <section id="investment-thesis" className="py-24 bg-primary relative border-b border-border-hairline">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-forest-green/10 blur-[120px] rounded-full pointer-events-none" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.points.map((point, index) => (
            <Card
              key={point.title}
              variant="interactive"
              showCorners={true}
              className="flex flex-col h-full"
            >
              <div className="mb-6 p-2 w-fit rounded bg-surface-overlay/80 border border-border-hairline">
                {icons[index % icons.length]}
              </div>
              <h3 className="font-display font-semibold text-lg text-off-white mb-2">
                {point.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-body">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
