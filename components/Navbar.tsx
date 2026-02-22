import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/imoveis', label: 'Casas e Plantas' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/login', label: 'Login (Opcional)' },
  { href: '/deploy', label: 'Status Deploy' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-navy/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-white sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-wide text-brand-gold">
          Consórcio Contemplado Brasil
        </Link>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-brand-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
