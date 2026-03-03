# Igreja Aprisco Urbano - Website Oficial

Um site moderno e responsivo para a Igreja Aprisco Urbano, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## ✅ STATUS DO PROJETO

**🎉 PROJETO COMPLETO E FUNCIONAL! 🎉**

✅ **Site Rodando**: http://localhost:3000  
✅ **Todas as Páginas Implementadas**  
✅ **Design Responsivo Completo**  
✅ **Pronto para Customização**  

## 🚀 Características Implementadas

- **Design Moderno**: Interface limpa e profissional com gradientes e animações
- **Totalmente Responsivo**: Compatível com todos os dispositivos (mobile-first)
- **Navegação Completa**: Todas as páginas funcionais com menu interativo
- **Performance Otimizada**: Carregamento rápido e experiência fluida
- **Conteúdo Rico**: Textos, imagens e informações realistas da igreja
- **Interações**: Formulários funcionais, botões de ação e links externos

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Framework CSS utilitário para design rápido
- **React 18**: Biblioteca para interfaces de usuário

## 📱 Páginas Implementadas

| Página | URL | Status | Descrição |
|--------|-----|--------|-----------|
| **Home** | `/` | ✅ Completa | Página inicial com hero, próximo culto, missão e estatísticas |
| **Cultos** | `/cultos` | ✅ Completa | Horários detalhados, informações para visitantes |
| **Eventos** | `/eventos` | ✅ Completa | Lista de eventos com preços e detalhes |
| **Sobre Nós** | `/sobre` | ✅ Completa | História, missão, valores e liderança |
| **Galeria** | `/galeria` | ✅ Completa | Fotos de eventos e atividades da igreja |
| **Ministérios** | `/ministerios` | ✅ Completa | 12 ministérios com detalhes e contatos |
| **Contato** | `/contato` | ✅ Completa | Formulário funcional, mapa e informações |
| **Login Admin** | `/auth/login` | ✅ Completa | Painel de acesso administrativo |
- **Tailwind CSS** - Estilização utilitária
- **Headless UI** - Componentes acessíveis
- **Heroicons** - Ícones modernos

### Backend  
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **NextAuth.js** - Sistema de autenticação
- **Stripe** - Processamento de pagamentos
- **Cloudinary** - Gerenciamento de imagens

### Ferramentas
- **ESLint** - Linting de código
- **TypeScript** - Checagem de tipos
- **Date-fns** - Manipulação de datas

## 📁 Estrutura do Projeto

```
aprisco-urbano/
├── .github/
│   └── copilot-instructions.md
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   └── login/
│   │   ├── cultos/
│   │   ├── eventos/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── next-service.tsx
│   │   │   ├── upcoming-events.tsx
│   │   │   ├── about-section.tsx
│   │   │   └── quick-actions.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   └── providers/
│   │       └── session-provider.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── services.ts
│   │   └── events.ts
│   ├── auth.ts
│   └── auth.config.ts
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## 🗄️ Modelo de Dados

### Principais Entidades
- **User**: Usuários do sistema (Admin/Editor)
- **Event**: Eventos da igreja (pagos e gratuitos)
- **WeeklyEvent**: Eventos semanais recorrentes
- **ServiceTime**: Horários dos cultos
- **Payment**: Pagamentos dos ingressos
- **Gallery**: Galerias de fotos organizadas
- **GalleryImage**: Imagens das galerias
- **Setting**: Configurações editáveis do site

## 📋 Páginas Implementadas

### Públicas
- **Home** (`/`) - Página principal com hero, próximo culto, eventos
- **Cultos** (`/cultos`) - Horários e informações dos cultos
- **Eventos** (`/eventos`) - Lista de eventos futuros
- **Discipulados** (`/discipulados`) - Grupos de discipulado
- **Galeria** (`/galeria`) - Galeria de fotos organizadas

### Administrativas  
- **Login** (`/auth/login`) - Tela de autenticação
- **Painel Admin** (`/admin`) - Dashboard administrativo
- **Gerenciar Eventos** - CRUD completo de eventos
- **Gerenciar Cultos** - Edição de horários
- **Gerenciar Galeria** - Upload e organização de fotos
- **Configurações** - Dados editáveis da igreja

## 💳 Sistema de Pagamentos

- **Stripe Integration**: Processamento PCI compliant
- **Checkout Seguro**: Formulários seguros de pagamento
- **Webhooks**: Confirmação automática de pagamentos
- **Dashboard**: Relatórios de vendas no painel admin

## 🔐 Sistema de Autenticação

- **NextAuth.js**: Framework de autenticação robusto
- **Roles**: Sistema de permissões (Admin/Editor)
- **Sessões**: Gerenciamento seguro de sessões
- **Proteção de Rotas**: Middleware para rotas protegidas

## ⚙️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- PostgreSQL
- Conta Stripe
- Conta Cloudinary

### Passo a Passo

1. **Clone o projeto**
   ```bash
   git clone <repository-url>
   cd aprisco-urbano
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   
   Edite o `.env` com suas configurações:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/aprisco_urbano"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   
   # Stripe  
   STRIPE_PUBLIC_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME="your_cloud_name"
   CLOUDINARY_API_KEY="your_api_key"
   CLOUDINARY_API_SECRET="your_api_secret"
   ```

4. **Configure o banco de dados**
   ```bash
   npx prisma migrate dev
   npx prisma generate  
   npm run db:seed
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

6. **Acesse o projeto**
   - Site: http://localhost:3000
   - Admin: http://localhost:3000/admin
   - Login: admin@apriscourbano.com / admin123

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório no Vercel**
2. **Configure as variáveis de ambiente**
3. **Deploy automático a cada commit**

### Variáveis de Ambiente para Produção
- Configure todas as variáveis do `.env.example`
- Use URLs de produção para DATABASE_URL e NEXTAUTH_URL
- Configure webhooks do Stripe para sua URL de produção

## 🎨 Customização

### Cores
As cores estão configuradas no `tailwind.config.ts`:
- **Primary**: Tons de azul escuro
- **Gold**: Tons dourados para destaques
- Facilmente customizável via CSS custom properties

### Logo
- Substitua o placeholder "AU" no header por sua logo real
- Configurado em `src/components/layout/header.tsx`

### Conteúdo
- Textos editáveis via painel administrativo
- Endereço, telefone, redes sociais configuráveis
- Fácil manutenção por usuários não técnicos

## 📱 Responsive Design

- **Mobile First**: Otimizado para dispositivos móveis
- **Breakpoints**: sm, md, lg, xl
- **Touch Friendly**: Botões e elementos adequados para touch

## 🔒 Segurança

- **Autenticação Segura**: NextAuth com hash bcrypt
- **Proteção XSS**: Sanitização automática  
- **HTTPS**: Redirecionamento forçado em produção
- **Validação**: Zod para validação de dados
- **Rate Limiting**: Controle de requisições

## 🧪 Testing

```bash
# Linting
npm run lint

# Build de produção
npm run build

# Seed do banco
npm run db:seed
```

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte:
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Prisma](https://www.prisma.io/docs)
- [Documentação Stripe](https://stripe.com/docs)
- [Documentação Tailwind](https://tailwindcss.com/docs)

## 📄 Licença

Este projeto foi desenvolvido especificamente para a Igreja Aprisco Urbano.

---

**Desenvolvido com ❤️ para a Igreja Aprisco Urbano**

*"Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles." - Mateus 18:20*