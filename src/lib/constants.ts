
// /src/lib/constants.ts
import type { LucideIcon } from "lucide-react";
import {
  Home, ClipboardCheck, Wind, FlaskConical, ShieldAlert, TestTube, Thermometer,
  Camera as DroneIcon, Accessibility, Building, Award, Building2, Star, ShieldCheck, Gem, Zap, Clock
} from "lucide-react";

/** Brand + phone (single source of truth) */
export const BRAND = "Mayne Home Inspectors";
export const PHONE_E164 = "+18638430735";
export const PHONE_DISPLAY = "(863) 843-0735";

/** Cities you actively serve (used by schema + UI) */
export const serviceAreas: string[] = [
  "LaBelle",
  "Lehigh Acres",
  "Clewiston",
  "Moore Haven",
  "Immokalee",
  "Fort Myers",
  "Cape Coral",
  "Punta Gorda",
  "Port Charlotte",
  "Montura Ranch Estates",
  "Babcock Ranch",
];

/** Optional: counties if you want to surface them in UI copy */
export const serviceCounties: string[] = [
  "Hendry County",
  "Glades County",
  "Lee County",
  "Charlotte County",
];

/** Services */
export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    id: "home",
    slug: "home-inspection",
    name: "Home Inspection",
    description:
      "A thorough examination of the home’s systems and structure, ensuring safety and identifying potential issues.",
    longDescription:
      "Our comprehensive home inspection is a non-invasive, visual examination of the accessible areas of a residential property. We meticulously evaluate all major systems, including the roof, foundation, plumbing, electrical, and HVAC systems, as well as interior and exterior components. You'll receive a detailed, easy-to-understand report with high-resolution photos, empowering you to make an informed decision about your investment.",
    icon: Home,
    image: "/images/fort-myers-home-inspection.png",
  },
  {
    id: "4-point",
    slug: "4-point-inspection",
    name: "4-Point Inspection",
    description:
      "Focuses on four key areas: roofing, electrical, plumbing, and HVAC. Often required for insurance.",
    longDescription:
      "A 4-Point Inspection is often required by insurance companies for older homes. It focuses on the four most critical systems: <br><b>• HVAC:</b> Heating, Ventilation, & Air Conditioning. <br><b>• Electrical:</b> Panel, breakers, and wiring. <br><b>• Plumbing:</b> Water heater, supply lines, and drains. <br><b>• Roof:</b> Shingles, flashing, and integrity. <br>This is crucial for insurance underwriting.",
    icon: ClipboardCheck,
    image: "/images/cape-coral-veterans-memorial-monument.png",
  },
  {
    id: "wind",
    slug: "wind-mitigation",
    name: "Wind Mitigation",
    description:
      "Identifies features that reduce wind damage, potentially lowering your insurance premiums.",
    longDescription:
      "A Wind Mitigation Inspection can save you significant money on your homeowner's insurance. We assess your home's construction features that help it resist wind damage, such as roof-to-wall attachments, secondary water resistance, and opening protection. A favorable report can qualify you for substantial discounts on your insurance policy.",
    icon: Wind,
    image: "/images/clewiston-flag.png",
  },
  {
    id: "mold-air",
    slug: "mold-air-quality",
    name: "Mold & Air Quality",
    description:
      "Comprehensive testing for mold and assessment of indoor air quality to ensure a healthy living environment.",
    longDescription:
      "Concerned about mold or indoor air quality? Our service includes a visual inspection for signs of microbial growth and moisture intrusion. We can take air and surface samples for laboratory analysis to identify the type and concentration of mold spores, providing you with a clear picture of your home's air quality and recommending remediation steps if necessary.",
    icon: FlaskConical,
    image: "/images/hendry-county-courthouse.png",
  },
  {
    id: "radon",
    slug: "radon-testing",
    name: "Radon Testing",
    description:
      "Accurate testing for radon gas levels, a leading cause of lung cancer, to protect your family.",
    longDescription:
      "Radon is a colorless, odorless radioactive gas that can seep into your home from the ground, posing a significant health risk. We use continuous radon monitors to accurately measure the radon levels in your home over a 48-hour period. This provides reliable data to determine if mitigation is needed to protect your family's health.",
    icon: ShieldAlert,
    image: "/images/immokalee-florida-farm.png",
  },
  {
    id: "well-water",
    slug: "well-water-testing",
    name: "Well Water Testing",
    description:
      "Ensures your well water is safe for consumption by testing for common contaminants.",
    longDescription:
      "If your home has a private well, regular water testing is essential. Our well water testing service collects samples and sends them to a certified lab to test for common contaminants such as bacteria (Coliform and E. coli), nitrates, lead, and pH levels. We'll provide you with a detailed report and explain the results clearly.",
    icon: TestTube,
    image: "/images/lehigh-acres-welcome-sign.png",
  },
  {
    id: "infrared",
    slug: "infrared-inspection",
    name: "Infrared Inspection",
    description:
      "Utilizes advanced infrared technology to detect hidden issues like moisture intrusion and energy loss.",
    longDescription:
      "Our infrared inspections use thermal imaging cameras to see what the naked eye can't. This advanced technology allows us to detect hidden problems such as water leaks behind walls, insulation deficiencies causing energy loss, and potential electrical overheating. It's a powerful, non-invasive tool for a more thorough inspection.",
    icon: Thermometer,
    image: "/images/mayne-cityscape-silhouette.png",
  },
  {
    id: "drone",
    slug: "drone-inspection",
    name: "Drone Inspection",
    description:
      "Safe and efficient inspection of roofs and other inaccessible areas using high-resolution drone imagery.",
    longDescription:
      "For roofs that are too steep, tall, or fragile to walk on, our drone inspection service is the perfect solution. We use high-resolution drones to safely and thoroughly capture detailed images of your roof and chimney, allowing us to identify potential issues without ever leaving the ground. This ensures a comprehensive assessment of every part of your property.",
    icon: DroneIcon,
    image: "/images/punta-gorda-home-inspection-dji-mini.png",
  },
  {
    id: "ada",
    slug: "ada-survey",
    name: "ADA Survey",
    description:
      "Evaluates property compliance with Americans with Disabilities Act (ADA) standards.",
    longDescription:
      "Our ADA Survey helps ensure that commercial properties are accessible and compliant with the Americans with Disabilities Act. We assess elements such as parking, ramps, doorways, restrooms, and signage to identify any barriers to accessibility. This is crucial for business owners and commercial property investors to avoid potential legal issues and ensure inclusivity.",
    icon: Accessibility,
    image: "/images/montura-ranch-estates-jesus-donkey-love.png",
  },
  {
    id: "commercial",
    slug: "commercial-inspection",
    name: "Commercial Inspection",
    description:
      "Detailed inspections for commercial properties, including offices, retail spaces, and industrial buildings.",
    longDescription:
      "Commercial property inspections are essential for investors and business owners. Our inspections cover all major systems of the building, including structure, roof, electrical, plumbing, and HVAC, tailored to the specific needs of the property type (office, retail, industrial). We provide a comprehensive report to help you understand the condition and potential costs associated with your commercial investment.",
    icon: Building,
    image: "/images/moore-haven-sugar-cane.png",
  },
  {
    id: "roof-cert",
    slug: "roof-certification",
    name: "Roof Certification",
    description:
      "Provides a professional certification of the roof's condition and expected lifespan.",
    longDescription:
      "A Roof Certification is a professional opinion on the condition of a roof and its expected remaining lifespan. Lenders or insurance companies often require it. Our inspector will conduct a detailed examination of the roof structure and materials and issue a formal certification document if it meets the required standards.",
    icon: Award,
    image: "/images/north-fort-myers-tree.png",
  },
  {
    id: "condo",
    slug: "condo-townhouse",
    name: "Condo/Townhouse",
    description:
      "Specialized inspections tailored to the unique aspects of condominium and townhouse properties.",
    longDescription:
      "Inspecting a condo or townhouse requires a different approach than a single-family home. Our specialized inspection focuses on the unit's interior systems (plumbing, electrical, HVAC) while also assessing the readily accessible common elements that the owner is responsible for, as defined by the HOA/Condo Association agreements. We help you understand your specific liabilities and the overall health of your unit.",
    icon: Building2,
    image: "/images/port-charlotte-rotonda-west-osprey.png",
  },
];

/** Testimonials */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location?: string;
  avatarUrl?: string;
  service?: string;
}

/** Pricing */
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  priceDetails?: string;
  features: string[];
  icon: LucideIcon;
  ctaText: string;
  isPopular?: boolean;
  savings?: string;
  href: string;
  urgencyText?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Essential Inspection",
    price: "$350",
    priceDetails: "Homes up to 2,000 sq ft • $50 per additional 500 sq ft",
    icon: ShieldCheck,
    features: [
      "Complete Home Inspection (All Major Systems)",
      "✅ Roof, Foundation, Plumbing, Electrical, HVAC",
      "✅ Appliances & Interior Components",
      "✅ Pool, Dock, Seawall Inspection (No Extra Fee)",
      "✅ Septic & Well System Visual Check",
      "✅ 24-Hour Report Delivery",
      "✅ High-Resolution Photos Included",
    ],
    ctaText: "Book Essential",
    href: "#schedule",
    urgencyText: "Most Popular for First-Time Buyers",
  },
  {
    id: "standard",
    name: "Insurance Ready",
    price: "$525",
    originalPrice: "$600",
    savings: "Save $75",
    priceDetails: "Homes up to 2,000 sq ft • Everything you need for insurance",
    icon: Star,
    features: [
      "🏆 Everything in Essential Inspection",
      "✅ 4-Point Insurance Inspection ($175 value)",
      "✅ Wind Mitigation Report ($125 value)",
      "✅ Insurance Discount Qualification",
      "✅ Priority Scheduling Available",
      "✅ Detailed Insurance Documentation",
    ],
    ctaText: "Choose Insurance Ready",
    isPopular: true,
    href: "#schedule",
    urgencyText: "Required by Most FL Insurance Companies",
  },
  {
    id: "premium",
    name: "Complete Peace of Mind",
    price: "$875",
    originalPrice: "$1,050",
    savings: "Save $175",
    priceDetails: "Best value for homes over 2,000 sq ft",
    icon: Gem,
    features: [
      "💎 Everything in Insurance Ready Package",
      "✅ Professional Mold & Air Quality Testing",
      "✅ Radon Gas Level Testing (48-hour)",
      "✅ Advanced Infrared Thermal Scan",
      "✅ Comprehensive Health & Safety Report",
      "✅ Priority Emergency Service Access",
    ],
    ctaText: "Get Complete Inspection",
    href: "#schedule",
    urgencyText: "Ultimate Protection for Your Investment",
  },
  {
    id: "emergency",
    name: "Emergency Service",
    price: "$450",
    priceDetails: "Same-day or next-day service • All home sizes",
    icon: Zap,
    features: [
      "⚡ Same-Day or Next-Day Service",
      "✅ All Essential Inspection Features",
      "✅ 4-Hour Report Delivery",
      "✅ Weekend & Holiday Availability",
      "✅ Direct Inspector Phone Access",
      "✅ Perfect for Contract Deadlines",
    ],
    ctaText: "Book Emergency",
    href: "tel:+1-863-843-0735",
    urgencyText: "Call (863) 843-0735 for Immediate Service",
  },
];

/** Competitive advantages */
export const competitiveAdvantages = [
  {
    title: "24-Hour Reports",
    description: "While others take 2-3 days, you get your report within 24 hours",
    icon: Clock,
  },
  {
    title: "No Hidden Fees",
    description: "Pools, docks, septic included - others charge $100+ extra",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Technology",
    description: "Drone + infrared inspections standard on every job",
    icon: DroneIcon,
  },
  {
    title: "Local Expertise",
    description: "15+ years inspecting Southwest Florida properties",
    icon: Award,
  },
];

/** Testimonials */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Wayne did an outstanding job with our Fort Myers home inspection. He was thorough, professional, and took the time to explain everything clearly. His attention to detail and honest insights gave me great peace of mind.",
    name: "Ribi09 Imbert",
    location: "Fort Myers, FL",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXu91HlP3xyLZabNEH_7nG2RmPnFxLQ1jWPgZ30DcRkzj69diEn2A=w36-h36-p-rp-mo-br100",
    service: "Home Inspection",
  },
  {
    id: "t2",
    quote:
      "Wayne was extremely professional and flexible in getting us seen fast in Cape Coral. He easily answered any and all questions we had before, during and after the inspection. Highly recommend!",
    name: "Josue Trejo",
    location: "Cape Coral, FL",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjUpZ2odr170144d4uGBrHTrL7fIDQklnYTt0T9bmvpKIPIOgZ6b=w36-h36-p-rp-mo-br100",
    service: "4-Point Inspection",
  },
  {
    id: "t3",
    quote:
      "Nice detailed inspection in LaBelle, very clear report. I contacted Mayne Home Inspectors on real short notice and they were able to reschedule their agenda, which makes them even more favorable.",
    name: "Serge Somers",
    location: "LaBelle, FL",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXvaz4ZUR79X0yDM7gwx5C9W2Q8SjjI6wBmZg14yxWt6Dasb9J7=w36-h36-p-rp-mo-br100",
    service: "Wind Mitigation",
  },
  {
    id: "t4",
    quote:
      "Amazing service in Punta Gorda, he checked everything in detail. Very reasonable price and arrived on time. I will hire Mayne Home Inspectors again.",
    name: "Yasnay Tapanes",
    location: "Punta Gorda, FL",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjWm9Hh_KZRYAxLsT_xNS1AAH1REzaagAAYh57BSZdly_a_pK2mcfA=w36-h36-p-rp-mo-br100",
    service: "Premium Inspection",
  },
];

/** YouTube video id for embeds */
export const youtubeVideoId = "MwtftPuq6K0";

/** SEO keywords per city (optional usage in pages) */
export const keySellingPoints = [
  "Licensed & Insured Florida Home Inspector",
  "5.0 Google Rating with 50+ Reviews",
  "24-Hour Inspection Reports",
  "Advanced Drone & Infrared Technology",
  "No Hidden Fees - Pools, Docks, Septic Included",
  "Emergency & Weekend Service Available",
  "15+ Years Southwest Florida Experience",
  "Direct Access to Inspector After Report",
];

export const cityKeywords: Record<string, string[]> = {
  "labelle": ["LaBelle home inspector", "home inspection LaBelle FL", "LaBelle property inspector"],
  "fort-myers": ["Fort Myers home inspector", "home inspection Fort Myers", "Fort Myers property inspection"],
  "cape-coral": ["Cape Coral home inspector", "home inspection Cape Coral", "Cape Coral property inspector"],
  "lehigh-acres": ["Lehigh Acres home inspector", "home inspection Lehigh Acres", "Lehigh Acres property inspection"],
  "punta-gorda": ["Punta Gorda home inspector", "home inspection Punta Gorda", "Punta Gorda property inspector"],
  "port-charlotte": ["Port Charlotte home inspector", "home inspection Port Charlotte", "Port Charlotte property inspector"],
  "clewiston": ["Clewiston home inspector", "home inspection Clewiston FL", "Clewiston property inspector"],
  "moore-haven": ["Moore Haven home inspector", "home inspection Moore Haven", "Moore Haven property inspector"],
  "immokalee": ["Immokalee home inspector", "home inspection Immokalee FL", "Immokalee property inspector"],
  "montura-ranch-estates": ["Montura Ranch home inspector", "home inspection Montura Ranch", "Montura Ranch property inspector"],
};


