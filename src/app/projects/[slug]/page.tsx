import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageShell from '@/components/PageShell'
import { projects } from '@/content/projects'

type Props = {
  params: Promise<{ slug: string }>
}

/* ---------- SEO ---------- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

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

/* ---------- SSG ---------- */
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

/* ---------- PAGE ---------- */
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <PageShell title={project.title} description={project.tagline}>
      <section className="space-y-10 max-w-3xl">
        {/* STACK */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                text-sm rounded-full px-3 py-1
                border border-[color:var(--stroke)]
                text-[color:var(--ink-muted)]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINK */}
        <div>
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-1
              text-sm font-medium
              text-[color:var(--violet)]
              hover:underline
            "
          >
            Ver no GitHub →
          </a>
        </div>

        {/* VISÃO GERAL */}
        {project.overview && (
          <article className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Visão geral</h2>
            <p className="pt-3 text-[color:var(--ink-muted)]">
              {project.overview}
            </p>
          </article>
        )}

        {/* PROBLEMA */}
        <article className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-semibold">Problema</h2>
          <p className="pt-3 text-[color:var(--ink-muted)]">
            {project.problem}
          </p>
        </article>

        {/* SOLUÇÃO */}
        <article className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-semibold">Solução</h2>
          <p className="pt-3 text-[color:var(--ink-muted)]">
            {project.solution}
          </p>
        </article>

        {/* ARQUITETURA */}
        {project.architecture && (
          <article className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Arquitetura</h2>
            <p className="pt-3 text-[color:var(--ink-muted)]">
              {project.architecture}
            </p>
          </article>
        )}

        {/* DECISÕES */}
        {project.decisions && (
          <article className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Decisões técnicas</h2>
            <ul className="pt-4 list-disc pl-5 space-y-2 text-[color:var(--ink-muted)]">
              {project.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        )}

        {/* PRÓXIMOS PASSOS */}
        {project.nextSteps && (
          <article className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Próximos passos</h2>
            <ul className="pt-4 list-disc pl-5 space-y-2 text-[color:var(--ink-muted)]">
              {project.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
        )}
      </section>
    </PageShell>
  )
}
