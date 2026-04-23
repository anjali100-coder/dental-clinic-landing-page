import { createClient, Entry, Asset, EntrySkeletonType } from "contentful"

// Create the Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Type definitions for Contentful content
export interface HeroFields {
  title: string
  subtitle: string
  description: string
  ctaPrimaryText: string
  ctaSecondaryText: string
  heroImage?: Asset
  stats: {
    icon: string
    value: string
    label: string
  }[]
}

export interface ServiceFields {
  title: string
  description: string
  features: string[]
  iconType: string
  order: number
}

export interface TeamMemberFields {
  name: string
  role: string
  specialization: string
  image?: Asset
  linkedinUrl?: string
  twitterUrl?: string
  email?: string
  order: number
}

export interface TestimonialFields {
  name: string
  role: string
  content: string
  rating: number
  image?: Asset
  order: number
}

export interface AboutFields {
  title: string
  subtitle: string
  description: string
  secondaryDescription: string
  features: string[]
  highlights: {
    icon: string
    value: string
    label: string
  }[]
}

export interface SiteSettingsFields {
  siteName: string
  logo?: Asset
  phone: string
  email: string
  address: string
  workingHours: string
  socialLinks: {
    platform: string
    url: string
  }[]
}

// Skeleton types for Contentful entries
interface HeroSkeleton extends EntrySkeletonType {
  contentTypeId: "hero"
  fields: HeroFields
}

interface ServiceSkeleton extends EntrySkeletonType {
  contentTypeId: "service"
  fields: ServiceFields
}

interface TeamMemberSkeleton extends EntrySkeletonType {
  contentTypeId: "teamMember"
  fields: TeamMemberFields
}

interface TestimonialSkeleton extends EntrySkeletonType {
  contentTypeId: "testimonial"
  fields: TestimonialFields
}

interface AboutSkeleton extends EntrySkeletonType {
  contentTypeId: "about"
  fields: AboutFields
}

interface SiteSettingsSkeleton extends EntrySkeletonType {
  contentTypeId: "siteSettings"
  fields: SiteSettingsFields
}

// Helper function to extract fields from entry
function extractFields<T>(entry: Entry<EntrySkeletonType>): T {
  return entry.fields as unknown as T
}

// Helper function to get image URL from Asset
// Contentful asset structure: asset.fields.file.url
export function getImageUrl(asset?: Asset | unknown): string | undefined {
  if (!asset) return undefined
  
  // Handle the nested Contentful asset structure
  const assetObj = asset as { fields?: { file?: { url?: string } } }
  
  if (assetObj?.fields?.file?.url) {
    const url = assetObj.fields.file.url
    // Contentful URLs start with // so we need to add https:
    return url.startsWith("//") ? `https:${url}` : url
  }
  
  return undefined
}

// Fetch functions
export async function getHero(): Promise<(HeroFields & { imageUrl?: string }) | null> {
  try {
    const entries = await client.getEntries<HeroSkeleton>({
      content_type: "hero",
      limit: 1,
      include: 2,
    })
    
    if (entries.items.length === 0) {
      console.log("[v0] No hero entries found in Contentful")
      return null
    }
    
    const rawFields = entries.items[0].fields as Record<string, unknown>
    
    // Use the exact field ID "hero Image" (with space) as specified
    const heroImageField = rawFields["hero Image"] as { fields?: { file?: { url?: string } } } | undefined
    
    // Extract URL using: fields["hero Image"].fields.file.url
    let imageUrl: string | undefined = undefined
    if (heroImageField?.fields?.file?.url) {
      imageUrl = `https:${heroImageField.fields.file.url}`
    }
    
    const fields = extractFields<HeroFields>(entries.items[0])
    
    return {
      ...fields,
      imageUrl,
    }
  } catch (error) {
    console.error("[v0] Error fetching hero:", error)
    return null
  }
}

export async function getServices(): Promise<ServiceFields[]> {
  try {
    const entries = await client.getEntries<ServiceSkeleton>({
      content_type: "service",
      order: ["fields.order"],
    })
    
    return entries.items.map((entry) => extractFields<ServiceFields>(entry))
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

export async function getTeamMembers(): Promise<(TeamMemberFields & { imageUrl?: string })[]> {
  try {
    const entries = await client.getEntries<TeamMemberSkeleton>({
      content_type: "teamMember",
      order: ["fields.order"],
      include: 2,
    })
    
    return entries.items.map((entry) => {
      const fields = extractFields<TeamMemberFields>(entry)
      return {
        ...fields,
        imageUrl: getImageUrl(fields.image),
      }
    })
  } catch (error) {
    console.error("Error fetching team members:", error)
    return []
  }
}

export async function getTestimonials(): Promise<(TestimonialFields & { imageUrl?: string })[]> {
  try {
    const entries = await client.getEntries<TestimonialSkeleton>({
      content_type: "testimonial",
      order: ["fields.order"],
      include: 2,
    })
    
    return entries.items.map((entry) => {
      const fields = extractFields<TestimonialFields>(entry)
      return {
        ...fields,
        imageUrl: getImageUrl(fields.image),
      }
    })
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export async function getAbout(): Promise<AboutFields | null> {
  try {
    const entries = await client.getEntries<AboutSkeleton>({
      content_type: "about",
      limit: 1,
    })
    
    if (entries.items.length === 0) return null
    return extractFields<AboutFields>(entries.items[0])
  } catch (error) {
    console.error("Error fetching about:", error)
    return null
  }
}

export async function getSiteSettings(): Promise<SiteSettingsFields | null> {
  try {
    const entries = await client.getEntries<SiteSettingsSkeleton>({
      content_type: "siteSettings",
      limit: 1,
    })
    
    if (entries.items.length === 0) return null
    return extractFields<SiteSettingsFields>(entries.items[0])
  } catch (error) {
    console.error("Error fetching site settings:", error)
    return null
  }
}

// Fetch all content at once for the homepage
export async function getAllContent() {
  const [hero, services, teamMembers, testimonials, about, siteSettings] = await Promise.all([
    getHero(),
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getAbout(),
    getSiteSettings(),
  ])

  return {
    hero,
    services,
    teamMembers,
    testimonials,
    about,
    siteSettings,
  }
}
