/**
 * EDITE AQUI: todas as informações do site ficam neste arquivo.
 */

export const site = {
  brandName: "Kesia Nascimento",
  role: "Lash Designer",
  city: "Serra - ES",
  address: "R Antônio Francisco Vecci 35",
  whatsapp: "5527996316204",

  whatsappMessage:
    "Oi! Tudo bem? Gostaria de agendar um horário com você. Quais horários estão disponíveis?",

  instagram: "https://instagram.com/kesia_lashstudio",
  instagramHandle: "@kesia_lashstudio",
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export function whatsappModelLink(modelName: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Olá! Tudo bem?  Gostaria de agendar um horário e fazer o modelo ${modelName}.`,
  )}`;
}

/** Catálogo de cílios — preços e manutenções */
export const catalog = [
  {
    name: "Volume brasileiro",
    price: "R$ 100",
    description: "Efeito preenchido e leve, com fios em Y que trazem densidade sem peso.",
    maintenance: [
      { period: "15 dias", price: "R$ 50" },
      { period: "20 dias", price: "R$ 80" },
    ],
  },
  {
    name: "Volume egípcio 3D",
    price: "R$ 120",
    description: "Fios alongados e alinhados, com o olhar puxado e marcante do efeito egípcio.",
    maintenance: [
      { period: "15 dias", price: "R$ 90" },
      { period: "20 dias", price: "R$ 110" },
    ],
  },
  {
    name: "Volume glamour 5D",
    price: "R$ 150",
    description: "Máxima densidade e curvatura, para um olhar intenso e sofisticado.",
    maintenance: [
      { period: "15 dias", price: "R$ 100" },
      { period: "20 dias", price: "R$ 120" },
    ],
  },
];

export const services = [
  {
    name: "Alongamento de cílios",
    description: "Fio a fio aplicado com precisão, respeitando o desenho natural do seu olhar.",
  },
  {
    name: "Volume brasileiro",
    description: "Efeito preenchido e leve, com fios em Y que trazem densidade sem peso.",
  },
  {
    name: "Volume híbrido",
    description: "A união entre o clássico e o volume, para um resultado marcante e equilibrado.",
  },
  {
    name: "Manutenção",
    description: "Reposição periódica dos fios para manter o acabamento sempre impecável.",
  },
  {
    name: "Remoção",
    description: "Procedimento seguro e delicado, preservando a saúde dos cílios naturais.",
  },
];

export const differentials = [
  {
    title: "Atendimento personalizado",
    text: "Cada mapping é desenhado para o seu rosto e o seu estilo.",
  },
  {
    title: "Ambiente confortável",
    text: "Espaço reservado, silencioso e pensado para o seu descanso.",
  },
  {
    title: "Higiene e segurança",
    text: "Protocolos rigorosos e materiais esterilizados a cada sessão.",
  },
  {
    title: "Acabamento delicado",
    text: "Fios alinhados, isolamento perfeito e zero desconforto.",
  },
  {
    title: "Resultado natural",
    text: "Sofisticação discreta, valorizando a sua beleza — nunca disfarçando.",
  },
];

// Depoimentos de exemplo —
export const testimonials = [
  {
    quote:
      "Saí do atendimento me sentindo outra pessoa. O cuidado com cada detalhe é impressionante.",
    author: "Cliente Karol",
  },
  {
    quote: "Ficou exatamente como eu queria: natural, leve e elegante. Já virei cliente fiel.",
    author: "Cliente Mariana",
  },
  {
    quote: "Ambiente acolhedor e um profissionalismo raro. Recomendo de olhos fechados.",
    author: "Cliente Adriele",
  },
];
