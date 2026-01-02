export function resolveWhatsAppNumber(fallbackFromContent: string): string {
  const fromEnv = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined
  return sanitizeWhatsAppNumber(fromEnv?.trim() || fallbackFromContent)
}

export function sanitizeWhatsAppNumber(input: string): string {
  return (input || '').replace(/\D/g, '')
}

export function buildWhatsAppUrl(options: {
  phone: string
  text: string
}): string {
  const phone = sanitizeWhatsAppNumber(options.phone)
  const text = encodeURIComponent(options.text)
  return `https://wa.me/${phone}?text=${text}`
}
