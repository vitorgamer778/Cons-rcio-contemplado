import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';

const baseUrl = 'https://consorciocontempladobrasil.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Consórcio Contemplado Brasil | Casas e Plantas',
    template: '%s | Consórcio Contemplado Brasil'
  },
  description: 'Site profissional para venda de casas e plantas com foco em conversão.',
  openGraph: {
    title: 'Consórcio Contemplado Brasil',
    description: 'Casas e plantas com atendimento especializado.',
    url: baseUrl,
    siteName: 'Consórcio Contemplado Brasil',
    locale: 'pt_BR',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
