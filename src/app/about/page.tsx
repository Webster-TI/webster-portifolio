import Link from 'next/link'
import Container from '@/components/Container'

export const metadata = {
  title: 'Sobre',
  description:
    'Sobre Webster Spacacheri: foco em Back-end com Spring Boot, APIs, arquitetura e entrega ponta a ponta.',
}

export default function AboutPage() {
  return (
    <main className="py-16">
      <Container>
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold">Sobre</h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Eu desenvolvo soluções com foco em produto, arquitetura limpa e
            entrega ponta a ponta — do domínio e regras de negócio até o deploy.
          </p>
        </header>

        <section className="pt-10 grid gap-4 lg:grid-cols-3">
          <article className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Minha abordagem</h2>

            <div className="pt-4 space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Gosto de construir APIs bem definidas, com validações,
                tratamento consistente de erros, logging e separação clara de
                camadas. Em projetos com necessidade real, faço integrações com
                serviços externos e componentes de dados/IA.
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
                className="inline-flex items-center rounded-xl px-4 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition"
                aria-label="Ir para a página de projetos"
              >
                Ver projetos →
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-4 py-2 border border-neutral-200 bg-white/70 text-sm font-medium hover:bg-white transition"
                aria-label="Ir para a página de contato"
              >
                Contato
              </Link>
            </div>
          </article>

          <aside className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Stack</h2>

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
                  className="text-xs rounded-full border border-neutral-200 px-3 py-1 text-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-6 space-y-2 text-sm text-neutral-600">
              <p>
                <span className="font-medium text-neutral-800">
                  Projetos em destaque:
                </span>{' '}
                LiterAlura, ForumHub e SentimentAPI.
              </p>
              <p>
                <span className="font-medium text-neutral-800">
                  Foco atual:
                </span>{' '}
                back-end com boas práticas, documentação e integração entre
                serviços.
              </p>
            </div>
          </aside>
        </section>
      </Container>
    </main>
  )
}
