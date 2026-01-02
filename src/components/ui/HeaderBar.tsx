import type { ReactNode } from 'react'

export function HeaderBar(props: {
  brandName: string
  logoUrl?: string
}): ReactNode {
  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        {props.logoUrl ? (
          <img
            src={props.logoUrl}
            alt={props.brandName}
            width={32}
            height={32}
            decoding="async"
            className="h-8 w-8 rounded-lg"
          />
        ) : (
          <div
            className="grid h-8 w-8 place-items-center rounded-lg bg-orange-100 text-sm font-extrabold text-orange-700"
            aria-hidden="true"
          >
            {props.brandName.slice(0, 1).toUpperCase()}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            {props.brandName}
          </p>
          <p className="truncate text-xs text-slate-600">Compra por WhatsApp</p>
        </div>
      </div>
    </header>
  )
}
