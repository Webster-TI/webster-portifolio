import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between">
        <Link href="/" className="font-semibold">
          Webster.dev
        </Link>

        <nav className="flex gap-4 text-neutral-700">
          <Link href="/projects" className="hover:underline">
            Projetos
          </Link>
          <Link href="/about" className="hover:underline">
            Sobre
          </Link>
          <Link href="/contact" className="hover:underline">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
