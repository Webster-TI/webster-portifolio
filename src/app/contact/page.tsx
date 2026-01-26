// src/app/contact/page.tsx
export const metadata = {
  title: 'Contato | Portfólio',
  description: 'Como falar comigo e ver meus links.',
}

export default function ContactPage() {
  return (
    <main style={styles.main}>
      <section style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Contato</h1>
          <p style={styles.subtitle}>
            Quer conversar sobre oportunidades, freelas ou projetos? Me chama
            por aqui:
          </p>
        </header>

        <div style={styles.grid}>
          <a
            style={styles.card}
            href="mailto:ti.spacacheri@gmail.com"
            aria-label="Enviar email para Webster Spacacheri"
          >
            <h2 style={styles.cardTitle}>Email</h2>
            <p style={styles.cardText}>ti.spacacheri@gmail.com</p>
            <span style={styles.hint}>Clique para enviar</span>
          </a>
          <a
            style={styles.card}
            href="https://github.com/Webster-TI"
            target="_blank"
            rel="noreferrer"
            aria-label="Acessar GitHub de Webster Spacacheri"
          >
            <h2 style={styles.cardTitle}>GitHub</h2>
            <p style={styles.cardText}>github.com/Webster-TI</p>
            <span style={styles.hint}>Ver repositórios</span>
          </a>

          <a
            style={styles.card}
            href="https://www.linkedin.com/in/webster-spacacheri/"
            target="_blank"
            rel="noreferrer"
            aria-label="Acessar LinkedIn de Webster Spacacheri"
          >
            <h2 style={styles.cardTitle}>LinkedIn</h2>
            <p style={styles.cardText}>linkedin.com/in/webster-spacacheri</p>
            <span style={styles.hint}>Abrir perfil</span>
          </a>
        </div>

        <p style={styles.footerNote}>
          Estou aberto a oportunidades, projetos e colaborações.
        </p>
      </section>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  main: { minHeight: '100vh', padding: '48px 20px' },
  container: { maxWidth: 980, margin: '0 auto' },
  header: { marginBottom: 18 },
  title: { fontSize: 36, margin: 0, letterSpacing: -0.5 },
  subtitle: { marginTop: 10, opacity: 0.85, maxWidth: 760, lineHeight: 1.5 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 16,
    marginTop: 18,
  },
  card: {
    textDecoration: 'none',
    color: 'inherit',
    borderRadius: 16,
    padding: 18,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(0,0,0,0.18)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  cardTitle: { margin: 0, fontSize: 18 },
  cardText: { margin: 0, opacity: 0.9 },
  hint: { fontSize: 12, opacity: 0.7, marginTop: 2 },
  footerNote: { marginTop: 18, opacity: 0.8 },
}
