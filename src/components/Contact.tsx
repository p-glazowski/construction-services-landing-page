import { contacts, form, hours, telHref } from '../content/pl';
import { submitInquiry } from '../lib/submit';
import { ContactForm } from './ContactForm';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';

const people = [
  contacts.office,
  contacts.hvac,
  contacts.supervision,
];

export function Contact() {
  return (
    <section className="section" id="kontakt" aria-labelledby="kontakt-title">
      <div className="container contact">
        <div>
          <SectionHead eyebrow={form.eyebrow} id="kontakt-title" title={form.title} text={form.text} />
          <Reveal index={3}>
            <ul className="people">
              {people.map((p) => (
                <li key={p.label}>
                  <span className="people__label">{p.label}</span>
                  <a className="people__phone" href={telHref(p.phone)}>{p.phone}</a>
                  <a className="people__email" href={`mailto:${p.email}`}>{p.email}</a>
                </li>
              ))}
            </ul>
            <p className="contact__hours">{hours}</p>
          </Reveal>
        </div>
        <Reveal index={2}>
          <div className="bezel">
            <div className="bezel__core form-core"><ContactForm onSubmit={submitInquiry} /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
