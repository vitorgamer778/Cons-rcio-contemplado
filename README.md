# Consórcio Contemplado Brasil

Site profissional em **Next.js 14 + App Router + TypeScript + TailwindCSS**, focado em **venda de casas e plantas**, com login opcional e painel de anunciante em modo demonstração.

## ✅ O que foi melhorado

- Home mais completa com:
  - hero de conversão,
  - prova social,
  - contador regressivo,
  - destaques,
  - oportunidades em destaque,
  - depoimentos,
  - FAQ.
- Página `Casas e Plantas` com filtros por categoria e preço.
- Login opcional com perfis **Cliente** e **Anunciante**.
- Painel separado do anunciante para preview de cadastro de anúncios.
- Botão flutuante de WhatsApp.
- SEO com metadata e sitemap.
- `not-found` customizado para melhorar UX em links inválidos.

## Estrutura principal

- `app/page.tsx` - Home
- `app/imoveis/page.tsx` - Casas e Plantas
- `app/login/page.tsx` - Login opcional
- `app/painel-anunciante/page.tsx` - Painel do anunciante (demo)
- `app/not-found.tsx` - Página 404 customizada
- `components/PropertyList.tsx` - Filtros/listagem
- `components/PropertyCardItem.tsx` - Card de imóvel/planta
- `data/properties.json` - Dados mock

## Rodar localmente

```bash
npm install
npm run dev
```

Abra: `http://localhost:3000`

## Build de produção

```bash
npm run lint
npm run build
```

## Deploy na Vercel

1. Suba no GitHub.
2. Na Vercel: **Add New > Project**.
3. Importe o repositório.
4. Verifique se o **Root Directory** está apontando para este projeto.
5. Deploy.

### Se aparecer 404 da Vercel (tela branca com `NOT_FOUND`)

Normalmente é configuração de projeto/domínio e não do código:

- confirme se você abriu a URL do deploy correto (Production/Preview),
- confira se o domínio está vinculado ao projeto certo,
- em **Project Settings > Domains**, remova/readicione o domínio se necessário,
- faça um novo deploy após confirmar o root do projeto.

## Próximos passos

- Integrar autenticação real (NextAuth/Supabase/Firebase).
- Criar CRUD real no painel do anunciante.
- Conectar banco de dados para anúncios.
