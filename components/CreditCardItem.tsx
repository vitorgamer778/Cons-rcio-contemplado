import { PropertyListing } from './types';
import { formatCurrency } from './utils';

export function CreditCardItem({ card }: { card: PropertyListing }) {
  return (
    <article className="rounded-xl border border-brand-navy/10 bg-white p-4">
      <p className="text-sm text-brand-navy/70">{card.category}</p>
      <h3 className="font-bold text-brand-navy">{card.title}</h3>
      <p className="text-brand-gold">{formatCurrency(card.price)}</p>
    </article>
  );
}
