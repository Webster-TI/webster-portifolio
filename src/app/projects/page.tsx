import Link from 'next/link'
import Container from '@/components/Container'
import { projects } from '@/content/projects'

export const metadata = {
  title: 'Projetos',
  description: 'Lista de projetos e cases técnicos do portfólio.',
}

export default function ProjectsPage() {
  return (
    <main className="py-16">
      <Container>
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold">Projetos</h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Cases técnicos com foco em arquitetura, decisões de engenharia e
            entrega de produto.
          </p>
        </header>

        <section className="pt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-neutral-600">{p.tagline}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs rounded-full border border-neutral-200 px-3 py-1 text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 flex flex-wrap gap-3 items-center">
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center rounded-xl px-4 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition"
                  aria-label={`Ver case do projeto ${p.title}`}
                >
                  Ver case →
                </Link>

                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-neutral-800 hover:text-neutral-950"
                  aria-label={`Abrir GitHub do projeto ${p.title}`}
                >
                  GitHub
                </a>
              </div>

              <p className="pt-4 text-sm text-neutral-600">
                {p.seo.description}
              </p>
            </article>
          ))}
        </section>
      </Container>
    </main>
  )
}
