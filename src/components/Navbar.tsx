import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between">
        <span className="font-semibold">Webster.dev</span>

        <nav className="flex gap-4 text-neutral-700">
          <Link href="#projects">Projetos</Link>
          <Link href="#contact">Contato</Link>
        </nav>
      </div>
    </header>
  )
}
