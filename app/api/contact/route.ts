import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  interestType: string;
  message: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.phone || !body.email || !body.interestType || !body.message) {
    return NextResponse.json({ error: 'Preencha todos os campos obrigatórios.' }, { status: 400 });
  }

  // Simulação de envio de email. Futuramente conectar com SMTP/Resend/Supabase.
  console.info('Novo contato recebido:', body);

  return NextResponse.json({ success: true });
}
