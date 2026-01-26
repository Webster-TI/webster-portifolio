import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Webster Spacacheri | Portfólio',
    template: '%s | Webster Spacacheri',
  },
  description:
    'Portfólio profissional com projetos em Back-end, Front-end e integrações com Data e IA.',
  authors: [{ name: 'Webster Spacacheri' }],
  metadataBase: new URL('https://webster-portifolio.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
