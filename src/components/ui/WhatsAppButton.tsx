import type { ReactNode } from 'react'
import { buildWhatsAppUrl } from '../../lib/whatsapp'

export function WhatsAppButton(props: {
  phone: string
  message: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}): ReactNode {
  const href = buildWhatsAppUrl({ phone: props.phone, text: props.message })

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.ariaLabel ?? 'Abrir WhatsApp'}
      className={
        props.className ??
        'inline-flex items-center justify-center rounded-xl bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp'
      }
    >
      {props.children}
    </a>
  )
}
