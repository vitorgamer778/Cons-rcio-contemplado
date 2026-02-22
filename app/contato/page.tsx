import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Solicite sua proposta de consórcio contemplado com atendimento imediato.'
};

export default function ContatoPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Fale com a nossa equipe</h1>
        <p className="text-brand-navy/80">
          Preencha o formulário para receber uma proposta personalizada de carta contemplada.
        </p>
        <Link
          href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20cons%C3%B3rcio%20contemplado"
          target="_blank"
          className="inline-flex rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
        >
          Falar no WhatsApp
        </Link>
      </div>
      <ContactForm />
    </div>
  );
}
