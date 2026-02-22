import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-5 px-4 text-center">
      <p className="rounded-full bg-brand-light px-4 py-1 text-sm font-semibold text-brand-navy">Página não encontrada</p>
      <h1 className="text-4xl font-bold text-brand-navy">Oops! Não encontramos essa rota.</h1>
      <p className="text-brand-navy/80">Se você abriu um link antigo, volte para a Home e continue navegando normalmente.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-xl bg-brand-navy px-5 py-3 font-semibold text-white">
          Ir para Home
        </Link>
        <Link href="/imoveis" className="rounded-xl bg-brand-gold px-5 py-3 font-semibold text-brand-navy">
          Ver Imóveis
        </Link>
      </div>
    </div>
  );
}
