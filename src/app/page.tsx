// src/app/page.tsx
import Link from 'next/link'
import PageShell from '@/components/PageShell'

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO CARD */}
      <section className="max-w-3xl glass-card rounded-3xl p-12">
        <h1 className="text-5xl font-semibold text-[color:var(--ink)]">
          Webster — Portfólio
        </h1>

        <p className="mt-6 text-lg text-[color:var(--ink-muted)]">
          Engenharia de Software · Back-end · Data & IA
        </p>

        <p className="mt-4 text-[color:var(--ink-muted)] max-w-xl">
          Desenvolvimento de soluções com foco em arquitetura limpa, decisões
          técnicas bem fundamentadas e entrega de produto real.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/projects"
            className="
              rounded-xl
              bg-[color:var(--violet)]
              px-6 py-3
              font-semibold
              text-white
              shadow-lg
              hover:opacity-90
              transition
            "
          >
            Ver projetos
          </Link>

          <Link
            href="/contact"
            className="
              rounded-xl
              glass-card
              px-6 py-3
              font-semibold
              hover:shadow-xl
              transition
            "
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
