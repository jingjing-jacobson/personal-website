const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/70 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-5 sm:px-8">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="whitespace-nowrap font-serif text-lg tracking-tight text-ink"
        >
          JingJing Jacobson
        </a>
        <nav className="flex items-center gap-4 text-sm text-muted sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
