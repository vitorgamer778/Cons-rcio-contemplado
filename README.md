# Consórcio Contemplado Brasil

Site institucional profissional em **Next.js 14 (App Router)**, **React**, **TypeScript** e **TailwindCSS**, com foco em conversão para captação de leads de cartas contempladas.

## ✨ Recursos implementados

- Layout moderno (azul escuro, dourado e branco), responsivo e mobile-first.
- Animações suaves com Framer Motion.
- SEO completo com metadata dinâmica, Open Graph e sitemap automático.
- Home com CTA forte, prova social, contador regressivo, FAQ e depoimentos.
- Página de cartas disponíveis com filtros por tipo e valor.
- Página Sobre com missão, visão, valores e diferenciais.
- Página Contato com formulário e integração via API Route (`/api/contact`).
- Botão flutuante de WhatsApp em todo o site.
- Dados de cartas em JSON local (`data/cards.json`), pronto para integrar com Supabase/Firebase.
- Projeto pronto para deploy na Vercel com `vercel.json`.

## 🧱 Estrutura de pastas

```bash
.
├── app/
│   ├── api/contact/route.ts
│   ├── cartas/page.tsx
│   ├── contato/page.tsx
│   ├── sobre/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── AnimatedSection.tsx
│   ├── CardsList.tsx
│   ├── ContactForm.tsx
│   ├── CountdownOffer.tsx
│   ├── CreditCardItem.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── WhatsAppFloatingButton.tsx
│   ├── types.ts
│   └── utils.ts
├── data/cards.json
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

## 🚀 Como instalar dependências

```bash
npm install
```

## ▶️ Como rodar localmente

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 🧪 Build de produção local

```bash
npm run build
npm run start
```

## 🔗 Como conectar ao GitHub

1. Crie um novo repositório no GitHub.
2. No projeto local, rode:

```bash
git init
git add .
git commit -m "feat: site institucional consórcio contemplado"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

## ☁️ Como importar e publicar na Vercel

1. Acesse [https://vercel.com](https://vercel.com).
2. Clique em **Add New > Project**.
3. Importe o repositório do GitHub.
4. A Vercel detectará automaticamente o framework Next.js.
5. Clique em **Deploy**.

Após o deploy, o site fica acessível publicamente pelo domínio fornecido pela Vercel.

## 🌐 Como adicionar domínio personalizado na Vercel

1. Dentro do projeto na Vercel, vá em **Settings > Domains**.
2. Adicione seu domínio (ex.: `consorciocontempladobrasil.com.br`).
3. Configure os registros DNS solicitados (A/CNAME) no provedor do domínio.
4. Aguarde propagação e valide no painel da Vercel.

## 🔐 Como configurar variáveis de ambiente na Vercel

1. Acesse **Project Settings > Environment Variables**.
2. Adicione variáveis necessárias (exemplo futuro):
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
3. Salve e faça novo deploy para aplicar.

## 🔌 Futuras integrações (Supabase/Firebase)

O projeto já está preparado para evoluir para backend real:

- Substituir `data/cards.json` por consulta em banco.
- Atualizar `app/api/contact/route.ts` para persistir leads.
- Criar painel administrativo para gestão das cartas.

## 📄 Licença

Uso comercial permitido mediante ajustes da marca e dados de contato.
