"use client";

import React from "react";
import { problemSolution } from "@/data/site";
import { WarningCircle, CheckCircle } from "@phosphor-icons/react";

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-border-hairline pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border-hairline pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-4">
            Market Opportunity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-4">
            Bridging the Value Gap
          </h2>
          <p className="text-sm text-text-muted">
            Analyzing the fragmentation of highland tourism in Indonesia and our integrated solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Problem Block */}
          <div className="flex flex-col p-8 rounded bg-surface-card border border-border-hairline relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/40" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/40" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/40" />

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                <WarningCircle size={24} />
              </div>
              <div>
                <span className="text-[10px] text-red-400 font-display font-semibold uppercase tracking-wider block">
                  {problemSolution.problem.title}
                </span>
                <h3 className="font-display font-bold text-xl text-off-white">
                  {problemSolution.problem.subtitle}
                </h3>
              </div>
            </div>

            <ul className="space-y-4 flex-grow">
              {problemSolution.problem.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3 text-xs leading-relaxed text-text-muted">
                  <span className="text-red-400 mt-1.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-border-hairline text-center">
              <span className="text-[10px] uppercase font-display font-bold tracking-widest text-red-400/80">
                Missed Economic Value & Customer Stay Time
              </span>
            </div>
          </div>

          {/* Solution Block */}
          <div className="flex flex-col p-8 rounded bg-surface-card border border-accent-gold/20 relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-gold/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-gold/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent-gold/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-gold/50" />

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                <CheckCircle size={24} />
              </div>
              <div>
                <span className="text-[10px] text-accent-gold font-display font-semibold uppercase tracking-wider block">
                  {problemSolution.solution.title}
                </span>
                <h3 className="font-display font-bold text-xl text-off-white">
                  {problemSolution.solution.subtitle}
                </h3>
              </div>
            </div>

            <ul className="space-y-4 flex-grow">
              {problemSolution.solution.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3 text-xs leading-relaxed text-off-white/80">
                  <span className="text-accent-gold mt-1.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border-hairline text-center">
              <span className="text-[10px] uppercase font-display font-bold tracking-widest text-accent-gold">
                Optimized Revenue Streams & Local Growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
