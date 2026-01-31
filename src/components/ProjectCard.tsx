import Link from 'next/link'
import type { Project } from '@/content/projects'

import {
  SentimentIcon,
  ForumIcon,
  BookIcon,
  CurrencyIcon,
  BankIcon,
} from '@/assets/icons'

/**
 * Mapeamento de ícones por TIPO de projeto
 * - tipado
 * - sem any
 * - escalável
 */
const iconMap: Record<
  Project['icon'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  sentiment: SentimentIcon,
  forum: ForumIcon,
  book: BookIcon,
  currency: CurrencyIcon,
  bank: BankIcon,
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon]

  return (
    <article className="group rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden transition">
      {/* HEADER */}
      <div className="relative h-28">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            project.accent === 'violet'
              ? 'from-violet-500 to-violet-300'
              : project.accent === 'amber'
                ? 'from-amber-600 to-amber-400'
                : 'from-slate-700 to-slate-500'
          }`}
        />

        <div className="absolute left-6 bottom-4 flex items-center gap-3 text-white">
          {/* ÍCONE */}
          <Icon
            className="
              h-10 w-10
              transition-transform duration-300 ease-out
              group-hover:scale-110
              group-hover:-rotate-3
            "
          />

          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
      </div>

      {/* BODY */}
      <div className="p-6">
        <p className="text-neutral-700">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 rounded-xl bg-amber-400 px-4 py-3 text-center font-semibold"
          >
            Ver case
          </Link>

          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl bg-violet-600 px-4 py-3 text-center font-semibold text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
