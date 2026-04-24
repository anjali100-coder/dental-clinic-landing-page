import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, Users, Heart } from "lucide-react"


const iconMap: Record<string, typeof Award> = {
  award: Award,
  users: Users,
  heart: Heart,
}

// Default about data for fallback
const defaultAbout: AboutFields = {
  title: "We Care About Your",
  subtitle: "Dental Health",
  description: "At DentiCare, we believe everyone deserves access to exceptional dental care. Our mission is to provide comprehensive, personalized dental services in a warm and welcoming environment.",
  secondaryDescription: "With over 15 years of experience, our team of skilled professionals combines expertise with cutting-edge technology to deliver outstanding results. We treat each patient like family, ensuring comfort and satisfaction at every visit.",
  features: [
    "State-of-the-art dental technology",
    "Highly trained and certified specialists",
    "Comfortable and relaxing environment",
    "Personalized treatment plans",
    "Flexible payment options available",
    "Same-day appointments for emergencies",
  ],
  highlights: [
    { icon: "award", value: "25+", label: "Award Winning" },
    { icon: "users", value: "12", label: "Expert Dentists" },
    { icon: "heart", value: "99%", label: "Patient Satisfaction" },
  ],
}



export function AboutSection() {
  const content = defaultAbout

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl p-6 lg:p-8">
                <div className="aspect-[4/5] bg-card rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-primary">
                        <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                        <path d="M25 45C25 45 30 55 40 55C50 55 55 45 55 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="30" cy="35" r="3" fill="currentColor" />
                        <circle cx="50" cy="35" r="3" fill="currentColor" />
                        <path d="M40 20V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M40 52V60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">15+ Years</h3>
                    <p className="text-muted-foreground">Of Excellence in Dental Care</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-2xl p-6 shadow-2xl border border-border">
                <div className="grid grid-cols-3 gap-6">
                  {content.highlights.map((item, index) => {
                    const IconComponent = iconMap[item.icon] || Award
                    return (
                      <div key={index} className="text-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-xl font-bold text-foreground">{item.value}</p>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Text */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {content.title}
                <span className="text-primary"> {content.subtitle}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {content.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {content.secondaryDescription}
              </p>
            </div>
            
            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                Meet Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
