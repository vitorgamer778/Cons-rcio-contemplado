export function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-light py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 text-sm text-brand-navy/80 sm:px-6 lg:px-8">
        <p className="font-semibold text-brand-navy">Consórcio Contemplado Brasil</p>
        <p>Portal de casas e plantas com atendimento consultivo e área para anunciantes.</p>
        <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
