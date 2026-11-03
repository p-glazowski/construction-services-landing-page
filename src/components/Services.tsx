import { services } from '../content/pl';
import { servicePhotos } from '../content/photos';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';
import { ServiceIcon } from './ServiceIcon';

export function Services() {
  return (
    <section className="section" id="uslugi" aria-labelledby="uslugi-title">
      <div className="container">
        <SectionHead
          eyebrow="Usługi"
          id="uslugi-title"
          title={<>Wszystko, czego dom <em>potrzebuje</em></>}
          text="Od klimatyzacji po kostkę brukową. Jedna firma, kilka specjalizacji."
        />
        <div className="bento">
          {services.map((s, i) => (
            <Reveal key={s.id} index={i % 3} className={`bento__cell bento__cell--${s.id}`}>
              <article className="bezel bento__shell">
                <div className="bezel__core bento__card">
                  <img className="bento__photo" src={servicePhotos[s.id].src} alt={servicePhotos[s.id].alt} loading="lazy" width={1000} height={700} />
                  <div className="bento__body">
                    <span className="bento__icon"><ServiceIcon id={s.id} /></span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a className="bento__link" href="#kontakt">Zapytaj o {s.title.toLowerCase()}</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
