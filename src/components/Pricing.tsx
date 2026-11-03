import { pricing } from '../content/pl';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';

export function Pricing() {
  return (
    <section className="section" id="cennik" aria-labelledby="cennik-title">
      <div className="container pricing">
        <SectionHead eyebrow={pricing.eyebrow} id="cennik-title" title={pricing.title} text={pricing.note} />
        <Reveal index={2}>
          <div className="bezel">
            <div className="bezel__core pricing__core">
              <table>
                <caption className="sr-only">Cennik serwisu</caption>
                <thead><tr><th scope="col">Usługa</th><th scope="col">Cena</th></tr></thead>
                <tbody>
                  {pricing.rows.map((r) => (
                    <tr key={r.service}><th scope="row">{r.service}</th><td>{r.price}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
