import type { LandingContent } from './types'

export const defaultLandingContent: LandingContent = {
  client: {
    name: 'Tu Marca',
    whatsappNumber: '5491100000000',
    logoUrl: '/logo.svg',
    city: '',
  },
  hero: {
    headline: 'Compra fácil, rápido y seguro',
    subheadline: 'Escríbenos y te asesoramos por WhatsApp',
    ctaText: 'Hablar por WhatsApp',
    ctaMessage: 'Hola, quiero comprar. ¿Me asesoras por favor?',
  },
  socialProof: {
    title: 'Clientes reales',
    subtitle: 'Mira cómo lo usan',
    tiktokLinks: [],
  },
  catalog: {
    title: 'Catálogo',
    subtitle: 'Elige tu producto y te lo gestionamos por WhatsApp.',
    products: [],
  },
  benefits: {
    title: '¿Por qué comprar con nosotros?',
    items: [
      {
        title: 'Respuesta rápida',
        description: 'Te atendemos por WhatsApp en minutos.',
        icon: 'chat',
      },
      {
        title: 'Compra segura',
        description: 'Asesoría clara antes de pagar.',
        icon: 'shield',
      },
      {
        title: 'Entrega ágil',
        description: 'Coordinamos envío sin vueltas.',
        icon: 'delivery',
      },
      {
        title: 'Simple y directo',
        description: 'Sin formularios largos, sin fricción.',
        icon: 'speed',
      },
    ],
  },
  testimonials: {
    title: 'Testimonios',
    items: [],
  },
  finalCta: {
    title: '¿Listo para comprar?',
    subtitle: 'Escríbenos ahora y te ayudamos a elegir.',
    ctaText: 'Escribir por WhatsApp',
    ctaMessage: 'Hola, quiero comprar. ¿Me ayudas a elegir?',
  },
}
