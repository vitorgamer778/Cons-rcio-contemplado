import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'consorcio-contemplado-brasil',
    timestamp: new Date().toISOString()
  });
}
