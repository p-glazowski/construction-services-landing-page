import { financing } from '../content/pl';
import { ArrowUpRight } from './Icons';
import { Reveal } from './Reveal';

export function Financing() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal>
          <div className="panel">
            <div>
              <span className="eyebrow eyebrow--light">{financing.eyebrow}</span>
              <h2>{financing.title}</h2>
            </div>
            <div className="panel__side">
              <p>{financing.text}</p>
              <a className="btn btn--light" href="#kontakt">
                {financing.cta}
                <span className="btn__icon"><ArrowUpRight /></span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
