import Link from 'next/link';

const checklist = [
  'Projeto importado corretamente na Vercel',
  'Root Directory apontando para este repositório',
  'Branch de produção configurada (ex.: main/work)',
  'Domínio vinculado ao projeto correto',
  'Último deploy concluído com status Ready'
];

export default function DeployStatusPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-16">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Status de Deploy</h1>
        <p className="text-brand-navy/80">
          Esta página existe para validar que o app está publicado corretamente. Se ela abrir, o projeto foi encontrado pela Vercel.
        </p>
      </header>

      <section className="rounded-2xl border border-brand-navy/10 bg-white p-6">
        <h2 className="text-xl font-semibold">Checklist rápido para erro 404 da Vercel</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-brand-navy/80">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href="/" className="rounded-xl bg-brand-navy px-5 py-3 font-semibold text-white">
          Voltar para Home
        </Link>
        <Link href="/imoveis" className="rounded-xl bg-brand-gold px-5 py-3 font-semibold text-brand-navy">
          Ver Casas e Plantas
        </Link>
      </div>
    </div>
  );
}
