
export type Social = {
  platform: 'twitter' | 'youtube' | 'twitch' | 'tiktok';
  url: string;
};

export type Emissary = {
  id: string;
  name: string;
  title?: string;
  description: string;
  imageId: string;
  statusIconId?: string;
  socials: Social[];
  color: string;
  schedule_note?: string;
};

export type ScheduleEntry = {
  id: number;
  vtuber: string;
  time: string;
  platform: string;
  link: string;
};

export type DailySchedule = {
  day: string;
  schedules: ScheduleEntry[];
};


export const firstGeneration: Emissary[] = [
  {
    id: 'manzilly',
    name: 'Manzilly',
    title: 'Deus dos Emissários',
    description: 'Manzilly é o Deus de todos os aspectos do prazer. Ele é uma entidade de beleza e charme inigualáveis. Adquirindo uma forma humana, ele usa voz, carisma e seu corpo para arrebatar pouco a pouco seguidores fiéis por todo o mundo. Por que um Deus está fazendo lives? Para ser a referência para todos os Vtubers que querem um dia alcançar o sucesso. Em suas lives podem esperar muito bate papo, jogos ruins e muito resPEITO.',
    imageId: 'manzilly-profile',
    statusIconId: 'manzilly-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/ManzillyVT' },
      { platform: 'youtube', url: 'https://www.youtube.com/@ManzillyASMR' },
      { platform: 'twitch', url: 'https://www.twitch.tv/manzillyvt' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@manzilly' },
    ],
    color: '#FFD700', // Amarelo
  },
  {
    id: 'frakyel',
    name: 'Frakyel',
    title: 'Emissário das Flores',
    description: 'Um fantasma que cuida de um jardim esquecido, um lugar misterioso e isolado, mas confortável para todos os visitantes',
    imageId: 'frakyel-profile',
    statusIconId: 'frakyel-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/frakyel' },
      { platform: 'youtube', url: 'https://www.youtube.com/@frakyel' },
      { platform: 'twitch', url: 'https://www.twitch.tv/frakyel/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@frakyel?is_from_webapp=1&sender_device=pc' },
    ],
    color: '#ADD8E6', // Azul Claro
  },
  {
    id: 'daud',
    name: 'Daud',
    title: 'Emissário Império',
    description: `Daud Van Ébano é um half-elf, o sexto filho e bastardo da Casa de Ébano, uma das cinco Grandes Casas do Império de Thrantor.

Diferente de seus irmãos e dos membros das outras Cinco Casas, Daud era uma criança que não havia despertado afinidade com a mana nem o poder único dos membros de sua Casa. Isso fez com que seu pai rapidamente perdesse o pouco interesse que tinha nele. Mesmo assim, Daud seria forçado a aprender a lutar e a aceitar participar de missões extremamente perigosas com os cavaleiros da família desde a infância, apenas para que eventualmente morresse em alguma dessas missões.

Mais tarde, Daud descobriria, por meio de eventos catastróficos, que na verdade sempre possuiu mana, e que muitos desastres poderiam ter sido evitados se os nobres que detinham todo o poder não fossem porcos corruptos, cegos pela ganância e pelo orgulho. Quando, então, o Império se tornou um total caos, repleto de morte, chamas e destruição, o bastardo de Ébano era um dos poucos que conseguiriam ser fortes o suficiente para pôr fim à última catástrofe e, com seu poder, reconstruir e se tornar o próprio Império.`,
    imageId: 'daud-profile',
    statusIconId: 'daud-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/DDaud96' },
      { platform: 'youtube', url: 'https://www.youtube.com/@ddaud96' },
      { platform: 'twitch', url: 'https://www.twitch.tv/ddaud96' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@ttv_ddaud96' },
    ],
    color: '#FFC0CB', // Rosa
  },
  {
    id: 'karmina',
    name: 'Karmina',
    title: 'Emissário Dragão Cromado',
    description: 'Em breve',
    imageId: 'karmina-profile',
    statusIconId: 'karmina-status-icon',
    socials: [
      { platform: 'twitch', url: 'https://www.twitch.tv/karminavt' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@karminavt' },
    ],
    color: '#B22222', // Vermelho metálico (usando Firebrick)
  },
  {
    id: 'adrean',
    name: 'Adrean',
    title: 'Emissário Celestial',
    description: 'Em breve',
    imageId: 'adrean-profile',
    statusIconId: 'adrean-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'twitch', url: 'https://twitch.tv' },
      { platform: 'tiktok', url: 'https://tiktok.com' },
    ],
    color: '#556B2F', // Verde Musgo
  },
  {
    id: 'roxdale',
    name: 'Roxdale',
    title: 'Emissário Vermelho',
    description: 'Roxdale é o Almirante da Frota Espacial de Exodus e capitão da nave Promnent-. Uma lenda viva envolta em uniformes impecáveis e segredos guardados atrás dos olhos de rubi. Chamado de Monarca Celeste, já libertou mundos inteiros e com isso, garantiu seu nome entre os ecos do cosmos',
    imageId: 'roxdale-profile',
    statusIconId: 'roxdale-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/AlmtRoxdale' },
      { platform: 'youtube', url: 'https://www.youtube.com/@AlmtRox' },
      { platform: 'twitch', url: 'https://www.twitch.tv/roxdale' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@roxdale1' },
    ],
    color: '#800000', // Vermelho vinho
    schedule_note: 'Sem Horário Fixo',
  },
];

export const secondGeneration: Emissary[] = [
  {
    id: 'ksano',
    name: 'Ksano',
    title: 'Emissário das Estrelas',
    description: 'Oioi! Meu nome é Ksano, sou um elfo estelar que viaja entre os mundos. Estou aqui para inspirar você e ajudar a ascender a estrela que existe dentro de você. Acredito que todos têm uma luz própria, mesmo quando ela parece apagada. Através de conversas, gameplays e momentos divertidos, quero despertar essa energia interior. Juntos, podemos crescer, sonhar e brilhar cada vez mais.',
    imageId: 'ksano-profile',
    statusIconId: 'ksano-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/Ksan0o' },
      { platform: 'youtube', url: 'https://www.youtube.com/@ks4no0/featured' },
      { platform: 'twitch', url: 'https://www.twitch.tv/Ksanovt' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@ksanovt?is_from_webapp=1&sender_device=pc' },
    ],
    color: '#8A2BE2', // Roxo
  },
  {
    id: 'hiroguighost',
    name: 'Hiroguighost',
    title: 'Emissário do Crepúsculo',
    description: 'Hiro é um jovem marcado por um despertar traumático que lhe concedeu poderes de gelo, mas ao custo da perda dos pais e da transformação de seu corpo. Após enfrentar o luto e o isolamento, ele começa a se reintegrar ao mundo, encontrando apoio no tio, segurança no Centro de Pesquisa e esperança nas amizades que constrói na cidade. Sua jornada é de dor, descoberta e, sobretudo, de busca por pertencimento e propósito.',
    imageId: 'hiroguighost-profile',
    statusIconId: 'hiroguighost-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/Hiroguighost' },
      { platform: 'twitch', url: 'https://www.twitch.tv/hiroguighost' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@hiroguighost?is_from_webapp=1&sender_device=pc' },
    ],
    color: '#FFFFFF', // Branco
    schedule_note: 'Sem Horário Fixo',
  },
  {
    id: 'kora',
    name: 'Kora',
    title: 'Emissário Elemental',
    description: 'Lian Ming é o filho bastardo do Lorde Dragão Loong com uma dançarina. Após a morte da mãe, armada pela esposa de Loong, Madame Yu, Loong adotou Lian Ming como filho, mas não lhe contou a verdade sobre a sua identidade e sobre ser o seu pai biológico, sendo um segredo que o mesmo guardaria a 7 chaves dentro de si. Lian Ming cresceu no palácio, sendo esnobado pelo seu meio-irmão mais novo e pela sua madrasta, tendo apenas a companhia de dois discípulos do seu pai, chamados Fei e Feng. Estes dois gémeos juraram proteger o rapaz e, desde então, tornaram-se os seus melhores amigos. Lian Ming recebeu a tutela de outro discípulo do seu pai, chamado Yanluo. Este, futuramente, seria acusado de matar o Lorde Loong e Lian Ming ao protegê-lo, sendo banido do Reino Acima das Nuvens e condenado a fugir dos imperiais do continente, à procura de Yanluo e da profecia que o seu pai lhe confiou antes de morrer. Mudando o seu nome original para Kora, e começando sua jornada a partir daí com Fei e Feng ao seu lado...',
    imageId: 'kora-profile',
    statusIconId: 'kora-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/_koracrw' },
      { platform: 'twitch', url: 'https://www.twitch.tv/koracrw_' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@koracrw_?is_from_webapp=1&sender_device=pc' },
    ],
    color: '#0CB7F2',
  },
  {
    id: 'joy',
    name: 'Joy',
    title: 'Emissária Multiversal',
    description: 'Em breve',
    imageId: 'joy-profile',
    statusIconId: 'joy-status-icon',
    socials: [
      { platform: 'twitch', url: 'https://www.twitch.tv/joyjoyvt' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@joyjoyvt' },
      { platform: 'youtube', url: 'https://www.youtube.com/@joydubsofc' },
    ],
    color: '#FFB6C1', // Rosa Esmalte (usando LightPink)
  },
  {
    id: 'lewis',
    name: 'Lewis',
    title: 'Emissário da Trilha Selvagem',
    description: 'Lewis é um panda vermelho, que ama aventuras e fazer novas amizades, seu sonho é guiar todos para uma comunidade onde todos possam ser amigos, ama jogar jogos Indie e de puzzle, venha ser meu amigo também, eu irei guiar vocês nessa aventura que é a amizade.',
    imageId: 'littleliwes-profile',
    statusIconId: 'lewis-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/LittleLewisVT?s=20' },
      { platform: 'twitch', url: 'https://www.twitch.tv/littlelewisvt' },
    ],
    color: '#FFA500', // Laranja
  },
];

export const thirdGeneration: Emissary[] = [
  {
    id: 'yokiro',
    name: 'Yokiro',
    title: 'Emissário dos Viajantes',
    description: 'Yokiro é o andarilho de terno e mente em constante colapso criativo. Já foi um CLT qualquer, mas trocou o relógio por liberdade e o tédio por café amargo. Quem é Yokiro? Nem ele sabe ao certo. Talvez um filósofo falido, talvez só alguém tentando entender por que o mundo faz tanto barulho.',
    imageId: 'yokiro-profile',
    statusIconId: 'yokiro-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/YokiroPng' },
      { platform: 'youtube', url: 'https://www.youtube.com/@Yokiro_png' },
      { platform: 'twitch', url: 'https://www.twitch.tv/yokiro_png' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@yokiro.pngtuber?is_from_webapp=1&sender_device=pc' },
    ],
    color: '#6F4E37', // Marrom Café
    schedule_note: 'Sem Horário Fixo',
  },
  {
    id: 'megara',
    name: 'Megara LePaon',
    title: 'Emissária da Prosperidade',
    description: 'Megara Le Paon é uma Mulher Feral (Pavão Real), com sua energia um tanto quanto caótica mas trazendo uma elegância singular. Em suas lives, entrega seu carisma, cantoria e loucura enquanto joga assim espalhando prosperidade e criando proximidade com seus peti paons, criando um espaço acolhedor, putífero e onde cada um é recebido com fertilidade, aBUNDÂNcia e MUITO resPEITO.',
    imageId: 'megara-profile',
    statusIconId: 'megara-status-icon',
    socials: [
      { platform: 'twitter', url: 'https://x.com/meglepaon' },
      { platform: 'youtube', url: 'https://www.youtube.com/@Megaralepaon' },
      { platform: 'twitch', url: 'https://www.twitch.tv/meglepaon' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@megaralepaon?is_from_webapp=1&sender_device=pc' },
    ],
    color: '#05b277',
  },
];

export const emissaries: Emissary[] = [...firstGeneration, ...secondGeneration, ...thirdGeneration];

export const scheduleByDay: { [key: string]: ScheduleEntry[] } = {
  "Segunda-feira": [
    { id: 22, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 29, vtuber: 'Kora', time: '15:00', platform: 'Twitch', link: 'https://www.twitch.tv/koracrw_' },
    { id: 32, vtuber: 'Daud', time: '19:00 / 20:00', platform: 'Twitch', link: 'https://www.twitch.tv/ddaud96' },
    { id: 7, vtuber: 'Ksano', time: '20:00', platform: 'Twitch', link: 'https://www.twitch.tv/Ksanovt' },
    { id: 13, vtuber: 'Frakyel', time: '21:00 - 00:00', platform: 'Twitch', link: 'https://www.twitch.tv/frakyel/' },
  ],
  "Terça-feira": [
    { id: 23, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 48, vtuber: 'Kora', time: '15:00', platform: 'Twitch', link: 'https://www.twitch.tv/koracrw_' },
    { id: 33, vtuber: 'Daud', time: '19:00 / 20:00', platform: 'Twitch', link: 'https://www.twitch.tv/ddaud96' },
    { id: 8, vtuber: 'Ksano', time: '20:00', platform: 'Twitch', link: 'https://www.twitch.tv/Ksanovt' },
    { id: 14, vtuber: 'Frakyel', time: '21:00 - 00:00', platform: 'Twitch', link: 'https://www.twitch.tv/frakyel/' },
  ],
  "Quarta-feira": [
    { id: 24, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 34, vtuber: 'Daud', time: '19:00 / 20:00', platform: 'Twitch', link: 'https://www.twitch.tv/ddaud96' },
    { id: 9, vtuber: 'Ksano', time: '20:00', platform: 'Twitch', link: 'https://www.twitch.tv/Ksanovt' },
    { id: 15, vtuber: 'Frakyel', time: '21:00 - 00:00', platform: 'Twitch', link: 'https://www.twitch.tv/frakyel/' },
  ],
  "Quinta-feira": [
    { id: 25, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 18, vtuber: 'Manzilly', time: '19:00', platform: 'Twitch', link: 'https://www.twitch.tv/manzillyvt' },
    { id: 35, vtuber: 'Daud', time: '19:00 / 20:00', platform: 'Twitch', link: 'https://www.twitch.tv/ddaud96' },
    { id: 10, vtuber: 'Ksano', time: '20:00', platform: 'Twitch', link: 'https://www.twitch.tv/Ksanovt' },
    { id: 16, vtuber: 'Frakyel', time: '21:00 - 00:00', platform: 'Twitch', link: 'https://www.twitch.tv/frakyel/' },
  ],
  "Sexta-feira": [
    { id: 26, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 19, vtuber: 'Manzilly', time: '19:00', platform: 'Twitch', link: 'https://www.twitch.tv/manzillyvt' },
    { id: 36, vtuber: 'Daud', time: '19:00 / 20:00', platform: 'Twitch', link: 'https://www.twitch.tv/ddaud96' },
    { id: 11, vtuber: 'Ksano', time: '20:00', platform: 'Twitch', link: 'https://www.twitch.tv/Ksanovt' },
    { id: 17, vtuber: 'Frakyel', time: '21:00 - 00:00', platform: 'Twitch', link: 'https://www.twitch.tv/frakyel/' },
  ],
  "Sábado": [
    { id: 27, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 20, vtuber: 'Manzilly', time: '19:00', platform: 'Twitch', link: 'https://www.twitch.tv/manzillyvt' },
  ],
  "Domingo": [
    { id: 28, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 21, vtuber: 'Manzilly', time: '19:00', platform: 'Twitch', link: 'https://www.twitch.tv/manzillyvt' },
  ]
};


    
    
