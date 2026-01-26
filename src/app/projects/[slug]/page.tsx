import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import { projects } from '@/content/projects'

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto solicitado não existe.',
    }
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params

  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <main className="py-16">
      <Container>
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold">{project.title}</h1>
          <p className="text-lg text-neutral-600">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm rounded-full border border-neutral-200 px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline"
              aria-label={`Abrir GitHub do projeto ${project.title}`}
            >
              Ver no GitHub →
            </a>
          </div>
        </header>

        <section className="pt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">Problema</h2>
            <p className="pt-2 text-neutral-700">{project.problem}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Solução</h2>
            <p className="pt-2 text-neutral-700">{project.solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Destaques técnicos</h2>
            <ul className="pt-2 list-disc pl-5 space-y-2 text-neutral-700">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </main>
  )
}
