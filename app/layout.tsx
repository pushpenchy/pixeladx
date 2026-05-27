import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Pixel ADX | Powering the Future of Intelligent Advertising',
  description: 'Pixel ADX is a next-generation AdTech platform offering AI-powered programmatic advertising, search feed monetization, and real-time analytics.',
  keywords: ['AdTech', 'Programmatic Advertising', 'AI Advertising', 'Media Buying', 'Search Feed Monetization'],
  authors: [{ name: 'Pixel ADX' }],
  openGraph: {
    title: 'Pixel ADX | Powering the Future of Intelligent Advertising',
    description: 'Scale your advertising with AI-powered monetization solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
