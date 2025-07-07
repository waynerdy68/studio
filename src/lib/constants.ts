
import type { LucideIcon } from "lucide-react";
import {
  Home, ClipboardCheck, Wind, FlaskConical, ShieldAlert, TestTube, Thermometer,
  Camera as DroneIcon, Accessibility, Building, Award, Building2, Star, ShieldCheck, Gem, User, Users, Briefcase
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  { id: "home", name: "Home Inspection", description: "A thorough examination of the home’s systems and structure, ensuring safety and identifying potential issues.", icon: Home },
  { id: "4-point", name: "4-Point Inspection", description: "Focuses on four key areas: roofing, electrical, plumbing, and HVAC. Often required for insurance.", icon: ClipboardCheck },
  { id: "wind", name: "Wind Mitigation", description: "Identifies features that reduce wind damage, potentially lowering your insurance premiums.", icon: Wind },
  { id: "mold-air", name: "Mold & Air Quality", description: "Comprehensive testing for mold and assessment of indoor air quality to ensure a healthy living environment.", icon: FlaskConical },
  { id: "radon", name: "Radon Testing", description: "Accurate testing for radon gas levels, a leading cause of lung cancer, to protect your family.", icon: ShieldAlert },
  { id: "well-water", name: "Well Water Testing", description: "Ensures your well water is safe for consumption by testing for common contaminants.", icon: TestTube },
  { id: "infrared", name: "Infrared Inspection", description: "Utilizes advanced infrared technology to detect hidden issues like moisture intrusion and energy loss.", icon: Thermometer },
  { id: "drone", name: "Drone Inspection", description: "Safe and efficient inspection of roofs and other inaccessible areas using high-resolution drone imagery.", icon: DroneIcon },
  { id: "ada", name: "ADA Survey", description: "Evaluates property compliance with Americans with Disabilities Act (ADA) standards.", icon: Accessibility },
  { id: "commercial", name: "Commercial Inspection", description: "Detailed inspections for commercial properties, including offices, retail spaces, and industrial buildings.", icon: Building },
  { id: "roof-cert", name: "Roof Certification", description: "Provides a professional certification of the roof's condition and expected lifespan.", icon: Award },
  { id: "condo", name: "Condo/Townhouse", description: "Specialized inspections tailored to the unique aspects of condominium and townhouse properties.", icon: Building2 },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location?: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", quote: "Wayne Casten did an outstanding job with the home inspection. He was thorough, professional, and took the time to explain everything clearly. His attention to detail and honest insights gave me great peace of mind. I highly recommend Wayne to anyone in need of a reliable and knowledgeable home inspector, you won’t be disappointed!", name: "Ribi09 Imbert", location: "Google Review", avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXu91HlP3xyLZabNEH_7nG2RmPnFxLQ1jWPgZ30DcRkzj69diEn2A=w36-h36-p-rp-mo-br100" },
  { id: "t2", quote: "Wayne was extremely professional and flexible in getting us seen fast and easy. He easily answered any and all questions we had before, during and after the inspection. Inspection was thorough and detailed. Highly recommend!!", name: "Josue Trejo", location: "Google Review", avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUpZ2odr170144d4uGBrHTrL7fIDQklnYTt0T9bmvpKIPIOgZ6b=w36-h36-p-rp-mo-br100" },
  { id: "t3", quote: "Nice detailed inspection, very clear report. On top of that, I contacted Mayne Inspectors on real short notice and they were able to reschedule their agenda, which makes them even more favorable. I highly recommend Mayne Inspectors.", name: "Serge Somers", location: "Google Review", avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXvaz4ZUR79X0yDM7gwx5C9W2Q8SjjI6wBmZg14yxWt6Dasb9J7=w36-h36-p-rp-mo-br100" },
  { id: "t4", quote: "Amazing service, he checked everything in detail. Very reasonable price and arrived on time. I will hire Mayne Inspectors again.", name: "Yasnay Tapanes", location: "Google Review", avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWm9Hh_KZRYAxLsT_xNS1AAH1REzaagAAYh57BSZdly_a_pK2mcfA=w36-h36-p-rp-mo-br100" },
];

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceDetails?: string;
  features: string[];
  icon: LucideIcon;
  ctaText: string;
  isPopular?: boolean;
  href: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic Inspection",
    price: "$350",
    priceDetails: "For homes up to 2000 sq ft",
    icon: ShieldCheck, 
    features: ["General Home Inspection", "Key Systems: Roof, Plumbing, HVAC, Electrical", "Components: Appliances, Irrigation, Septic System*, Well", "Included - Swimming Pools, Boat Dock/Lift, Seawall"],
    ctaText: "Get Started",
    href: "#schedule",
  },
  {
    id: "standard",
    name: "Standard Inspection",
    price: "$525",
    priceDetails: "For homes up to 2000 sq ft",
    icon: Star, 
    features: ["Everything in Basic Inspection", "4-Point Inspection", "Wind Mitigation Inspection"],
    ctaText: "Choose Plan",
    isPopular: true,
    href: "#schedule",
  },
  {
    id: "premium",
    name: "Premium Inspection",
    price: "$875",
    priceDetails: "For homes over 2000 sq ft",
    icon: Gem, 
    features: ["Everything in Standard Inspection", "Mold & Air Quality Sampling", "Radon Testing", "Inrared Scan"],
    ctaText: "Select Premium",
    href: "#schedule",
  },
];

export const serviceAreas = [
  "LaBelle", "Lehigh Acres", "Clewiston", "Moore Haven", "Immokalee", 
  "Fort Myers", "Cape Coral", "Punta Gorda", "Port Charlotte"
];

export const youtubeVideoId = "ScMzIvxBSi4";

