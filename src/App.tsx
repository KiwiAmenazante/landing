import { useEffect, useMemo, useState } from 'react'
import { CatalogSection } from './components/sections/CatalogSection'
import { BenefitsSection } from './components/sections/BenefitsSection'
import { FinalCtaSection } from './components/sections/FinalCtaSection'
import { HeroSection } from './components/sections/HeroSection'
import { TikTokSection } from './components/sections/TikTokSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { HeaderBar } from './components/ui/HeaderBar'
import { StickyWhatsAppBar } from './components/ui/StickyWhatsAppBar'
import { defaultLandingContent } from './content/defaultLandingContent'
import { loadLandingContent } from './content/loadLandingContent'
import type { LandingContent } from './content/types'
import { resolveWhatsAppNumber } from './lib/whatsapp'

export default function App() {
  const [content, setContent] = useState<LandingContent>(defaultLandingContent)

  useEffect(() => {
    let mounted = true
    loadLandingContent()
      .then((data) => {
        if (mounted) setContent(data)
      })
      .catch(() => {
        // Fallback: usamos defaultLandingContent
      })

    return () => {
      mounted = false
    }
  }, [])

  const whatsappNumber = useMemo(
    () => resolveWhatsAppNumber(content.client.whatsappNumber),
    [content.client.whatsappNumber]
  )

  return (
    <div className="min-h-dvh bg-gradient-to-b from-orange-50 via-white to-white text-slate-900">
      <HeaderBar brandName={content.client.name} logoUrl={content.client.logoUrl} />
      <main className="pb-24 md:pb-0">
        <HeroSection content={content.hero} whatsappNumber={whatsappNumber} />
        <TikTokSection content={content.socialProof} />
        <CatalogSection
          content={content.catalog}
          whatsappNumber={whatsappNumber}
        />
        <BenefitsSection content={content.benefits} />
        <TestimonialsSection content={content.testimonials} />
        <FinalCtaSection
          content={content.finalCta}
          whatsappNumber={whatsappNumber}
        />
      </main>

      <StickyWhatsAppBar
        whatsappNumber={whatsappNumber}
        ctaText={content.hero.ctaText}
        message={content.hero.ctaMessage}
      />
    </div>
  )
}
