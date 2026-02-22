import Link from 'next/link';

const WHATSAPP_LINK = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20uma%20proposta%20de%20cons%C3%B3rcio%20contemplado';

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
    >
      Falar no WhatsApp
    </Link>
  );
}
