'use client';

import { useMemo, useState } from 'react';
import { CreditCard } from './types';
import { CreditCardItem } from './CreditCardItem';

interface Props {
  cards: CreditCard[];
}

const types = ['Todos', 'Imóvel', 'Veículo', 'Pesados', 'Serviços'] as const;

export function CardsList({ cards }: Props) {
  const [selectedType, setSelectedType] = useState<(typeof types)[number]>('Todos');
  const [maxValue, setMaxValue] = useState<number>(1000000);

  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      const typeMatches = selectedType === 'Todos' || card.type === selectedType;
      const valueMatches = card.creditValue <= maxValue;
      return typeMatches && valueMatches;
    });
  }, [cards, selectedType, maxValue]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 rounded-2xl bg-brand-light p-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-navy">
          Filtrar por tipo
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value as (typeof types)[number])}
            className="w-full rounded-lg border border-brand-navy/20 bg-white px-3 py-2"
          >
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-brand-navy">
          Valor máximo de crédito: R$ {maxValue.toLocaleString('pt-BR')}
          <input
            type="range"
            min={50000}
            max={1000000}
            step={10000}
            value={maxValue}
            onChange={(event) => setMaxValue(Number(event.target.value))}
            className="w-full accent-brand-gold"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCards.map((card) => (
          <CreditCardItem key={card.id} card={card} />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <p className="rounded-xl bg-brand-light p-6 text-center text-brand-navy">Nenhuma carta encontrada para esse filtro.</p>
      )}
    </div>
  );
}
