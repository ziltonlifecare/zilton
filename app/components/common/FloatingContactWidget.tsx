import React, { useState } from "react";
import { MessageSquare, X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm } from "~/services/contact.service";

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Spam trap
    if (!fullName || !phone || !message) return;

    setIsSubmitting(true);
    try {
      await submitContactForm({
        fullName,
        phone,
        email: "quick-enquiry@ziltonlifecare.internal",
        subject: "Quick Institutional Desk Enquiry",
        enquiryType: "general",
        message,
        consent: true,
      } as any);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        setFullName("");
        setPhone("");
        setMessage("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Mini-Drawer Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#FCFAF5] border border-[#1B634E]/20 shadow-2xl p-5 text-left animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#1B634E]/10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#0D9E71] font-bold block">
                Instant Access
              </span>
              <h4 className="font-editorial text-base font-bold text-[#1B634E]">
                Quick Institutional Desk
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#3E6958] hover:text-[#1B634E] hover:bg-[#1B634E]/5 cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="w-10 h-10 text-[#0D9E71] mx-auto mb-2" />
              <p className="font-editorial text-lg font-bold text-[#1B634E]">
                Enquiry Logged
              </p>
              <p className="text-xs text-[#3E6958] mt-1 font-mono">
                Our Mumbai corporate desk will dial you promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              {/* Honeypot field for bot protection */}
              <input
                type="text"
                name="b_url"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-semibold mb-1">
                  Representative Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Rajesh Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#1B634E]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#0D9E71] text-[#1B634E]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-semibold mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9819667211"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#1B634E]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#0D9E71] text-[#1B634E]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-semibold mb-1">
                  Query or Target SKU
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Inquiring about hospital supply terms for MEROZIL 1gm..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#1B634E]/20 bg-white focus:outline-none focus:ring-1 focus:ring-[#0D9E71] text-[#1B634E]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 bg-[#1B634E] hover:bg-[#0D9E71] text-[#F6F4EE] rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Fast Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#1B634E] hover:bg-[#0D9E71] text-[#F6F4EE] rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 border border-white/20 cursor-pointer group"
        aria-label="Toggle quick enquiry drawer"
      >
        <MessageSquare className="w-4 h-4 text-[#0D9E71] group-hover:text-white transition-colors" />
        <span className="font-mono text-xs uppercase tracking-wider font-semibold">
          Fast Enquiry
        </span>
      </button>
    </div>
  );
};
