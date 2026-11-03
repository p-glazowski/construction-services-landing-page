import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadProps = { eyebrow: string; title: ReactNode; text?: string; id?: string };

export function SectionHead({ eyebrow, title, text, id }: SectionHeadProps) {
  return (
    <div className="section-head">
      <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
      <Reveal index={1}><h2 id={id}>{title}</h2></Reveal>
      {text && <Reveal index={2}><p className="section-head__text">{text}</p></Reveal>}
    </div>
  );
}
