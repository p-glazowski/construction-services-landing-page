import { contacts, hero, services, telHref } from '../content/pl';
import { heroPhoto } from '../content/photos';
import { ArrowUpRight, Phone } from './Icons';
import { Reveal } from './Reveal';
import { ServiceIcon } from './ServiceIcon';

const highlights = services.filter((s) => ['klimatyzacja', 'pompy', 'fotowoltaika'].includes(s.id));

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__stage">
        <img className="hero__bg" src={heroPhoto.src} alt={heroPhoto.alt} width={2200} height={1466} />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__content">
          <Reveal><span className="eyebrow eyebrow--light">Warszawa i okolice</span></Reveal>
          <Reveal index={1}>
            <h1>
              Komfort w domu <em>przez cały rok.</em>
            </h1>
          </Reveal>
          <Reveal index={2}><p className="hero__text">{hero.text}</p></Reveal>
          <Reveal index={3}>
            <div className="hero__actions">
              <a className="btn btn--light" href="#kontakt">
                {hero.primaryCta}
                <span className="btn__icon"><ArrowUpRight /></span>
              </a>
              <a className="btn btn--glass" href={telHref(contacts.office.phone)}>
                <Phone />
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
        <ul className="hero__tiles">
          {highlights.map((s, i) => (
            <li key={s.id}>
              <Reveal index={i + 3}>
                <a className="tile" href="#uslugi">
                  <span className="tile__icon"><ServiceIcon id={s.id} /></span>
                  <span>{s.title}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
