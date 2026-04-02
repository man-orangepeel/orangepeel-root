import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Orange Peel — OrangePeel',
  description: 'Engineer. Product builder. Bitcoiner. Building sovereign tools, meaningful clothing, and real-world Bitcoin communities.',
  openGraph: {
    title: 'Orange Peel — OrangePeel',
    description: 'Engineer. Product builder. Bitcoiner.',
    url: 'https://orangepeel.fr',
    siteName: 'orangepeel.fr',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
