"use client";

import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";
import LeadForm from "./LeadForm";

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already submitted or dismissed
    const alreadySubmitted = localStorage.getItem("lt_lead_submitted");
    const alreadyDismissed = sessionStorage.getItem("lt_exit_dismissed");
    if (alreadySubmitted || alreadyDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !dismissed) {
        setVisible(true);
      }
    };

    // Wait 10 seconds before activating
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("lt_exit_dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-navy-800 border border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="glass-card p-1 border border-blue-brand/30 shadow-blue-glow overflow-hidden">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-blue-brand to-blue-glow p-4 text-center rounded-t-xl">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-gold fill-gold" />
              <span className="text-white font-bold text-sm">Wait! Don&apos;t Leave Yet</span>
              <Zap className="w-5 h-5 text-gold fill-gold" />
            </div>
            <p className="text-blue-100 text-xs">
              Get a FREE 30-minute consultation call with our expert
            </p>
          </div>

          {/* Form */}
          <div className="p-4">
            <LeadForm
              title="Claim Your FREE Consultation"
              subtitle="Limited slots available — book now!"
              source="exit_popup"
              compact={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
