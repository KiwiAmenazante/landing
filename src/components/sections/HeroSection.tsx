import type { ReactNode } from 'react'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function HeroSection(props: {
  content: {
    headline: string
    subheadline: string
    ctaText: string
    ctaMessage: string
  }
  whatsappNumber: string
}): ReactNode {
  return (
    <section className="border-b border-orange-100">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:pb-16 sm:pt-12">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
            Atención por WhatsApp
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {props.content.headline}
          </h1>
          <p className="mt-4 text-base text-slate-700 sm:text-lg">
            {props.content.subheadline}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              phone={props.whatsappNumber}
              message={props.content.ctaMessage}
              ariaLabel={props.content.ctaText}
              className="inline-flex items-center justify-center rounded-2xl bg-whatsapp px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
            >
              {props.content.ctaText}
            </WhatsAppButton>

            <p className="text-sm text-slate-600">
              Copy corto, directo y sin formularios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
