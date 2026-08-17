"use client";

import React from "react";
import { Card } from "../ui/Card";
import { translations } from "@/data/translations";
import { Ticket, House, ForkKnife, Calendar, ShoppingBag, DeviceMobile, Plus } from "@phosphor-icons/react";

interface BusinessModelProps {
  lang: "id" | "en";
}

const icons = [
  <Ticket key="1" size={24} />,
  <House key="2" size={24} />,
  <ForkKnife key="3" size={24} />,
  <Calendar key="4" size={24} />,
  <ShoppingBag key="5" size={24} />,
  <DeviceMobile key="6" size={24} />
];

export const BusinessModel: React.FC<BusinessModelProps> = ({ lang }) => {
  const t = translations[lang].business;

  return (
    <section className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-border-hairline pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-border-hairline pointer-events-none hidden lg:block" />

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

        {/* Revenue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.streams.map((stream, index) => (
            <Card
              key={stream.title}
              variant="interactive"
              showCorners={true}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded bg-surface-overlay border border-border-hairline text-accent-gold">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-off-white">
                    {stream.title}
                  </h3>
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed mb-6 font-body">
                  {stream.desc}
                </p>
              </div>

              <div className="p-3 rounded bg-forest-green/10 border border-forest-light/20 text-[10px] text-off-white/80">
                <span className="font-semibold text-accent-gold">{t.synergy}:</span> {stream.synergy}
              </div>
            </Card>
          ))}
        </div>

        {/* Future expansion indicator */}
        <div className="p-6 rounded bg-surface-card border border-dashed border-border-hairline flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 rounded bg-accent-gold/10 text-accent-gold border border-accent-gold/20 shrink-0">
              <Plus size={20} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-xs text-off-white uppercase tracking-wider">
                {t.futureTitle}
              </h4>
              <p className="text-[10px] text-text-muted max-w-lg leading-relaxed">
                {t.futureDesc}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 bg-surface-overlay hover:bg-forest-green/20 text-xs font-display uppercase tracking-widest text-accent-gold border border-border-hairline rounded transition-all cursor-pointer font-semibold"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
