import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gold Sky — Ótica e Joalheria',
    template: '%s | Gold Sky',
  },
  description:
    'Joias e óculos selecionados para momentos únicos. Elegância que dura para sempre na Gold Sky — Ótica e Joalheria.',
  keywords: [
    'joalheria',
    'ótica',
    'joias',
    'óculos',
    'anéis',
    'brincos',
    'colares',
    'pulseiras',
    'alianças',
    'Gold Sky',
  ],
  authors: [{ name: 'Gold Sky' }],
  creator: 'Gold Sky',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://goldsky.com.br',
    siteName: 'Gold Sky — Ótica e Joalheria',
    title: 'Gold Sky — Ótica e Joalheria',
    description:
      'Joias e óculos selecionados para momentos únicos. Elegância que dura para sempre.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gold Sky — Ótica e Joalheria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Sky — Ótica e Joalheria',
    description:
      'Joias e óculos selecionados para momentos únicos. Elegância que dura para sempre.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#2b4a2f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
