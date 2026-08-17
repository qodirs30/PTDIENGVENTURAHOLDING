"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ShieldCheck, CalendarCheck, LockSimple } from "@phosphor-icons/react";
import { siteConfig } from "@/data/site";
import { translations } from "@/data/translations";

interface FinancialsProps {
  lang: "id" | "en";
}

export const Financials: React.FC<FinancialsProps> = ({ lang }) => {
  const t = translations[lang].financials;

  return (
    <section className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Soft light bloom behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-forest-green/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-6">
          {t.tag}
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-6">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-text-muted max-w-xl mx-auto mb-10 leading-relaxed font-body">
          {t.subtitle}
        </p>

        {/* Lock / Validation card */}
        <Card variant="glass" showCorners={true} className="max-w-2xl mx-auto border-accent-gold/20 p-8">
          <div className="flex flex-col items-center justify-center">
            {/* Animated Lock badge */}
            <div className="w-16 h-16 rounded-full bg-surface-overlay border border-border-hairline flex items-center justify-center text-accent-gold mb-6 relative animate-pulse-slow">
              <LockSimple size={28} />
              <div className="absolute inset-0 rounded-full border border-accent-gold/20 animate-ping opacity-25" />
            </div>

            <h3 className="font-display font-bold text-lg text-off-white uppercase tracking-wider mb-2">
              {t.validationTitle}
            </h3>
            
            <p className="text-xs text-text-muted max-w-md leading-relaxed mb-6 font-body">
              {t.validationDesc}
            </p>

            {/* Validation statuses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md text-left mb-8 border-y border-border-hairline/60 py-4">
              <div className="flex items-center space-x-2.5 text-[10px] text-text-muted">
                <ShieldCheck size={18} className="text-accent-gold shrink-0" />
                <span>{t.statusLicensing}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-[10px] text-text-muted">
                <CalendarCheck size={18} className="text-accent-gold shrink-0" />
                <span>{t.statusAudit}</span>
              </div>
            </div>

            {/* Inquire Action */}
            <Button
              variant="outline"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.cta}
            </Button>
          </div>
        </Card>
        
        {/* Compliance legal disclaimer */}
        <p className="text-[9px] text-text-muted/60 max-w-lg mx-auto mt-6 leading-relaxed">
          {siteConfig.disclaimer}
        </p>
      </div>
    </section>
  );
};
