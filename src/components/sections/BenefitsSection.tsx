import type { ReactNode } from 'react'

type Benefit = {
  title: string
  description: string
  icon: 'speed' | 'shield' | 'chat' | 'delivery'
}

function Icon(props: { name: Benefit['icon'] }): ReactNode {
  const common = 'h-5 w-5 text-slate-900'

  switch (props.name) {
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'delivery':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7z" />
          <path d="M7 17a2 2 0 1 0 4 0" />
          <path d="M16 17a2 2 0 1 0 4 0" />
        </svg>
      )
    case 'speed':
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M20 13a8 8 0 1 1-16 0" />
          <path d="M12 3v10l4 2" />
        </svg>
      )
  }
}

export function BenefitsSection(props: {
  content: {
    title: string
    items: Benefit[]
  }
}): ReactNode {
  const items = (props.content.items ?? []).slice(0, 5)

  return (
    <section className="border-b border-orange-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {props.content.title}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-orange-200 bg-white p-4"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-100">
                  <Icon name={item.icon} />
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
