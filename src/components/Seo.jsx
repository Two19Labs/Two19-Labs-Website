import { Helmet } from 'react-helmet-async'

// Canonical origin for the live site. No trailing slash.
export const SITE_URL = 'https://two19labs.in'
export const SITE_NAME = 'Two19 Labs'
const DEFAULT_OG = `${SITE_URL}/og-image.png`

/**
 * Per-route <head>. Renders a unique title, description, canonical URL and a
 * full Open Graph + Twitter card set into the served HTML (captured at
 * prerender time, then kept in sync on the client by react-helmet-async).
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG,
  type = 'website',
}) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const fullTitle =
    path === '/' ? title : `${title} — ${SITE_NAME}`

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
