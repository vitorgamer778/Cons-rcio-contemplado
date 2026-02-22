import { CreditCard } from './types';
import { formatCurrency } from './utils';

interface Props {
  card: CreditCard;
}

export function CreditCardItem({ card }: Props) {
  const statusClass = card.status === 'Disponível' ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-200 text-zinc-700';

  return (
    <article className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand-gold">{card.type}</p>
          <h3 className="text-xl font-bold text-brand-navy">{formatCurrency(card.creditValue)}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}>{card.status}</span>
      </div>

      <dl className="mt-5 space-y-2 text-sm text-brand-navy/80">
        <div className="flex justify-between gap-4">
          <dt>Entrada</dt>
          <dd className="font-medium">{formatCurrency(card.downPayment)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Parcelas</dt>
          <dd className="font-medium">{card.installments}</dd>
        </div>
      </dl>

      <button
        type="button"
        disabled={card.status === 'Vendido'}
        className="mt-5 w-full rounded-xl bg-brand-gold px-4 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-95 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500"
      >
        Solicitar
      </button>
    </article>
  );
}
