import { contacts, telHref } from '../content/pl';
import { Phone } from './Icons';

export function StickyCall() {
  return (
    <a className="sticky-call" href={telHref(contacts.office.phone)} aria-label={`Zadzwoń: ${contacts.office.phone}`}>
      <Phone />
      <span>Zadzwoń</span>
    </a>
  );
}
