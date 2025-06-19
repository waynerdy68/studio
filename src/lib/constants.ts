
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
  { id: "t1", quote: "Mayne Home Inspectors were incredibly thorough and professional. They found issues we never would have noticed. Highly recommend!", name: "Sarah M.", location: "LaBelle, FL", avatarUrl: "https://placehold.co/100x100.png" },
  { id: "t2", quote: "The detailed report and clear explanations gave us peace of mind during our home purchase. Excellent service!", name: "John B.", location: "Fort Myers, FL", avatarUrl: "https://placehold.co/100x100.png" },
  { id: "t3", quote: "Fast, efficient, and very knowledgeable. The drone inspection for our roof was impressive. Five stars!", name: "Lisa P.", location: "Cape Coral, FL", avatarUrl: "https://placehold.co/100x100.png" },
  { id: "t4", quote: "From scheduling to the final report, everything was seamless. The team is friendly and answered all our questions.", name: "David K.", location: "Lehigh Acres, FL", avatarUrl: "https://placehold.co/100x100.png" },
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
    name: "Essential Inspection", // Changed back from "Basic Inspection"
    price: "$350+",
    priceDetails: "For homes up to 2000 sq ft",
    icon: User, 
    features: ["Standard Home Inspection", "Key Systems Check (HVAC, Plumbing, Electrical)", "Structural Overview", "Digital Report within 24hrs"],
    ctaText: "Get Started",
    href: "#schedule",
  },
  {
    id: "standard",
    name: "Comprehensive Plus",
    price: "$475+",
    priceDetails: "For homes up to 3000 sq ft",
    icon: Users, 
    features: ["Everything in Essential", "4-Point Inspection Included", "Wind Mitigation Overview", "Infrared Scan (Key Areas)", "Priority Scheduling"],
    ctaText: "Choose Plan",
    isPopular: true,
    href: "#schedule",
  },
  {
    id: "premium",
    name: "Ultimate Peace of Mind",
    price: "$650+",
    priceDetails: "For homes over 3000 sq ft / complex properties",
    icon: Briefcase, 
    features: ["Everything in Comprehensive Plus", "Mold & Air Quality Sampling (1 area)", "Radon Test Kit", "Drone Roof Inspection", "Extended Consultation"],
    ctaText: "Select Premium",
    href: "#schedule",
  },
];

export const serviceAreas = [
  "LaBelle", "Lehigh Acres", "Clewiston", "Moore Haven", "Immokalee", 
  "Fort Myers", "Cape Coral", "Punta Gorda", "Port Charlotte"
];

export const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with actual video ID

