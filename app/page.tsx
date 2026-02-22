import Link from 'next/link';
import properties from '@/data/properties.json';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CountdownOffer } from '@/components/CountdownOffer';
import { PropertyCardItem } from '@/components/PropertyCardItem';
import { PropertyListing } from '@/components/types';

const highlights = [
  'Casas prontas para morar',
  'Plantas residenciais e comerciais',
  'Atendimento consultivo completo',
  'Suporte para comprador e anunciante'
];

const testimonials = [
  {
    name: 'Fernanda A.',
    text: 'Fechei uma casa em 12 dias com suporte impecável. Processo muito claro.'
  },
  {
    name: 'Carlos M.',
    text: 'A vitrine de plantas ajudou a decidir o projeto ideal para meu terreno.'
  },
  {
    name: 'Juliana R.',
    text: 'Atendimento ágil no WhatsApp e proposta sob medida para o meu orçamento.'
  }
];

const faqs = [
  {
    question: 'O login é obrigatório para navegar?',
    answer: 'Não. O login é opcional e serve para uma experiência personalizada e área de anunciante.'
  },
  {
    question: 'Como anunciar uma casa ou planta?',
    answer: 'No modo demonstração, use o Login > Anunciante e acesse o painel de anúncio.'
  },
  {
    question: 'As casas e plantas são reais?',
    answer: 'No momento são dados de demonstração para visualizar como o site ficará em produção.'
  }
];

export default function Home() {
  const featured = (properties as PropertyListing[]).slice(0, 2);

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Portal imobiliário premium</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Casas e Plantas para morar, investir e construir</h1>
            <p className="text-lg text-white/80">
              Encontre oportunidades com visual profissional, atendimento consultivo e jornada de compra simples.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/imoveis" className="rounded-xl bg-brand-gold px-6 py-3 font-semibold text-brand-navy shadow-glow">
                Ver Casas e Plantas
              </Link>
              <Link href="/login" className="rounded-xl border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
                Login Opcional
              </Link>
            </div>
            <p className="text-sm font-medium text-brand-gold">+350 clientes atendidos.</p>
          </div>
          <CountdownOffer />
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Por que escolher a Consórcio Contemplado Brasil</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item} className="rounded-2xl border border-brand-navy/10 bg-brand-light p-5 text-sm font-medium">
              {item}
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold">Oportunidades em destaque</h2>
          <Link href="/imoveis" className="text-sm font-semibold text-brand-navy underline">
            Ver todas
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((item) => (
            <PropertyCardItem key={item.id} item={item} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Depoimentos</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-2xl bg-brand-light p-6">
              <p className="text-sm text-brand-navy/80">“{testimonial.text}”</p>
              <footer className="mt-3 font-semibold text-brand-navy">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-brand-navy/15 bg-white p-4">
              <summary className="cursor-pointer font-semibold">{faq.question}</summary>
              <p className="mt-2 text-sm text-brand-navy/80">{faq.answer}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
