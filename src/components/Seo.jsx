import { Helmet } from 'react-helmet-async'

// Canonical origin for the live site. No trailing slash.
export const SITE_URL = 'https://two19labs.in'
export const SITE_NAME = 'Two19 Labs'
const DEFAULT_OG = `${SITE_URL}/og-image.png`

// Official profiles. Drives JSON-LD `sameAs`, which Google uses to tie this site
// to the brand (knowledge panel). TODO: replace with the real profile URLs.
export const SOCIAL_LINKS = [
  'https://www.linkedin.com/company/two19-labs/',
  // 'https://www.instagram.com/two19labs',
  // 'https://twitter.com/two19labs',
]

/** Organization + WebSite structured data. Render once, on the home page. */
export function OrganizationSchema() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: 'two19labs@gmail.com',
      description:
        'Two19 Labs builds custom software, AI-powered workflows, and automation systems from scratch.',
      ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  ]
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

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
