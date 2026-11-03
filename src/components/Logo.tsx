import { brand } from '../content/pl';

type LogoProps = { showTagline?: boolean };

export function Logo({ showTagline = false }: LogoProps) {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="11" fill="currentColor" />
        <path d="M8 24 20 12l12 12" fill="none" stroke="#b6e3c6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="24" r="4" fill="#b6e3c6" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{brand.name}</span>
        {showTagline && <span className="logo__tagline">{brand.tagline}</span>}
      </span>
    </span>
  );
}
