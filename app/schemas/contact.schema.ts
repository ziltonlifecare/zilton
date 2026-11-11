import { z } from "zod";

export const ENQUIRY_TYPES = [
  { value: "general", label: "General Corporate Enquiry" },
  { value: "product-related", label: "Product Availability & Hospital Supply" },
  { value: "quality-docs", label: "Quality & Batch Documentation (CoA / BMR)" },
  { value: "institutional-partnership", label: "Institutional Partnership & Distribution" },
  { value: "other", label: "Other Business Enquiries" },
] as const;

export const enquiryTypeValues = [
  "general",
  "product-related",
  "quality-docs",
  "institutional-partnership",
  "other",
] as const;

export type EnquiryType = (typeof enquiryTypeValues)[number];

// Standard Indian & International phone format
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name cannot exceed 80 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),

  organization: z
    .string()
    .max(120, "Organization name cannot exceed 120 characters")
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please provide a valid official email address")
    .max(100, "Email cannot exceed 100 characters"),

  phone: z
    .string()
    .min(1, "Telephone number is required")
    .regex(phoneRegex, "Please enter a valid telephone number with country/area code"),

  enquiryType: z.enum(enquiryTypeValues, {
    errorMap: () => ({ message: "Please select an enquiry category" }),
  }),

  productName: z
    .string()
    .max(100, "Product name cannot exceed 100 characters")
    .optional()
    .or(z.literal("")),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject cannot exceed 150 characters"),

  message: z
    .string()
    .min(15, "Message must be at least 15 characters long")
    .max(1500, "Message cannot exceed 1500 characters"),

  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please acknowledge our data handling policy to proceed",
    }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
