import type { ReactNode } from 'react'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function FinalCtaSection(props: {
  content: {
    title: string
    subtitle: string
    ctaText: string
    ctaMessage: string
  }
  whatsappNumber: string
}): ReactNode {
  return (
    <section className="bg-orange-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl border border-orange-200 bg-white p-6 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {props.content.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {props.content.subtitle}
            </p>

            <div className="mt-6">
              <WhatsAppButton
                phone={props.whatsappNumber}
                message={props.content.ctaMessage}
                ariaLabel={props.content.ctaText}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-whatsapp px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp sm:w-auto"
              >
                {props.content.ctaText}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
