import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webster Spacacheri | Portfólio',
  description: 'Portfólio com foco em Back-end, Arquitetura, Data e IA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="portfolio-shell">
          {/* CAMADA DE CONTEÚDO */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  )
}
