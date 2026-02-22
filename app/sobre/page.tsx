import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a trajetória, missão e diferenciais da Consórcio Contemplado Brasil.'
};

export default function SobrePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Sobre a empresa</h1>
        <p className="max-w-3xl text-brand-navy/80">
          A Consórcio Contemplado Brasil oferece soluções ágeis para quem busca crédito aprovado com atendimento humanizado e segurança jurídica.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-brand-light p-6">
          <h2 className="text-xl font-semibold">Missão</h2>
          <p className="mt-2 text-sm text-brand-navy/80">Conectar pessoas ao crédito contemplado ideal com ética, clareza e eficiência.</p>
        </article>
        <article className="rounded-2xl bg-brand-light p-6">
          <h2 className="text-xl font-semibold">Visão</h2>
          <p className="mt-2 text-sm text-brand-navy/80">Ser referência nacional em consórcios contemplados de alta conversão e confiança.</p>
        </article>
        <article className="rounded-2xl bg-brand-light p-6">
          <h2 className="text-xl font-semibold">Valores</h2>
          <p className="mt-2 text-sm text-brand-navy/80">Transparência, compromisso com resultado, suporte consultivo e foco no cliente.</p>
        </article>
      </section>

      <section className="rounded-2xl border border-brand-gold/40 bg-white p-8">
        <h2 className="text-2xl font-bold">Diferenciais</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-brand-navy/80">
          <li>Análise personalizada para cada perfil.</li>
          <li>Time especializado com suporte ponta a ponta.</li>
          <li>Opções de crédito para diferentes objetivos.</li>
          <li>Processo seguro, rápido e com documentação orientada.</li>
        </ul>
      </section>
    </div>
  );
}
