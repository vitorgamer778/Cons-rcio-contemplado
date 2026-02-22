import type { Metadata } from 'next';
import properties from '@/data/properties.json';
import { PropertyList } from '@/components/PropertyList';
import { PropertyListing } from '@/components/types';

export const metadata: Metadata = {
  title: 'Casas e Plantas',
  description: 'Veja casas e plantas disponíveis para compra e investimento.'
};

export default function ImoveisPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-brand-navy">Casas e Plantas à venda</h1>
      <p className="text-brand-navy/80">Selecione o tipo e valor para encontrar oportunidades ideais para seu projeto.</p>
      <PropertyList items={properties as PropertyListing[]} />
    </div>
  );
}
