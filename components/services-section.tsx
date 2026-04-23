import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { ServiceFields } from "@/lib/contentful"

// Icon components for different service types
const serviceIcons: Record<string, JSX.Element> = {
  "general-dentistry": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15" />
      <path d="M24 12C18 12 14 18 14 24C14 30 18 36 24 36C30 36 34 30 34 24C34 18 30 12 24 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 22L24 26L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "cosmetic-dentistry": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15" />
      <path d="M16 24H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 16V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  "orthodontics": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15" />
      <path d="M18 28C18 28 20 32 24 32C28 32 30 28 30 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="22" r="2" fill="currentColor" />
      <circle cx="28" cy="22" r="2" fill="currentColor" />
    </svg>
  ),
  "emergency-care": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15" />
      <path d="M24 14V24L30 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  "dental-implants": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15" />
      <path d="M20 16L24 12L28 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 12V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 36H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  "root-canal": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15" />
      <path d="M18 20C18 20 20 18 24 18C28 18 30 20 30 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 28C18 28 20 30 24 30C28 30 30 28 30 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  ),
  "default": (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.15" />
      <path d="M24 12C18 12 14 18 14 24C14 30 18 36 24 36C30 36 34 30 34 24C34 18 30 12 24 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
}

// Default services for fallback
const defaultServices: ServiceFields[] = [
  {
    iconType: "general-dentistry",
    title: "General Dentistry",
    description: "Comprehensive dental care including cleanings, fillings, and preventive treatments to maintain your oral health.",
    features: ["Regular Checkups", "Teeth Cleaning", "Cavity Fillings"],
    order: 1,
  },
  {
    iconType: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic procedures including veneers, bonding, and smile makeovers.",
    features: ["Teeth Whitening", "Porcelain Veneers", "Smile Design"],
    order: 2,
  },
  {
    iconType: "orthodontics",
    title: "Orthodontics",
    description: "Achieve perfectly aligned teeth with our modern orthodontic solutions including Invisalign and traditional braces.",
    features: ["Invisalign", "Metal Braces", "Retainers"],
    order: 3,
  },
  {
    iconType: "emergency-care",
    title: "Emergency Care",
    description: "24/7 emergency dental services for urgent issues including severe toothaches, broken teeth, and dental trauma.",
    features: ["Same-Day Service", "Pain Relief", "Trauma Care"],
    order: 4,
  },
  {
    iconType: "dental-implants",
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions with our state-of-the-art dental implant procedures and expert care.",
    features: ["Single Implants", "Full Arch", "Bone Grafting"],
    order: 5,
  },
  {
    iconType: "root-canal",
    title: "Root Canal",
    description: "Painless root canal treatments using advanced techniques to save your natural teeth and eliminate infection.",
    features: ["Pain-Free", "Same-Day Treatment", "Crown Fitting"],
    order: 6,
  },
]

interface ServicesSectionProps {
  services?: ServiceFields[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const serviceList = services && services.length > 0 ? services : defaultServices

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Dental Care
            <span className="text-primary"> For Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a full range of dental services to keep your smile healthy and beautiful. 
            Our expert team uses the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {serviceIcons[service.iconType] || serviceIcons["default"]}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <button className="inline-flex items-center text-primary font-medium text-sm group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
