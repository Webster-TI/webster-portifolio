// src/app/contact/page.tsx
import Link from 'next/link'
import PageShell from '@/components/PageShell'

export const metadata = {
  title: 'Contato | Webster',
  description: 'Entre em contato comigo por email, WhatsApp ou redes.',
}

export default function ContactPage() {
  return (
    <PageShell
      title="Contato"
      description="Vamos conversar sobre oportunidades, projetos ou ideias."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ContactCard
          title="Email"
          subtitle="Resposta direta"
          value="ti.spacacheri@gmail.com"
          href="mailto:ti.spacacheri@gmail.com"
          icon="✉️"
        />

        <ContactCard
          title="WhatsApp"
          subtitle="Mensagem rápida"
          value="+55 11 94369-9083"
          href="https://wa.me/5511943699083"
          icon="💬"
          external
        />

        <ContactCard
          title="GitHub"
          subtitle="Código e projetos"
          value="github.com/Webster-TI"
          href="https://github.com/Webster-TI"
          icon="💻"
          external
        />

        <ContactCard
          title="LinkedIn"
          subtitle="Perfil profissional"
          value="linkedin.com/in/webster-spacacheri"
          href="https://www.linkedin.com/in/webster-spacacheri/"
          icon="🔗"
          external
        />
      </div>
    </PageShell>
  )
}

/* ===============================
   CARD COMPONENT
================================ */

type ContactCardProps = {
  title: string
  subtitle: string
  value: string
  href: string
  icon: string
  external?: boolean
}

function ContactCard({
  title,
  subtitle,
  value,
  href,
  icon,
  external,
}: ContactCardProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="
        group
        glass-card
        rounded-3xl
        p-6
        transition
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>

        <h2 className="text-lg font-semibold text-[color:var(--ink)]">
          {title}
        </h2>
      </div>

      <p className="mt-3 text-sm text-[color:var(--ink-muted)]">{subtitle}</p>

      <p className="mt-2 text-[color:var(--ink-muted)]">{value}</p>

      <span className="mt-4 inline-block text-sm font-medium text-[color:var(--violet)]">
        Abrir →
      </span>
    </Link>
  )
}
