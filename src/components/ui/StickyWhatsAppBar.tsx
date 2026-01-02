import type { ReactNode } from 'react'
import { WhatsAppButton } from './WhatsAppButton'

export function StickyWhatsAppBar(props: {
  whatsappNumber: string
  ctaText: string
  message: string
}): ReactNode {
  if (!props.whatsappNumber) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="pointer-events-auto mx-auto max-w-3xl px-4 pb-4">
        <WhatsAppButton
          phone={props.whatsappNumber}
          message={props.message}
          ariaLabel={props.ctaText}
          className="flex w-full items-center justify-center rounded-2xl bg-whatsapp px-5 py-4 text-base font-semibold text-white shadow-lg hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
        >
          {props.ctaText}
        </WhatsAppButton>
      </div>
    </div>
  )
}
