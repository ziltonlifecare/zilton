import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
  ENQUIRY_TYPES,
  type EnquiryType,
} from "~/schemas/contact.schema";
import { COMPANY } from "~/data/company";
import { submitContactForm } from "~/services/contact.service";
import {
  buildCorporateInquiryGmail,
  buildCorporateInquiryWhatsApp,
} from "~/utils/inquiry";
import { PRODUCTS } from "~/data/products";
import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Send,
  Tag,
  X,
  FileCheck2,
  Building,
  RotateCcw,
  Mail,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const ContactForm: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get("product");
  const rawTypeParam = searchParams.get("type");

  // Map legacy / alternative incoming query type values to valid schema keys
  const resolveInitialType = (param: string | null, product: string | null): EnquiryType => {
    if (product) return "product-related";
    if (!param) return "general";
    if (param === "quality-inquiry" || param === "quality-docs") return "quality-docs";
    if (param === "business-partnership" || param === "institutional-partnership")
      return "institutional-partnership";
    if (param === "product-related") return "product-related";
    if (param === "other") return "other";
    return "general";
  };

  const initialEnquiryType = resolveInitialType(rawTypeParam, productParam);

  const [dispatchNotice, setDispatchNotice] = useState<{
    type: "email" | "whatsapp";
    title: string;
    detail: string;
    actionRequired: string;
    url: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema) as any,
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      enquiryType: initialEnquiryType,
      productName: productParam || "",
      subject: productParam
        ? `Institutional Enquiry: ${productParam}`
        : initialEnquiryType === "quality-docs"
        ? "Request for Batch Certificate of Analysis / Quality Dossier"
        : initialEnquiryType === "institutional-partnership"
        ? "Proposal for Institutional Distribution Partnership"
        : "",
      message: productParam
        ? `I would like to enquire regarding commercial availability, batch supply, and institutional pricing terms for ${productParam}.`
        : initialEnquiryType === "quality-docs"
        ? "Please furnish recent batch Certificates of Analysis (CoAs) and regulatory documentation for our institutional evaluation."
        : "",
      consent: false as unknown as true,
    },
  });

  const selectedEnquiryType = watch("enquiryType");

  // Keep form synchronized if search params change
  useEffect(() => {
    if (productParam) {
      setValue("enquiryType", "product-related");
      setValue("productName", productParam);
      setValue("subject", `Institutional Enquiry: ${productParam}`);
      setValue(
        "message",
        `I would like to enquire regarding commercial availability, batch supply, and institutional pricing terms for ${productParam}.`
      );
    } else if (rawTypeParam) {
      const resolved = resolveInitialType(rawTypeParam, null);
      setValue("enquiryType", resolved);
      if (resolved === "quality-docs") {
        setValue("subject", "Request for Batch Certificate of Analysis / Quality Dossier");
      } else if (resolved === "institutional-partnership") {
        setValue("subject", "Proposal for Institutional Distribution Partnership");
      }
    }
  }, [productParam, rawTypeParam, setValue]);

  const clearProductPreFill = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("product");
    setSearchParams(nextParams);
    setValue("productName", "");
    setValue("subject", "");
    setValue("message", "");
  };

  const handleEmailSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await submitContactForm({ ...data, honeypot });
      if (res.success) {
        setIsSuccess(true);
        setSubmittedData(data);
        reset();
      } else {
        setServerError(res.message || "Unable to dispatch enquiry. Please connect via WhatsApp or phone.");
      }
    } catch {
      setServerError("Network error. Please connect directly via WhatsApp or phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const waUrl = buildCorporateInquiryWhatsApp(data);
      setDispatchNotice({
        type: "whatsapp",
        title: "WhatsApp Window Opened",
        detail: `All submitted inquiry fields have been pre-filled for our desk at +${COMPANY.whatsapp}.`,
        actionRequired: "Please review the pre-filled message in WhatsApp and tap Send to complete delivery.",
        url: waUrl,
      });

      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setTimeout(() => setIsSubmitting(false), 400);
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4EBE6] shadow-sm relative">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#07845E] uppercase bg-[#DFF1E9]/60 px-3 py-1 rounded-full border border-[#07845E]/20 mb-3">
          <Building className="w-3.5 h-3.5" />
          Institutional Communications
        </span>
        <h3
          className="text-xl sm:text-2xl font-extrabold text-[#123D32]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Submit an Institutional Enquiry
        </h3>
        <p className="text-sm text-[#53635C] mt-1.5 leading-relaxed">
          Please provide your institutional credentials and requirements. Our corporate desk coordinates timely verification and quotation responses.
        </p>

        {productParam && (
          <div className="mt-4 p-3.5 rounded-2xl bg-[#DFF1E9]/80 border border-[#07845E]/30 flex items-center justify-between gap-3 text-xs text-[#123D32] font-medium">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#07845E] shrink-0" />
              <span>
                Referenced Product Context: <strong>{productParam}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={clearProductPreFill}
              className="p-1 text-[#53635C] hover:text-[#123D32] rounded-full hover:bg-white/80 transition-colors"
              aria-label="Clear product context"
              title="Clear product context"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {serverError && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800"
        >
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wide">Communication Notice</h4>
            <p className="mt-0.5 text-xs leading-relaxed">{serverError}</p>
          </div>
        </div>
      )}

      {/* Direct Dispatch Feedback Banner */}
      {dispatchNotice && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#DFF1E9] border border-[#07845E]/40 text-[#123D32] space-y-2.5 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#07845E]">
              {dispatchNotice.type === "email" ? (
                <Mail className="w-4 h-4 text-[#07845E]" />
              ) : (
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-[#25D366]" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
                </svg>
              )}
              <span>{dispatchNotice.title}</span>
            </div>
            <button
              type="button"
              onClick={() => setDispatchNotice(null)}
              className="text-[#53635C] hover:text-[#123D32] p-1 cursor-pointer"
              aria-label="Dismiss notice"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#123D32] leading-relaxed">
            {dispatchNotice.detail}
          </p>

          <div className="p-3 rounded-xl bg-white/80 border border-[#07845E]/20 text-xs text-[#123D32] leading-relaxed">
            <strong>Action Required:</strong> {dispatchNotice.actionRequired}
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            {dispatchNotice.type === "email" ? (
              <>
                <a
                  href={dispatchNotice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#123D32] hover:text-[#07845E] underline"
                >
                  <span>Re-open Gmail Web Compose</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#53635C]/30">·</span>
                <button
                  type="button"
                  onClick={handleSubmit(handleWhatsAppSubmit)}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#07845E] hover:text-[#123D32] cursor-pointer"
                >
                  <span>Also Send via WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </>
            ) : (
              <>
                <a
                  href={dispatchNotice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#07845E] hover:text-[#123D32] underline"
                >
                  <span>Re-open WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#53635C]/30">·</span>
                <button
                  type="button"
                  onClick={handleSubmit(handleEmailSubmit)}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#123D32] hover:text-[#07845E] cursor-pointer"
                >
                  <span>Also Send via Email</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(handleEmailSubmit)} noValidate className="space-y-5">
        {/* Full Name & Organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Dr. Rajesh Sharma"
              {...register("fullName")}
              aria-invalid={errors.fullName ? "true" : "false"}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.fullName
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="organization"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Organization / Hospital <span className="text-[#53635C] font-normal text-[11px]">(Optional)</span>
            </label>
            <input
              id="organization"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Apex Multi-Speciality Hospital"
              {...register("organization")}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Official Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="procurement@hospital.org"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.email
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Contact Telephone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 9819667211"
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.phone
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Enquiry Type Selector */}
        <div>
          <label
            htmlFor="enquiryType"
            className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
          >
            Enquiry Classification <span className="text-red-500">*</span>
          </label>
          <select
            id="enquiryType"
            {...register("enquiryType")}
            className="w-full px-4 py-3 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.enquiryType && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.enquiryType.message}</p>
          )}
        </div>

        {/* Product Selection Dropdown (Visible if product-related or if product selected) */}
        {selectedEnquiryType === "product-related" && (
          <div>
            <label
              htmlFor="productName"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Select Product Formulation <span className="text-[#53635C] font-normal text-[11px]">(Optional)</span>
            </label>
            <select
              id="productName"
              {...register("productName")}
              onChange={(e) => {
                const val = e.target.value;
                setValue("productName", val);
                if (val) {
                  setValue("subject", `Institutional Enquiry: ${val}`);
                }
              }}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
            >
              <option value="">-- Choose from portfolio (or specify in message) --</option>
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.name}>
                  {prod.name} ({prod.category.replace(/-/g, " ")})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Subject Input */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
          >
            Subject / Inquiry Title <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Commercial supply terms for MEROZIL 1gm"
            {...register("subject")}
            aria-invalid={errors.subject ? "true" : "false"}
            className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
              errors.subject
                ? "border-red-400 bg-red-50/20"
                : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
          >
            Message &amp; Detailed Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Detail your requirements including expected volumes, delivery timelines, or technical specifications..."
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
              errors.message
                ? "border-red-400 bg-red-50/20"
                : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.message.message}</p>
          )}
        </div>

        {/* Institutional Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              id="consent"
              {...register("consent")}
              className="mt-1 h-4 w-4 rounded border-[#E4EBE6] text-[#07845E] focus:ring-[#07845E] accent-[#07845E] cursor-pointer"
            />
            <span className="text-xs text-[#53635C] leading-relaxed group-hover:text-[#123D32] transition-colors">
              I certify that this submission represents a formal institutional or commercial inquiry. I consent to ZILTON LIFE CARE storing my contact details solely to evaluate and respond to this request.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Action: Direct Email + WhatsApp Integration */}
        <div className="pt-3 space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Email Submission */}
            <button
              type="button"
              onClick={handleSubmit(handleEmailSubmit)}
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#123D32] hover:bg-[#07845E] text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07845E] focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 shadow-md hover:shadow-lg cursor-pointer text-xs uppercase tracking-wider font-mono"
            >
              <Mail className="w-4 h-4 text-[#DFF1E9]" />
              <span>Submit via Email</span>
            </button>

            {/* WhatsApp Submission */}
            <button
              type="button"
              onClick={handleSubmit(handleWhatsAppSubmit)}
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 shadow-md hover:shadow-lg cursor-pointer text-xs uppercase tracking-wider font-mono"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
              </svg>
              <span>Submit via WhatsApp</span>
            </button>
          </div>

          <div className="pt-1 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#53635C] gap-2">
            <span>Recipient: <strong className="text-[#123D32]">{COMPANY.inquiryEmail}</strong></span>
            <span>WhatsApp: <strong className="text-[#123D32]">+{COMPANY.whatsapp}</strong></span>
          </div>

          <p className="text-[11px] text-[#53635C]/80 text-center leading-relaxed">
            Note: Inquiry details are pre-filled directly into your selected client. Review and press <strong>Send</strong> to complete transmission.
          </p>
        </div>
      </form>
    </div>
  );
};
