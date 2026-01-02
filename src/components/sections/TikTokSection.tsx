import type { ReactNode } from 'react'
import { toTikTokEmbedUrl } from '../../lib/tiktok'

export function TikTokSection(props: {
  content: {
    title: string
    subtitle: string
    tiktokLinks: string[]
  }
}): ReactNode {
  const links = (props.content.tiktokLinks ?? []).slice(0, 6)

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

        {links.length === 0 ? (
          <div className="mt-6">
            <p className="text-sm text-slate-600">
              Agrega hasta 6 links de TikTok en el CMS para mostrar los videos aquí.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex aspect-[9/16] items-center justify-center rounded-2xl border border-orange-200 bg-white"
                >
                  <p className="px-6 text-center text-sm font-semibold text-slate-700">
                    Video {idx + 1}
                    <br />
                    <span className="text-xs font-normal text-slate-500">
                      (se carga desde link)
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((url) => {
              const embedUrl = toTikTokEmbedUrl(url)

              return (
                <div
                  key={url}
                  className="overflow-hidden rounded-2xl border border-orange-200 bg-white"
                >
                  {embedUrl ? (
                    <iframe
                      title="Video de TikTok"
                      src={embedUrl}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="aspect-[9/16] w-full"
                      allow="encrypted-media; clipboard-write;"
                    />
                  ) : (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex aspect-[9/16] w-full items-center justify-center bg-orange-50 px-6 text-center text-sm font-semibold text-slate-700"
                    >
                      Ver video en TikTok
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
