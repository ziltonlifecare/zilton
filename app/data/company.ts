/**
 * Approved company facts only.
 * Do NOT add unverified claims, certifications, CIN, GSTIN, or history.
 * Mark pending fields clearly — never invent values.
 */

/** Company data shape — established is nullable until client supplies MCA Certificate of Incorporation */
interface CompanyData {
  name: string;
  shortName: string;
  /**
   * null = unconfirmed — do not render on the public website.
   * The pending value "3 August 2026" has not been verified as the MCA incorporation date.
   * Set to the confirmed date string once the client provides documentary proof.
   */
  established: string | null;
  type: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    full: string;
    mapsUrl: string;
  };
  phone: string;
  email: string;
  inquiryEmail: string;
  whatsapp: string;
  tagline: string;
  vision: string;
  mission: string;
  values: ReadonlyArray<{ label: string; description: string }>;
  productCategories: ReadonlyArray<{ id: string; label: string }>;
}

export const COMPANY: CompanyData = {
  name:        "ZILTON LIFE CARE PRIVATE LIMITED",
  shortName:   "Zilton Life Care",
  established: null, // UNCONFIRMED — awaiting MCA Certificate of Incorporation from client
  type:        "Critical Care & Clinical Nutrition Formulations",

  address: {
    line1:   "LAXMI HOUSING & FINANCE",
    line2:   "67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST",
    city:    "MUMBAI",
    pincode: "400050",
    state:   "MAHARASHTRA",
    country: "INDIA",
    full:    "LAXMI HOUSING & FINANCE, 67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST, MUMBAI 400050",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Laxmi+Housing+%26+Finance%2C+67+B%2C+Gopal+Mansion%2C+Gurunanak+Road%2C+Bandra+West%2C+Mumbai+400050%2C+Maharashtra%2C+India",
  },

  phone:        "+91 9819667211",
  email:        "info@ziltonlifecare.com",
  // Centralized test email recipient configuration (active until official company credentials are provided):
  inquiryEmail: "r2661048@gmail.com",
  whatsapp:     "919819667211",

  tagline: "Caring for Life, Committed to Health",
  vision:  "Better Healthcare, Healthier Lives.",
  mission: "Delivering Quality, Building Trust, Improving Lives.",

  values: [
    { label: "Quality",     description: "Uncompromising standards in every formulation we deliver." },
    { label: "Integrity",   description: "Transparent and honest in all our partnerships." },
    { label: "Trust",       description: "Building lasting relationships with healthcare providers." },
    { label: "Innovation",  description: "Embracing modern scientific approaches to advanced healthcare formulations." },
    { label: "Commitment",  description: "Dedicated to improving patient outcomes." },
    { label: "Excellence",  description: "Striving for the highest in everything we do." },
  ],

  productCategories: [
    { id: "critical-care-injection", label: "Critical Care Injection" },
    { id: "nutrition-iv",            label: "Nutrition IV" },
    { id: "nutrition-sachet",        label: "Nutrition Sachet" },
  ],
};

