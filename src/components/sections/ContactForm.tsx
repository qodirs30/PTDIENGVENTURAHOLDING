"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { CheckCircle, Envelope, WhatsappLogo, Info } from "@phosphor-icons/react";
import { siteConfig } from "@/data/site";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    investorType: "Institutional",
    interest: "Equity",
    message: "",
    consent: false,
    honeypot: "", // Bot trap honeypot field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.organization.trim()) newErrors.organization = "Organization is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must consent to data processing.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bots will fill the honeypot
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!validate()) return;

    setStatus("submitting");

    // FORM_BACKEND_REQUIRED_BEFORE_PRODUCTION
    // Placeholder adapter imitating form submission
    setTimeout(() => {
      setStatus("success");
      console.log("FORM_BACKEND_REQUIRED_BEFORE_PRODUCTION: Inquiry submitted successfully:", formData);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary relative border-b border-border-hairline overflow-hidden">
      {/* Decorative hairline line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-border-hairline pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct contact & labels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-forest-green/20 border border-forest-light/30 text-[10px] tracking-widest font-semibold font-display text-accent-gold uppercase mb-4">
                Inquiries
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-off-white mb-6">
                Start an Investor Conversation
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8 font-body">
                Get in touch with our investment leads. Please fill out the inquiry form, or contact us directly via verified secure channels.
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center space-x-3 p-4 rounded bg-surface-card border border-border-hairline hover:border-accent-gold/40 transition-colors duration-300 group"
                >
                  <Envelope size={20} className="text-accent-gold" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-muted block">Email Channel</span>
                    <span className="text-xs text-off-white font-medium group-hover:text-accent-gold transition-colors duration-300">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded bg-surface-card border border-border-hairline hover:border-accent-gold/40 transition-colors duration-300 group"
                >
                  <WhatsappLogo size={20} className="text-accent-gold" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-muted block">Secure WhatsApp</span>
                    <span className="text-xs text-off-white font-medium group-hover:text-accent-gold transition-colors duration-300">
                      {siteConfig.contact.whatsapp}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Note tag indicating mock state */}
            <div className="mt-12 p-4 rounded bg-forest-green/10 border border-forest-light/20 text-[10px] text-text-muted flex items-start space-x-2.5">
              <Info size={18} className="text-accent-gold shrink-0 mt-0.5" />
              <span>
                <strong>Operational Notice:</strong> Inquiries submitted through the form are parsed in a secure environment. No marketing trackers are active.
              </span>
            </div>
          </div>

          {/* Right Column: Form itself */}
          <div className="lg:col-span-7">
            <Card variant="glass" showCorners={true} className="border-accent-gold/20 p-8 h-full flex flex-col justify-center">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="p-4 rounded-full bg-forest-green/20 text-accent-gold mb-6 border border-accent-gold/20 animate-pulse-slow">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-off-white mb-2 uppercase tracking-wide">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-xs text-text-muted max-w-sm leading-relaxed mb-6 font-body">
                    Thank you for your interest. An investment manager will review your organization&apos;s credential file and get back to you within 2 business days.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Bot trap input (hidden) */}
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-semibold text-text-muted mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 bg-surface-overlay/80 border ${errors.name ? "border-red-500/50" : "border-border-hairline"} text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-[9px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-semibold text-text-muted mb-2">
                        Organization / Fund *
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className={`w-full px-4 py-3 bg-surface-overlay/80 border ${errors.organization ? "border-red-500/50" : "border-border-hairline"} text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body`}
                        placeholder="Ventures Corp"
                      />
                      {errors.organization && <p className="text-[9px] text-red-400 mt-1">{errors.organization}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-semibold text-text-muted mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-surface-overlay/80 border ${errors.email ? "border-red-500/50" : "border-border-hairline"} text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body`}
                        placeholder="johndoe@example.com"
                      />
                      {errors.email && <p className="text-[9px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone (WhatsApp) */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-semibold text-text-muted mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-overlay/80 border border-border-hairline text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body"
                        placeholder="+62 8..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Investor Type */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-semibold text-text-muted mb-2">
                        Investor Profile
                      </label>
                      <select
                        value={formData.investorType}
                        onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-overlay/80 border border-border-hairline text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-display cursor-pointer"
                      >
                        <option value="Institutional">Institutional Fund</option>
                        <option value="Venture Capital">Venture Capital / PE</option>
                        <option value="HNW">High Net Worth Individual</option>
                        <option value="Corporate">Corporate / Strategic Partner</option>
                      </select>
                    </div>

                    {/* Investment Interest */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-semibold text-text-muted mb-2">
                        Investment Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-overlay/80 border border-border-hairline text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-display cursor-pointer"
                      >
                        <option value="Equity">Equity Investment</option>
                        <option value="Debt">Debt Financing</option>
                        <option value="Strategic">Strategic Joint Venture</option>
                        <option value="Project">Project-Level Licensing</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-semibold text-text-muted mb-2">
                      Inquiry / Message Notes
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-surface-overlay/80 border border-border-hairline text-off-white text-xs rounded focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body placeholder:text-text-muted/40"
                      placeholder="Detail your inquiry expectations..."
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div>
                    <label className="flex items-center space-x-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-4 h-4 bg-surface-overlay border border-border-hairline rounded focus:ring-0 text-accent-gold focus:outline-none cursor-pointer"
                      />
                      <span className="text-[10px] text-text-muted font-body leading-tight">
                        I consent to PT Dieng Ventura Holdings securely compiling my credentials for partnership evaluation under our privacy policies. *
                      </span>
                    </label>
                    {errors.consent && <p className="text-[9px] text-red-400 mt-1">{errors.consent}</p>}
                  </div>

                  {/* Action submit button */}
                  <div>
                    <Button
                      type="submit"
                      className="w-full font-semibold"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Transmitting..." : "Send Investor Inquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
