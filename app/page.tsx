import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CountdownOffer } from '@/components/CountdownOffer';

const showcases = ['Casas Prontas', 'Plantas Residenciais', 'Plantas Comerciais', 'Consultoria de Compra'];

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Casas e plantas com negociação rápida</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Encontre Casas e Plantas com aprovação facilitada</h1>
            <p className="text-lg text-white/80">A plataforma agora é focada em venda de casas e plantas para morar ou investir.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/imoveis" className="rounded-xl bg-brand-gold px-6 py-3 font-semibold text-brand-navy shadow-glow">Ver Oportunidades</Link>
              <Link href="/login" className="rounded-xl border border-white/40 px-6 py-3 font-semibold">Login Opcional</Link>
            </div>
            <p className="text-sm font-medium text-brand-gold">+350 clientes atendidos.</p>
          </div>
          <CountdownOffer />
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Como funciona</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-brand-navy/10 bg-brand-light p-6"><h3 className="font-semibold">Escolha</h3><p className="mt-2 text-sm">Filtre casas e plantas pelo seu orçamento.</p></article>
          <article className="rounded-2xl border border-brand-navy/10 bg-brand-light p-6"><h3 className="font-semibold">Negocie</h3><p className="mt-2 text-sm">Receba proposta com atendimento consultivo.</p></article>
          <article className="rounded-2xl border border-brand-navy/10 bg-brand-light p-6"><h3 className="font-semibold">Feche</h3><p className="mt-2 text-sm">Conclua a compra com suporte da equipe.</p></article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">O que você encontra</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {showcases.map((s) => <div key={s} className="rounded-2xl border border-brand-gold/30 p-6 text-center">{s}</div>)}
        </div>
      </AnimatedSection>
    </div>
  );
}
