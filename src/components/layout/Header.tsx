"use client";

import React, { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "../ui/Button";
import { siteConfig } from "@/data/site";
import { translations } from "@/data/translations";

interface HeaderProps {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: translations[lang].nav.vision, href: "#vision" },
    { label: translations[lang].nav.ecosystem, href: siteConfig.links.ecosystem },
    { label: translations[lang].nav.projects, href: siteConfig.links.flagshipProject },
    { label: translations[lang].nav.investment, href: siteConfig.links.investmentThesis },
    { label: translations[lang].nav.dataRoom, href: siteConfig.links.dataRoomRequest },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-md border-b border-border-hairline py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src="/images/logo.png"
            alt="PT Dieng Ventura Holdings"
            className="h-8 w-auto object-contain"
          />
          <span className="font-display font-bold tracking-widest text-sm text-off-white group-hover:text-accent-gold transition-colors duration-300">
            DIENG VENTURA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Language Switcher */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Lang Toggle Switcher */}
          <div className="flex items-center space-x-1 border border-border-hairline/80 rounded p-1 bg-surface-card/60">
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-0.5 text-[9px] font-display font-bold uppercase rounded transition-colors duration-300 cursor-pointer ${
                lang === "id" ? "bg-accent-gold text-primary" : "text-text-muted hover:text-off-white"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 text-[9px] font-display font-bold uppercase rounded transition-colors duration-300 cursor-pointer ${
                lang === "en" ? "bg-accent-gold text-primary" : "text-text-muted hover:text-off-white"
              }`}
            >
              EN
            </button>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {translations[lang].nav.inquire}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Lang Toggle */}
          <div className="flex items-center space-x-1 border border-border-hairline/80 rounded p-1 bg-surface-card/60">
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-0.5 text-[8px] font-display font-bold uppercase rounded cursor-pointer ${
                lang === "id" ? "bg-accent-gold text-primary" : "text-text-muted"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 text-[8px] font-display font-bold uppercase rounded cursor-pointer ${
                lang === "en" ? "bg-accent-gold text-primary" : "text-text-muted"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-off-white hover:text-accent-gold transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-primary/95 backdrop-blur-lg border-l border-border-hairline z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-10">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto">
            <Button
              className="w-full"
              onClick={() => {
                setIsOpen(false);
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {translations[lang].nav.inquire}
            </Button>
            <p className="text-[10px] text-text-muted text-center mt-6">
              PT Dieng Ventura Holdings
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
