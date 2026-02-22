import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CountdownOffer } from '@/components/CountdownOffer';

const segments = ['Imóveis', 'Veículos', 'Pesados', 'Serviços'];

const testimonials = [
  {
    name: 'Marina Oliveira',
    text: 'Consegui minha carta de imóvel com suporte total. Atendimento impecável!'
  },
  {
    name: 'Rodrigo Lima',
    text: 'Processo rápido e transparente. Em poucos dias fechei meu consórcio contemplado.'
  },
  {
    name: 'Sueli Costa',
    text: 'Equipe atenciosa e ótima proposta. Recomendo para quem quer crédito imediato.'
  }
];

const faqs = [
  {
    question: 'O que é uma carta contemplada?',
    answer: 'É uma carta de crédito já contemplada, pronta para uso imediato após análise documental.'
  },
  {
    question: 'Posso usar para investir?',
    answer: 'Sim. Há opções para aquisição de bens, capital de giro e investimentos em diferentes segmentos.'
  },
  {
    question: 'Em quanto tempo consigo utilizar o crédito?',
    answer: 'Após validação e assinatura, a liberação ocorre em prazo curto conforme administradora.'
  }
];

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Crédito imediato</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Consórcio Contemplado com Liberação Imediata</h1>
            <p className="text-lg text-white/80">Crédito já aprovado para imóveis, veículos e investimentos.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contato" className="rounded-xl bg-brand-gold px-6 py-3 font-semibold text-brand-navy shadow-glow transition hover:brightness-95">
                Quero Minha Carta Contemplada
              </Link>
              <Link
                href="https://wa.me/5511999999999?text=Quero%20uma%20proposta%20de%20cons%C3%B3rcio%20contemplado"
                target="_blank"
                className="rounded-xl border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </Link>
            </div>
            <p className="text-sm font-medium text-brand-gold">+350 clientes atendidos com alto índice de aprovação.</p>
          </div>
          <CountdownOffer />
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Como funciona o consórcio contemplado</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['O que é', 'Como funciona', 'Vantagens'].map((item, index) => (
            <article key={item} className="rounded-2xl border border-brand-navy/10 bg-brand-light p-6">
              <h3 className="text-lg font-semibold text-brand-navy">{item}</h3>
              <p className="mt-2 text-sm text-brand-navy/80">
                {index === 0 && 'Carta já contemplada e pronta para transferir crédito com segurança.'}
                {index === 1 && 'Você escolhe a carta ideal, envia documentos e conclui com acompanhamento consultivo.'}
                {index === 2 && 'Acesso rápido ao crédito, previsibilidade financeira e melhores oportunidades.'}
              </p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Segmentos atendidos</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <div key={segment} className="rounded-2xl border border-brand-gold/30 bg-white p-6 text-center shadow-sm">
              <p className="font-semibold text-brand-navy">{segment}</p>
            </div>
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
        <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
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
