export function extractTikTokVideoId(url: string): string | null {
  const match = url.match(/\/video\/(\d+)/)
  return match?.[1] ?? null
}

export function toTikTokEmbedUrl(url: string): string | null {
  const id = extractTikTokVideoId(url)
  if (!id) return null
  return `https://www.tiktok.com/embed/v2/${id}`
}
