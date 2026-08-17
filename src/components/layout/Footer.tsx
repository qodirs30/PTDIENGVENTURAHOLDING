import React from "react";
import { siteConfig } from "@/data/site";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-border-hairline py-12 relative overflow-hidden">
      {/* Background soft glow element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-green/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand block */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/logo.png"
                alt="PT Dieng Ventura Holdings"
                className="h-6 w-auto object-contain"
              />
              <span className="font-display font-bold tracking-widest text-xs text-off-white">
                DIENG VENTURA
              </span>
            </div>
            <p className="text-xs text-text-muted max-w-sm mb-6 leading-relaxed">
              PT Dieng Ventura Holdings develops interconnected tourism assets, brands, and ecosystems designed to create long-term value, strengthen local communities, and conserve nature in Central Java.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-accent-gold mb-4 font-semibold">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#vision" className="text-text-muted hover:text-off-white transition-colors duration-300">
                  Vision
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-text-muted hover:text-off-white transition-colors duration-300">
                  Product Ecosystem
                </a>
              </li>
              <li>
                <a href="#flagship" className="text-text-muted hover:text-off-white transition-colors duration-300">
                  Flagship Destination
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-text-muted hover:text-off-white transition-colors duration-300">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-accent-gold mb-4 font-semibold">
              Contact
            </h4>
            <address className="not-italic text-xs text-text-muted space-y-2">
              <p>{siteConfig.contact.address}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-off-white hover:text-accent-gold transition-colors duration-300"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white hover:text-accent-gold transition-colors duration-300"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Disclaimer / Compliance text */}
        <div className="border-t border-border-hairline pt-8 mb-8 text-[10px] text-text-muted/70 leading-relaxed text-justify">
          {siteConfig.disclaimer}
        </div>

        {/* Subfooter */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-text-muted">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#legal" className="hover:text-off-white transition-colors duration-300">
              Disclaimer
            </a>
            <a href="#legal" className="hover:text-off-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#legal" className="hover:text-off-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
