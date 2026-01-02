import type { ReactNode } from 'react'

type Testimonial = {
  quote: string
  name: string
  city?: string
  imageUrl?: string
}

export function TestimonialsSection(props: {
  content: {
    title: string
    items: Testimonial[]
  }
}): ReactNode {
  const items = props.content.items ?? []

  return (
    <section className="border-b border-orange-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {props.content.title}
          </h2>
        </div>

        {items.length === 0 ? (
          <p className="mt-6 text-sm text-slate-600">
            Agrega testimonios desde el CMS para mostrarlos aquí.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t, idx) => (
              <figure
                key={`${t.name}-${idx}`}
                className="rounded-2xl border border-orange-200 bg-white p-4"
              >
                <blockquote className="text-sm text-slate-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  {t.imageUrl ? (
                    <img
                      src={t.imageUrl}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-slate-200" aria-hidden="true" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    {t.city ? (
                      <p className="text-xs text-slate-600">{t.city}</p>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
