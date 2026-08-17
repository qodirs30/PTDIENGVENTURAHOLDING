"use client";

import React, { useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Lock, FilePdf, EyeClosed } from "@phosphor-icons/react";

export const DataRoom: React.FC = () => {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setError("Please enter a passcode.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    // Mock validation logic
    setTimeout(() => {
      setIsSubmitting(false);
      setError("Invalid passcode credentials. Please contact the investment manager to receive a secure access key.");
    }, 1200);
  };

  const documents = [
    "Holding Company Charter & Corporate Articles",
    "Land Licensing & Forestry Permits (KFP Zone)",
    "Audited Valuation Matrix & Financial Forecasts",
    "Investor Term Sheet Draft (Series A)",
    "Community Collaboration MoU & Social Impact Records"
  ];

  return (
    <section id="data-room" className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Light bloom overlay */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-forest-green/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info column */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-4">
              Due Diligence
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-6">
              Investor Data Room
            </h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8 font-body">
              For security and compliance reasons, all due-diligence materials, land deeds, environmental reports, and cap tables are hosted in a secure data room. Authorized institutional investors can request credentials below.
            </p>

            {/* List of documents inside */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-xs text-off-white uppercase tracking-wider mb-2">
                Available Documentation:
              </h4>
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs text-text-muted">
                  <FilePdf size={18} className="text-accent-gold/75 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Passcode Gate card */}
          <div className="lg:col-span-5">
            <Card variant="glass" showCorners={true} className="border-accent-gold/20 p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="p-3.5 rounded bg-surface-overlay border border-border-hairline text-accent-gold mb-6 animate-pulse-slow">
                  <Lock size={28} />
                </div>
                
                <h3 className="font-display font-bold text-base text-off-white uppercase tracking-wider mb-1">
                  Secure Access Required
                </h3>
                <p className="text-[10px] text-text-muted mb-6 max-w-xs font-body">
                  Please enter your passcode to view the documents.
                </p>

                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter Access Key..."
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full px-4 py-3 bg-surface-overlay/80 border border-border-hairline text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body placeholder:text-text-muted/50"
                    />
                    <EyeClosed size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted/60" />
                  </div>

                  {error && (
                    <p className="text-[10px] text-red-400 text-left bg-red-950/20 border border-red-900/30 p-2.5 rounded font-body">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Verifying..." : "Access Data Room"}
                  </Button>
                </form>

                <div className="mt-6 pt-4 border-t border-border-hairline/60 w-full flex flex-col items-center">
                  <span className="text-[9px] text-text-muted uppercase tracking-wider mb-2">No Credentials?</span>
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[10px] text-accent-gold hover:text-accent-gold-hover transition-colors font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    Request Credentials Now
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
