'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState<'cliente' | 'anunciante'>('cliente');

  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-16">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Login (Opcional)</h1>
        <p className="text-brand-navy/80">
          Esta é uma demonstração visual. Em produção, o login pode ser integrado com NextAuth, Supabase Auth ou Firebase Auth.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
          <div className="mb-4 flex gap-2 rounded-xl bg-brand-light p-2">
            <button
              onClick={() => setRole('cliente')}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${role === 'cliente' ? 'bg-brand-navy text-white' : 'text-brand-navy'}`}
            >
              Cliente
            </button>
            <button
              onClick={() => setRole('anunciante')}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${role === 'anunciante' ? 'bg-brand-navy text-white' : 'text-brand-navy'}`}
            >
              Anunciante
            </button>
          </div>

          <form className="space-y-4">
            <input placeholder="Email" className="w-full rounded-lg border border-brand-navy/20 px-4 py-3" />
            <input type="password" placeholder="Senha" className="w-full rounded-lg border border-brand-navy/20 px-4 py-3" />
            <button type="button" className="w-full rounded-xl bg-brand-gold px-4 py-3 font-semibold text-brand-navy">
              Entrar como {role === 'cliente' ? 'Cliente' : 'Anunciante'}
            </button>
          </form>
        </section>

        <section className="rounded-2xl bg-brand-light p-6">
          <h2 className="text-xl font-semibold">Fluxo demonstrativo</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-navy/80">
            <li>Cliente: salva favoritos e solicita proposta.</li>
            <li>Anunciante: publica casa/planta e gerencia anúncios.</li>
            <li>Login não é obrigatório para ver vitrine.</li>
          </ul>
          {role === 'anunciante' && (
            <Link href="/painel-anunciante" className="mt-4 inline-block rounded-lg border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy">
              Acessar Painel do Anunciante (demo)
            </Link>
          )}
        </section>
      </div>
    </div>
  );
}
