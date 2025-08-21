import Link from 'next/link';

export default function NavBar() {
  const menu = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang' },
    { href: '/services', label: 'Layanan' },
    { href: '/portfolio', label: 'Portofolio' },
    { href: '/contact', label: 'Kontak' },
  ];
  return (
    <header className="fixed top-0 w-full backdrop-blur bg-background/70 border-b border-accent/30 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-primary font-bold text-xl">SoftWareHouse</div>
        <ul className="hidden md:flex space-x-8">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
