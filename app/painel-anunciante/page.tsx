export default function PainelAnunciantePage() {
  const demos = [
    { nome: 'Casa com 3 suítes', tipo: 'Casa', preco: 'R$ 980.000', status: 'Publicado' },
    { nome: 'Planta sobrado 180m²', tipo: 'Planta', preco: 'R$ 19.900', status: 'Rascunho' }
  ];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-16">
      <h1 className="text-4xl font-bold">Painel do Anunciante (Demonstração)</h1>
      <p className="text-brand-navy/80">Área para o usuário que irá cadastrar casas e plantas à venda.</p>

      <section className="rounded-2xl border border-brand-gold/40 bg-white p-6">
        <h2 className="text-xl font-semibold">Novo anúncio (preview)</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input placeholder="Título do imóvel/planta" className="rounded-lg border border-brand-navy/20 px-3 py-2" />
          <select className="rounded-lg border border-brand-navy/20 px-3 py-2"><option>Casa</option><option>Planta</option></select>
          <input placeholder="Preço" className="rounded-lg border border-brand-navy/20 px-3 py-2" />
          <input placeholder="Cidade" className="rounded-lg border border-brand-navy/20 px-3 py-2" />
        </div>
      </section>

      <section className="rounded-2xl bg-brand-light p-6">
        <h2 className="text-xl font-semibold">Seus anúncios (mock)</h2>
        <ul className="mt-3 space-y-2">
          {demos.map((item) => (
            <li key={item.nome} className="flex flex-wrap items-center justify-between rounded-lg bg-white p-3 text-sm">
              <span>{item.nome} • {item.tipo}</span>
              <span>{item.preco} • {item.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
