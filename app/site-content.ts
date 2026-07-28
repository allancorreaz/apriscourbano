export type HeroMedia =
  | { type: "image"; image: string }
  | { type: "video"; image: string; video: string; poster?: string };

export const siteConfig = {
  churchName: "Aprisco Urbano",
  shortName: "AU",
  instagramHandle: "@apriscourbano",
  city: "Itaguaí, Rio de Janeiro",
  service: { day: "Domingos", time: "18h", label: "Culto de celebração" },
  hero: {
    type: "image",
    image: "/media/hero-noite-pertencimento.png",
  } as HeroMedia,
  /*
   * Para trocar por uma foto da igreja, coloque o arquivo em public/media
   * e altere apenas `image`. Para vídeo, use:
   * { type: "video", image: "/media/capa.jpg",
   *   poster: "/media/capa.jpg", video: "/media/hero-aprisco.mp4" }
   */
  social: {
    instagram: "https://www.instagram.com/apriscourbano/",
    youtube: "#",
    whatsapp: "#",
  },
};

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/celulas", label: "Células" },
  { href: "/ministerios", label: "Ministérios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/loja", label: "Loja" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/contato", label: "Contato" },
];

export type Ministry = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: string;
  focus: string[];
  leader: {
    name: string;
    title: string;
    photo: string | null;
  };
  pastor: {
    name: string;
    title: string;
    photo: string | null;
  };
};

export const cells = [
  {
    id: "a-forja",
    name: "A Forja",
    neighborhood: "Itaguaí",
    address: "Endereço completo em atualização",
    day: "Quintas",
    time: "19h30",
    age: "Jovens e adultos",
    leader: "Líder a confirmar",
    audience: "Uma célula para crescer em comunhão e propósito.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Itagua%C3%AD%2C+RJ",
    image: "/media/celulas-comunidade.png",
  },
  {
    id: "familias",
    name: "Célula Famílias",
    neighborhood: "Região central",
    address: "Endereço completo em atualização",
    day: "Dia a confirmar",
    time: "Horário a confirmar",
    age: "Adultos e famílias",
    leader: "Líder a confirmar",
    audience: "Um ambiente de cuidado, Palavra e vida em família.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Itagua%C3%AD%2C+RJ",
    image: "/media/celulas-comunidade.png",
  },
  {
    id: "juventude",
    name: "Célula Juventude",
    neighborhood: "Itaguaí",
    address: "Endereço completo em atualização",
    day: "Dia a confirmar",
    time: "Horário a confirmar",
    age: "18 a 27 anos",
    leader: "Líder a confirmar",
    audience: "Conexões reais, discipulado e crescimento em Jesus.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Itagua%C3%AD%2C+RJ",
    image: "/media/celulas-comunidade.png",
  },
];

export const ministryGroups: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ministries: Ministry[];
}[] = [
  {
    id: "servico",
    eyebrow: "Servir é amar",
    title: "Ministérios de serviço",
    description:
      "Times que preparam cada ambiente com excelência para que pessoas sejam recebidas, cuidadas e conectadas.",
    ministries: [
      {
        slug: "recepcao",
        name: "Recepção",
        summary: "A primeira expressão de cuidado para quem chega.",
        description:
          "A Recepção acolhe cada pessoa desde o primeiro contato, ajuda visitantes a conhecerem a casa e cria uma chegada leve, segura e verdadeiramente humana.",
        icon: "door",
        focus: ["Acolhimento de visitantes", "Orientação nos cultos", "Conexão com a comunidade"],
        leader: { name: "Nome em atualização", title: "Líder da Recepção", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
      {
        slug: "midia",
        name: "Mídia",
        summary: "Comunicação e criatividade a serviço da mensagem.",
        description:
          "A Mídia registra o que Deus está fazendo, comunica a vida da igreja e transforma histórias, cultos e projetos em conteúdos que alcançam pessoas dentro e fora da comunidade.",
        icon: "camera",
        focus: ["Fotografia e vídeo", "Transmissões", "Design e redes sociais"],
        leader: { name: "Nome em atualização", title: "Líder da Mídia", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
      {
        slug: "limpeza",
        name: "Limpeza",
        summary: "Zelo pelos espaços onde a igreja vive comunhão.",
        description:
          "O ministério de Limpeza cuida de cada ambiente com zelo e excelência, preparando a casa para receber pessoas e servir tudo o que acontece na igreja.",
        icon: "spark",
        focus: ["Preparação dos ambientes", "Organização", "Cuidado contínuo"],
        leader: { name: "Nome em atualização", title: "Líder da Limpeza", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
      {
        slug: "cozinha",
        name: "Cozinha",
        summary: "Hospitalidade que também acontece ao redor da mesa.",
        description:
          "A Cozinha serve com hospitalidade em encontros, eventos e momentos de comunhão, ajudando a transformar refeições e cafés em lugares de cuidado.",
        icon: "heart",
        focus: ["Hospitalidade", "Apoio a eventos", "Comunhão à mesa"],
        leader: { name: "Nome em atualização", title: "Líder da Cozinha", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
    ],
  },
  {
    id: "cuidado",
    eyebrow: "Pessoas cuidando de pessoas",
    title: "Ministérios de cuidado",
    description:
      "Ambientes pensados para cada fase da vida, formando discípulos e fortalecendo famílias.",
    ministries: [
      {
        slug: "aprisco-urbano-kids",
        name: "Aprisco Urbano Kids",
        summary: "Crianças conhecendo Jesus de forma segura e criativa.",
        description:
          "O Aprisco Urbano Kids apresenta Jesus às crianças em uma linguagem acessível, bíblica e criativa, com ambientes seguros e cuidado em cada fase da infância.",
        icon: "sun",
        focus: ["Ensino bíblico", "Ambiente seguro", "Parceria com as famílias"],
        leader: { name: "Nome em atualização", title: "Líder do Aprisco Urbano Kids", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
      {
        slug: "ative-juventude",
        name: "Ative+ Juventude",
        summary: "Comunidade e propósito para jovens de 18 a 27 anos.",
        description:
          "O Ative+ Juventude reúne jovens de 18 a 27 anos para viver comunhão, discipulado, serviço e uma fé conectada às decisões da vida adulta.",
        icon: "bolt",
        focus: ["Comunhão", "Discipulado", "Propósito e serviço"],
        leader: { name: "Nome em atualização", title: "Líder do Ative+ Juventude", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
      {
        slug: "ative-teen",
        name: "Ative+ Teen",
        summary: "Identidade e pertencimento dos 13 aos 18 anos.",
        description:
          "O Ative+ Teen é um ambiente para adolescentes de 13 a 18 anos construírem identidade em Jesus, amizades saudáveis e raízes firmes na Palavra.",
        icon: "star",
        focus: ["Identidade", "Relacionamentos saudáveis", "Vida com Jesus"],
        leader: { name: "Nome em atualização", title: "Líder do Ative+ Teen", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
      {
        slug: "mulheres",
        name: "Ministério de Mulheres",
        summary: "Conexão e crescimento entre mulheres.",
        description:
          "O Ministério de Mulheres cria espaços de comunhão, ensino, acolhimento e fortalecimento para mulheres em diferentes fases da vida.",
        icon: "flower",
        focus: ["Acolhimento", "Crescimento espiritual", "Comunhão"],
        leader: { name: "Nome em atualização", title: "Líder do Ministério de Mulheres", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastora responsável", photo: null },
      },
      {
        slug: "lideres",
        name: "Ministério de Líderes",
        summary: "Formação para quem serve liderando pessoas.",
        description:
          "O Ministério de Líderes desenvolve pessoas para servir com maturidade, responsabilidade e cuidado, fortalecendo uma cultura de liderança saudável.",
        icon: "compass",
        focus: ["Formação", "Cuidado de líderes", "Cultura e alinhamento"],
        leader: { name: "Nome em atualização", title: "Líder do Ministério de Líderes", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
      {
        slug: "celulas",
        name: "Ministério de Células",
        summary: "Suporte à igreja que acontece nas casas.",
        description:
          "O Ministério de Células apoia líderes e grupos para que a igreja aconteça perto das pessoas, com comunhão, discipulado e acompanhamento durante a semana.",
        icon: "home",
        focus: ["Apoio aos líderes", "Discipulado", "Expansão e cuidado"],
        leader: { name: "Nome em atualização", title: "Líder do Ministério de Células", photo: null },
        pastor: { name: "Nome em atualização", title: "Pastor responsável", photo: null },
      },
    ],
  },
];

export const ministries = ministryGroups.flatMap((group) => group.ministries);

export const documentaries = [
  {
    id: "historia-aprisco",
    title: "A história da Aprisco Urbano",
    description:
      "Um documentário sobre o chamado, os primeiros passos e as pessoas que construíram esta casa.",
    status: "Em produção",
    image: "/media/hero-noite-pertencimento.png",
  },
  {
    id: "pastores-seniores",
    title: "Pastores sêniores: uma vida de chamado",
    description:
      "Memórias, testemunhos e a trajetória pastoral contados com a voz de quem viveu cada capítulo.",
    status: "Em produção",
    image: "/media/hero-noite-pertencimento.png",
  },
] as const;

export const events = [
  {
    id: "celebracao",
    date: "Todo domingo",
    day: "18h",
    title: "Culto de celebração",
    description: "Uma noite para adorar, ouvir a Palavra e viver comunhão.",
    location: "Aprisco Urbano · Itaguaí",
    image: "/media/eventos-juventude.png",
    status: "Entrada livre",
    action: "Planeje sua visita",
    href: "/contato",
    paymentMethods: [] as string[],
  },
  {
    id: "proximo-evento",
    date: "Data em breve",
    day: "Inscrições em breve",
    title: "Próximo evento Aprisco",
    description:
      "Espaço preparado para inscrições, lotes, Sympla e links de pagamento.",
    location: "Local a confirmar",
    image: "/media/eventos-juventude.png",
    status: "Em preparação",
    action: "Ver detalhes",
    href: "#detalhes",
    paymentMethods: ["Pix", "Crédito", "Débito", "Sympla"],
  },
];

export const products = [
  ["camiseta", "Camiseta Aprisco", "Vestuário", "Identidade que acompanha você.", "copper"],
  ["devocional", "Devocional", "Livros", "Conteúdo para a caminhada diária.", "ivory"],
  ["caneca", "Caneca Aprisco", "Casa", "Comunhão ao redor da mesa.", "teal"],
] as const;

export const beliefs = [
  ["01", "Jesus no centro", "Tudo começa, permanece e encontra sentido em Jesus."],
  ["02", "Pessoas são a igreja", "Somos uma família que compartilha a vida."],
  ["03", "Crescemos em comunidade", "Discipulado e cuidado acontecem de perto."],
  ["04", "Vivemos em missão", "Levamos esperança à cidade e servimos com amor."],
] as const;
