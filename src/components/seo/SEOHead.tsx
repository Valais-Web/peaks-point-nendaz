import { Helmet } from 'react-helmet-async';
import { Language } from '@/lib/i18n';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  lang: Language;
  alternateUrl?: string;
  keyword?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  lang, 
  alternateUrl,
  keyword 
}: SEOHeadProps) => {
  const baseUrl = 'https://peakspoint.ch';
  const fullCanonical = `${baseUrl}${canonicalUrl}`;
  const fullAlternate = alternateUrl ? `${baseUrl}${alternateUrl}` : undefined;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keyword && <meta name="keywords" content={keyword} />}
      
      <link rel="canonical" href={fullCanonical} />
      
      {fullAlternate && (
        <link 
          rel="alternate" 
          hrefLang={lang === 'fr' ? 'en' : 'fr'} 
          href={fullAlternate} 
        />
      )}
      <link rel="alternate" hrefLang={lang} href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/fr`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_CH' : 'en_GB'} />
      <meta property="og:site_name" content="Peaks Point" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Geo */}
      <meta name="geo.region" content="CH-VS" />
      <meta name="geo.placename" content="Nendaz" />
    </Helmet>
  );
};
