import Link from 'next/link'
import PageShell from '@/components/PageShell'

export const metadata = {
  title: 'Sobre',
  description:
    'Sobre Webster Spacacheri: foco em Back-end com Spring Boot, APIs, arquitetura e entrega ponta a ponta.',
}

export default function AboutPage() {
  return (
    <PageShell
      title="Sobre"
      description="Foco em produto, arquitetura limpa e entrega ponta a ponta."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        {/* MAIN CARD */}
        <article className="lg:col-span-2 glass-card rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-[color:var(--ink)]">
            Minha abordagem
          </h2>

          <div className="pt-4 space-y-4 text-[color:var(--ink-muted)] leading-relaxed">
            <p>
              Gosto de construir APIs bem definidas, com validações, tratamento
              consistente de erros, logging e separação clara de camadas. Em
              projetos com necessidade real, faço integrações com serviços
              externos e componentes de dados/IA.
            </p>

            <p>
              Meu objetivo é entregar um sistema que seja fácil de manter:
              código limpo, estrutura previsível, boas práticas e documentação
              suficiente para alguém da equipe entender e evoluir o projeto.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-xl px-5 py-2.5
                         bg-[color:var(--violet)] text-white text-sm font-medium
                         hover:opacity-90 transition"
              aria-label="Ir para a página de projetos"
            >
              Ver projetos →
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-2.5
                         glass-card text-sm font-medium
                         hover:shadow-lg transition"
              aria-label="Ir para a página de contato"
            >
              Contato
            </Link>
          </div>
        </article>

        {/* ASIDE CARD */}
        <aside className="glass-card rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-[color:var(--ink)]">
            Stack
          </h2>

          <div className="pt-4 flex flex-wrap gap-2">
            {[
              'Java',
              'Spring Boot',
              'JPA / Hibernate',
              'PostgreSQL',
              'REST APIs',
              'Spring Security / JWT',
              'Docker',
              'Next.js',
            ].map((item) => (
              <span
                key={item}
                className="text-xs rounded-full px-3 py-1
                           border border-[color:var(--stroke)]
                           text-[color:var(--ink-muted)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="pt-6 space-y-2 text-sm text-[color:var(--ink-muted)]">
            <p>
              <span className="font-medium text-[color:var(--ink)]">
                Projetos em destaque:
              </span>{' '}
              LiterAlura, ForumHub e SentimentAPI.
            </p>

            <p>
              <span className="font-medium text-[color:var(--ink)]">
                Foco atual:
              </span>{' '}
              back-end com boas práticas, documentação e integração entre
              serviços.
            </p>
          </div>
        </aside>
      </section>
    </PageShell>
  )
}
