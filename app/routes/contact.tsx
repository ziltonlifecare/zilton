import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Tag,
  X,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "~/data/company";
import {
  contactFormSchema,
  ENQUIRY_TYPES,
  type ContactFormData,
} from "~/schemas/contact.schema";
import { submitContactForm } from "~/services/contact.service";
import { getWhatsAppLink } from "~/utils/whatsapp";
import { buildCorporateInquiryWhatsApp } from "~/utils/inquiry";
import { generateRouteMeta } from "~/utils/seo";
import { IMAGES } from "~/data/images";

export function meta() {
  return generateRouteMeta({
    title: "Contact Zilton Life Care | Corporate Enquiries",
    description:
      "Contact Zilton Life Care Private Limited in Bandra West, Mumbai for pharmaceutical procurement, hospital supply enquiries, and batch documentation.",
    canonicalPath: "/contact",
  });
}

export default function ContactPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get("product");
  const typeParam = searchParams.get("type");

  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema) as any,
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      enquiryType: "product-related",
      productName: "",
      subject: "",
      message: "",
      consent: false as unknown as true,
    },
  });

  useEffect(() => {
    if (productParam) {
      setValue("productName", productParam);
      setValue("subject", `Inquiry: Commercial Supply of ${productParam}`);
      setValue(
        "message",
        `We would like to enquire regarding commercial availability, batch supply, and institutional pricing terms for ${productParam}.`
      );
    } else if (typeParam === "quality-docs") {
      setValue("enquiryType", "quality-docs");
      setValue("subject", "Request for Batch Certificate of Analysis / Dossier");
    }
  }, [productParam, typeParam, setValue]);

  const clearProduct = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("product");
    setSearchParams(next);
    setValue("productName", "");
    setValue("subject", "");
    setValue("message", "");
  };

  const onSubmit = async (data: ContactFormData) => {
    if (honeypot) return;
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await submitContactForm({ ...data, honeypot });
      if (res.success) {
        setSubmittedSuccess(true);
        setSubmittedData(data);
        reset();
      } else {
        setServerError(res.message || "Failed to dispatch enquiry. Please try again.");
      }
    } catch {
      setServerError("Network error. Please connect directly via phone or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onWhatsAppSubmit = (data: ContactFormData) => {
    const waUrl = buildCorporateInquiryWhatsApp(data);
    setSubmittedSuccess(true);
    setSubmittedData(data);
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  const getWhatsAppFollowup = () => {
    if (!submittedData) return "";
    const msg = `Hello Zilton Life Care Team,\n\nI have submitted an online enquiry:\nName: ${submittedData.fullName}\nInstitution: ${submittedData.organization || "Not Specified"}\nSubject: ${submittedData.subject}\n\nPlease confirm receipt.\n\nThank you.`;
    return getWhatsAppLink(msg);
  };

  return (
    <div className="w-full bg-[#F0FDF4]">
      {/* ─── PREMIUM HERO BANNER ─────────── */}
      <section className="relative w-full overflow-hidden min-h-[50vh] flex items-center bg-[#0A192F]">
        {IMAGES.contactOffice && (
          <motion.img
            src={IMAGES.contactOffice}
            alt="Zilton Life Care corporate office in Mumbai"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="sync"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            transition={{ duration: 1.2 }}
          />
        )}

        {/* Gradient overlay - lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/85 via-[#0A192F]/80 to-[#0A192F]/50" />

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-xs uppercase tracking-wider text-[#A7F3D0] font-bold">
                Corporate Office &amp; Supply Desk
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-editorial font-bold text-white leading-[1.1] mb-6">
              Send an enquiry
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Direct your commercial inquiries, hospital supply schedules, or regulatory batch documentation requests to our Mumbai corporate office.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT BODY ───────────────────────────────────────── */}
      <div className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* ─── SPLIT LAYOUT ──────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Corporate Panel with Deep Navy Authority */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0A192F] via-[#0F2438] to-[#0A192F] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-white/10 space-y-6 select-none">
              {/* Registered Office Address Card */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 transition-all duration-200">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">
                    Registered Corporate Office
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {COMPANY.name}
                </h2>

                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block group rounded-xl p-3 -mx-3 hover:bg-white/5 transition-colors duration-200"
                  title="Open location on Google Maps"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#A7F3D0] group-hover:bg-[#0D9E71] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <address className="not-italic text-xs sm:text-sm text-slate-200 font-normal leading-relaxed group-hover:text-white transition-colors">
                      {COMPANY.address.line1},<br />
                      {COMPANY.address.line2},<br />
                      {COMPANY.address.city} {COMPANY.address.pincode}
                    </address>
                  </div>
                </a>

                <div className="mt-3 pt-3 border-t border-white/10">
                  <a
                    href={COMPANY.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#A7F3D0] hover:text-white transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="space-y-4 pt-1 text-xs text-white/95">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-300">Direct Telephone</span>
                    <a
                      href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                      className="hover:text-[#10B981] transition-colors font-bold text-sm tracking-wide text-white"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-300">Corporate Email</span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-white hover:text-[#10B981] transition-colors font-semibold"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="block font-semibold">Monday – Saturday: 09:30 – 18:30 IST</span>
                    <span className="text-[11px] text-slate-300">Closed on Sundays &amp; National Holidays</span>
                  </div>
                </div>

                {/* WhatsApp Quick Connect */}
                <div className="flex items-start gap-3 pt-3 border-t border-white/15">
                  <div className="p-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-slate-300 text-[11px] font-semibold">WhatsApp Business Desk</span>
                    <a
                      href={getWhatsAppLink("Hello Zilton Life Care Team,\n\nI would like to get in touch regarding your pharmaceutical products.\n\nThank you.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#25D366] transition-colors font-bold text-sm block mt-0.5 text-white"
                    >
                      +91 9819667211
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="pt-2">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-md">
                  <iframe
                    title="Google Maps Location: 67 B, Gopal Mansion, Bandra West, Mumbai"
                    src="https://maps.google.com/maps?q=Laxmi+Housing+%26+Finance%2C+67+B%2C+Gopal+Mansion%2C+Gurunanak+Road%2C+Bandra+West%2C+Mumbai+400050%2C+Maharashtra%2C+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Statutory Disclaimer */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-normal leading-relaxed">
                <strong className="text-white">Statutory Notice:</strong> This contact desk serves licensed healthcare professionals and institutional procurement only. We do not provide consumer medical consultations.
              </div>
            </div>

            {/* Right Column: Institutional Enquiry Form (Mint Tinted Card) */}
            <div className="lg:col-span-7 bg-[#F0FDF4] p-6 sm:p-10 rounded-3xl border border-emerald-200/60 shadow-[0_4px_24px_rgba(15,23,42,0.05)]">
              <div className="mb-6 pb-4 border-b border-emerald-100/60">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                  <span className="text-xs font-bold text-[#0D9E71] uppercase tracking-wider">
                    Direct Submission
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#0A192F]">
                  Corporate Enquiry Form
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-1">
                  Your message is dispatched directly to our Mumbai corporate desk.
                </p>
              </div>

              {/* Submission Success State */}
              {submittedSuccess ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-[#0F382C] space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-[#0D9E71] shrink-0" />
                    <div>
                      <h4 className="font-editorial text-xl font-bold text-[#0A192F]">
                        Enquiry Dispatched Successfully
                      </h4>
                      <p className="text-xs text-slate-600">
                        Logged with official recipient: <strong>{COMPANY.email}</strong>
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you for contacting Zilton Life Care. Our commercial team will review your specifications and respond promptly within standard business hours.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={getWhatsAppFollowup()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold transition-all shadow-[0_2px_8px_rgba(37,211,102,0.3)]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also notify via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setSubmittedData(null);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#F0FDF4] hover:bg-emerald-50 text-[#0A192F] border border-emerald-200 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Honeypot Spam Trap */}
                  <input
                    type="text"
                    name="b_url"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Pre-filled Product Tag Badge */}
                  {productParam && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between gap-2 text-xs text-[#0F382C]">
                      <div className="flex items-center gap-2">
                        <Tag className="w-3.5 h-3.5 text-[#0D9E71]" />
                        <span>Referenced Formulation: <strong className="font-bold">{productParam}</strong></span>
                      </div>
                      <button
                        type="button"
                        onClick={clearProduct}
                        className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                        aria-label="Clear referenced product"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      {serverError}
                    </div>
                  )}

                  {/* Full Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0A192F] mb-1">
                        Representative Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. Rajesh Sharma"
                        {...register("fullName")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-200/60 text-xs text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:bg-white transition-all font-medium"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A192F] mb-1">
                        Institution / Hospital
                      </label>
                      <input
                        type="text"
                        placeholder="Hospital or Distribution Entity"
                        {...register("organization")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-200/60 text-xs text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:bg-white transition-all font-medium"
                      />
                      {errors.organization && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.organization.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0A192F] mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        placeholder="procurement@hospital.org"
                        {...register("email")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-200/60 text-xs text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:bg-white transition-all font-medium"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A192F] mb-1">
                        Telephone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9819667211"
                        {...register("phone")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-200/60 text-xs text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:bg-white transition-all font-medium"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Enquiry Type Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] mb-1">
                      Enquiry Classification *
                    </label>
                    <select
                      {...register("enquiryType")}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-200/60 text-xs text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:bg-white transition-all font-medium"
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.enquiryType && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.enquiryType.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] mb-1">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      placeholder="Hospital procurement schedule..."
                      {...register("subject")}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:bg-white transition-all font-medium"
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] mb-1">
                      Detailed Message &amp; Required Volumes *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify delivery destination, timeline, and projected batch requirement..."
                      {...register("message")}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:bg-white transition-all font-medium"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="mt-0.5 rounded border-slate-300 text-[#0D9E71] focus:ring-[#0D9E71]"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        I certify that this inquiry represents an institutional, clinical, or commercial request.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.consent.message}</p>
                    )}
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#0D9E71] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-xs uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-[0_4px_16px_rgba(13,158,113,0.35)] hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        handleSubmit(onWhatsAppSubmit, () => {
                          window.open(
                            getWhatsAppLink("Hello Zilton Life Care Team,\n\nI would like to enquire about your pharmaceutical formulations.\n\nThank you."),
                            "_blank",
                            "noopener,noreferrer"
                          );
                        })();
                      }}
                      className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(37,211,102,0.3)] cursor-pointer hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
