import { PropertyListing } from './types';
import { formatCurrency } from './utils';

export function PropertyCardItem({ item }: { item: PropertyListing }) {
  return (
    <article className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-navy">{item.category}</span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === 'Disponível' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
          {item.status}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-bold text-brand-navy">{item.title}</h3>
      <p className="mt-1 text-sm text-brand-navy/70">{item.location}</p>
      <p className="mt-4 text-2xl font-bold text-brand-gold">{formatCurrency(item.price)}</p>
      <div className="mt-4 flex gap-4 text-sm text-brand-navy/80">
        <span>{item.area} m²</span>
        <span>{item.bedrooms > 0 ? `${item.bedrooms} quartos` : 'Projeto sem quartos'}</span>
      </div>
      <button className="mt-5 w-full rounded-xl bg-brand-navy px-4 py-3 font-semibold text-white">Solicitar Proposta</button>
    </article>
  );
}
