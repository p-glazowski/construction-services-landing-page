import { stripItems } from '../content/pl';

export function ServiceStrip() {
  const items = [...stripItems, ...stripItems];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip__track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
