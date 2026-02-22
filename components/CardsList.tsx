'use client';

import { PropertyListing } from './types';
import { CreditCardItem } from './CreditCardItem';

export function CardsList({ cards }: { cards: PropertyListing[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <CreditCardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
