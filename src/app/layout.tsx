import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { StructuredData, generateStructuredData } from './components/SEO'

export const metadata: Metadata = {
  title: 'SYNTAX Institut - IT Weiterbildungen mit Bildungsgutschein | AZAV-zertifiziert',
  description: 'AZAV-zertifizierte IT-Weiterbildungen mit 100% Förderung: Web Development, App Development, Linux & Cloud Engineering. IHK-Zertifikate. Jetzt kostenlos beraten lassen!',
  keywords: 'IT Weiterbildung, Bildungsgutschein, Web Development, App Development, Linux, Cloud Engineering, AZAV, IHK Zertifikat, Umschulung, Karriere IT',
  metadataBase: new URL('https://syntax-institut.de'),
  alternates: {
    canonical: 'https://syntax-institut.de',
  },
  openGraph: {
    title: 'SYNTAX Institut - IT Weiterbildungen mit Bildungsgutschein',
    description: 'AZAV-zertifizierte IT-Weiterbildungen mit 100% Förderung: Web Development, App Development, Linux & Cloud Engineering. IHK-Zertifikate.',
    url: 'https://syntax-institut.de',
    siteName: 'SYNTAX Institut',
    images: [
      {
        url: '/images/icons/syntax-logo-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SYNTAX Institut - IT Weiterbildungen',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYNTAX Institut - IT Weiterbildungen mit Bildungsgutschein',
    description: 'AZAV-zertifizierte IT-Weiterbildungen mit 100% Förderung. Web Development, App Development, Linux & Cloud Engineering.',
    images: ['/images/icons/syntax-logo-og.jpg'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = generateStructuredData('organization', {});

  return (
    <html lang="de">
      <head>
        <StructuredData data={organizationData} />
      </head>
      <body className="antialiased font-clash-grotesk">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 