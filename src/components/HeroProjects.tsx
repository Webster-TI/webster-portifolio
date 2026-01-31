import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import { projects } from '@/content/projects'
import { BgWaves } from '@/assets/BgWaves'

export default function HeroProjects() {
  return (
    <section className="relative overflow-hidden">
      {/* SVG BACKGROUND */}
      <BgWaves className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8 pb-24">
        <Navbar />

        <div className="mt-24 text-center">
          <h1 className="text-5xl font-semibold">
            Meus Projetos
            <span className="block mx-auto mt-2 h-1 w-32 bg-amber-400 rounded-full" />
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600">
            Cases técnicos com foco em arquitetura, decisões de engenharia e
            entrega de produto.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
