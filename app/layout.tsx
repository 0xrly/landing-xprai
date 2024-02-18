import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

import { Providers } from './providers'
import { NavbarComponent } from '@/components/NavbarComponent'

import clsx from 'clsx'
import { roboto_mono } from '@/fonts/fonts'

import { Footer } from '@/components/Footer'
import { DividerComponent } from '@/components/DividerComponent'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          roboto_mono.className
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col px-0 h-screen'>
            <NavbarComponent />
            <main className='container mx-auto max-w-full pt-16 flex-grow'>
              {children}
            </main>
            <DividerComponent />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
