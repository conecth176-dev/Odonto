/**
 * BANCO OFICIAL DE PERGUNTAS — MINIGAME "QUEM SOU EU? 🧠🥧"
 * Seminário de Bases Celulares e Embriologia — Grupo 5 (Odontologia)
 *
 * Estrutura rigorosamente balanceada:
 * - 10 FÁCEIS (10 pontos cada)
 * - 10 MÉDIAS (20 pontos cada)
 * - 10 DIFÍCEIS (30 pontos cada)
 * Total: 30 Questões (1 Fácil, 1 Média e 1 Difícil para cada um dos 10 temas)
 */

const qseQuestions = [
  // =========================================================================
  // NÍVEL 1: 10 PERGUNTAS FÁCEIS (10 PONTOS)
  // =========================================================================
  {
    id: 'qse-facil-01',
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
    id: 'qse-facil-02',
    theme: 'Gêmeos parasitas',
    category: 'Gêmeos parasitas',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou uma condição em que um dos conceptos para de se desenvolver completamente e permanece como uma massa rudimentar externa anexada ao corpo do gêmeo autossito (hospedeiro), dependendo totalmente da sua circulação sanguínea. Quem sou eu?',
    options: [
      'Gêmeos dizigóticos normais',
      'Feto papiráceo intracavitário',
      'Gêmeo parasita (heterópagos)',
      'Quimerismo tetragamético'
    ],
    correctAnswer: 2,
    scientificExplanation: 'Gêmeos parasitas (heterópagos) ocorrem quando um concepto assimétrico e severamente malformado permanece aderido externamente ao gêmeo dominante viável (autossito).'
  },
  {
    id: 'qse-facil-03',
    theme: 'Superfecundação heteropaternal',
    category: 'Superfecundação heteropaternal',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Aconteço quando dois óvulos liberados no mesmo ciclo ovariano são fecundados em relações sexuais distintas por espermatozoides de homens diferentes, gerando gêmeos bivitelinos com pais biológicos diferentes. Quem sou eu?',
    options: [
      'Superfetação',
      'Gêmeos monozigóticos espelhados',
      'Superfecundação heteropaternal',
      'Quimerismo de linhagem dupla'
    ],
    correctAnswer: 2,
    scientificExplanation: 'A superfecundação heteropaternal acontece na ovulação múltipla sincrônica fertilizada por gametas masculinos de parceiros distintos em coitos próximos.'
  },
  {
    id: 'qse-facil-04',
    theme: 'Superfetação',
    category: 'Superfetação',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou o fenômeno extraordinário e raríssimo em humanos no qual ocorre uma segunda ovulação e fertilização quando a mulher já está grávida, implantando um novo embrião com idade gestacional semanas mais jovem. Quem sou eu?',
    options: [
      'Superfecundação heteropaternal',
      'Superfetação',
      'Síndrome de transfusão feto-fetal',
      'Gêmeos monozigóticos assimétricos'
    ],
    correctAnswer: 1,
    scientificExplanation: 'A superfetação é a concepção de um segundo concepto durante uma gestação já em andamento, resultando em fetos com idades gestacionais cronologicamente divergentes.'
  },
  {
    id: 'qse-facil-05',
    theme: 'Feto papiráceo',
    category: 'Feto papiráceo',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou o concepto falecido no segundo trimestre de uma gestação múltipla que, pela retenção prolongada e compressão mecânica pelo gêmeo sobrevivente, perde líquido amniótico e se torna achatado e mumificado como pergaminho. Quem sou eu?',
    options: [
      'Feto papiráceo',
      'Fetus in fetu',
      'Quimerismo embrionário',
      'Teratoma cístico'
    ],
    correctAnswer: 0,
    scientificExplanation: 'O feto papiráceo é o concepto que sofre óbito após a mineralização esquelética e é mecanicamente comprimido e desidratado contra a parede uterina.'
  },
  {
    id: 'qse-facil-06',
    theme: 'Síndrome do gêmeo desaparecido',
    category: 'Síndrome do gêmeo desaparecido',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou detectado como um segundo saco gestacional no ultrassom inicial de 6 semanas, mas semanas depois desapareço completamente sem deixar restos físicos visíveis, sendo totalmente reabsorvido pelo organismo materno ou pela placenta. Quem sou eu?',
    options: [
      'Feto papiráceo',
      'Síndrome do gêmeo desaparecido (vanishing twin)',
      'Fetus in fetu',
      'Superfetação'
    ],
    correctAnswer: 1,
    scientificExplanation: 'A síndrome do gêmeo evanescente ocorre no início do primeiro trimestre quando um saco gestacional é reabsorvido sem deixar restos estruturais calcificados.'
  },
  {
    id: 'qse-facil-07',
    theme: 'Fetus in fetu',
    category: 'Fetus in fetu',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou uma anomalia raríssima em que um gêmeo malformado é incorporado dentro do corpo do irmão sadio durante o dobramento embrionário, localizando-se comumente no abdômen retroperitoneal. Quem sou eu?',
    options: [
      'Teratoma ovariano',
      'Gêmeo siamês toracópago',
      'Fetus in fetu',
      'Lipoma congênito'
    ],
    correctAnswer: 2,
    scientificExplanation: 'Fetus in fetu é a inclusão de um concepto malformado dentro da cavidade corporal de seu gêmeo geneticamente idêntico durante o fechamento embrionário.'
  },
  {
    id: 'qse-facil-08',
    theme: 'Quimerismo humano',
    category: 'Quimerismo humano',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou um indivíduo único formado pela fusão de dois embriões geneticamente distintos nos estágios iniciais de mórula ou blastocisto, possuindo duas linhagens de DNA totalmente diferentes no mesmo organismo. Quem sou eu?',
    options: [
      'Gêmeo dizigótico',
      'Gêmeo siamês',
      'Mosaicismo cromossômico',
      'Quimera humana tetragamética'
    ],
    correctAnswer: 3,
    scientificExplanation: 'O quimerismo tetragamético ocorre pela união física de dois zigotos independentes, criando um organismo único com duas populações celulares geneticamente distintas.'
  },
  {
    id: 'qse-facil-09',
    theme: 'Teratomas',
    category: 'Teratomas',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou um tumor originado de células germinativas pluripotentes primordiais que derivam dos três folhetos embrionários (ectoderme, mesoderme e endoderme), podendo conter dentes formados, esmalte, cabelos e cartilagem. Quem sou eu?',
    options: [
      'Odontoma composto',
      'Ameloblastoma',
      'Teratoma',
      'Cisto radicular'
    ],
    correctAnswer: 2,
    scientificExplanation: 'Teratomas contêm tecidos maduros ou imaturos derivados de todos os três folhetos germinativos devido à pluripotência desregulada das células germinativas migrantes.'
  },
  {
    id: 'qse-facil-10',
    theme: 'Nascimento empelicado',
    category: 'Nascimento empelicado',
    difficulty: 'Fácil',
    points: 10,
    question: 'QUEM SOU EU? Sou o evento raro em que o bebê nasce completamente envolvido pela bolsa amniótica intacta, com o líquido amniótico protegendo sua face e sem que a membrana corioamniótica tenha se rompido durante o trabalho de parto. Quem sou eu?',
    options: [
      'Nascimento empelicado',
      'Descolamento prematuro de placenta',
      'Apresentação córmica',
      'Prolapso de cordão'
    ],
    correctAnswer: 0,
    scientificExplanation: 'O parto empelicado ocorre quando as membranas fetais (âmnio e córion) resistem intactas às contrações e dilatação, nascendo o feto envolto na bolsa amniótica.'
  },

  // =========================================================================
  // NÍVEL 2: 10 PERGUNTAS MÉDIAS (20 PONTOS)
  // =========================================================================
  {
    id: 'qse-media-01',
    theme: 'Gêmeos siameses',
    category: 'Gêmeos siameses',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Sou uma classificação de gêmeos siameses unidos pela cabeça, compartilhando calvária e porções do encéfalo e circulação dural, com grande relevância cirúrgica craniofacial e odontológica. Quem sou eu?',
    options: [
      'Toracópagos',
      'Craniópagos',
      'Onfalópagos',
      'Isquiópagos'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Craniópagos representam os gêmeos siameses unidos pela região craniana, exigindo complexo planejamento interdisciplinar envolvendo cirurgia bucomaxilofacial e neurocirurgia.'
  },
  {
    id: 'qse-media-02',
    theme: 'Gêmeos parasitas',
    category: 'Gêmeos parasitas',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Sou a forma de gêmeo parasita heterópagos anexada à parede toracoabdominal ou epigástrica do autossito, exibindo membros supranumerários hipoplásicos e dependendo de vasos intercostais ou mesentéricos do irmão viável. Quem sou eu?',
    options: [
      'Epigástrico heterópagos (gêmeo parasita toracoabdominal)',
      'Gêmeo acárdico mielencefálico',
      'Feto papiráceo retroperitoneal',
      'Teratoma sacrococcígeo maduro'
    ],
    correctAnswer: 0,
    scientificExplanation: 'O parasita epigástrico ou toracoabdominal apresenta anexação na parede ventral do autossito, com vascularização derivada dos vasos torácicos ou abdominais do hospedeiro.'
  },
  {
    id: 'qse-media-03',
    theme: 'Superfecundação heteropaternal',
    category: 'Superfecundação heteropaternal',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Na análise de DNA e tipagem genética de arcada dentária, demonstro que dois conceptos nascidos do mesmo parto compartilham apenas 25% de consanguinidade média (meio-irmãos) ao invés de 50%. Quem sou eu?',
    options: [
      'Gêmeos monozigóticos discordantes',
      'Quimera microquimérica',
      'Superfecundação heteropaternal',
      'Feto papiráceo'
    ],
    correctAnswer: 2,
    scientificExplanation: 'Como os conceptos compartilham apenas o pool genético materno e possuem genomas paternos distintos, seu grau de parentesco biológico equivale ao de meio-irmãos.'
  },
  {
    id: 'qse-media-04',
    theme: 'Superfetação',
    category: 'Superfetação',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Para que eu ocorra, é obrigatório que falhem três mecanismos fisiológicos normais da gravidez: a inibição da ovulação pelo corpo lúteo, o tampão mucoso cervical e a oclusão da cavidade uterina pela decídua capsular. Quem sou eu?',
    options: [
      'Superfetação verdadeira',
      'Gravidez ectópica cornual',
      'Mola hidatiforme parcial',
      'Superfecundação bivitelina'
    ],
    correctAnswer: 0,
    scientificExplanation: 'A superfetação desafia a biologia reprodutiva pois exige superação simultânea da barreira hormonal progestágena ovariana, anatômica cervical e decídua endometrial.'
  },
  {
    id: 'qse-media-05',
    theme: 'Feto papiráceo',
    category: 'Feto papiráceo',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Diferente do gêmeo desaparecido (que some no primeiro trimestre por reabsorção lítica celular), meu esqueleto calcificado e remanescentes cranianos persistem e são entregues na placenta ao final do parto. Quem sou eu?',
    options: [
      'Feto acardíaco',
      'Feto papiráceo',
      'Fetus in fetu',
      'Gêmeo parasita'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Por ter ultrapassado a fase de ossificação primária endocondral e membranosa, o feto papiráceo não é absorvido, permanecendo como lâmina mumificada no córion.'
  },
  {
    id: 'qse-media-06',
    theme: 'Síndrome do gêmeo desaparecido',
    category: 'Síndrome do gêmeo desaparecido',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Estima-se que até 20% a 30% de todas as gestações gemelares concebidas naturalmente iniciam com dois sacos gestacionais, mas apenas um feto evolui para o nascimento porque o outro sofre involução antes da 10ª semana. Quem sou eu?',
    options: [
      'Síndrome do gêmeo desaparecido (Vanishing Twin)',
      'Gravidez molar anembrionada',
      'Feto papiráceo tardio',
      'Superfecundação homopaternal'
    ],
    correctAnswer: 0,
    scientificExplanation: 'A síndrome do gêmeo evanescente ocorre precocemente no primeiro trimestre com rápida lise celular enzimática e absorção pelo sinciciotrofoblasto e decídua materna sem sequelas no sobrevivente.'
  },
  {
    id: 'qse-media-07',
    theme: 'Fetus in fetu',
    category: 'Fetus in fetu',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? O critério histopatológico e anatômico essencial que me diferencia de um teratoma comum é a presença de um eixo espinhal rudimentar (vértebras com metameria segmentada) e organização metamerica de tecidos. Quem sou eu?',
    options: [
      'Teratoma cístico ovariano',
      'Fetus in fetu',
      'Neuroblastoma cístico',
      'Cisto tireoglosso ectópico'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Willis estabeleceu que a presença de coluna vertebral (eixo cordomesodérmico metamérico) é o critério patognomônico que distingue o fetus in fetu de um teratoma.'
  },
  {
    id: 'qse-media-08',
    theme: 'Quimerismo humano',
    category: 'Quimerismo humano',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Na Odontologia Legal, posso fazer com que o DNA coletado na saliva da mucosa jugal aponte um perfil genético, enquanto o sangue periférico aponte outro perfil incompatível, confundindo exames de DNA forense. Quem sou eu?',
    options: [
      'Mosaicismo somático restrito',
      'Amelogênese imperfeita recessiva',
      'Quimerismo genético humano',
      'Epigenética salivar'
    ],
    correctAnswer: 2,
    scientificExplanation: 'Em indivíduos quiméricos, diferentes órgãos e tecidos (ex: epitélio oral vs. tecido hematopoiético) podem originar-se de linhagens blastodérmicas divergentes com genótipos distintos.'
  },
  {
    id: 'qse-media-09',
    theme: 'Teratomas',
    category: 'Teratomas',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? No complexo craniofacial e nos teratomas ovarianos/cervicais, posso desenvolver dentes completos com polpa, dentina e esmalte ectópico, devido à indução recíproca entre epitélio odontogênico e ectomesênquima presente na minha massa tumoral. Quem sou eu?',
    options: [
      'Odontoma complexo verdadeiro',
      'Ameloblastoma sólido',
      'Teratoma maduro com dentes ectópicos',
      'Mixoma odontogênico'
    ],
    correctAnswer: 2,
    scientificExplanation: 'A totipotência celular permite a formação de folhetos dentários ectópicos funcionais com deposição de hidroxiapatita organizada no interior de teratomas maduros.'
  },
  {
    id: 'qse-media-10',
    theme: 'Nascimento empelicado',
    category: 'Nascimento empelicado',
    difficulty: 'Média',
    points: 20,
    question: 'QUEM SOU EU? Durante meus primeiros segundos fora do útero, meus alvéolos pulmonares permanecem preenchidos por líquido amniótico e continuo recebendo oxigênio e nutrientes exclusivamente pelo cordão umbilical pulsátil até a incisão das membranas. Quem sou eu?',
    options: [
      'Bebê em nascimento empelicado',
      'Recém-nascido em asfixia perinatal',
      'Concepto em sofrimento fetal agudo',
      'Bebê com atresia de esôfago'
    ],
    correctAnswer: 0,
    scientificExplanation: 'No nascimento empelicado, o concepto mantém trocas gasosas placentárias sem transição respiratória até a abertura artificial da bolsa e o clampeamento do cordão.'
  },

  // =========================================================================
  // NÍVEL 3: 10 PERGUNTAS DIFÍCEIS (30 PONTOS)
  // =========================================================================
  {
    id: 'qse-dificil-01',
    theme: 'Gêmeos siameses',
    category: 'Gêmeos siameses',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Sou uma apresentação de gêmeos parápagos com duplicação craniofacial parcial, exibindo dois aparelhos estomatognáticos funcionais (duas bocas e arcadas dentárias) decorrente de sinalização duplicada do Sonic Hedgehog (SHH) na placa pré-cordal. Quem sou eu?',
    options: [
      'Diprosopia parápago craniofacial',
      'Craniópagos simétricos totais',
      'Teratoma mandibular com odontoma',
      'Isquiópagos tripus'
    ],
    correctAnswer: 0,
    scientificExplanation: 'A diprosopia decorre da hiperatividade ou bifurcação do gradiente morfogenético de Sonic Hedgehog (SHH) na linha média rostral, gerando duplicação craniofacial e bucal assimétrica.'
  },
  {
    id: 'qse-dificil-02',
    theme: 'Gêmeos parasitas',
    category: 'Gêmeos parasitas',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Sou a forma de gêmeo parasita anexada especificamente à mandíbula, maxila ou soalho bucal do autossito, apresentando dentes ectópicos, osso alveolar e cartilagem rudimentar. Na odontologia, meu nome técnico é epignato. Quem sou eu?',
    options: [
      'Epignato (parasita bucomaxilofacial)',
      'Craniopagus parasiticus',
      'Fetus in fetu lingual',
      'Cisto dermoide do palato'
    ],
    correctAnswer: 0,
    scientificExplanation: 'Epignato é o gêmeo parasita que se implanta no estomodeu ou cavidade oral do hospedeiro, contendo fragmentos de órgãos orofaciais e tecidos odontogênicos rudimentares.'
  },
  {
    id: 'qse-dificil-03',
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
  },
  {
    id: 'qse-dificil-04',
    theme: 'Superfetação',
    category: 'Superfetação',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? No ultrassom e na odontogênese, meus conceptos apresentam discrepâncias cronológicas reais de biometria e cronologia de mineralização dos germes dentários de 3 a 5 semanas, provando que foram concebidos em ciclos menstruais diferentes. Quem sou eu?',
    options: [
      'Restrição de crescimento intrauterino seletiva (RCIU)',
      'Superfetação verdadeira comprovada',
      'Síndrome de transfusão feto-fetal',
      'Quimerismo de linhagem celular'
    ],
    correctAnswer: 1,
    scientificExplanation: 'Diferente da RCIU, onde há desnutrição de concepto síncrono, na superfetação há verdadeira assincronia biológica de idade gestacional e maturidade de órgãos e germes dentários.'
  },
  {
    id: 'qse-dificil-05',
    theme: 'Feto papiráceo',
    category: 'Feto papiráceo',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Posso ser a consequência extrema e tardia de uma Síndrome de Transfusão Feto-Fetal (STFF) grave em gestações monocoriônicas, na qual o concepto doador sofre hipovolemia crônica, oligoidrâmnio acentuado e parada de desenvolvimento. Quem sou eu?',
    options: [
      'Feto papiráceo pós-STFF',
      'Gêmeo acárdico (TRAP sequence)',
      'Fetus in fetu mediastinal',
      'Síndrome do gêmeo desaparecido precoce'
    ],
    correctAnswer: 0,
    scientificExplanation: 'Em placentas monocoriônicas com anastomoses arteriovenosas desbalanceadas, a anemia e desidratação crônica do concepto doador podem levar à morte intrauterina e sua mumificação compressiva em feto papiráceo.'
  },
  {
    id: 'qse-dificil-06',
    theme: 'Síndrome do gêmeo desaparecido',
    category: 'Síndrome do gêmeo desaparecido',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? O meu desaparecimento no início do desenvolvimento pode deixar células-tronco no irmão sobrevivente, sendo uma das principais causas fisiológicas do quimerismo genético humano e de discrepâncias em testes de DNA. Quem sou eu?',
    options: [
      'Gêmeo evanescente promotor de microquimerismo',
      'Teratoma residual intrauterino',
      'Feto papiráceo desintegrado',
      'Concepto acárdico'
    ],
    correctAnswer: 0,
    scientificExplanation: 'A microtransfusão de células da massa celular interna do gêmeo reabsorvido para a circulação do gêmeo sobrevivente estabelece o quimerismo genético espontâneo.'
  },
  {
    id: 'qse-dificil-07',
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
    id: 'qse-dificil-08',
    theme: 'Quimerismo humano',
    category: 'Quimerismo humano',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Sou a manifestação clínica de pele e mucosa bucal em que linhas de migração celular embrionária exibem tonalidades e padrões pigmentares distintos refletindo as duas linhagens de clones celulares divergentes no corpo. Na dermatologia e estomatologia, quem sou eu?',
    options: [
      'Linhas de Blaschko em quimera humana',
      'Líquen plano pigmentoso congênito',
      'Melanose de Peutz-Jeghers',
      'Mancha mongólica gengival'
    ],
    correctAnswer: 0,
    scientificExplanation: 'As Linhas de Blaschko representam as rotas de migração embriológica de células da crista neural e ectoderma; no quimerismo, elas evidenciam a convivência visível de dois genomas distintos.'
  },
  {
    id: 'qse-dificil-09',
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
    id: 'qse-dificil-10',
    theme: 'Nascimento empelicado',
    category: 'Nascimento empelicado',
    difficulty: 'Difícil',
    points: 30,
    question: 'QUEM SOU EU? Em partos cesáreos de prematuros extremos (menos de 32 semanas), sou intencionalmente preservado pelos obstetras para atuar como amortecedor hidrostático, prevenindo traumas mecânicos e hemorragias intraventriculares cerebrais. Quem sou eu?',
    options: [
      'Parto empelicado atraumático neuroprotetor',
      'Amnioinfusão profilática',
      'Amniorrexe com descompressão controlada',
      'Cesárea com aspiração meconial prévia'
    ],
    correctAnswer: 0,
    scientificExplanation: 'Em prematuros com fragilidade capilar germinativa cerebral, a extração empelicada reduz o gradiente pressórico súbito, exercendo neuroproteção comprovada contra hemorragia periventricular.'
  }
];

module.exports = qseQuestions;
