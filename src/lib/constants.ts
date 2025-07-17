
import type { LucideIcon } from "lucide-react";
import {
  Home, ClipboardCheck, Wind, FlaskConical, ShieldAlert, TestTube, Thermometer,
  Camera as DroneIcon, Accessibility, Building, Award, Building2, Star, ShieldCheck, Gem, User, Users, Briefcase
} from "lucide-react";

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
  { id: "home", slug: "home-inspection", name: "Home Inspection", description: "A thorough examination of the home’s systems and structure, ensuring safety and identifying potential issues.", longDescription: "Our comprehensive home inspection is a non-invasive, visual examination of the accessible areas of a residential property. We meticulously evaluate all major systems, including the roof, foundation, plumbing, electrical, and HVAC systems, as well as interior and exterior components. You'll receive a detailed, easy-to-understand report with high-resolution photos, empowering you to make an informed decision about your investment.", icon: Home, image: "/images/home-inspection.png" },
  { id: "4-point", slug: "4-point-inspection", name: "4-Point Inspection", description: "Focuses on four key areas: roofing, electrical, plumbing, and HVAC. Often required for insurance.", longDescription: "A 4-Point Inspection is often required by insurance companies for older homes. It focuses on the four most critical systems: <br><b>• HVAC:</b> Heating, Ventilation, & Air Conditioning. <br><b>• Electrical:</b> Panel, breakers, and wiring. <br><b>• Plumbing:</b> Water heater, supply lines, and drains. <br><b>• Roof:</b> Shingles, flashing, and integrity. <br>This is crucial for insurance underwriting.", icon: ClipboardCheck, image: "/images/4-point-inspection.png" },
  { id: "wind", slug: "wind-mitigation", name: "Wind Mitigation", description: "Identifies features that reduce wind damage, potentially lowering your insurance premiums.", longDescription: "A Wind Mitigation Inspection can save you significant money on your homeowner's insurance. We assess your home's construction features that help it resist wind damage, such as roof-to-wall attachments, secondary water resistance, and opening protection. A favorable report can qualify you for substantial discounts on your insurance policy.", icon: Wind, image: "/images/wind-mitigation.png" },
  { id: "mold-air", slug: "mold-air-quality", name: "Mold & Air Quality", description: "Comprehensive testing for mold and assessment of indoor air quality to ensure a healthy living environment.", longDescription: "Concerned about mold or indoor air quality? Our service includes a visual inspection for signs of microbial growth and moisture intrusion. We can take air and surface samples for laboratory analysis to identify the type and concentration of mold spores, providing you with a clear picture of your home's air quality and recommending remediation steps if necessary.", icon: FlaskConical, image: "/images/mold-air-quality.png" },
  { id: "radon", slug: "radon-testing", name: "Radon Testing", description: "Accurate testing for radon gas levels, a leading cause of lung cancer, to protect your family.", longDescription: "Radon is a colorless, odorless radioactive gas that can seep into your home from the ground, posing a significant health risk. We use continuous radon monitors to accurately measure the radon levels in your home over a 48-hour period. This provides reliable data to determine if mitigation is needed to protect your family's health.", icon: ShieldAlert, image: "/images/radon-testing.png" },
  { id: "well-water", slug: "well-water-testing", name: "Well Water Testing", description: "Ensures your well water is safe for consumption by testing for common contaminants.", longDescription: "If your home has a private well, regular water testing is essential. Our well water testing service collects samples and sends them to a certified lab to test for common contaminants such as bacteria (Coliform and E. coli), nitrates, lead, and pH levels. We'll provide you with a detailed report and explain the results clearly.", icon: TestTube, image: "/images/well-water-testing.png" },
  { id: "infrared", slug: "infrared-inspection", name: "Infrared Inspection", description: "Utilizes advanced infrared technology to detect hidden issues like moisture intrusion and energy loss.", longDescription: "Our infrared inspections use thermal imaging cameras to see what the naked eye can't. This advanced technology allows us to detect hidden problems such as water leaks behind walls, insulation deficiencies causing energy loss, and potential electrical overheating. It's a powerful, non-invasive tool for a more thorough inspection.", icon: Thermometer, image: "/images/infrared-inspection.png" },
  { id: "drone", slug: "drone-inspection", name: "Drone Inspection", description: "Safe and efficient inspection of roofs and other inaccessible areas using high-resolution drone imagery.", longDescription: "For roofs that are too steep, tall, or fragile to walk on, our drone inspection service is the perfect solution. We use high-resolution drones to safely and thoroughly capture detailed images of your roof and chimney, allowing us to identify potential issues without ever leaving the ground. This ensures a comprehensive assessment of every part of your property.", icon: DroneIcon, image: "/images/drone-inspection.png" },
  { id: "ada", slug: "ada-survey", name: "ADA Survey", description: "Evaluates property compliance with Americans with Disabilities Act (ADA) standards.", longDescription: "Our ADA Survey helps ensure that commercial properties are accessible and compliant with the Americans with Disabilities Act. We assess elements such as parking, ramps, doorways, restrooms, and signage to identify any barriers to accessibility. This is crucial for business owners and commercial property investors to avoid potential legal issues and ensure inclusivity.", icon: Accessibility, image: "/images/ada-survey.png" },
  { id: "commercial", slug: "commercial-inspection", name: "Commercial Inspection", description: "Detailed inspections for commercial properties, including offices, retail spaces, and industrial buildings.", longDescription: "Commercial property inspections are essential for investors and business owners. Our inspections cover all major systems of the building, including structure, roof, electrical, plumbing, and HVAC, tailored to the specific needs of the property type (office, retail, industrial). We provide a comprehensive report to help you understand the condition and potential costs associated with your commercial investment.", icon: Building, image: "/images/commercial-inspection.png" },
  { id: "roof-cert", slug: "roof-certification", name: "Roof Certification", description: "Provides a professional certification of the roof's condition and expected lifespan.", longDescription: "A Roof Certification is a professional opinion on the condition of a roof and its expected remaining lifespan. Lenders or insurance companies often require it. Our inspector will conduct a detailed examination of the roof structure and materials and issue a formal certification document if it meets the required standards.", icon: Award, image: "/images/roof-certification.png" },
  { id: "condo", slug: "condo-townhouse", name: "Condo/Townhouse", description: "Specialized inspections tailored to the unique aspects of condominium and townhouse properties.", longDescription: "Inspecting a condo or townhouse requires a different approach than a single-family home. Our specialized inspection focuses on the unit's interior systems (plumbing, electrical, HVAC) while also assessing the readily accessible common elements that the owner is responsible for, as defined by the HOA/Condo Association agreements. We help you understand your specific liabilities and the overall health of your unit.", icon: Building2, image: "/images/condo-townhouse-inspection.png" },
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
  "Fort Myers", "Cape Coral", "Punta Gorda", "Port Charlotte", "Montura Ranch Estates"
];

export const youtubeVideoId = "MwtftPuq6K0";

    
