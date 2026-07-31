export type HeroMedia =
  | { type: "image"; image: string }
  | { type: "video"; image: string; video: string; poster?: string };

export type CellType = "Jovens" | "Adultos" | "Adolescentes" | "Mista";
export type CellGender = "Masculina" | "Feminina" | "Mista";

export type Cell = {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  day: string;
  time: string;
  type: CellType;
  gender: CellGender;
  leader: string;
  audience: string;
  mapUrl: string;
  image: string;
  instagram?: string;
};

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
  city: "Rua Orlando Silva 9, Engenho - Itaguai, RJ",
  seniorPastors: {
    pastor: {
      name: "Glaucio Muniz",
      instagram: "@glauciomuniz.ofc",
    },
    pastora: {
      name: "Cintia Fentanes",
      instagram: "@cintiafentanes",
    },
  },
  service: { day: "Domingos", time: "18h", label: "Culto de celebracao" },
  hero: {
    type: "image",
    image: "/media/hero-glaucio-pregando.png",
  } as HeroMedia,
  logo: "/media/logo-aprisco-transparente.png",
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

export const cells: Cell[] = [
  {
    id: "a-forja",
    name: "Celula A Forja",
    neighborhood: "Estrela do Ceu",
    address: "Rua Tiete, 2602, Casa 2 - Itaguai, RJ",
    day: "Quinta-feira",
    time: "19h",
    type: "Mista",
    gender: "Mista",
    leader: "Joao Bolis",
    audience: "Uma celula mista para comunhao, crescimento e vida compartilhada.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Tiet%C3%AA,+2602,+Casa+2,+Itagua%C3%AD,+RJ",
    image: "/media/celula-a-forja.jpg",
    instagram: "@celula_aforja_",
  },
  {
    id: "ekballo",
    name: "Celula Ekballo",
    neighborhood: "Engenho",
    address: "Rua do Engenho, 45 - Itaguai, RJ",
    day: "Quinta-feira",
    time: "19h",
    type: "Jovens",
    gender: "Masculina",
    leader: "Felipe Santana",
    audience: "Jovens homens crescendo em identidade, amizade e envio.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+do+Engenho,+45,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
    instagram: "@celulaekballoaprisco",
  },
  {
    id: "ide",
    name: "Celula Ide",
    neighborhood: "Morro do Corte",
    address: "Rua Durvalina Duarte de Souza, Lote 5, Quadra 2 - Itaguai, RJ",
    day: "Quinta-feira",
    time: "19h",
    type: "Jovens",
    gender: "Masculina",
    leader: "Julio Vieira",
    audience: "Uma celula jovem, masculina e cheia de fome por Jesus.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Durvalina+Duarte+de+Souza,+Lote+5,+Quadra+2,+Itagua%C3%AD,+RJ",
    image: "/media/celula-ide.png",
    instagram: "@celulaidejovens",
  },
  {
    id: "preach",
    name: "Celula Preach",
    neighborhood: "Engenho",
    address: "Rua Joao Plaza Gonzales, Lt 1, QD 5 - Itaguai, RJ",
    day: "Quinta-feira",
    time: "19h",
    type: "Jovens",
    gender: "Masculina",
    leader: "Jean Evangelista",
    audience: "Jovens sendo discipulados com ousadia, palavra e comunhao.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Joao+Plaza+Gonzales,+Lt+1,+QD+5,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
    instagram: "@casadepazpreach",
  },
  {
    id: "mangaratiba",
    name: "Celula Mangaratiba",
    neighborhood: "Praia do Saco, Mangaratiba",
    address: "Rua Sao Luis, N 22, Casa 7, QD 7 - Mangaratiba - RJ",
    day: "Quinta-feira",
    time: "19h",
    type: "Mista",
    gender: "Mista",
    leader: "Ana Beatriz",
    audience: "Uma extensao da casa para comunhao e discipulado em Mangaratiba.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Sao+Luis,+22,+Casa+7,+QD+7,+Mangaratiba,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "girls-flames-teen",
    name: "Girls Flames Teen",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adultos",
    gender: "Feminina",
    leader: "Ingrid",
    audience: "Mulheres sendo fortalecidas em comunhao, fogo e amadurecimento espiritual.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "teen-choosen-girl",
    name: "Teen Choosen Girl",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adolescentes",
    gender: "Feminina",
    leader: "Thais",
    audience: "Adolescentes sendo lembradas de que foram escolhidas por Jesus.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "teen-conected-girls",
    name: "Teen Conected Girls",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adolescentes",
    gender: "Feminina",
    leader: "Carol",
    audience: "Adolescentes crescendo em conexao real com Deus e umas com as outras.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "teen-nissi-girls",
    name: "Teen Nissi Girls",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adolescentes",
    gender: "Feminina",
    leader: "Yasmin",
    audience: "Um ambiente de adoracao, identidade e cuidado para adolescentes.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "bloom-girls",
    name: "Bloom Girls",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adolescentes",
    gender: "Feminina",
    leader: "Eduarda",
    audience: "Florescendo em Jesus com amizade, palavra e discipulado.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "revive-the-girls",
    name: "Revive The Girls",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adolescentes",
    gender: "Feminina",
    leader: "Tabata",
    audience: "Adolescentes despertadas para uma vida viva e profunda com Jesus.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "maranata",
    name: "Maranata",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adolescentes",
    gender: "Masculina",
    leader: "Gabriel",
    audience: "Adolescentes esperando, servindo e crescendo juntos em Jesus.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "kairos",
    name: "Kairos",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Adolescentes",
    gender: "Masculina",
    leader: "Joao",
    audience: "Um tempo de Deus para adolescentes que querem viver algo mais profundo.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
  },
  {
    id: "emaus",
    name: "Emaus",
    neighborhood: "Engenho",
    address: "Aprisco Urbano",
    day: "Quinta-feira",
    time: "19h",
    type: "Mista",
    gender: "Masculina",
    leader: "Asafe",
    audience: "Uma caminhada de discipulado, palavra e encontro com Jesus no caminho.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva+9,+Engenho,+Itagua%C3%AD,+RJ",
    image: "/media/aguardando-foto-oficial.svg",
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
    eyebrow: "Cada membro um sacerdote",
    title: "Ministerios de servico",
    description:
      "Nos ministerios de servico, nossa missao ganha forma pratica: cada membro serve como sacerdote e ajuda a fazer de cada encontro uma extensao viva da igreja.",
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
    eyebrow: "Cada casa uma extensao da igreja",
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
        slug: "lideres",
        name: "Treinamento de Lideres",
        summary: "Uma cultura de formacao para quem lidera pessoas e casas.",
        description:
          "O treinamento de lideres existe para fortalecer quem discipula, sustenta celulas e cuida de pessoas, formando uma lideranca alinhada ao coracao da casa.",
        icon: "compass",
        focus: ["Formacao de lideres", "Discipulado pratico", "Alinhamento da visao"],
        leader: {
          name: "Lideranca em atualizacao",
          title: "Treinamento de lideres",
          photo: "/media/treinamento-lideres.png",
        },
        pastor: { name: "Nome em atualizacao", title: "Pastor responsavel", photo: null },
        teamPhoto: "/media/treinamento-lideres.png",
        teamTitle: "Reuniao de lideres",
        teamDescription:
          "Um encontro com quem carrega a responsabilidade de discipular, servir e sustentar pessoas com saude espiritual e alinhamento de visao.",
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
    title: "Glaucio Muniz e Cintia Fentanes: fundadores do Aprisco Urbano",
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
      "Outro take do documentario da midia registrando a historia de Glaucio Muniz e Cintia Fentanes, fundadores do Aprisco Urbano.",
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
    location: "Rua Orlando Silva 9, Engenho - Itaguai, RJ",
    image: "/media/aguardando-foto-oficial.svg",
    status: "Acao recorrente",
    action: "Quero participar",
    href: "/contato",
    paymentMethods: [] as string[],
  },
  {
    id: "fagulha-flow-2026",
    date: "31 de julho de 2026 as 19h30 e 1 de agosto de 2026 a partir das 7h30",
    day: "Sexta e sabado",
    title: "Conferencia FAGULHA FLOW",
    description:
      "A conferencia FAGULHA FLOW comeca hoje, sexta-feira, 31 de julho de 2026, as 19h30, e continua no sabado, 1 de agosto de 2026, a partir das 7h30. Estarao conosco Pastor Chileno, Lucas Lima, Arthur Carreira, nosso pastor Glaucio Muniz e muitas outras pessoas. Se voce quer ir mas esta com dificuldade para pagar, procure o Thalys ou a Rebeca.",
    location: "Aprisco Urbano · Rua Orlando Silva 9, Engenho - Itaguai, RJ",
    image: "/media/evento-fagulha-flow-2026.jpg",
    status: "Acontece hoje",
    action: "Falar com a igreja",
    href: "/contato",
    paymentMethods: ["Pix", "Cartao"],
  },
  {
    id: "domingo-ceia-2026-08-02",
    date: "2 de agosto de 2026",
    day: "Domingo as 18h",
    title: "Culto de Domingo com Ceia",
    description:
      "No domingo, 2 de agosto de 2026, nos reuniremos como casa para um culto de celebracao e ceia. Um tempo para adorar, lembrar de Jesus e viver comunhao como familia espiritual.",
    location: "Rua Orlando Silva 9, Engenho - Itaguai, RJ",
    image: "/media/domingo-ceia-2026-08-02.png",
    status: "Proximo domingo",
    action: "Planejar visita",
    href: "/contato",
    paymentMethods: [] as string[],
  },
  {
    id: "comunhao-dos-homens-2026",
    date: "22 de agosto de 2026",
    day: "Somente para os homens",
    title: "Comunhao dos Homens",
    description:
      "Teremos um tempo precioso de comunhao no Sitio Rancho Moura. Almoco com churrasco e cafe da tarde por R$130,00, com possibilidade de parcelamento no cartao de credito. Entre em contato e garanta sua vaga.",
    location: "Sitio Rancho Moura",
    image: "/media/aguardando-foto-oficial.svg",
    status: "Inscricoes abertas",
    action: "Reservar vaga",
    href: "/contato",
    paymentMethods: ["Pix", "Credito"],
  },
  {
    id: "batismo-2026-08-02",
    date: "2 de agosto de 2026",
    day: "Domingo as 9h",
    title: "Batismo",
    description:
      "Batismo no domingo, 2 de agosto de 2026, as 9h. \"Digo a verdade: ninguem pode entrar no reino de Deus se nao nascer da agua e do Espirito.\" Joao 3:5.",
    location: "Rua Presidente Vargas, 130",
    image: "/media/batismo-2026-08-02.jpg",
    status: "Proximo evento",
    action: "Quero participar",
    href: "/contato",
    paymentMethods: [] as string[],
  },
];

export const bookGallery = [
  "/media/livro-glaucio-1.png",
  "/media/livro-glaucio-2.png",
  "/media/livro-glaucio-3.png",
] as const;

export const products = [
  ["livro-glaucio", "Cumpra plenamente o seu ministerio", "Livros", "Livro de Glaucio Muniz em destaque na casa e na loja, apresentado em um carrossel com fotos reais.", "copper"],
  ["camiseta", "Camiseta Aprisco", "Vestuario", "Identidade que acompanha voce.", "ivory"],
  ["caneca", "Caneca Aprisco", "Casa", "Comunhao ao redor da mesa.", "teal"],
] as const;

export const beliefs = [
  ["01", "Jesus no centro", "Tudo comeca, permanece e encontra sentido em Jesus."],
  ["02", "Cada membro um sacerdote", "Acreditamos em uma igreja onde cada pessoa serve, amadurece e responde ao chamado de Deus."],
  ["03", "Cada casa uma extensao da igreja", "Vivemos discipulado, cuidado e comunhao nas celulas e na vida diaria."],
  ["04", "Salvar, discipular, treinar, enviar e sustentar", "Nossa missao ganha forma quando pessoas sao cuidadas e enviadas pelo poder do Espirito Santo."],
] as const;

