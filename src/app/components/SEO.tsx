import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  structuredData?: any;
}

export function generateMetadata({
  title,
  description,
  keywords = '',
  canonicalUrl,
  ogImage = '/images/icons/syntax-logo-og.jpg',
  ogType = 'website'
}: SEOProps): Metadata {
  const baseUrl = 'https://syntax-institut.de';
  const fullTitle = title.includes('Syntax Institut') ? title : `${title} | Syntax Institut`;
  
  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl,
      siteName: 'Syntax Institut',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'de_DE',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export function generateStructuredData(type: 'organization' | 'course' | 'article', data: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'organization':
      return {
        ...baseStructuredData,
        '@type': 'Organization',
        name: 'Syntax Institut',
        url: 'https://syntax-institut.de',
        logo: 'https://syntax-institut.de/images/icons/syntax-logo-light.svg',
        description: 'AZAV-zertifizierte IT-Weiterbildungen mit Bildungsgutschein. Web Development, App Development, Linux & Cloud Engineering.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'DE',
          addressLocality: 'Berlin',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+49-30-12345678',
          contactType: 'customer service',
          availableLanguage: 'German'
        },
        sameAs: [
          'https://www.linkedin.com/company/syntax-institut',
          'https://www.xing.com/companies/syntaxinstitut'
        ]
      };

    case 'course':
      return {
        ...baseStructuredData,
        '@type': 'Course',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: 'Syntax Institut',
          url: 'https://syntax-institut.de'
        },
        educationalLevel: 'Professional',
        courseMode: 'full-time',
        duration: data.duration || 'P6M',
        inLanguage: 'de',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          description: '100% gefördert mit Bildungsgutschein',
          availability: 'https://schema.org/InStock'
        }
      };

    case 'article':
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'Syntax Institut'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Syntax Institut',
          logo: {
            '@type': 'ImageObject',
            url: 'https://syntax-institut.de/images/icons/syntax-logo-light.svg'
          }
        },
        datePublished: data.datePublished || new Date().toISOString(),
        dateModified: data.dateModified || new Date().toISOString()
      };

    default:
      return baseStructuredData;
  }
}

interface StructuredDataProps {
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
} 