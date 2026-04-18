
export type Social = {
  platform: 'twitter' | 'youtube' | 'twitch' | 'tiktok' | 'instagram' | 'bluesky';
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
    title: 'Emissária Tecnológica',
    description: 'Sophia era uma mulher que não tinha perspectiva de vida quando acontecimentos muito marcantes ocorreram em sua infância. Viu que o mundo perecia, por ideologia, por sistemas... por outros seres humanos. Por motivos pessoais e dando uma continuação ao legado de Johnny Silverhand, decidiu que seria ao fim não apenas das corporações, mas de tudo que gera desigualdade entre as pessoas. A solução não está no diálogo, está em balas, golpes e explosões, e no final, sobraria aquilo que Johnny imaginou como um conceito de paz: Campos verdes, sem poluição, sem tristeza, sem roubo de terras... Que a utopia surja com muita dor e suor, pois só assim para que um novo mundo floresça! Apesar dessa filosofia, Sophia tem um desejo muito forte pro cromos não por cumprir aquilo que prometeu a si mesma, mas apenas por desejo de poder, afastando-se ainda mais de sua humanidade.',
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
    description: 'Os primeiros anjos ficaram com cada conceito que constitui o universo, no meu caso, fiquei com a realidade, mas ao descer ao mundo humano, eu perdi toda a minha memória e ao longo dos anos fui ganhando mais conhecimento sobre o que eu era e aperfeiçoando.\nPoderes: Definição a realidade, percepção a realidade, transformação, criação, manipulação a realidade, influência, adaptação, abstração, predição, ilusão, imortalidade...',
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
    description: 'Joy possui uma pedra mística em sua testa, sendo a única tendo a mesma. Ela não sabia o que era aquilo pois desde pequena nunca tinha ocorrido nada, até ela sentir uma explosão de sentimentos ao perder uma pessoa importante fazendo um portal se abrir jogando ela de universo em universo. Em cada universo existe outra versão dela, inclusive uma versão má que tenta matar as outras Joy. Em cada universo ela pode ter uma forma diferente, como no mundo humano virando um gato e etc.',
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
  {
    id: 'aizen-nozumi',
    name: 'Aizen Nozomi',
    title: 'Emissário da Esperança',
    description: 'Aizen Nozomi é Filho das Entidades da Positividade e da Negatividade, nascido para cumprir o objetivo de Encher o Mundo de Esperança, porém seu Irmão Gêmeo Yozora Zetsubou tem o plano de condenar o mundo no completo desespero. Para impedir isso aizen decide espalhar esperança pelo mundo atras das redes sociais e laços de amizade para conseguir deter os planos do seu irmão.',
    imageId: 'aizen-nozumi-profile',
    statusIconId: 'aizen-nozumi-status-icon',
    socials: [
      { platform: 'twitch', url: 'https://www.twitch.tv/aizennozomi' },
      { platform: 'youtube', url: 'https://www.youtube.com/@AizenNozomi' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@aizennozomi' },
      { platform: 'twitter', url: 'https://x.com/AizenNozomi' },
      { platform: 'instagram', url: 'https://www.instagram.com/aizennozomi/' },
    ],
    color: '#8B9BAB',
  },
];

export const fourthGeneration: Emissary[] = [
  {
    id: 'yilman',
    name: 'Yilman Lennus',
    title: 'Emissário Arcano',
    description: 'Yilman Lennus, era um elfo sem talento para magia, encontra um anel misterioso em uma caverna esquecida e passa a ter visões da destruição de sua cidade capital. Ignorado pelos anciãos por ser descredibilizado, ele retorna ao local e toma o anel para si, na qual desperta uma entidade sombria que lhe oferece um pacto. Ao retornar, encontra sua cidade em chamas e, tomado pelo desespero, aceita o poder da entidade para se redimir. Dessa forma conquista a habilidade de manipular a mana devido aos sacrifícios feitos mesmo que de forma involuntária',
    imageId: 'yilman-profile',
    statusIconId: 'yilman-status-icon',
    socials: [
      { platform: 'twitch', url: 'https://www.twitch.tv/yilmanlennusvt' },
      { platform: 'twitter', url: 'https://x.com/yilmanlennusvt' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@yilmanlennus' },
      { platform: 'instagram', url: 'https://www.instagram.com/yilmanlennusvt/' },
    ],
    color: '#ACAA49',
  },
  {
    id: 'professor',
    name: 'Lucídius',
    title: 'Emissário do Conhecimento',
    description: 'Lucídius é um Anjo Malakin, dedicado a buscar e guardar os conhecimentos do universo numa biblioteca mágica. Ele está vagando entre os seres humanos desde a invenção da Escrita, em 4500 a.C., ajudando os humanos através da passagem do tempo. Além de ser atualmente um professor de História, Vtuber e Bibliotecário.',
    imageId: 'professor-profile',
    statusIconId: 'professor-status-icon',
    socials: [
      { platform: 'youtube', url: 'https://www.youtube.com/@LucidiusVT' },
      { platform: 'twitter', url: 'https://x.com/Lucidius_VT' },
      { platform: 'bluesky', url: 'https://bsky.app/profile/lucidiusvt.bsky.social' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@prof_lucidius_vt' },
      { platform: 'instagram', url: 'https://www.instagram.com/lucidius.vt/' },
    ],
    color: '#394934',
  },
];

export const emissaries: Emissary[] = [...firstGeneration, ...secondGeneration, ...thirdGeneration, ...fourthGeneration];

export const scheduleByDay: { [key: string]: ScheduleEntry[] } = {
  "Segunda": [
    { id: 22, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 29, vtuber: 'Kora', time: '15:00', platform: 'Twitch', link: 'https://www.twitch.tv/koracrw_' },
    { id: 32, vtuber: 'Daud', time: '19:00 / 20:00', platform: 'Twitch', link: 'https://www.twitch.tv/ddaud96' },
    { id: 37, vtuber: 'Lucídius', time: '19:00 - 22:00', platform: 'Twitch', link: 'https://www.twitch.tv/lucidiusvt' },
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
  "Quarta": [
    { id: 24, vtuber: 'Megara LePaon', time: '13:30', platform: 'Twitch', link: 'https://www.twitch.tv/meglepaon' },
    { id: 34, vtuber: 'Daud', time: '19:00 / 20:00', platform: 'Twitch', link: 'https://www.twitch.tv/ddaud96' },
    { id: 38, vtuber: 'Lucídius', time: '19:00 - 22:00', platform: 'Twitch', link: 'https://www.twitch.tv/lucidiusvt' },
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
    { id: 39, vtuber: 'Lucídius', time: '19:00 - 22:00', platform: 'Twitch', link: 'https://www.twitch.tv/lucidiusvt' },
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


    
    
