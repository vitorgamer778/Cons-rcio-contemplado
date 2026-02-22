'use client';

import { useMemo, useState } from 'react';
import { PropertyListing } from './types';
import { PropertyCardItem } from './PropertyCardItem';

export function PropertyList({ items }: { items: PropertyListing[] }) {
  const [category, setCategory] = useState<'Todos' | 'Casa' | 'Planta'>('Todos');
  const [maxPrice, setMaxPrice] = useState(1000000);

  const filtered = useMemo(
    () =>
      items.filter(
        (item) => (category === 'Todos' || item.category === category) && item.price <= maxPrice
      ),
    [items, category, maxPrice]
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 rounded-2xl bg-brand-light p-4 sm:grid-cols-2">
        <select value={category} onChange={(e) => setCategory(e.target.value as 'Todos' | 'Casa' | 'Planta')} className="rounded-lg border border-brand-navy/20 px-3 py-2">
          <option>Todos</option>
          <option>Casa</option>
          <option>Planta</option>
        </select>
        <label className="text-sm text-brand-navy">
          Valor máximo: R$ {maxPrice.toLocaleString('pt-BR')}
          <input type="range" min={10000} max={1000000} step={10000} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="mt-2 w-full accent-brand-gold" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">{filtered.map((item) => <PropertyCardItem key={item.id} item={item} />)}</div>
    </div>
  );
}
