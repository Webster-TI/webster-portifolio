export type Project = {
  slug: 'sentimentapi' | 'forumhub' | 'literalura'
  title: string
  tagline: string
  problem: string
  solution: string
  stack: string[]
  highlights: string[]
  links: {
    github: string
  }
  seo: {
    title: string
    description: string
  }
}

export const projects: Project[] = [
  {
    slug: 'sentimentapi',
    title: 'SentimentAPI',
    tagline:
      'API de análise de sentimentos com integração entre Java e serviço Python.',
    problem:
      'Empresas recebem grandes volumes de feedbacks textuais, tornando inviável a análise manual de sentimentos de forma rápida e padronizada.',
    solution:
      'Foi desenvolvida uma API em Spring Boot responsável por validar requisições, orquestrar o fluxo e integrar com um serviço de Data Science em Python (FastAPI) para inferência do modelo de sentimentos.',
    stack: [
      'Java',
      'Spring Boot',
      'REST API',
      'Python',
      'FastAPI',
      'Docker',
      'Swagger',
    ],
    highlights: [
      'Integração Java + Python',
      'Contrato de API bem definido',
      'Tratamento centralizado de exceções',
      'Documentação automática',
    ],
    links: {
      github: 'https://github.com/Webster-TI/SentimentAPI',
    },
    seo: {
      title: 'SentimentAPI | API de Análise de Sentimentos',
      description:
        'API REST em Spring Boot com integração a serviço Python para análise automática de sentimentos em textos.',
    },
  },
  {
    slug: 'forumhub',
    title: 'ForumHub',
    tagline: 'API REST para gerenciamento de tópicos em fórum.',
    problem:
      'Fóruns precisam de endpoints claros e persistência confiável para criação e consulta de tópicos.',
    solution:
      'API desenvolvida em Spring Boot com arquitetura em camadas, DTOs e persistência via JPA.',
    stack: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'REST'],
    highlights: [
      'Arquitetura em camadas',
      'Validação de entrada',
      'Persistência relacional',
    ],
    links: {
      github: 'https://github.com/Webster-TI/ForumHub',
    },
    seo: {
      title: 'ForumHub | API REST com Spring Boot',
      description:
        'API REST desenvolvida em Spring Boot para gerenciamento de tópicos e respostas em fórum.',
    },
  },
  {
    slug: 'literalura',
    title: 'LiterAlura',
    tagline: 'Catálogo de livros com integração a API externa.',
    problem:
      'A consulta direta a APIs externas dificulta filtros e análises locais.',
    solution:
      'Aplicação Spring Boot que consome API externa, normaliza dados e persiste em banco local.',
    stack: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'API externa'],
    highlights: [
      'Integração com API externa',
      'Persistência com JPA',
      'Consultas por critérios',
    ],
    links: {
      github: 'https://github.com/Webster-TI/Chalenge_LiterAlura',
    },
    seo: {
      title: 'LiterAlura | Catálogo de Livros com Spring Boot',
      description:
        'Aplicação Spring Boot integrada a API externa para catalogação e consulta de livros.',
    },
  },
]
