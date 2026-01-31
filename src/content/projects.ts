export type Project = {
  slug: string
  title: string
  tagline: string

  problem: string
  solution: string

  /** NOVOS CAMPOS DO CASE */
  overview?: string
  architecture?: string
  decisions?: string[]
  nextSteps?: string[]

  stack: string[]
  highlights: string[]

  featured: boolean
  accent?: 'violet' | 'amber' | 'slate'
  icon: 'sentiment' | 'forum' | 'book' | 'currency' | 'bank'

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

    overview:
      'O SentimentAPI foi desenvolvido para resolver a dificuldade de empresas em analisar grandes volumes de feedbacks textuais de clientes e colaboradores. A análise manual é lenta, subjetiva e não escalável. A proposta do projeto é oferecer uma API centralizada, capaz de receber textos, processar sentimentos automaticamente e devolver resultados padronizados, facilitando a integração com sistemas corporativos.',

    problem:
      'Empresas recebem feedbacks por múltiplos canais, como pesquisas internas, SAC e plataformas digitais, mas não possuem uma forma simples e confiável de identificar rapidamente sentimentos positivos, neutros ou negativos. Além disso, modelos de análise de sentimentos geralmente ficam isolados em ambientes de Data Science, dificultando sua utilização em aplicações de produção.',

    solution:
      'Foi desenvolvida uma arquitetura baseada em serviços desacoplados, onde um back-end em Java atua como camada principal da aplicação e um serviço de Data Science em Python é responsável pela inferência do modelo de sentimentos. A comunicação ocorre via REST API, com contratos bem definidos, permitindo evolução independente de cada serviço.',

    architecture:
      'A arquitetura do SentimentAPI segue o padrão de orquestração por backend. O serviço em Java (Spring Boot) é responsável por validar requisições, padronizar entradas e saídas, tratar exceções e orquestrar a comunicação com o serviço Python. O serviço Python, desenvolvido com FastAPI, foca exclusivamente na inferência do modelo de sentimentos. Ambos os serviços são conteinerizados com Docker, garantindo padronização do ambiente e facilitando execução local e implantação futura.',

    decisions: [
      'Spring Boot foi escolhido pela robustez, maturidade do ecossistema e facilidade de integração com sistemas corporativos.',
      'FastAPI foi utilizado no serviço de Data Science por sua performance, simplicidade e documentação automática.',
      'DTOs foram adotados para desacoplar as camadas e evitar vazamento de detalhes internos.',
      'Tratamento centralizado de exceções melhora a previsibilidade e padronização das respostas da API.',
      'Docker foi utilizado para padronizar o ambiente de execução e facilitar a escalabilidade futura.',
    ],

    nextSteps: [
      'Persistência dos resultados de análise em banco de dados.',
      'Implementação de autenticação e autorização.',
      'Monitoramento e métricas da aplicação.',
      'Suporte a múltiplos idiomas.',
      'Processamento assíncrono com filas.',
    ],

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
      'Integração entre Java e Python',
      'Arquitetura desacoplada por serviços',
      'Contrato de API bem definido',
      'Tratamento centralizado de exceções',
      'Conteinerização com Docker',
    ],

    featured: true,
    accent: 'slate',
    icon: 'sentiment',

    links: {
      github: 'https://github.com/Webster-TI/SentimentAPI',
    },

    seo: {
      title: 'SentimentAPI | API de Análise de Sentimentos',
      description:
        'API REST desenvolvida em Spring Boot integrada a serviço Python para análise automática de sentimentos em textos.',
    },
  },

  {
    slug: 'forumhub',
    title: 'ForumHub',
    tagline: 'API REST para gerenciamento de tópicos em fórum.',

    overview:
      'O ForumHub é uma API REST desenvolvida para gerenciar tópicos e respostas em um fórum, oferecendo endpoints claros, validações de entrada e persistência confiável.',

    problem:
      'Fóruns precisam de uma base sólida para criação, consulta e organização de tópicos, garantindo consistência dos dados e regras claras de negócio.',

    solution:
      'Foi desenvolvida uma API em Spring Boot com arquitetura em camadas, utilizando DTOs para comunicação entre camadas e JPA para persistência em banco de dados relacional.',

    architecture:
      'A aplicação segue uma arquitetura em camadas, separando responsabilidades entre controller, service e repository. Essa abordagem melhora a organização do código e facilita manutenção e evolução.',

    decisions: [
      'Spring Boot foi utilizado para acelerar o desenvolvimento e garantir robustez.',
      'DTOs foram adotados para evitar acoplamento entre API e domínio.',
      'Validação de dados foi aplicada na entrada das requisições.',
    ],

    stack: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'REST API'],

    highlights: [
      'Arquitetura em camadas',
      'Validação de entrada',
      'Persistência com JPA',
    ],

    featured: true,
    accent: 'violet',
    icon: 'forum',

    links: {
      github: 'https://github.com/Webster-TI/ForumHub',
    },

    seo: {
      title: 'ForumHub | API REST com Spring Boot',
      description:
        'API REST desenvolvida em Spring Boot para gerenciamento de tópicos em fórum.',
    },
  },

  {
    slug: 'literalura',
    title: 'LiterAlura',
    tagline: 'Catálogo de livros com integração a API externa.',

    overview:
      'O LiterAlura é uma aplicação que consome dados de uma API externa de livros, normaliza as informações recebidas e persiste os dados em um banco relacional para consultas futuras.',

    problem:
      'Consultas diretas a APIs externas dificultam filtros, persistência local e análises mais avançadas dos dados.',

    solution:
      'Foi desenvolvida uma aplicação Spring Boot que consome uma API externa, converte os dados para o modelo interno da aplicação e armazena as informações em banco de dados.',

    architecture:
      'A aplicação utiliza serviços dedicados para consumo da API externa, conversão de dados e persistência via JPA, mantendo separação clara de responsabilidades.',

    decisions: [
      'Spring Boot foi utilizado para facilitar integração e persistência.',
      'DTOs foram utilizados para mapear os dados da API externa.',
      'Persistência relacional permite consultas mais eficientes.',
    ],

    stack: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'API externa'],

    highlights: [
      'Integração com API externa',
      'Persistência com JPA',
      'Consultas por critérios',
    ],

    featured: true,
    accent: 'amber',
    icon: 'book',

    links: {
      github: 'https://github.com/Webster-TI/Chalenge_LiterAlura',
    },

    seo: {
      title: 'LiterAlura | Catálogo de Livros',
      description:
        'Aplicação Spring Boot integrada a API externa para catalogação de livros.',
    },
  },

  {
    slug: 'conversor-moedas',
    title: 'Conversor de Moedas',
    tagline: 'Aplicação para conversão de moedas com regras de negócio claras.',

    overview:
      'Projeto focado na modelagem de regras de negócio para conversão de moedas, servindo como base para futuras integrações com APIs de câmbio.',

    problem:
      'Conversões manuais de moedas estão sujeitas a erros e não escalam para aplicações reais.',

    solution:
      'Foi desenvolvida uma aplicação em Java com regras de negócio bem definidas para conversão de valores entre moedas.',

    decisions: [
      'Foco em lógica de negócio antes de integrações externas.',
      'Modelagem orientada a objetos para maior clareza.',
    ],

    stack: ['Java', 'POO', 'Regras de Negócio'],

    highlights: [
      'Lógica de conversão bem definida',
      'Código organizado e legível',
      'Base pronta para integração com API externa',
    ],

    featured: false,
    accent: 'slate',
    icon: 'currency',

    links: {
      github: 'https://github.com/Webster-TI/ChallengeConversorDeMoedas',
    },

    seo: {
      title: 'Conversor de Moedas | Projeto Java',
      description: 'Projeto em Java focado em lógica de conversão de moedas.',
    },
  },
]
