import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { TestimonialFields } from "@/lib/contentful"
import Image from "next/image"

// Default testimonials for fallback
const defaultTestimonials: (TestimonialFields & { imageUrl?: string })[] = [
  {
    name: "Amanda Rodriguez",
    role: "Business Executive",
    content: "DentiCare transformed my smile completely. The team is incredibly professional and made me feel comfortable throughout my entire treatment. I couldn't be happier with the results!",
    rating: 5,
    order: 1,
  },
  {
    name: "Robert Thompson",
    role: "Software Engineer",
    content: "I've been coming to DentiCare for years and the quality of care is consistently exceptional. Dr. Chen did an amazing job with my Invisalign treatment. Highly recommended!",
    rating: 5,
    order: 2,
  },
  {
    name: "Jessica Martinez",
    role: "Marketing Director",
    content: "The staff at DentiCare goes above and beyond. From the moment you walk in, you feel welcomed and cared for. My dental anxiety has completely disappeared thanks to them.",
    rating: 5,
    order: 3,
  },
]

// Helper to get initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

interface TestimonialsSectionProps {
  testimonials?: (TestimonialFields & { imageUrl?: string })[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const testimonialList = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our Patients
            <span className="text-primary"> Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Hear from our satisfied patients 
            about their experience at DentiCare.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialList.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  {testimonial.imageUrl ? (
                    <div className="relative w-12 h-12">
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{getInitials(testimonial.name)}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
