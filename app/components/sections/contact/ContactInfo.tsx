import React from "react";
import { MapPin, Phone, Mail, Clock, AlertCircle, Building2, Warehouse, ExternalLink } from "lucide-react";
import { COMPANY } from "~/data/company";
import { getWhatsAppLink } from "~/utils/whatsapp";

const WA_CONTACT_MESSAGE = `Hello Zilton Life Care Team,

I would like to get in touch regarding your pharmaceutical products and services.

Please assist me further.

Thank you.`;

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#123D32] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-[#07845E]/30 relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 rounded-full bg-[#07845E]/15 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#DFF1E9] bg-white/10 px-3.5 py-1 rounded-full uppercase border border-white/10 mb-4">
          <Building2 className="w-3.5 h-3.5 text-[#07845E]" />
          Corporate Communications
        </span>

        <h3
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {COMPANY.shortName} Desk
        </h3>

        <p className="mt-3 text-[#DFF1E9]/80 text-sm leading-relaxed font-light">
          We welcome formal inquiries from hospital procurement committees, registered pharmaceutical distributors, clinical specialists, and healthcare institutions.
        </p>

        {/* Contact Details List */}
        <div className="mt-8 space-y-6">
          {/* Registered Office */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <MapPin className="w-5 h-5 text-[#07845E]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                  Registered Office
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#DFF1E9]/80">
                  Official Entity
                </span>
              </div>
              <p className="text-sm font-medium mt-1 text-white/95 leading-relaxed">
                {COMPANY.name}
              </p>
              <a
                href={COMPANY.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1.5 group/map"
                title="View Registered Office on Google Maps (opens in new tab)"
              >
                <address className="not-italic text-xs text-[#DFF1E9]/80 group-hover/map:text-white transition-colors leading-relaxed">
                  {COMPANY.address.line1},<br />
                  {COMPANY.address.line2},<br />
                  {COMPANY.address.city} – {COMPANY.address.pincode}, {COMPANY.address.state}, {COMPANY.address.country}.
                </address>
              </a>
              <div className="mt-2.5">
                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#07845E] text-[#DFF1E9] hover:text-white font-mono text-[11px] font-medium transition-colors border border-white/10 hover:border-transparent"
                  aria-label="View on Google Maps"
                >
                  <MapPin className="w-3 h-3 text-[#07845E]" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Operational Facilities Note */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Warehouse className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Manufacturing &amp; Logistics Network
              </h4>
              <p className="text-xs text-[#DFF1E9]/80 mt-1 leading-relaxed">
                Product compounding, sterilization, and warehousing are conducted exclusively at statutory cGMP/Schedule M contract manufacturing plants and audited regional depots across India.
              </p>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Phone className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Direct Corporate Desk
              </h4>
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                className="text-sm font-semibold mt-1 inline-block text-white hover:text-[#DFF1E9] transition-colors"
              >
                {COMPANY.phone}
              </a>
              <span className="block text-[11px] text-[#DFF1E9]/60 mt-0.5">
                Standard telecommunications rates apply
              </span>
            </div>
          </div>

          {/* Official Email */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Mail className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Institutional Mailbox
              </h4>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm font-medium mt-1 inline-block text-white/90 hover:text-white transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Clock className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Operating Hours (IST)
              </h4>
              <p className="text-sm font-medium mt-1 text-white/90">
                Monday to Saturday: 09:30 AM – 06:30 PM
              </p>
              <span className="block text-[11px] text-[#DFF1E9]/60 mt-0.5">
                Closed on Sundays and Gazetted Indian National Holidays
              </span>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#25D366]/20 rounded-2xl shrink-0 mt-0.5 border border-[#25D366]/30">
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 text-[#25D366]" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                WhatsApp Business
              </h4>
              <a
                href={getWhatsAppLink(WA_CONTACT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold mt-1 inline-block text-white hover:text-[#25D366] transition-colors"
              >
                +91 98196 67211
              </a>
              <span className="block text-[11px] text-[#DFF1E9]/60 mt-0.5">
                Tap to chat directly on WhatsApp
              </span>
              <a
                href={getWhatsAppLink(WA_CONTACT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
                </svg>
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Medical / Non-Clinical Notice */}
      <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#DFF1E9]/80 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Institutional Scope:</strong> This corporate portal facilitates commercial and regulatory dialogue. For patient emergencies, adverse drug reactions, or immediate medical assistance, please contact emergency health services or a licensed healthcare provider directly.
          </p>
        </div>
      </div>
    </div>
  );
};
