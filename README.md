# Consórcio Contemplado Brasil

Site profissional em **Next.js 14 + App Router + TypeScript + TailwindCSS** agora focado em **venda de casas e plantas**, com área de login opcional e painel demonstrativo para anunciantes.

## Funcionalidades

- Home moderna com visual premium (azul escuro, dourado e branco), CTA e animações.
- Página **Casas e Plantas** com listagem dinâmica e filtros por categoria/valor.
- Dados mockados em `data/properties.json` para demonstração.
- **Login opcional** com dois perfis de demonstração:
  - Cliente
  - Anunciante
- Página **Painel do Anunciante (demo)** para visualizar como será o cadastro de casas e plantas.
- Página Sobre e Contato adaptadas ao novo posicionamento.
- API route `POST /api/contact` para simulação de envio de lead.
- SEO com metadata e sitemap.
- Configuração pronta para Vercel (`vercel.json`).

## Estrutura principal

- `app/page.tsx` - Home
- `app/imoveis/page.tsx` - Casas e Plantas
- `app/login/page.tsx` - Login opcional
- `app/painel-anunciante/page.tsx` - Área demo para quem publica anúncios
- `components/PropertyList.tsx` e `components/PropertyCardItem.tsx` - Vitrine de itens
- `data/properties.json` - Base local mock

## Instalação

```bash
npm install
npm run dev
```

## Deploy Vercel

1. Suba o projeto no GitHub.
2. Importe o repositório na Vercel.
3. Deploy automático com `next build`.

## Variáveis de ambiente (futuro)

Para autenticação real e envio de e-mail, adicionar na Vercel:

- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`

## Próximos passos sugeridos

- Integrar login real com NextAuth.
- Criar CRUD real no painel do anunciante.
- Conectar banco de dados (Supabase/Firebase).
