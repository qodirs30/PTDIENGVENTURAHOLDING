import React from "react";
import { Card } from "../ui/Card";
import { translations } from "@/data/translations";

interface PathwayProps {
  lang: "id" | "en";
}

export const Pathway: React.FC<PathwayProps> = ({ lang }) => {
  const t = translations[lang].pathway;

  return (
    <section className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Atmosphere decorations */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-forest-green/5 blur-[120px] rounded-full pointer-events-none" />

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

        {/* Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.steps.map((step) => (
            <Card
              key={step.step}
              variant="interactive"
              showCorners={true}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-bold text-4xl text-accent-gold/20 tracking-tighter">
                    {step.step}
                  </span>
                  <div className="h-[1px] flex-grow bg-border-hairline/60 mx-4" />
                  <span className="text-[8px] font-display font-semibold uppercase px-2 py-0.5 rounded bg-surface-overlay text-text-muted border border-border-hairline">
                    {t.stage} {step.step}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-base text-off-white mb-2 uppercase tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
