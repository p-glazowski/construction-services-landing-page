import { useEffect, useState } from 'react';
import { brand, contacts, nav, telHref } from '../content/pl';
import { Logo } from './Logo';
import { Phone } from './Icons';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="header__pill">
        <a className="wordmark" href="#top" aria-label={`${brand.name} – strona główna`}>
          <Logo />
        </a>
        <nav className="nav" aria-label="Główna nawigacja">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="btn btn--primary" href={telHref(contacts.office.phone)} aria-label={`Zadzwoń: ${contacts.office.phone}`}>
          <Phone />
          <span className="header__phone">{contacts.office.phone}</span>
        </a>
        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className={`menu ${open ? 'is-open' : ''}`} aria-label="Menu" hidden={!open}>
        {nav.map((item, i) => (
          <a key={item.href} href={item.href} style={{ '--i': i } as React.CSSProperties} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
