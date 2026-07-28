# Aprisco Urbano

Site público e área administrativa da Igreja Aprisco Urbano, construídos no
mesmo projeto. A identidade visual adotada é **Noite de Pertencimento**:
cinematográfica, acolhedora e preparada para fotografias e vídeos reais da
igreja.

## O que já está incluído

- Site responsivo para desktop, tablet e celular.
- Menu móvel em uma camada de tela inteira, acima de todo o conteúdo.
- Páginas de início, células, ministérios, eventos, loja, sobre nós e contato.
- Dez ministérios organizados entre serviço e cuidado.
- Página individual para cada ministério, com:
  - apresentação;
  - áreas de atuação;
  - líder;
  - fotografia do líder;
  - pastor ou pastora responsável;
  - fotografia pastoral.
- Área documental em **Sobre nós**.
- Reprodução de vídeos do YouTube, Vimeo e arquivos MP4/WebM.
- Área administrativa protegida por usuário.
- Perfis de acesso e permissões.
- Administração de usuários pelo perfil Administrador.
- Auditoria: usuário, perfil, ação, área, alvo, detalhes, data e hora.
- Banco de dados D1 para usuários, auditoria, vídeos e configurações.
- Ministérios da página inicial com acesso direto à página individual.
- Loja administrável com produtos, preços, fotos e visibilidade.
- Pix, cartão de crédito, cartão de débito e boleto configuráveis.
- Logo, imagem principal, vídeo de fundo e background interno editáveis.

## Perfis de acesso

- Administrador
- Pastoral
- Secretaria
- Líder de ministério
- Líder de célula
- Mídia
- Somente leitura

O Administrador pode cadastrar usuários, escolher o perfil, ativar ou desativar
acessos e consultar toda a auditoria. O próprio perfil do administrador é
protegido contra bloqueio acidental.

As permissões são verificadas no servidor. Um usuário sem a permissão adequada
não consegue gravar alterações apenas manipulando a tela ou a requisição.

## Abrir no VS Code

Requisitos:

- Node.js 22.13 ou superior
- npm

Depois de baixar e extrair o projeto:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo terminal. O código principal está em `app/`, o
conteúdo editável está em `app/site-content.ts` e os arquivos visuais ficam em
`public/media/`.

## Configuração inicial do administrador

Copie `.env.example` para `.env.local` e informe o e-mail do administrador:

```env
ADMIN_EMAIL=seu-email@exemplo.com
```

No ambiente hospedado, configure `ADMIN_EMAIL` como variável de ambiente. Esse
e-mail será o único autorizado a criar automaticamente o primeiro perfil
Administrador.

## Fotografias e vídeos

### Trocar a imagem principal

1. Coloque a imagem em `public/media/`.
2. Acesse **Administração > Conteúdo**.
3. Informe o caminho, por exemplo: `/media/culto-aprisco.jpg`.

### Usar vídeo de fundo

Use um vídeo curto, sem áudio, otimizado em MP4 ou WebM:

```text
/media/hero-aprisco.mp4
```

### Publicar documentários

Em **Administração > Vídeos**, cole:

- link do YouTube;
- link do Vimeo;
- URL direta de um MP4/WebM; ou
- caminho de um arquivo do projeto, como `/media/documentario.mp4`.

Para vídeos longos, YouTube ou Vimeo são recomendados. Eles economizam
armazenamento e entregam melhor qualidade em diferentes conexões.

## Loja e pagamentos

Em **Administração > Loja**, usuários autorizados podem:

- adicionar e remover produtos;
- editar nome, categoria, descrição, preço e fotografia;
- publicar ou ocultar um produto;
- habilitar Pix, crédito, débito e boleto;
- cadastrar a chave Pix e os links seguros do provedor de pagamento.

O site não armazena números de cartão. Crédito, débito e boleto devem apontar
para links de checkout gerados pelo provedor escolhido.

## Alterar pastores e líderes

Os dados dos ministérios estão centralizados em `app/site-content.ts`. Cada
ministério possui os campos `leader` e `pastor`, incluindo `name`, `title` e
`photo`. Exemplo:

```ts
leader: {
  name: "Nome do líder",
  title: "Líder da Mídia",
  photo: "/media/lider-midia.jpg",
}
```

Enquanto as informações oficiais não forem fornecidas, o site exibe campos
claros de conteúdo em atualização, sem inventar nomes ou fotografias.

## Banco e auditoria

O esquema está em `db/schema.ts` e as migrações em `drizzle/`. As alterações
administrativas são registradas no servidor; o navegador não decide nem
concede permissões.

## Publicação

O projeto pode ser versionado normalmente no GitHub. A versão atual usa os
recursos de autenticação e banco do ChatGPT Sites/Cloudflare. Para publicar a
área administrativa em outro provedor, como Vercel, conecte um serviço de
autenticação e banco compatível antes de receber dados reais. As páginas
públicas, estilos e componentes permanecem reaproveitáveis.

Nunca envie arquivos `.env` ou credenciais ao GitHub.
