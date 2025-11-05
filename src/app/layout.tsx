import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import './styles/jni-brand.css'
import Script from 'next/script'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { LoadingProvider } from '@/contexts/loading-context'
import { LoadingOverlay } from '@/components/ui/loading-overlay'
import { PageTransition } from '@/components/ui/page-transition'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'PT Jaminan Nasional Indonesia - Jaminan Kepastian Bisnis Anda',
    template: '%s | PT Jaminan Nasional Indonesia'
  },
  description: 'Solusi terpercaya izin PPIU, PIHK, Akreditasi IATA, dan layanan administrasi bisnis. Pendampingan profesional sejak 2018. Kantor Jakarta Timur. Hubungi: 089620055378',
  keywords: [
    'PPIU',
    'PIHK',
    'Izin Travel',
    'Akreditasi Travel',
    'IATA',
    'Izin Umrah',
    'Izin Haji',
    'Konsultan Pajak',
    'Bank Garansi',
    'Laporan Keuangan',
    'Administrasi Kontraktor',
    'PT Jaminan Nasional Indonesia'
  ],
  authors: [{ name: 'PT Jaminan Nasional Indonesia' }],
  creator: 'PT Jaminan Nasional Indonesia',
  publisher: 'PT Jaminan Nasional Indonesia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'PT Jaminan Nasional Indonesia',
    title: 'PT Jaminan Nasional Indonesia - Solusi Lengkap Izin Travel dan Layanan Bisnis',
    description: 'Pendampingan tenaga ahli berpengalaman untuk izin PPIU, PIHK, Akreditasi, IATA, serta layanan administrasi bisnis. 500+ client puas.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT Jaminan Nasional Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Jaminan Nasional Indonesia - Solusi Lengkap Izin Travel dan Layanan Bisnis',
    description: 'Pendampingan tenaga ahli berpengalaman untuk izin PPIU, PIHK, Akreditasi, IATA, serta layanan administrasi bisnis.',
    images: ['/images/og-image.jpg'],
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
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LoadingProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <LoadingOverlay />
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        </LoadingProvider>
      </body>
    </html>
  )
}