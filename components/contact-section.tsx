import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { SiteSettingsFields } from "@/lib/contentful"

// Default site settings for fallback
const defaultSettings: SiteSettingsFields = {
  siteName: "DentiCare",
  phone: "+1 (555) 123-4567",
  email: "info@denticare.com",
  address: "123 Dental Care Avenue, New York, NY 10001",
  workingHours: "Mon - Fri: 8:00 AM - 8:00 PM\nSat - Sun: 9:00 AM - 5:00 PM",
  socialLinks: [],
}

interface ContactSectionProps {
  siteSettings?: SiteSettingsFields | null
}

export function ContactSection({ siteSettings }: ContactSectionProps) {
  const settings = siteSettings || defaultSettings

  // Parse address into multiple lines if needed
  const addressLines = settings.address.split(",").map((line) => line.trim())
  
  // Parse working hours into multiple lines
  const workingHoursLines = settings.workingHours.split("\n").map((line) => line.trim())

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: addressLines,
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [settings.phone],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [settings.email],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: workingHoursLines,
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Get In Touch
            <span className="text-primary"> With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions or ready to schedule your appointment? 
            Reach out to us and our friendly team will be happy to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Book an Appointment</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Select Service</label>
                  <select className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                    <option value="">Choose a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="implants">Dental Implants</option>
                    <option value="root-canal">Root Canal</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your dental needs..."
                    className="w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Map Placeholder */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">View on Google Maps</p>
                  <p className="text-sm text-muted-foreground">{settings.address}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
