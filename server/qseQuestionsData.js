/**
 * BANCO OFICIAL DE PERGUNTAS — MINIGAME "QUEM SOU EU? 🧠🥧"
 * Seminário de Bases Celulares e Embriologia — Grupo 5 (Odontologia)
 *
 * Temas obrigatórios:
 * 1. Gêmeos siameses
 * 2. Gêmeos parasitas
 * 3. Superfecundação heteropaternal
 * 4. Superfetação
 * 5. Feto papiráceo
 * 6. Síndrome do gêmeo desaparecido
 * 7. Fetus in fetu
 * 8. Quimerismo humano
 * 9. Teratomas
 * 10. Nascimento empelicado
 */

const qseQuestions = [
  // --- GÊMEOS SIAMESES ---
  {
    id: 'qse-01',
    theme: 'Gêmeos siameses',
    category: 'Gêmeos siameses',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou um fenômeno em que dois conceptos monocoriônicos e monoamnióticos compartilham tecidos ou órgãos corporais após a divisão incompleta do disco embrionário bilaminar por volta do décimo terceiro dia pós-fertilização. Quem sou eu?',
    options: [
      'Gêmeos dizigóticos',
      'Gêmeos siameses (conjoined twins)',
      'Feto papiráceo',
      'Superfetação'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Gêmeos siameses originam-se da fissão incompleta do disco embrionário monoamniótico-monocoriônico após o 13º dia de desenvolvimento, resultando na união de partes anatômicas compartilhadas.'
  },
  {
    id: 'qse-02',
    theme: 'Gêmeos siameses',
    category: 'Gêmeos siameses',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Sou uma classificação de gêmeos siameses unidos pela cabeça, compartilhando calvária e porções do encéfalo e circulação dural, com grande relevância cirúrgica craniofacial e odontológica. Quem sou eu?',
    options: [
      'Toracópagos',
      'Craniópagos',
      'Isquiópagos',
      'Onfalópagos'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Craniópagos representam os gêmeos siameses unidos pela região craniana, exigindo complexo planejamento interdisciplinar envolvendo cirurgia bucomaxilofacial e neurocirurgia.'
  },

  // --- GÊMEOS PARASITAS ---
  {
    id: 'qse-03',
    theme: 'Gêmeos parasitas',
    category: 'Gêmeos parasitas',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou uma condição em que um dos conceptos para de se desenvolver completamente e permanece como uma massa rudimentar externa anexada ao corpo do gêmeo autossito (hospedeiro), dependendo totalmente da sua circulação sanguínea. Quem sou eu?',
    options: [
      'Quimerismo tetragamético',
      'Gêmeo parasita (heterópagos)',
      'Nascimento empelicado',
      'Superfecundação homopaternal'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Gêmeos parasitas (heterópagos) ocorrem quando um concepto assimétrico e severamente malformado permanece aderido externamente ao gêmeo dominante viável (autossito).'
  },
  {
    id: 'qse-04',
    theme: 'Gêmeos parasitas',
    category: 'Gêmeos parasitas',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Sou a forma de gêmeo parasita anexada especificamente à mandíbula, maxila ou soalho bucal do autossito, apresentando dentes ectópicos, osso alveolar e cartilagem rudimentar. Na odontologia, meu nome técnico é epignato. Quem sou eu?',
    options: [
      'Craniófago posterior',
      'Epignathus (Gêmeo parasita orofacial)',
      'Teratoma sacro-coccígeo',
      'Feto acárdico amorfo'
    ],
    correctAnswer: 1,
    scientificExplanation: 'O Epignathus é um gêmeo parasita/teratoma teratóide inserido no complexo craniofacial, especificamente no palato ou mandíbula, com presença de estruturas orais ectópicas.'
  },

  // --- SUPERFECUNDAÇÃO HETEROPATERNAL ---
  {
    id: 'qse-05',
    theme: 'Superfecundação heteropaternal',
    category: 'Superfecundação heteropaternal',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Aconteço quando dois óvulos liberados no mesmo ciclo ovariano são fecundados em relações sexuais distintas por espermatozoides de homens diferentes, gerando gêmeos bivitelinos com pais biológicos diferentes. Quem sou eu?',
    options: [
      'Superfetação',
      'Superfecundação heteropaternal',
      'Quimerismo humano',
      'Síndrome do gêmeo desaparecido'
    ],
    correctAnswer: 1,
    scientificExplanation: 'A superfecundação heteropaternal ocorre quando múltiplos ovócitos de uma mesma ovulação são fertilizados por gametas masculinos de parceiros distintos em um curto intervalo de tempo.'
  },
  {
    id: 'qse-06',
    theme: 'Superfecundação heteropaternal',
    category: 'Superfecundação heteropaternal',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Na análise de DNA e tipagem genética de arcada dentária, demonstro que dois conceptos nascidos do mesmo parto compartilham apenas 25% de consanguinidade média (meio-irmãos) ao invés de 50%. Quem sou eu?',
    options: [
      'Quimera microquimérica',
      'Superfecundação heteropaternal',
      'Gêmeos monozigóticos espelhados',
      'Feto papiráceo'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Como os conceptos compartilham apenas o pool genético materno e possuem genomas paternos distintos, seu grau de parentesco biológico equivale ao de meio-irmãos.'
  },

  // --- SUPERFETAÇÃO ---
  {
    id: 'qse-07',
    theme: 'Superfetação',
    category: 'Superfetação',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou o fenômeno extraordinário e raríssimo em humanos no qual ocorre uma segunda ovulação e fertilização quando a mulher já está grávida, implantando um novo embrião com idade gestacional semanas mais jovem. Quem sou eu?',
    options: [
      'Superfecundação',
      'Superfetação',
      'Gêmeos evanescentes',
      'Mola hidatiforme'
    ],
    correctAnswer: 1,
    scientificExplanation: 'A superfetação exige a quebra de três barreiras fisiológicas: nova ovulação durante a gestação, passagem de espermatozoides pelo muco cervical espessado e implantação no endométrio já ocupado.'
  },
  {
    id: 'qse-08',
    theme: 'Superfetação',
    category: 'Superfetação',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? No ultrassom e na odontogênese, meus conceptos apresentam discrepâncias cronológicas reais de biometria e cronologia de mineralização dos germes dentários de 3 a 5 semanas, provando que foram concebidos em ciclos menstruais diferentes. Quem sou eu?',
    options: [
      'Restrição de crescimento intrauterino seletiva (RCIU)',
      'Superfetação verdadeira',
      'Síndrome de transfusão feto-fetal',
      'Quimerismo de linhagem celular'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Diferente da RCIU, onde há desnutrição de concepto síncrono, na superfetação há verdadeira assincronia biológica de idade gestacional e maturidade de órgãos.'
  },

  // --- FETO PAPIRÁCEO ---
  {
    id: 'qse-09',
    theme: 'Feto papiráceo',
    category: 'Feto papiráceo',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou o concepto falecido no segundo trimestre de uma gestação múltipla que, pela retenção prolongada e compressão mecânica pelo gêmeo sobrevivente, perde líquido amniótico e se torna achatado e mumificado como pergaminho. Quem sou eu?',
    options: [
      'Fetus in fetu',
      'Feto papiráceo',
      'Teratoma cístico',
      'Litopédio'
    ],
    correctAnswer: 1,
    scientificExplanation: 'O feto papiráceo resulta da morte intrauterina tardia em gestação múltipla; a reabsorção incompleta e a pressão hidrostática do concepto viável desidratam e comprimem o tecido como papel.'
  },
  {
    id: 'qse-10',
    theme: 'Feto papiráceo',
    category: 'Feto papiráceo',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Diferente do gêmeo desaparecido (que some no primeiro trimestre por reabsorção lítica celular), meu esqueleto calcificado e remanescentes cranianos persistem e são entregues na placenta ao final do parto. Quem sou eu?',
    options: [
      'Mola embrionária',
      'Feto papiráceo',
      'Gêmeo parasita endocraniano',
      'Feto macerado asséptico'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Como a morte ocorre após a osteogênese e mineralização esquelética (geralmente > 12-14 semanas), o tecido ósseo não pode ser reabsorvido por autólise, tornando-se pergamináceo.'
  },

  // --- SÍNDROME DO GÊMEO DESAPARECIDO ---
  {
    id: 'qse-11',
    theme: 'Síndrome do gêmeo desaparecido',
    category: 'Síndrome do gêmeo desaparecido',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou detectado como um segundo saco gestacional no ultrassom inicial de 6 semanas, mas semanas depois desapareço completamente sem deixar restos físicos visíveis, sendo totalmente reabsorvido pelo organismo materno ou pela placenta. Quem sou eu?',
    options: [
      'Feto papiráceo',
      'Síndrome do gêmeo desaparecido (vanishing twin)',
      'Fetus in fetu retroperitoneal',
      'Superfetação precoce'
    ],
    correctAnswer: 1,
    scientificExplanation: 'A síndrome do gêmeo evanescente ocorre no 1º trimestre, onde a morte celular programada e enzimas líticas levam à completa reabsorção tecidual do embrião.'
  },
  {
    id: 'qse-12',
    theme: 'Síndrome do gêmeo desaparecido',
    category: 'Síndrome do gêmeo desaparecido',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? O meu desaparecimento no início do desenvolvimento pode deixar células-tronco no irmão sobrevivente, sendo uma das principais causas fisiológicas do quimerismo genético humano e de discrepâncias em testes de DNA. Quem sou eu?',
    options: [
      'Síndrome do gêmeo desaparecido',
      'Teratoma imaturo congênito',
      'Nascimento empelicado',
      'Transfusão feto-materna'
    ],
    correctAnswer: 0,
    scientificExplanation: 'A microquimera celular resultante da absorção celular de um gêmeo evanescente pode integrar linhagens hematopoiéticas ou mucosas no irmão sobrevivente.'
  },

  // --- FETUS IN FETU ---
  {
    id: 'qse-13',
    theme: 'Fetus in fetu',
    category: 'Fetus in fetu',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou uma anomalia raríssima em que um gêmeo malformado é incorporado dentro do corpo do irmão sadio durante o dobramento embrionário, localizando-se comumente no abdômen retroperitoneal. Quem sou eu?',
    options: [
      'Gêmeo siamês toracópago',
      'Fetus in fetu',
      'Teratoma maduro',
      'Feto papiráceo'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Fetus in fetu é a inclusão de um feto monozigótico diamniótico dentro do corpo do outro gêmeo em desenvolvimento durante as fases precoces da gastrulação.'
  },
  {
    id: 'qse-14',
    theme: 'Fetus in fetu',
    category: 'Fetus in fetu',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? O critério histopatológico e anatômico essencial que me diferencia de um teratoma comum é a presença de um eixo espinhal rudimentar (vértebras com metameria segmentada) e organização metamerica de tecidos. Quem sou eu?',
    options: [
      'Teratoma sacrococcígeo',
      'Fetus in fetu',
      'Cisto tireoglosso',
      'Hamartoma odontogênico'
    ],
    correctAnswer: 1,
    scientificExplanation: 'A identificação de coluna vertebral estruturada e simetria axial primária é o critério patognomônico de Willis para classificar a massa como Fetus in Fetu e não como teratoma.'
  },

  // --- QUIMERISMO HUMANO ---
  {
    id: 'qse-15',
    theme: 'Quimerismo humano',
    category: 'Quimerismo humano',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou um indivíduo único formado pela fusão de dois embriões geneticamente distintos nos estágios iniciais de mórula ou blastocisto, possuindo duas linhagens de DNA totalmente diferentes no mesmo organismo. Quem sou eu?',
    options: [
      'Mosaico genético',
      'Quimera humana (Quimerismo tetragamético)',
      'Mutante monozigótico',
      'Gêmeo siamês'
    ],
    correctAnswer: 1,
    scientificExplanation: 'O quimerismo tetragamético resulta da fusão precoce de dois zigotos independentes que se unem para formar um único ser vivo com duas populações celulares geneticamente distintas.'
  },
  {
    id: 'qse-16',
    theme: 'Quimerismo humano',
    category: 'Quimerismo humano',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Na Odontologia Legal, posso fazer com que o DNA coletado na saliva da mucosa jugal aponte um perfil genético, enquanto o sangue periférico aponte outro perfil incompatível, confundindo exames de DNA forense. Quem sou eu?',
    options: [
      'Superfetação tardia',
      'Quimerismo humano',
      'Agenesia dentária múltipla',
      'Displasia cleidocraniana'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Indivíduos quiméricos possuem células ectodérmicas (epitélio bucal) com genoma derivado de um zigoto e mesodérmicas (leucócitos sanguíneos) derivadas do outro zigoto original.'
  },

  // --- TERATOMAS ---
  {
    id: 'qse-17',
    theme: 'Teratomas',
    category: 'Teratomas',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou um tumor originado de células germinativas pluripotentes primordiais que derivam dos três folhetos embrionários (ectoderme, mesoderme e endoderme), podendo conter dentes formados, esmalte, cabelos e cartilagem. Quem sou eu?',
    options: [
      'Ameloblastoma',
      'Teratoma',
      'Odontoma composto',
      'Cisto radicular'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Teratomas contêm tecidos maduros ou imaturos derivados de todos os três folhetos germinativos devido à pluripotência desregulada das células germinativas migrantes.'
  },
  {
    id: 'qse-18',
    theme: 'Teratomas',
    category: 'Teratomas',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? No complexo craniofacial e nos teratomas ovarianos/cervicais, posso desenvolver dentes completos com polpa, dentina e esmalte ectópico, devido à indução recíproca entre epitélio odontogênico e ectomesênquima presente na minha massa tumoral. Quem sou eu?',
    options: [
      'Granuloma piogênico',
      'Teratoma maduro cístico (cisto dermoide)',
      'Mixoma odontogênico',
      'Feto papiráceo'
    ],
    correctAnswer: 1,
    scientificExplanation: 'A presença de tecidos dentários em teratomas comprova a capacidade autônoma das cascatas de sinalização (BMP, FGF, Wnt) de induzir amelogênese e odontogênese mesmo fora da cavidade bucal.'
  },

  // --- NASCIMENTO EMPELICADO ---
  {
    id: 'qse-19',
    theme: 'Nascimento empelicado',
    category: 'Nascimento empelicado',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou o evento raro em que o bebê nasce completamente envolvido pela bolsa amniótica intacta, com o líquido amniótico protegendo sua face e sem que a membrana corioamniótica tenha se rompido durante o trabalho de parto. Quem sou eu?',
    options: [
      'Parto pélvico',
      'Nascimento empelicado (parto en caul)',
      'Amniorrexe prematura',
      'Descolamento prematuro da placenta'
    ],
    correctAnswer: 1,
    scientificExplanation: 'O nascimento empelicado ("en caul") ocorre em menos de 1 a cada 80.000 partos, no qual a resiliência mecânica do córion e âmnio mantém a câmara cheia de fluido íntegra até o pós-parto.'
  },
  {
    id: 'qse-20',
    theme: 'Nascimento empelicado',
    category: 'Nascimento empelicado',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Durante meus primeiros segundos fora do útero, meus alvéolos pulmonares permanecem preenchidos por líquido amniótico e continuo recebendo oxigênio e nutrientes exclusivamente pelo cordão umbilical pulsátil até a incisão das membranas. Quem sou eu?',
    options: [
      'Feto com taquipneia transitória',
      'Recém-nascido em parto empelicado',
      'Feto com anencefalia',
      'Concepto prematuro extremo'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Como a bolsa permanece intacta, o reflexo do primeiro suspiro e a transição respiratória cardiopulmonar só são ativados quando a membrana é rompida pelo médico e o ar toca os receptores faciais.'
  },

  // --- RODADA ESPECIAL: DESAFIOS AVANÇADOS (DIFÍCEIS - 30 PONTOS) ---
  {
    id: 'qse-21',
    theme: 'Quimerismo humano',
    category: 'Quimerismo humano',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Sou a manifestação clínica de pele e mucosa bucal em que linhas de migração celular embrionária exibem tonalidades e padrões pigmentares distintos refletindo as duas linhagens de clones celulares divergentes no corpo. Na dermatologia e estomatologia, quem sou eu?',
    options: [
      'Linhas de Blaschko em quimera / mosaicismo',
      'Melanose de Smoker',
      'Leucoplasia pilosa',
      'Tatuagem por amálgama'
    ],
    correctAnswer: 0,
    scientificExplanation: 'As linhas de Blaschko representam as vias anatômicas de proliferação celular clonal da crista neural e ectoderme durante a embriogênese, visualizáveis em casos de quimerismo.'
  },
  {
    id: 'qse-22',
    theme: 'Teratomas',
    category: 'Teratomas',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Sou uma complicação rara em que um teratoma ovariano ou mediastinal maduro secreta anticorpos contra receptores NMDA ou hormônios tireoidianos (struma ovarii), gerando manifestações neuropsiquiátricas graves e xerostomia na odontologia. Quem sou eu?',
    options: [
      'Encefalite paraneoplásica associada a teratoma',
      'Síndrome de Sjögren congênita',
      'Síndrome de Apert',
      'Hiperplasia gengival medicamentosa'
    ],
    correctAnswer: 0,
    scientificExplanation: 'Teratomas podem abrigar tecido cerebral ectópico que induz a produção de autoanticorpos contra receptores NMDA neuronais, provocando encefalite autoimune paraneoplásica.'
  },
  {
    id: 'qse-23',
    theme: 'Fetus in fetu',
    category: 'Fetus in fetu',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Ao contrário dos teratomas comuns que são verdadeiras neoplasias com risco de malignização em 10% dos casos, tenho natureza hamartomatosa benigna derivada de uma embriogênese anômala interrompida com revestimento amniótico próprio. Quem sou eu?',
    options: [
      'Fetus in fetu',
      'Cordoma sacral',
      'Corioblastoma',
      'Tumor de Wilms'
    ],
    correctAnswer: 0,
    scientificExplanation: 'Fetus in fetu é um concepto malformado encapsulado, raramente exibindo transformação maligna, distinguindo-se oncologicamente dos teratomas verdadeiros.'
  },
  {
    id: 'qse-24',
    theme: 'Superfecundação heteropaternal',
    category: 'Superfecundação heteropaternal',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? O meu tempo de janela biológica é limitado pela viabilidade de até 24 horas do ovócito secundário na tuba uterina e pela capacidade de fertilização do sêmen de até 5 dias no trato reprodutor feminino. Quem sou eu?',
    options: [
      'Janela de fertilização da superfecundação',
      'Tempo de clivagem do blastocisto',
      'Período refratário da gastrulação',
      'Janela de implantação tardia da superfetação'
    ],
    correctAnswer: 0,
    scientificExplanation: 'A superfecundação exige coitos com indivíduos distintos dentro da estreita janela em que dois ovócitos de uma mesma ovulação ainda retêm viabilidade funcional e capacidade de fusão espermática.'
  }
];

module.exports = qseQuestions;
