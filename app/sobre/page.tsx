import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a empresa e o modelo de venda de casas e plantas.'
};

export default function SobrePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Sobre a empresa</h1>
      <p className="max-w-3xl text-brand-navy/80">A Consórcio Contemplado Brasil está evoluindo para um portal focado em casas e plantas, com vitrine digital e área de anunciantes.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-brand-light p-6"><h2 className="text-xl font-semibold">Missão</h2><p className="mt-2 text-sm">Conectar compradores às melhores casas e plantas.</p></div>
        <div className="rounded-2xl bg-brand-light p-6"><h2 className="text-xl font-semibold">Visão</h2><p className="mt-2 text-sm">Ser uma referência digital em imóveis e projetos.</p></div>
        <div className="rounded-2xl bg-brand-light p-6"><h2 className="text-xl font-semibold">Valores</h2><p className="mt-2 text-sm">Transparência, agilidade e experiência premium.</p></div>
      </div>
    </div>
  );
}
