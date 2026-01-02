import type { LandingContent } from './types'
import { defaultLandingContent } from './defaultLandingContent'

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export async function loadLandingContent(): Promise<LandingContent> {
  const response = await fetch('/content/content.json', {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) return defaultLandingContent

  const data: unknown = await response.json()
  if (!isObject(data)) return defaultLandingContent

  // Validación mínima: si falta algo crítico, usamos defaults.
  // (Se puede reemplazar por Zod cuando integren CMS.)
  const merged: LandingContent = {
    ...defaultLandingContent,
    ...(data as Partial<LandingContent>),
    client: {
      ...defaultLandingContent.client,
      ...((data as Partial<LandingContent>).client ?? {}),
    },
    hero: {
      ...defaultLandingContent.hero,
      ...((data as Partial<LandingContent>).hero ?? {}),
    },
    socialProof: {
      ...defaultLandingContent.socialProof,
      ...((data as Partial<LandingContent>).socialProof ?? {}),
    },
    catalog: {
      ...defaultLandingContent.catalog,
      ...((data as Partial<LandingContent>).catalog ?? {}),
    },
    benefits: {
      ...defaultLandingContent.benefits,
      ...((data as Partial<LandingContent>).benefits ?? {}),
    },
    testimonials: {
      ...defaultLandingContent.testimonials,
      ...((data as Partial<LandingContent>).testimonials ?? {}),
    },
    finalCta: {
      ...defaultLandingContent.finalCta,
      ...((data as Partial<LandingContent>).finalCta ?? {}),
    },
  }

  return merged
}
