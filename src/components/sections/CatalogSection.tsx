import type { ReactNode } from 'react'
import { WhatsAppButton } from '../ui/WhatsAppButton'

type Product = {
  id: string
  name: string
  price: string
  benefit: string
  imageUrl: string
  active: boolean
}

export function CatalogSection(props: {
  content: {
    title: string
    subtitle: string
    products: Product[]
  }
  whatsappNumber: string
}): ReactNode {
  const products = (props.content.products ?? []).filter((p) => p.active)

  return (
    <section className="border-b border-orange-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {props.content.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {props.content.subtitle}
          </p>
        </div>

        {products.length === 0 ? (
          <p className="mt-6 text-sm text-slate-600">
            No hay productos activos todavía. Actívalos desde el CMS.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const message = `Hola, quiero comprar ${product.name}`

              return (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-2xl border border-orange-200 bg-white"
                >
                  <div className="bg-slate-50">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-slate-900">
                        {product.name}
                      </h3>
                      <p className="shrink-0 text-base font-bold text-slate-900">
                        {product.price}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {product.benefit}
                    </p>

                    <div className="mt-4">
                      <WhatsAppButton
                        phone={props.whatsappNumber}
                        message={message}
                        ariaLabel={`Comprar ${product.name} por WhatsApp`}
                        className="flex w-full items-center justify-center rounded-xl bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
                      >
                        Comprar por WhatsApp
                      </WhatsAppButton>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
