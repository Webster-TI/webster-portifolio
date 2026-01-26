// src/app/projects/data.ts
export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'sentiment-dashboard',
    title: 'Sentiment Analysis Platform',
    subtitle: 'Dashboard + API + Data Science em containers',
    description:
      'Plataforma full-stack para análise de sentimentos com dashboard e API, integrando pipeline de processamento, persistência e serviço de predição.',
    tags: ['Next.js', 'Spring Boot', 'FastAPI', 'Docker', 'PostgreSQL'],
    highlights: [
      'Integração entre Back-end e serviço de Data Science',
      'Dashboard com indicadores e navegação por casos',
      'Persistência e rastreabilidade (logs) das análises',
    ],
    githubUrl: 'https://github.com/Webster-TI/webster-portifolio',
    liveUrl: 'https://webster-portifolio.vercel.app/',
  },
  // ✅ Adicione mais projetos copiando o bloco acima
]
