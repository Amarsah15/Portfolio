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
      {noindex && <meta name="robots" content="noindex" />}

      {/* Developer / Author info */}
      <meta name="author" content={siteConfig.name} />
      <meta name="developer" content={siteConfig.name} />
      <meta name="designer" content={siteConfig.name} />
      <meta name="developer:email" content={siteConfig.email} />
      <meta name="developer:github" content={siteConfig.github} />
      <meta name="developer:linkedin" content={siteConfig.linkedin} />
      <meta name="developer:role" content="Full Stack Developer, Creative Frontend Developer, Creative Backend Developer" />
      <link rel="author" href={siteConfig.url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  );
}
