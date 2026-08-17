"use client";

import React, { useState } from "react";
import { products, Product } from "@/data/products";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Compass, Bed, ForkKnife, GraduationCap, Leaf } from "@phosphor-icons/react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Experience":
      return <Compass size={18} />;
    case "Accommodation":
      return <Bed size={18} />;
    case "F&B":
      return <ForkKnife size={18} />;
    case "Education":
      return <GraduationCap size={18} />;
    case "Nature":
    default:
      return <Leaf size={18} />;
  }
};

export const Ecosystem: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Experience", "Accommodation", "F&B", "Education", "Nature"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="ecosystem" className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-forest-green/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-forest-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-4">
            Product Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-4">
            Our Tourism Ecosystem
          </h2>
          <p className="text-sm text-text-muted">
            An interconnected portfolio of 10 products creating multiple touchpoints and maximizing visitor engagement.
          </p>
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[10px] uppercase font-display font-medium tracking-wider rounded transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-accent-gold text-primary font-semibold"
                  : "bg-surface-card border border-border-hairline text-text-muted hover:text-off-white hover:border-text-muted/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product) => (
            <Card
              key={product.id}
              variant="interactive"
              showCorners={true}
              className="flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 rounded bg-surface-overlay text-accent-gold border border-border-hairline group-hover:border-accent-gold/20 transition-colors duration-300">
                    {getCategoryIcon(product.category)}
                  </div>
                  <Badge variant="accent">{product.category}</Badge>
                </div>
                
                {/* Info */}
                <h3 className="font-display font-semibold text-base text-off-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-6 font-body">
                  {product.description}
                </p>
              </div>

              {/* Expansion Details */}
              <div className="pt-4 border-t border-border-hairline/60">
                <span className="text-[9px] uppercase tracking-wider text-text-muted/80 block mb-1">
                  Integration Detail
                </span>
                <p className="text-[11px] text-off-white/70 italic leading-snug">
                  {product.details}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
