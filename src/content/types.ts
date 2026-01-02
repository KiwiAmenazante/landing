export type LandingContent = {
  client: {
    name: string
    whatsappNumber: string
    logoUrl?: string
    city?: string
  }
  hero: {
    headline: string
    subheadline: string
    ctaText: string
    ctaMessage: string
  }
  socialProof: {
    title: string
    subtitle: string
    tiktokLinks: string[]
  }
  catalog: {
    title: string
    subtitle: string
    products: Array<{
      id: string
      name: string
      price: string
      benefit: string
      imageUrl: string
      active: boolean
    }>
  }
  benefits: {
    title: string
    items: Array<{
      title: string
      description: string
      icon: 'speed' | 'shield' | 'chat' | 'delivery'
    }>
  }
  testimonials: {
    title: string
    items: Array<{
      quote: string
      name: string
      city?: string
      imageUrl?: string
    }>
  }
  finalCta: {
    title: string
    subtitle: string
    ctaText: string
    ctaMessage: string
  }
}
