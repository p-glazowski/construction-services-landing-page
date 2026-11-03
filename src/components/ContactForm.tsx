import { useState, type FormEvent } from 'react';
import { form as copy, services } from '../content/pl';
import type { Inquiry } from '../lib/submit';
import { ArrowUpRight } from './Icons';

type Props = { onSubmit: (data: Inquiry) => Promise<void> };
type Errors = Partial<Record<'name' | 'email' | 'service' | 'message' | 'consent', string>>;
type Status = 'idle' | 'sending' | 'success' | 'error';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: Inquiry, consent: boolean): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = copy.errors.name;
  if (!data.email.trim()) errors.email = copy.errors.emailRequired;
  else if (!EMAIL.test(data.email.trim())) errors.email = copy.errors.emailInvalid;
  if (!data.service) errors.service = copy.errors.service;
  if (!data.message.trim()) errors.message = copy.errors.message;
  if (!consent) errors.consent = copy.errors.consent;
  return errors;
}

export function ContactForm({ onSubmit }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [consent, setConsent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const get = (key: string) => String(fd.get(key) ?? '');
    const data: Inquiry = {
      name: get('name'),
      email: get('email'),
      phone: get('phone'),
      service: get('service'),
      message: get('message'),
    };

    const found = validate(data, consent);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    if (get('website')) return; // honeypot: bots fill hidden fields

    setStatus('sending');
    try {
      await onSubmit(data);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <h3>{copy.successTitle}</h3>
        <p>{copy.successText}</p>
      </div>
    );
  }

  const err = (key: keyof Errors) => (errors[key] ? { 'aria-invalid': true, 'aria-describedby': `${key}-error` } : {});
  const msg = (key: keyof Errors) =>
    errors[key] ? <p className="field__error" id={`${key}-error`} role="alert">{errors[key]}</p> : null;

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">{copy.labels.name} *</label>
        <input id="name" name="name" autoComplete="name" {...err('name')} />
        {msg('name')}
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="email">{copy.labels.email} *</label>
          <input id="email" name="email" type="email" autoComplete="email" {...err('email')} />
          {msg('email')}
        </div>
        <div className="field">
          <label htmlFor="phone">{copy.labels.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">{copy.labels.service} *</label>
        <select id="service" name="service" defaultValue="" {...err('service')}>
          <option value="" disabled>{copy.servicePlaceholder}</option>
          {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
          <option value="inne">Inne</option>
        </select>
        {msg('service')}
      </div>
      <div className="field">
        <label htmlFor="message">{copy.labels.message} *</label>
        <textarea id="message" name="message" rows={5} {...err('message')} />
        {msg('message')}
      </div>
      <div className="hp" aria-hidden="true">
        <label>Nie wypełniaj tego pola<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="field field--check">
        <label>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} {...err('consent')} />
          <span>{copy.consent}</span>
        </label>
        {msg('consent')}
      </div>
      {status === 'error' && <p className="form__error" role="alert">{copy.sendError}</p>}
      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? copy.sending : copy.submit}
        <span className="btn__icon"><ArrowUpRight /></span>
      </button>
      <p className="form__demo">{copy.demoNote}</p>
    </form>
  );
}
