export const dynamic ='force-dynamic'
export const revalidate = 0
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getAllContent } from "@/lib/contentful"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const { hero, services, teamMembers, testimonials, about, siteSettings } = await getAllContent()

  return (
    <main className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ServicesSection services={services} />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </main>
  )
}
