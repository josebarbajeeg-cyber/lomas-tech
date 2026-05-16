import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../config/siteConfig';
import { JsonLd } from './JsonLd';

export type SEOProps = {
  /** Document title — becomes <title> and og:title / twitter:title. */
  title: string;
  /** Meta description — becomes <meta name="description"> and og/twitter equivalents. */
  description: string;
  /** Path (e.g. "/catalog") or full URL. If a path, SITE_URL is prepended. */
  canonical?: string;
  /** OG image URL. Defaults to DEFAULT_OG_IMAGE. */
  image?: string;
  /** If true, emits <meta name="robots" content="noindex,follow">. */
  noindex?: boolean;
  /** JSON-LD object or array of objects. Each rendered in its own <script>. */
  schema?: object | object[];
};

function resolveCanonical(canonical?: string): string | undefined {
  if (!canonical) return undefined;
  if (/^https?:\/\//i.test(canonical)) return canonical;
  const path = canonical.startsWith('/') ? canonical : `/${canonical}`;
  return `${SITE_URL}${path}`;
}

export function SEO({
  title,
  description,
  canonical,
  image,
  noindex,
  schema,
}: SEOProps) {
  const canonicalUrl = resolveCanonical(canonical);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
        {noindex ? (
          <meta name="robots" content="noindex,follow" />
        ) : null}

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}

        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {schema ? <JsonLd data={schema} /> : null}
    </>
  );
}

export default SEO;
