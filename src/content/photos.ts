import hero from '../assets/photos/hero.webp';
import klimatyzacja from '../assets/photos/klimatyzacja.webp';
import rekuperacja from '../assets/photos/rekuperacja.webp';
import pompy from '../assets/photos/pompy.webp';
import fotowoltaika from '../assets/photos/fotowoltaika.webp';
import kostka from '../assets/photos/kostka.webp';
import nadzor from '../assets/photos/nadzor.webp';
import salon from '../assets/photos/salon.webp';
import type { ServiceId } from './pl';

export const heroPhoto = { src: hero, alt: 'Nowoczesny dom o zmierzchu z ciepło oświetlonymi oknami' };
export const showroomPhoto = { src: salon, alt: 'Bruk z kostki brukowej, zbliżenie' };

export const servicePhotos: Record<ServiceId, { src: string; alt: string }> = {
  klimatyzacja: { src: klimatyzacja, alt: 'Jednostka zewnętrzna klimatyzacji na ścianie budynku' },
  rekuperacja: { src: rekuperacja, alt: 'Metalowe przewody wentylacyjne' },
  pompy: { src: pompy, alt: 'Jednostka zewnętrzna pompy ciepła przy ścianie domu' },
  fotowoltaika: { src: fotowoltaika, alt: 'Panele fotowoltaiczne na dachu domu' },
  kostka: { src: kostka, alt: 'Patio wyłożone płytami z meblami ogrodowymi' },
  nadzor: { src: nadzor, alt: 'Szkielet domu w trakcie budowy' },
};
