import Navbar from '@/components/Navbar'
import { BgWaves } from '@/assets/BgWaves'

type PageShellProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

export default function PageShell({
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <main className="relative overflow-hidden">
      {/* BACKGROUND WAVES */}
      <BgWaves className="absolute inset-0 -z-10" />

      {/* CONTENT */}
      <div className="portfolio-shell px-6 py-24">
        <section className="mx-auto max-w-6xl">
          <Navbar />

          {(title || description) && (
            <header className="mt-24 max-w-3xl glass-card rounded-3xl p-10">
              {title && (
                <h1 className="text-4xl font-semibold text-[color:var(--ink)]">
                  {title}
                </h1>
              )}

              {description && (
                <p className="mt-4 text-lg text-[color:var(--ink-muted)]">
                  {description}
                </p>
              )}
            </header>
          )}

          {/* PAGE CONTENT */}
          <div className="mt-16">{children}</div>
        </section>
      </div>
    </main>
  )
}
