'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState<'cliente' | 'anunciante'>('cliente');

  return (
    <div className="mx-auto w-full max-w-xl space-y-6 px-4 py-16">
      <h1 className="text-4xl font-bold">Login (Opcional)</h1>
      <p className="text-brand-navy/80">Área de demonstração para mostrar como ficaria a autenticação do cliente e do anunciante.</p>
      <div className="flex gap-2 rounded-xl bg-brand-light p-2">
        <button onClick={() => setRole('cliente')} className={`flex-1 rounded-lg px-3 py-2 ${role === 'cliente' ? 'bg-brand-navy text-white' : 'text-brand-navy'}`}>Cliente</button>
        <button onClick={() => setRole('anunciante')} className={`flex-1 rounded-lg px-3 py-2 ${role === 'anunciante' ? 'bg-brand-navy text-white' : 'text-brand-navy'}`}>Anunciante</button>
      </div>
      <form className="space-y-4 rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
        <input placeholder="Email" className="w-full rounded-lg border border-brand-navy/20 px-4 py-3" />
        <input type="password" placeholder="Senha" className="w-full rounded-lg border border-brand-navy/20 px-4 py-3" />
        <button type="button" className="w-full rounded-xl bg-brand-gold px-4 py-3 font-semibold text-brand-navy">
          Entrar como {role === 'cliente' ? 'Cliente' : 'Anunciante'}
        </button>
      </form>
      {role === 'anunciante' && (
        <Link href="/painel-anunciante" className="inline-block rounded-lg border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy">
          Ver Painel do Anunciante (demo)
        </Link>
      )}
    </div>
  );
}
