import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <Link href="/" className="font-semibold text-lg">
        Webster.dev
      </Link>

      <nav className="flex gap-6 text-neutral-700">
        <Link href="/about">Sobre</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </div>
  )
}
