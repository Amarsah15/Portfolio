import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/data/siteConfig";

/**
 * Reusable per-route SEO: title, description, canonical, OG/Twitter tags,
 * and optional JSON-LD structured data.
 */
export default function Seo({ title, description, path = "/", image, jsonLd, noindex = false }) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = `${siteConfig.url}${image || siteConfig.ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
