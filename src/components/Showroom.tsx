import { showroom } from '../content/pl';
import { showroomPhoto } from '../content/photos';
import { ArrowUpRight } from './Icons';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';

export function Showroom() {
  return (
    <section className="section" id="salon" aria-labelledby="salon-title">
      <div className="container showroom">
        <div>
          <SectionHead eyebrow={showroom.eyebrow} id="salon-title" title={showroom.title} text={showroom.text} />
          <Reveal index={3}>
            <address className="showroom__address">
              {showroom.address.map((l) => <span key={l}>{l}</span>)}
            </address>
            <dl className="hours">
              {showroom.hours.map((h) => (
                <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>
              ))}
            </dl>
            <a className="btn btn--primary" href={showroom.mapHref} target="_blank" rel="noopener noreferrer">
              {showroom.mapLabel}
              <span className="btn__icon"><ArrowUpRight /></span>
            </a>
          </Reveal>
        </div>
        <Reveal index={2}>
          <div className="bezel"><div className="bezel__core"><img className="showroom__photo" src={showroomPhoto.src} alt={showroomPhoto.alt} loading="lazy" width={1200} height={900} /></div></div>
        </Reveal>
      </div>
    </section>
  );
}
