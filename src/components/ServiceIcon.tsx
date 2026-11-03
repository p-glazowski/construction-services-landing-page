import type { ServiceId } from '../content/pl';

const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export function ServiceIcon({ id }: { id: ServiceId }) {
  switch (id) {
    case 'klimatyzacja':
      return (<svg {...common}><rect x="3" y="5" width="18" height="6" rx="2" /><path d="M7 15c0 2-1.5 2-1.5 4M12 15c0 2-1.5 2-1.5 4M17 15c0 2-1.5 2-1.5 4" /></svg>);
    case 'rekuperacja':
      return (<svg {...common}><path d="M4 9h11a3 3 0 1 0-3-3M4 14h15a3 3 0 1 1-3 3M4 19h6" /></svg>);
    case 'pompy':
      return (<svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="12" cy="12" r="4" /><path d="M12 8v8M8 12h8" /></svg>);
    case 'fotowoltaika':
      return (<svg {...common}><path d="M4 8h16l-2 10H6zM9.5 8l-.8 10M14.5 8l.8 10M5 13h14" /><path d="M12 2v2M5 3.5l1.2 1.4M19 3.5l-1.2 1.4" /></svg>);
    case 'kostka':
      return (<svg {...common}><path d="M3 7h8v5H3zM13 7h8v5h-8zM7 14h8v5H7zM17 14h4v5h-4zM3 14h2v5H3z" /></svg>);
    case 'nadzor':
      return (<svg {...common}><path d="M4 20V10l8-6 8 6v10M9 20v-6h6v6M2 20h20" /></svg>);
  }
}
