import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Shield, Award, Clock } from "lucide-react"
import { HeroFields } from "@/lib/contentful"
import Image from "next/image"

// Default data for fallback
const defaultData: HeroFields = {
  title: "Your Perfect Smile",
  subtitle: "Starts Here",
  description: "Experience exceptional dental care with our team of expert professionals. We combine cutting-edge technology with compassionate service to give you the smile you've always dreamed of.",
  ctaPrimaryText: "Book Your Visit",
  ctaSecondaryText: "Learn More",
  stats: [
    { icon: "shield", value: "15+", label: "Years Experience" },
    { icon: "award", value: "50k+", label: "Happy Patients" },
    { icon: "clock", value: "24/7", label: "Emergency Care" },
  ],
}

const iconMap: Record<string, typeof Shield> = {
  shield: Shield,
  award: Award,
  clock: Clock,
}

interface HeroSectionProps {
  data?: (HeroFields & { imageUrl?: string }) | null
}

export function HeroSection({ data }: HeroSectionProps) {
  const content = data || defaultData

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Welcome to DentiCare
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {content.title}
              <span className="text-primary block mt-2">{content.subtitle}</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {content.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 group">
                <Calendar className="w-5 h-5 mr-2" />
                {content.ctaPrimaryText}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {content.ctaSecondaryText}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {content.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon] || Shield
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-card rounded-2xl overflow-hidden shadow-inner relative">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                    alt="Professional Dental Care"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">100% Satisfaction</p>
                    <p className="text-sm text-muted-foreground">Guaranteed Results</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-primary/20 rounded-full border-2 border-card flex items-center justify-center text-xs font-medium text-primary">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">4.9/5 Rating</p>
                    <p className="text-sm text-muted-foreground">2,500+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
