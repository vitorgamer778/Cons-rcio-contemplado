import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';

const baseUrl = 'https://consorciocontempladobrasil.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Consórcio Contemplado Brasil | Crédito Imediato',
    template: '%s | Consórcio Contemplado Brasil'
  },
  description:
    'Consórcio contemplado com liberação imediata para imóveis, veículos, pesados e serviços. Atendimento especializado em todo o Brasil.',
  openGraph: {
    title: 'Consórcio Contemplado Brasil',
    description: 'Crédito já aprovado para imóveis, veículos e investimentos.',
    url: baseUrl,
    siteName: 'Consórcio Contemplado Brasil',
    locale: 'pt_BR',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
