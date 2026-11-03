import { brand, concept } from '../content/pl';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo showTagline />
        <div className="footer__meta">
          <p>© {new Date().getFullYear()} {brand.name}. Warszawa i okolice</p>
          <p className="footer__concept">{concept}</p>
          <a href="#polityka-prywatnosci">Polityka prywatności</a>
        </div>
      </div>
    </footer>
  );
}
