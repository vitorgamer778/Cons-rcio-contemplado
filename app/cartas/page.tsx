import type { Metadata } from 'next';
import cards from '@/data/cards.json';
import { CardsList } from '@/components/CardsList';
import { CreditCard } from '@/components/types';

export const metadata: Metadata = {
  title: 'Cartas Disponíveis',
  description: 'Consulte cartas contempladas disponíveis por tipo de crédito, valor e entrada.'
};

export default function CartasPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-brand-navy">Cartas Disponíveis</h1>
      <p className="max-w-3xl text-brand-navy/80">
        Explore opções de crédito contemplado para imóveis, veículos, pesados e serviços com filtros rápidos.
      </p>
      <CardsList cards={cards as CreditCard[]} />
    </div>
  );
}
