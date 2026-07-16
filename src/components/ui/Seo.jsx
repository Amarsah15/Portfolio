import { siteConfig } from "@/data/siteConfig";

/**
 * Reusable per-route SEO: title, description, canonical, OG/Twitter tags,
 * and optional JSON-LD structured data.
 */
export default function Seo({ title, description, path = "/", image, jsonLd, noindex = false }) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = `${siteConfig.url}${image || siteConfig.ogImage}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {siteConfig.googleSiteVerification && (
        <meta name="google-site-verification" content={siteConfig.googleSiteVerification} />
      )}
      {siteConfig.bingSiteVerification && (
        <meta name="msvalidate.01" content={siteConfig.bingSiteVerification} />
      )}
      {noindex && <meta name="robots" content="noindex" />}

      {/* Author info */}
      <meta name="author" content={siteConfig.name} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {siteConfig.twitterHandle && <meta name="twitter:site" content={siteConfig.twitterHandle} />}
      {siteConfig.twitterHandle && <meta name="twitter:creator" content={siteConfig.twitterHandle} />}

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  );
}
