export type HeroMedia =
  | { type: "image"; image: string }
  | { type: "video"; image: string; video: string; poster?: string };

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
  teamPhoto?: string | null;
  teamTitle?: string;
  teamDescription?: string;
};

export const siteConfig = {
  churchName: "Aprisco Urbano",
  shortName: "AU",
  instagramHandle: "@apriscourbano",
  city: "Itaguai, Rio de Janeiro",
  service: { day: "Domingos", time: "18h", label: "Culto de celebracao" },
  hero: {
    type: "image",
    image: "/media/hero-glaucio-pregando.png",
  } as HeroMedia,
  social: {
    instagram: "https://www.instagram.com/apriscourbano/",
    youtube: "#",
    whatsapp: "#",
  },
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/celulas", label: "Celulas" },
  { href: "/ministerios", label: "Ministerios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/loja", label: "Loja" },
  { href: "/sobre", label: "Sobre nos" },
  { href: "/contato", label: "Contato" },
];

export const churchPurpose = {
  vision:
    "Ser igual a Jesus, e fazer as mesmas coisas que Ele fez e coisas maiores pelo poder do Espirito Santo. Salvar, discipular, treinar, enviar e sustentar atraves das celulas.",
  mission:
    "Cada membro um sacerdote, cada casa uma extensao da igreja.",
};

export const cells = [
  {
    id: "a-forja",
    name: "A Forja",
    neighborhood: "Itaguai",
    address: "Endereco completo em atualizacao",
    day: "Quintas",
    time: "19h30",
    age: "Jovens e adultos",
    leader: "Lider a confirmar",
    audience: "Uma celula para crescer em comunhao e proposito.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Itaguai%2C+RJ",
    image: "/media/celulas-comunidade.png",
  },
  {
    id: "familias",
    name: "Celula Familias",
    neighborhood: "Regiao central",
    address: "Endereco completo em atualizacao",
    day: "Dia a confirmar",
    time: "Horario a confirmar",
    age: "Adultos e familias",
    leader: "Lider a confirmar",
    audience: "Um ambiente de cuidado, Palavra e vida em familia.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Itaguai%2C+RJ",
    image: "/media/celulas-comunidade.png",
  },
  {
    id: "juventude",
    name: "Celula Juventude",
    neighborhood: "Itaguai",
    address: "Endereco completo em atualizacao",
    day: "Dia a confirmar",
    time: "Horario a confirmar",
    age: "18 a 27 anos",
    leader: "Lider a confirmar",
    audience: "Conexoes reais, discipulado e crescimento em Jesus.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Itaguai%2C+RJ",
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
    eyebrow: "Servir e acolher",
    title: "Ministerios de servico",
    description:
      "Times que recebem pessoas, sustentam a atmosfera da casa e servem cada encontro com excelencia e amor.",
    ministries: [
      {
        slug: "recepcao",
        name: "Recepcao",
        summary: "A primeira expressao de cuidado para quem chega.",
        description:
          "A Recepcao acolhe cada pessoa desde o primeiro contato, orienta visitantes, ajuda familias a se conectarem e preserva uma cultura de honra em cada culto e evento.",
        icon: "door",
        focus: ["Acolhimento de visitantes", "Orientacao nos cultos", "Conexao com a comunidade"],
        leader: {
          name: "Equipe de Recepcao",
          title: "Time de acolhimento",
          photo: "/media/equipe-recepcao.png",
        },
        pastor: {
          name: "Fabio e Rafaella",
          title: "Pastores responsaveis",
          photo: "/media/lider-recepcao.jpg",
        },
        teamPhoto: "/media/equipe-recepcao.png",
        teamTitle: "Equipe de recepcao",
        teamDescription:
          "Uma equipe que serve com sorriso, cuidado e atencao para que cada pessoa se sinta em casa desde a chegada.",
      },
      {
        slug: "midia",
        name: "Midia",
        summary: "Comunicacao e criatividade a servico da mensagem.",
        description:
          "A Midia registra o que Deus esta fazendo, comunica a vida da igreja e transforma historias, cultos e projetos em conteudos que alcancam pessoas dentro e fora da comunidade.",
        icon: "camera",
        focus: ["Fotografia e video", "Transmissoes", "Design e redes sociais"],
        leader: {
          name: "Lideranca da Midia em atualizacao",
          title: "Lider da Midia",
          photo: "/media/lider-midia.jpg",
        },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
      {
        slug: "louvor",
        name: "Louvor",
        summary: "Uma equipe que conduz a casa em adoracao e sensibilidade ao Espirito Santo.",
        description:
          "O Louvor serve criando um ambiente de adoracao, resposta e sensibilidade a presenca de Deus, com excelencia musical e coracoes rendidos a Jesus.",
        icon: "music",
        focus: ["Adoracao congregacional", "Sensibilidade espiritual", "Excelencia no servir"],
        leader: {
          name: "Lideranca do Louvor em atualizacao",
          title: "Lider do Louvor",
          photo: "/media/lider-louvor.jpg",
        },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
      {
        slug: "limpeza",
        name: "Limpeza",
        summary: "Zelo pelos espacos onde a igreja vive comunhao.",
        description:
          "O ministerio de Limpeza cuida de cada ambiente com zelo e excelencia, preparando a casa para receber pessoas e servir tudo o que acontece na igreja.",
        icon: "spark",
        focus: ["Preparacao dos ambientes", "Organizacao", "Cuidado continuo"],
        leader: { name: "Nome em atualizacao", title: "Lider da Limpeza", photo: null },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
    ],
  },
  {
    id: "cuidado",
    eyebrow: "Pessoas cuidando de pessoas",
    title: "Ministerios de cuidado",
    description:
      "Ambientes pensados para cada fase da vida, formando discipulos, fortalecendo familias e sustentando a igreja nas casas.",
    ministries: [
      {
        slug: "aprisco-urbano-kids",
        name: "Aprisco Urbano Kids",
        summary: "Criancas conhecendo Jesus de forma segura e criativa.",
        description:
          "O Aprisco Urbano Kids apresenta Jesus as criancas em uma linguagem acessivel, biblica e criativa, com ambientes seguros e cuidado em cada fase da infancia.",
        icon: "sun",
        focus: ["Ensino biblico", "Ambiente seguro", "Parceria com as familias"],
        leader: {
          name: "Lideranca do Aprisco Urbano Kids em atualizacao",
          title: "Lider do Aprisco Urbano Kids",
          photo: "/media/lider-aprisco-kids.jpg",
        },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
      {
        slug: "ative-juventude",
        name: "Ative+ Juventude",
        summary: "Comunidade e proposito para jovens de 18 a 27 anos.",
        description:
          "O Ative+ Juventude reune jovens de 18 a 27 anos para viver comunhao, discipulado, servico e uma fe conectada as decisoes da vida adulta.",
        icon: "bolt",
        focus: ["Comunhao", "Discipulado", "Proposito e servico"],
        leader: { name: "Nome em atualizacao", title: "Lider do Ative+ Juventude", photo: null },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
      {
        slug: "ative-teen",
        name: "Ative+ Teen",
        summary: "Identidade e pertencimento dos 13 aos 18 anos.",
        description:
          "O Ative+ Teen e um ambiente para adolescentes construirem identidade em Jesus, amizades saudaveis e raizes firmes na Palavra.",
        icon: "star",
        focus: ["Identidade", "Relacionamentos saudaveis", "Vida com Jesus"],
        leader: {
          name: "Lideranca do Ative+ Teen em atualizacao",
          title: "Lider do Ative+ Teen",
          photo: "/media/lider-ative-teen.jpg",
        },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
      {
        slug: "consolidacao",
        name: "Consolidacao",
        summary: "Cuidar de quem chegou, discipular com intencao e sustentar passos firmes na fe.",
        description:
          "A Consolidacao acompanha pessoas nos primeiros passos, ajuda a transformar decisoes em discipulado e cria pontes firmes entre acolhimento, cuidado e crescimento espiritual.",
        icon: "heart",
        focus: ["Acompanhamento de novos convertidos", "Discipulado inicial", "Cuidado intencional"],
        leader: {
          name: "Lideranca da Consolidacao em atualizacao",
          title: "Lider da Consolidacao",
          photo: "/media/lider-consolidacao.jpg",
        },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
      {
        slug: "celulas",
        name: "Ministerio de Celulas",
        summary: "Suporte a igreja que acontece nas casas.",
        description:
          "O Ministerio de Celulas apoia lideres e grupos para que a igreja aconteca perto das pessoas, com comunhao, discipulado e acompanhamento durante a semana.",
        icon: "home",
        focus: ["Apoio aos lideres", "Discipulado", "Expansao e cuidado"],
        leader: {
          name: "Lideranca do Ministerio de Celulas em atualizacao",
          title: "Lider do Ministerio de Celulas",
          photo: "/media/lider-celulas.jpg",
        },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
      },
    ],
  },
];

export const ministries = ministryGroups.flatMap((group) => group.ministries);

export const documentaries = [
  {
    id: "fundadores-glaucio-cintia-1",
    title: "Glaucio Muniz e Cintia Fernandes: fundadores do Aprisco Urbano",
    description:
      "Um dos takes do documentario produzido pela equipe de midia sobre a trajetoria pastoral, o chamado e o legado dos nossos pastores seniores.",
    status: "Publicado",
    image: "/media/hero-glaucio-pregando.png",
    url: "https://www.instagram.com/reel/DaYElh_tMkz/?igsh=MTFjaDU1dGl2bjU2dg==",
  },
  {
    id: "fundadores-glaucio-cintia-2",
    title: "Pastores seniores: memoria, chamado e legado",
    description:
      "Outro take do documentario da midia registrando a historia de Glaucio Muniz e Cintia Fernandes, fundadores do Aprisco Urbano.",
    status: "Publicado",
    image: "/media/hero-glaucio-pregando.png",
    url: "https://www.instagram.com/reel/Daqae4CRNxk/?igsh=MWpkNXF3Njg1MDRvOA==",
  },
] as const;

export const events = [
  {
    id: "campanha-do-alimento",
    date: "Todos os domingos",
    day: "Leve 1kg de alimento",
    title: "Campanha do Alimento",
    description:
      "Nossa igreja, atraves do ministerio Lechem, arrecada todos os meses 1 tonelada de alimento para abencoar muitas familias. Faca parte disso e leve 1kg de alimento aos domingos.",
    location: "Aprisco Urbano · Itaguai",
    image: "/media/hero-glaucio-pregando.png",
    status: "Acao recorrente",
    action: "Quero participar",
    href: "/contato",
    paymentMethods: [] as string[],
  },
  {
    id: "fagulha-flow-2026",
    date: "31 de julho e 1 de agosto de 2026",
    day: "2 dias de mover do Espirito",
    title: "Conferencia FAGULHA FLOW",
    description:
      "Vamos receber em nossa igreja a conferencia FAGULHA FLOW com Pastor Chileno, Lucas Lima, Arthur Carreira, nosso pastor Glaucio Muniz e muitas outras pessoas. Se voce quer ir mas esta com alguma dificuldade para pagar, procure o Thalys ou a Rebeca: queremos abencoar voce.",
    location: "Aprisco Urbano · Itaguai",
    image: "/media/eventos-juventude.png",
    status: "Acontecendo agora",
    action: "Falar com a igreja",
    href: "/contato",
    paymentMethods: ["Pix", "Cartao"],
  },
  {
    id: "comunhao-dos-homens-2026",
    date: "22 de agosto de 2026",
    day: "Somente para os homens",
    title: "Comunhao dos Homens",
    description:
      "Teremos um tempo precioso de comunhao no Sitio Rancho Moura. Almoco com churrasco e cafe da tarde por R$130,00, com possibilidade de parcelamento no cartao de credito. Entre em contato e garanta sua vaga.",
    location: "Sitio Rancho Moura",
    image: "/media/eventos-juventude.png",
    status: "Inscricoes abertas",
    action: "Reservar vaga",
    href: "/contato",
    paymentMethods: ["Pix", "Credito"],
  },
  {
    id: "livro-cumpra-plenamente",
    date: "Indicacao especial",
    day: "Leitura recomendada",
    title: "Livro: Cumpra plenamente o seu ministerio",
    description:
      "Leitura recomendada de Glaucio Muniz para fortalecer a caminhada, o chamado e o servico no Reino.",
    location: "Aprisco Urbano",
    image: "/media/hero-glaucio-pregando.png",
    status: "Aviso da casa",
    action: "Saber mais",
    href: "/contato",
    paymentMethods: [] as string[],
  },
];

export const products = [
  ["camiseta", "Camiseta Aprisco", "Vestuario", "Identidade que acompanha voce.", "copper"],
  ["devocional", "Devocional", "Livros", "Conteudo para a caminhada diaria.", "ivory"],
  ["caneca", "Caneca Aprisco", "Casa", "Comunhao ao redor da mesa.", "teal"],
] as const;

export const beliefs = [
  ["01", "Jesus no centro", "Tudo comeca, permanece e encontra sentido em Jesus."],
  ["02", "Cada membro um sacerdote", "Acreditamos em uma igreja onde cada pessoa serve, amadurece e responde ao chamado de Deus."],
  ["03", "Cada casa uma extensao da igreja", "Vivemos discipulado, cuidado e comunhao nas celulas e na vida diaria."],
  ["04", "Salvar, discipular, treinar, enviar e sustentar", "Nossa missao ganha forma quando pessoas sao cuidadas e enviadas pelo poder do Espirito Santo."],
] as const;
