/**
 * BANCO DE QUESTÕES OFICIAL — MINIGAME: QUEM SOU EU? 🧠🥧
 * Total de questões cadastradas: 530
 * Abrangendo fenômenos embriológicos, malformações, arcos faríngeos,
 * odontogênese, anexos embrionários, gêmeos e teratogenia.
 */

const qseQuestions = [
  {
    "id": "qse-facil-01",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou um fenômeno em que dois conceptos monocoriônicos e monoamnióticos compartilham tecidos ou órgãos corporais após a divisão incompleta do disco embrionário bilaminar por volta do décimo terceiro dia pós-fertilização. Quem sou eu?",
    "options": [
      "Gêmeos dizigóticos",
      "Gêmeos siameses (conjoined twins)",
      "Feto papiráceo",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Gêmeos siameses originam-se da fissão incompleta do disco embrionário monoamniótico-monocoriônico após o 13º dia de desenvolvimento, resultando na união de partes anatômicas compartilhadas."
  },
  {
    "id": "qse-facil-02",
    "theme": "Gêmeos parasitas",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou uma condição em que um dos conceptos para de se desenvolver completamente e permanece como uma massa rudimentar externa anexada ao corpo do gêmeo autossito (hospedeiro), dependendo totalmente da sua circulação sanguínea. Quem sou eu?",
    "options": [
      "Gêmeos dizigóticos normais",
      "Feto papiráceo intracavitário",
      "Gêmeo parasita (heterópagos)",
      "Quimerismo tetragamético"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Gêmeos parasitas (heterópagos) ocorrem quando um concepto assimétrico e severamente malformado permanece aderido externamente ao gêmeo dominante viável (autossito)."
  },
  {
    "id": "qse-facil-03",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Aconteço quando dois óvulos liberados no mesmo ciclo ovariano são fecundados em relações sexuais distintas por espermatozoides de homens diferentes, gerando gêmeos bivitelinos com pais biológicos diferentes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos monozigóticos espelhados",
      "Superfecundação heteropaternal",
      "Quimerismo de linhagem dupla"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A superfecundação heteropaternal acontece na ovulação múltipla sincrônica fertilizada por gametas masculinos de parceiros distintos em coitos próximos."
  },
  {
    "id": "qse-facil-04",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou o fenômeno extraordinário e raríssimo em humanos no qual ocorre uma segunda ovulação e fertilização quando a mulher já está grávida, implantando um novo embrião com idade gestacional semanas mais jovem. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Superfetação",
      "Síndrome de transfusão feto-fetal",
      "Gêmeos monozigóticos assimétricos"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A superfetação é a concepção de um segundo concepto durante uma gestação já em andamento, resultando em fetos com idades gestacionais cronologicamente divergentes."
  },
  {
    "id": "qse-facil-05",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou o concepto falecido no segundo trimestre de uma gestação múltipla que, pela retenção prolongada e compressão mecânica pelo gêmeo sobrevivente, perde líquido amniótico e se torna achatado e mumificado como pergaminho. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Fetus in fetu",
      "Quimerismo embrionário",
      "Teratoma cístico"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O feto papiráceo é o concepto que sofre óbito após a mineralização esquelética e é mecanicamente comprimido e desidratado contra a parede uterina."
  },
  {
    "id": "qse-facil-06",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou detectado como um segundo saco gestacional no ultrassom inicial de 6 semanas, mas semanas depois desapareço completamente sem deixar restos físicos visíveis, sendo totalmente reabsorvido pelo organismo materno ou pela placenta. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido (vanishing twin)",
      "Fetus in fetu",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A síndrome do gêmeo evanescente ocorre no início do primeiro trimestre quando um saco gestacional é reabsorvido sem deixar restos estruturais calcificados."
  },
  {
    "id": "qse-facil-07",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou uma anomalia raríssima em que um gêmeo malformado é incorporado dentro do corpo do irmão sadio durante o dobramento embrionário, localizando-se comumente no abdômen retroperitoneal. Quem sou eu?",
    "options": [
      "Teratoma ovariano",
      "Gêmeo siamês toracópago",
      "Fetus in fetu",
      "Lipoma congênito"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Fetus in fetu é a inclusão de um concepto malformado dentro da cavidade corporal de seu gêmeo geneticamente idêntico durante o fechamento embrionário."
  },
  {
    "id": "qse-facil-08",
    "theme": "Quimerismo humano",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou um indivíduo único formado pela fusão de dois embriões geneticamente distintos nos estágios iniciais de mórula ou blastocisto, possuindo duas linhagens de DNA totalmente diferentes no mesmo organismo. Quem sou eu?",
    "options": [
      "Gêmeo dizigótico",
      "Gêmeo siamês",
      "Mosaicismo cromossômico",
      "Quimera humana tetragamética"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O quimerismo tetragamético ocorre pela união física de dois zigotos independentes, criando um organismo único com duas populações celulares geneticamente distintas."
  },
  {
    "id": "qse-facil-09",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou um tumor originado de células germinativas pluripotentes primordiais que derivam dos três folhetos embrionários (ectoderme, mesoderme e endoderme), podendo conter dentes formados, esmalte, cabelos e cartilagem. Quem sou eu?",
    "options": [
      "Odontoma composto",
      "Ameloblastoma",
      "Teratoma",
      "Cisto radicular"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Teratomas contêm tecidos maduros ou imaturos derivados de todos os três folhetos germinativos devido à pluripotência desregulada das células germinativas migrantes."
  },
  {
    "id": "qse-facil-10",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou o evento raro em que o bebê nasce completamente envolvido pela bolsa amniótica intacta, com o líquido amniótico protegendo sua face e sem que a membrana corioamniótica tenha se rompido durante o trabalho de parto. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Descolamento prematuro de placenta",
      "Apresentação córmica",
      "Prolapso de cordão"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O parto empelicado ocorre quando as membranas fetais (âmnio e córion) resistem intactas às contrações e dilatação, nascendo o feto envolto na bolsa amniótica."
  },
  {
    "id": "qse-media-01",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Sou uma classificação de gêmeos siameses unidos pela cabeça, compartilhando calvária e porções do encéfalo e circulação dural, com grande relevância cirúrgica craniofacial e odontológica. Quem sou eu?",
    "options": [
      "Toracópagos",
      "Craniópagos",
      "Onfalópagos",
      "Isquiópagos"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Craniópagos representam os gêmeos siameses unidos pela região craniana, exigindo complexo planejamento interdisciplinar envolvendo cirurgia bucomaxilofacial e neurocirurgia."
  },
  {
    "id": "qse-media-02",
    "theme": "Gêmeos parasitas",
    "category": "Gêmeos parasitas",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Sou a forma de gêmeo parasita heterópagos anexada à parede toracoabdominal ou epigástrica do autossito, exibindo membros supranumerários hipoplásicos e dependendo de vasos intercostais ou mesentéricos do irmão viável. Quem sou eu?",
    "options": [
      "Epigástrico heterópagos (gêmeo parasita toracoabdominal)",
      "Gêmeo acárdico mielencefálico",
      "Feto papiráceo retroperitoneal",
      "Teratoma sacrococcígeo maduro"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O parasita epigástrico ou toracoabdominal apresenta anexação na parede ventral do autossito, com vascularização derivada dos vasos torácicos ou abdominais do hospedeiro."
  },
  {
    "id": "qse-media-03",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Na análise de DNA e tipagem genética de arcada dentária, demonstro que dois conceptos nascidos do mesmo parto compartilham apenas 25% de consanguinidade média (meio-irmãos) ao invés de 50%. Quem sou eu?",
    "options": [
      "Gêmeos monozigóticos discordantes",
      "Quimera microquimérica",
      "Superfecundação heteropaternal",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Como os conceptos compartilham apenas o pool genético materno e possuem genomas paternos distintos, seu grau de parentesco biológico equivale ao de meio-irmãos."
  },
  {
    "id": "qse-media-04",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Para que eu ocorra, é obrigatório que falhem três mecanismos fisiológicos normais da gravidez: a inibição da ovulação pelo corpo lúteo, o tampão mucoso cervical e a oclusão da cavidade uterina pela decídua capsular. Quem sou eu?",
    "options": [
      "Superfetação verdadeira",
      "Gravidez ectópica cornual",
      "Mola hidatiforme parcial",
      "Superfecundação bivitelina"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A superfetação desafia a biologia reprodutiva pois exige superação simultânea da barreira hormonal progestágena ovariana, anatômica cervical e decídua endometrial."
  },
  {
    "id": "qse-media-05",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Diferente do gêmeo desaparecido (que some no primeiro trimestre por reabsorção lítica celular), meu esqueleto calcificado e remanescentes cranianos persistem e são entregues na placenta ao final do parto. Quem sou eu?",
    "options": [
      "Feto acardíaco",
      "Feto papiráceo",
      "Fetus in fetu",
      "Gêmeo parasita"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Por ter ultrapassado a fase de ossificação primária endocondral e membranosa, o feto papiráceo não é absorvido, permanecendo como lâmina mumificada no córion."
  },
  {
    "id": "qse-media-06",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Estima-se que até 20% a 30% de todas as gestações gemelares concebidas naturalmente iniciam com dois sacos gestacionais, mas apenas um feto evolui para o nascimento porque o outro sofre involução antes da 10ª semana. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido (Vanishing Twin)",
      "Gravidez molar anembrionada",
      "Feto papiráceo tardio",
      "Superfecundação homopaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A síndrome do gêmeo evanescente ocorre precocemente no primeiro trimestre com rápida lise celular enzimática e absorção pelo sinciciotrofoblasto e decídua materna sem sequelas no sobrevivente."
  },
  {
    "id": "qse-media-07",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? O critério histopatológico e anatômico essencial que me diferencia de um teratoma comum é a presença de um eixo espinhal rudimentar (vértebras com metameria segmentada) e organização metamerica de tecidos. Quem sou eu?",
    "options": [
      "Teratoma cístico ovariano",
      "Fetus in fetu",
      "Neuroblastoma cístico",
      "Cisto tireoglosso ectópico"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Willis estabeleceu que a presença de coluna vertebral (eixo cordomesodérmico metamérico) é o critério patognomônico que distingue o fetus in fetu de um teratoma."
  },
  {
    "id": "qse-media-08",
    "theme": "Quimerismo humano",
    "category": "Quimerismo humano",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Na Odontologia Legal, posso fazer com que o DNA coletado na saliva da mucosa jugal aponte um perfil genético, enquanto o sangue periférico aponte outro perfil incompatível, confundindo exames de DNA forense. Quem sou eu?",
    "options": [
      "Mosaicismo somático restrito",
      "Amelogênese imperfeita recessiva",
      "Quimerismo genético humano",
      "Epigenética salivar"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Em indivíduos quiméricos, diferentes órgãos e tecidos (ex: epitélio oral vs. tecido hematopoiético) podem originar-se de linhagens blastodérmicas divergentes com genótipos distintos."
  },
  {
    "id": "qse-media-09",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? No complexo craniofacial e nos teratomas ovarianos/cervicais, posso desenvolver dentes completos com polpa, dentina e esmalte ectópico, devido à indução recíproca entre epitélio odontogênico e ectomesênquima presente na minha massa tumoral. Quem sou eu?",
    "options": [
      "Odontoma complexo verdadeiro",
      "Ameloblastoma sólido",
      "Teratoma maduro com dentes ectópicos",
      "Mixoma odontogênico"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A totipotência celular permite a formação de folhetos dentários ectópicos funcionais com deposição de hidroxiapatita organizada no interior de teratomas maduros."
  },
  {
    "id": "qse-media-10",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Média",
    "points": 20,
    "question": "QUEM SOU EU? Durante meus primeiros segundos fora do útero, meus alvéolos pulmonares permanecem preenchidos por líquido amniótico e continuo recebendo oxigênio e nutrientes exclusivamente pelo cordão umbilical pulsátil até a incisão das membranas. Quem sou eu?",
    "options": [
      "Bebê em nascimento empelicado",
      "Recém-nascido em asfixia perinatal",
      "Concepto em sofrimento fetal agudo",
      "Bebê com atresia de esôfago"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "No nascimento empelicado, o concepto mantém trocas gasosas placentárias sem transição respiratória até a abertura artificial da bolsa e o clampeamento do cordão."
  },
  {
    "id": "qse-dificil-01",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou uma apresentação de gêmeos parápagos com duplicação craniofacial parcial, exibindo dois aparelhos estomatognáticos funcionais (duas bocas e arcadas dentárias) decorrente de sinalização duplicada do Sonic Hedgehog (SHH) na placa pré-cordal. Quem sou eu?",
    "options": [
      "Diprosopia parápago craniofacial",
      "Craniópagos simétricos totais",
      "Teratoma mandibular com odontoma",
      "Isquiópagos tripus"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diprosopia decorre da hiperatividade ou bifurcação do gradiente morfogenético de Sonic Hedgehog (SHH) na linha média rostral, gerando duplicação craniofacial e bucal assimétrica."
  },
  {
    "id": "qse-dificil-02",
    "theme": "Gêmeos parasitas",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou a forma de gêmeo parasita anexada especificamente à mandíbula, maxila ou soalho bucal do autossito, apresentando dentes ectópicos, osso alveolar e cartilagem rudimentar. Na odontologia, meu nome técnico é epignato. Quem sou eu?",
    "options": [
      "Epignato (parasita bucomaxilofacial)",
      "Craniopagus parasiticus",
      "Fetus in fetu lingual",
      "Cisto dermoide do palato"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Epignato é o gêmeo parasita que se implanta no estomodeu ou cavidade oral do hospedeiro, contendo fragmentos de órgãos orofaciais e tecidos odontogênicos rudimentares."
  },
  {
    "id": "qse-dificil-03",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? O meu tempo de janela biológica é limitado pela viabilidade de até 24 horas do ovócito secundário na tuba uterina e pela capacidade de fertilização do sêmen de até 5 dias no trato reprodutor feminino. Quem sou eu?",
    "options": [
      "Janela de fertilização da superfecundação",
      "Tempo de clivagem do blastocisto",
      "Período refratário da gastrulação",
      "Janela de implantação tardia da superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A superfecundação exige coitos com indivíduos distintos dentro da estreita janela em que dois ovócitos de uma mesma ovulação ainda retêm viabilidade funcional e capacidade de fusão espermática."
  },
  {
    "id": "qse-dificil-04",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? No ultrassom e na odontogênese, meus conceptos apresentam discrepâncias cronológicas reais de biometria e cronologia de mineralização dos germes dentários de 3 a 5 semanas, provando que foram concebidos em ciclos menstruais diferentes. Quem sou eu?",
    "options": [
      "Restrição de crescimento intrauterino seletiva (RCIU)",
      "Superfetação verdadeira comprovada",
      "Síndrome de transfusão feto-fetal",
      "Quimerismo de linhagem celular"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Diferente da RCIU, onde há desnutrição de concepto síncrono, na superfetação há verdadeira assincronia biológica de idade gestacional e maturidade de órgãos e germes dentários."
  },
  {
    "id": "qse-dificil-05",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Posso ser a consequência extrema e tardia de uma Síndrome de Transfusão Feto-Fetal (STFF) grave em gestações monocoriônicas, na qual o concepto doador sofre hipovolemia crônica, oligoidrâmnio acentuado e parada de desenvolvimento. Quem sou eu?",
    "options": [
      "Feto papiráceo pós-STFF",
      "Gêmeo acárdico (TRAP sequence)",
      "Fetus in fetu mediastinal",
      "Síndrome do gêmeo desaparecido precoce"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Em placentas monocoriônicas com anastomoses arteriovenosas desbalanceadas, a anemia e desidratação crônica do concepto doador podem levar à morte intrauterina e sua mumificação compressiva em feto papiráceo."
  },
  {
    "id": "qse-dificil-06",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? O meu desaparecimento no início do desenvolvimento pode deixar células-tronco no irmão sobrevivente, sendo uma das principais causas fisiológicas do quimerismo genético humano e de discrepâncias em testes de DNA. Quem sou eu?",
    "options": [
      "Gêmeo evanescente promotor de microquimerismo",
      "Teratoma residual intrauterino",
      "Feto papiráceo desintegrado",
      "Concepto acárdico"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A microtransfusão de células da massa celular interna do gêmeo reabsorvido para a circulação do gêmeo sobrevivente estabelece o quimerismo genético espontâneo."
  },
  {
    "id": "qse-dificil-07",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Ao contrário dos teratomas comuns que são verdadeiras neoplasias com risco de malignização em 10% dos casos, tenho natureza hamartomatosa benigna derivada de uma embriogênese anômala interrompida com revestimento amniótico próprio. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Cordoma sacral",
      "Corioblastoma",
      "Tumor de Wilms"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Fetus in fetu é um concepto malformado encapsulado, raramente exibindo transformação maligna, distinguindo-se oncologicamente dos teratomas verdadeiros."
  },
  {
    "id": "qse-dificil-08",
    "theme": "Quimerismo humano",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou a manifestação clínica de pele e mucosa bucal em que linhas de migração celular embrionária exibem tonalidades e padrões pigmentares distintos refletindo as duas linhagens de clones celulares divergentes no corpo. Na dermatologia e estomatologia, quem sou eu?",
    "options": [
      "Linhas de Blaschko em quimera humana",
      "Líquen plano pigmentoso congênito",
      "Melanose de Peutz-Jeghers",
      "Mancha mongólica gengival"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "As Linhas de Blaschko representam as rotas de migração embriológica de células da crista neural e ectoderma; no quimerismo, elas evidenciam a convivência visível de dois genomas distintos."
  },
  {
    "id": "qse-dificil-09",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou uma complicação rara em que um teratoma ovariano ou mediastinal maduro secreta anticorpos contra receptores NMDA ou hormônios tireoidianos (struma ovarii), gerando manifestações neuropsiquiátricas graves e xerostomia na odontologia. Quem sou eu?",
    "options": [
      "Encefalite paraneoplásica associada a teratoma",
      "Síndrome de Sjögren congênita",
      "Síndrome de Apert",
      "Hiperplasia gengival medicamentosa"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Teratomas podem abrigar tecido cerebral ectópico que induz a produção de autoanticorpos contra receptores NMDA neuronais, provocando encefalite autoimune paraneoplásica."
  },
  {
    "id": "qse-dificil-10",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Em partos cesáreos de prematuros extremos (menos de 32 semanas), sou intencionalmente preservado pelos obstetras para atuar como amortecedor hidrostático, prevenindo traumas mecânicos e hemorragias intraventriculares cerebrais. Quem sou eu?",
    "options": [
      "Parto empelicado atraumático neuroprotetor",
      "Amnioinfusão profilática",
      "Amniorrexe com descompressão controlada",
      "Cesárea com aspiração meconial prévia"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Em prematuros com fragilidade capilar germinativa cerebral, a extração empelicada reduz o gradiente pressórico súbito, exercendo neuroproteção comprovada contra hemorragia periventricular."
  },
  {
    "id": "qse-500-001",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-002",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou toracópagos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-003",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou craniópagos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Gêmeos siameses",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-004",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou onfalópagos. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-005",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou classificação anatômica. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-006",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-007",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou toracópagos. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-008",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou craniópagos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-009",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou onfalópagos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-010",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou classificação anatômica. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-011",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Gêmeos siameses",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-012",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou toracópagos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-013",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou craniópagos. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-014",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou onfalópagos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos siameses",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-015",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou classificação anatômica. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-016",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-017",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou toracópagos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-018",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou craniópagos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-019",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou onfalópagos. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-020",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou classificação anatômica. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-021",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-022",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou toracópagos. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-023",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou craniópagos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos siameses",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-024",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou onfalópagos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-025",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou classificação anatômica. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-026",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos siameses",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-027",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou toracópagos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Superfetação",
      "Nascimento empelicado",
      "Gêmeos siameses",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-028",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou craniópagos. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-029",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou onfalópagos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-030",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou classificação anatômica. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-031",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Gêmeos siameses",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-032",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou toracópagos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-033",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou craniópagos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-034",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou onfalópagos. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-035",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou classificação anatômica. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Teratomas",
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-036",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-037",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou toracópagos. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-038",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou craniópagos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-039",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou onfalópagos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Gêmeos siameses",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-040",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou classificação anatômica. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-041",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-042",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou toracópagos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-043",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou craniópagos. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-044",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou onfalópagos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-045",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou classificação anatômica. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-046",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou união corporal de gêmeos monozigóticos. Sou formado quando dois conceptos monozigóticos apresentam separação embrionária incompleta ou, em hipóteses alternativas, fusão secundária de estruturas embrionárias. Por isso, compartilho uma região anatômica com meu irmão. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A separação incompleta de um embrião monozigótico, em período muito precoce, é uma explicação clássica para minha formação."
  },
  {
    "id": "qse-500-047",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou toracópagos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma forma de gemelaridade conjugada em que a união ocorre predominantemente pela parede torácica, podendo haver compartilhamento cardíaco ou de outras estruturas mediastinais. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Gêmeos siameses",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A denominação descreve a região de união: tórax. A extensão do compartilhamento visceral varia entre os casos."
  },
  {
    "id": "qse-500-048",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou craniópagos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma forma rara de gemelaridade conjugada na qual meus crânios se encontram unidos, embora os corpos possam permanecer separados. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Minha nomenclatura deriva de crânio; a conexão pode envolver ossos, meninges e, em alguns casos, estruturas vasculares intracranianas."
  },
  {
    "id": "qse-500-049",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou onfalópagos. Sou um tipo de gêmeos conjugados unidos na região anterior do abdome, frequentemente próximo ao umbigo, com possível compartilhamento hepático ou da parede abdominal. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A região umbilical define minha classificação; o grau de compartilhamento de fígado e intestino é variável."
  },
  {
    "id": "qse-500-050",
    "theme": "Gêmeos siameses",
    "category": "Gêmeos siameses",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou classificação anatômica. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou reconhecido pela região de união e pelo número de estruturas compartilhadas; minha descrição exige avaliar simetria, órgãos e vasos comuns. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos siameses",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A classificação anatômica inclui termos como toracópagos, onfalópagos, craniópagos e pigópagos."
  },
  {
    "id": "qse-500-051",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-052",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou heteropagus externo. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-053",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou parasitismo vascular. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-054",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-055",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou sequência TRAP. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-056",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-057",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou heteropagus externo. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-058",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou parasitismo vascular. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-059",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-060",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou sequência TRAP. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-061",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-062",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou heteropagus externo. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-063",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou parasitismo vascular. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-064",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-065",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou sequência TRAP. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-066",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-067",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou heteropagus externo. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-068",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou parasitismo vascular. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-069",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-070",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou sequência TRAP. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-071",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-072",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou heteropagus externo. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Gêmeos parasitas (Heterópagos)",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-073",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou parasitismo vascular. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-074",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-075",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou sequência TRAP. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Gêmeos parasitas (Heterópagos)",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-076",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos siameses",
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-077",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou heteropagus externo. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-078",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou parasitismo vascular. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-079",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-080",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou sequência TRAP. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-081",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-082",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou heteropagus externo. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-083",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou parasitismo vascular. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-084",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Superfetação",
      "Nascimento empelicado",
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-085",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou sequência TRAP. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-086",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-087",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou heteropagus externo. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-088",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou parasitismo vascular. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-089",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-090",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou sequência TRAP. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-091",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-092",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou heteropagus externo. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-093",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou parasitismo vascular. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-094",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-095",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou sequência TRAP. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-096",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo assimétrico dependente. Sou um gêmeo conjugado assimétrico: uma parte do meu corpo está ligada a um irmão mais desenvolvido, de cuja circulação posso depender para receber nutrientes. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Meu desenvolvimento é incompleto e minha sobrevivência depende, em graus variáveis, do gêmeo autossita que mantém a circulação funcional."
  },
  {
    "id": "qse-500-097",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou heteropagus externo. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um componente fetal malformado unido externamente ao corpo de um gêmeo mais desenvolvido; posso apresentar membros ou outras estruturas, mas não autonomia vital. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O termo heterópago descreve a gemelaridade conjugada assimétrica, com um gêmeo dominante e outro rudimentar."
  },
  {
    "id": "qse-500-098",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou parasitismo vascular. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou mantido por conexões circulatórias com meu gêmeo autossita, e meu desenvolvimento é limitado por perfusão inadequada e organização embrionária anormal. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A dependência hemodinâmica é central: o gêmeo desenvolvido fornece parte do suprimento sanguíneo ao componente parasita."
  },
  {
    "id": "qse-500-099",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeo acárdico. Sou um componente gemelar sem coração funcional, cuja perfusão pode ocorrer por fluxo arterial reverso proveniente do irmão; sou associado à sequência TRAP. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Na sequência de perfusão arterial reversa gemelar, o gêmeo bomba perfunde o acárdico por conexões placentárias."
  },
  {
    "id": "qse-500-100",
    "theme": "Gêmeos parasitas (Heterópagos)",
    "category": "Gêmeos parasitas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou sequência TRAP. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma condição de gestação monocoriônica em que um gêmeo bomba envia sangue em sentido anômalo ao gêmeo acárdico por anastomoses placentárias. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A perfusão arterial reversa compromete a oxigenação do gêmeo acárdico e pode sobrecarregar o coração do gêmeo bomba."
  },
  {
    "id": "qse-500-101",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-102",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-103",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou heteropaternidade. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-104",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-105",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Superfetação",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-106",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-107",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-108",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou heteropaternidade. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Superfetação",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-109",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Superfecundação heteropaternal",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-110",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-111",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-112",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfecundação heteropaternal",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-113",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou heteropaternidade. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-114",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-115",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-116",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-117",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Superfecundação heteropaternal",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-118",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou heteropaternidade. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-119",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-120",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-121",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou dois pais biológicos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfecundação heteropaternal",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-122",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-123",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou heteropaternidade. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-124",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfecundação heteropaternal",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-125",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Superfecundação heteropaternal",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-126",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-127",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-128",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou heteropaternidade. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-129",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-130",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-131",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-132",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-133",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou heteropaternidade. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos siameses",
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-134",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-135",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-136",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-137",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-138",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou heteropaternidade. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-139",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-140",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-141",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou dois pais biológicos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-142",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-143",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou heteropaternidade. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-144",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Superfetação",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-145",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Superfecundação heteropaternal",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-146",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou dois pais biológicos. Sou uma gestação gemelar dizigótica na qual dois ovócitos liberados no mesmo ciclo são fecundados por espermatozoides de homens diferentes. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fecundação de ovócitos distintos por espermatozoides de parceiros diferentes produz irmãos com pais biológicos distintos."
  },
  {
    "id": "qse-500-147",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ovulações múltiplas. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou possível quando mais de um ovócito é ovulado e cada um é fecundado em relações sexuais distintas ocorridas dentro da janela fértil do mesmo ciclo. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A sobrevivência dos espermatozoides no trato genital feminino permite que fecundações ocorram em momentos próximos, ainda no mesmo ciclo ovulatório."
  },
  {
    "id": "qse-500-148",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou heteropaternidade. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou identificado quando irmãos gêmeos dizigóticos apresentam paternidades diferentes, confirmadas por análise de marcadores genéticos. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfecundação heteropaternal",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Como cada ovócito é fecundado separadamente, os embriões herdam combinações genéticas distintas e podem ter pais diferentes."
  },
  {
    "id": "qse-500-149",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou mesmo ciclo menstrual. Sou uma ocorrência rara que pode resultar de duas fecundações no mesmo ciclo menstrual, com pais diferentes e desenvolvimento simultâneo dos conceptos. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A janela temporal está vinculada a uma única fase ovulatória, apesar de relações sexuais em ocasiões diferentes."
  },
  {
    "id": "qse-500-150",
    "theme": "Superfecundação heteropaternal",
    "category": "Superfecundação heteropaternal",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gêmeos dizigóticos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma forma particular de gemelaridade dizigótica: cada embrião deriva de um ovócito e de um espermatozoide, mas os espermatozoides podem ter origens paternas distintas. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A origem em dois zigotos independentes explica a possibilidade de sexos e características genéticas diferentes."
  },
  {
    "id": "qse-500-151",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-152",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Superfetação",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-153",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ovulação após implantação. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-154",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-155",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-156",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-157",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-158",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ovulação após implantação. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-159",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-160",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-161",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-162",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-163",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ovulação após implantação. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-164",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-165",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-166",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Superfetação",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-167",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-168",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ovulação após implantação. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-169",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-170",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Superfetação",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-171",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-172",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-173",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ovulação após implantação. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Superfetação",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-174",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Superfetação",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-175",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-176",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-177",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-178",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ovulação após implantação. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-179",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-180",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Superfetação",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-181",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-182",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Superfetação",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-183",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ovulação após implantação. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-184",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Superfetação",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-185",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfetação",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-186",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Superfetação",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-187",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-188",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ovulação após implantação. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Superfetação",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-189",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-190",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-191",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-192",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Superfetação",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-193",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ovulação após implantação. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-194",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-195",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-196",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou segunda concepção durante gestação. Sou a concepção de um novo embrião após uma gestação anterior já ter começado, produzindo conceptos com idades de desenvolvimento diferentes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A hipótese requer ovulação, fecundação e implantação apesar dos mecanismos hormonais e uterinos que normalmente impedem nova concepção."
  },
  {
    "id": "qse-500-197",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou idades gestacionais discordantes. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou suspeitada quando dois fetos apresentam diferença de idade gestacional incompatível com a variação habitual de crescimento, sugerindo concepções em momentos distintos. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A segunda concepção teria ocorrido depois do início da primeira gestação, algo extremamente raro em humanos."
  },
  {
    "id": "qse-500-198",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ovulação após implantação. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou teoricamente possível se uma nova ovulação e fecundação ocorrerem após a implantação de um primeiro embrião, apesar da supressão hormonal normal. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A progesterona e as alterações endócrinas da gravidez normalmente inibem a ovulação e tornam o ambiente uterino pouco favorável a nova implantação."
  },
  {
    "id": "qse-500-199",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou concepções em tempos diferentes. Sou uma gestação múltipla na qual os conceptos teriam sido concebidos em momentos distintos, e não no mesmo episódio ovulatório. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Superfetação"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferença temporal verdadeira precisa ser demonstrada, pois medidas fetais diferentes também podem resultar de crescimento desigual."
  },
  {
    "id": "qse-500-200",
    "theme": "Superfetação",
    "category": "Superfetação",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou fenômeno excepcional. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou considerado excepcional e controverso em humanos, pois os mecanismos fisiológicos da gestação geralmente bloqueiam uma nova ovulação e implantação. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A confirmação exige evidências robustas de concepção posterior, não apenas discrepância biométrica fetal."
  },
  {
    "id": "qse-500-201",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-202",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-203",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou compressão entre membranas. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-204",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-205",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gestação gemelar. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-206",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-207",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Feto papiráceo",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-208",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou compressão entre membranas. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-209",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-210",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gestação gemelar. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Feto papiráceo",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-211",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-212",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-213",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou compressão entre membranas. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-214",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Superfetação",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-215",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gestação gemelar. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-216",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-217",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-218",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou compressão entre membranas. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Teratomas",
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-219",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Feto papiráceo",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-220",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gestação gemelar. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-221",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-222",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Feto papiráceo",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-223",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou compressão entre membranas. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Feto papiráceo",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-224",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-225",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gestação gemelar. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-226",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-227",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-228",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou compressão entre membranas. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-229",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-230",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gestação gemelar. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-231",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Feto papiráceo",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-232",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-233",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou compressão entre membranas. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-234",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Feto papiráceo",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-235",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gestação gemelar. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-236",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-237",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-238",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou compressão entre membranas. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Feto papiráceo",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-239",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-240",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gestação gemelar. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-241",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-242",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-243",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou compressão entre membranas. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Feto papiráceo",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-244",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-245",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gestação gemelar. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-246",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou feto comprimido e mumificado. Sou o remanescente achatado e desidratado de um feto que morreu durante uma gestação múltipla e permaneceu comprimido no útero. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Feto papiráceo",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Após a morte fetal, a pressão exercida pelo feto em crescimento e pelas estruturas gestacionais pode comprimir meu corpo contra a parede uterina ou membranas."
  },
  {
    "id": "qse-500-247",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou morte fetal em gestação múltipla. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou formado quando um dos fetos morre, geralmente no segundo trimestre, e é retido enquanto o outro continua a se desenvolver. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A retenção prolongada permite compressão mecânica e desidratação do feto morto."
  },
  {
    "id": "qse-500-248",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou compressão entre membranas. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou achatado pela pressão do saco gestacional, do líquido e do feto sobrevivente, podendo ficar aderido às membranas. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A compressão e a reabsorção parcial dos líquidos dos tecidos alteram minha morfologia."
  },
  {
    "id": "qse-500-249",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou remanescente fetal retido. Sou um feto morto que não foi expulso nem totalmente reabsorvido, permanecendo no útero até o parto do co-gêmeo. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A permanência intrauterina possibilita desidratação, maceração variável e achatamento progressivo."
  },
  {
    "id": "qse-500-250",
    "theme": "Feto papiráceo",
    "category": "Feto papiráceo",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gestação gemelar. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma complicação possível de gestação gemelar em que a morte de um concepto é seguida por retenção e compressão, sem necessariamente interromper a gestação do outro. Quem sou eu?",
    "options": [
      "Superfetação",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A evolução depende da corionicidade, idade gestacional e conexões vasculares entre os fetos."
  },
  {
    "id": "qse-500-251",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-252",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-253",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-254",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-255",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-256",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-257",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-258",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-259",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-260",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-261",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-262",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-263",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-264",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-265",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-266",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-267",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-268",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-269",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-270",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-271",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Superfetação",
      "Síndrome do gêmeo desaparecido",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-272",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Teratomas",
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-273",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-274",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-275",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-276",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-277",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-278",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-279",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-280",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-281",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-282",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-283",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-284",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-285",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-286",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-287",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-288",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-289",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-290",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-291",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-292",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-293",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-294",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-295",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Síndrome do gêmeo desaparecido",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-296",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção de um concepto. Sou o fenômeno em que um dos embriões ou fetos de uma gestação múltipla deixa de evoluir e é parcial ou totalmente reabsorvido. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A perda precoce pode levar à reabsorção do saco gestacional e de seus tecidos, enquanto o outro concepto continua a gestação."
  },
  {
    "id": "qse-500-297",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou perda no primeiro trimestre. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou frequentemente identificado no primeiro trimestre, quando a morte de um dos conceptos pode ser seguida por reabsorção sem sinais clínicos importantes. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A capacidade de reabsorção dos tecidos gestacionais é maior quando a perda ocorre precocemente."
  },
  {
    "id": "qse-500-298",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou gestação inicialmente gemelar. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou suspeitado quando uma ultrassonografia inicial demonstra gestação gemelar e outra posterior evidencia apenas um embrião em desenvolvimento. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A interrupção do desenvolvimento de um concepto pode ser seguida por involução do saco gestacional e reabsorção."
  },
  {
    "id": "qse-500-299",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou reabsorção embrionária. Sou resultado da morte de um concepto e da remoção progressiva de seus tecidos por processos maternos e placentários. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Células fagocitárias e mecanismos de remodelação tecidual participam da eliminação dos restos embrionários."
  },
  {
    "id": "qse-500-300",
    "theme": "Síndrome do gêmeo desaparecido",
    "category": "Síndrome do gêmeo desaparecido",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diferença entre perda precoce e retenção. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou distinto do feto papiráceo porque, em minha apresentação típica, o concepto perdido é reabsorvido e pode não deixar um remanescente fetal achatado. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Quando a morte ocorre muito cedo, os tecidos podem involuir; em perdas mais tardias, pode haver retenção e compressão."
  },
  {
    "id": "qse-500-301",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-302",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou eixo vertebral. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-303",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou inclusão gemelar. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-304",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou massa fetiforme. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-305",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Fetus in fetu",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-306",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-307",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou eixo vertebral. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-308",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou inclusão gemelar. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-309",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou massa fetiforme. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-310",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-311",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-312",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou eixo vertebral. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-313",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou inclusão gemelar. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-314",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou massa fetiforme. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-315",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-316",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Fetus in fetu",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-317",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou eixo vertebral. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-318",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou inclusão gemelar. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-319",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou massa fetiforme. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-320",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Fetus in fetu",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-321",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido",
      "Fetus in fetu",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-322",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou eixo vertebral. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-323",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou inclusão gemelar. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-324",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou massa fetiforme. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-325",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Fetus in fetu",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-326",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-327",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou eixo vertebral. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-328",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou inclusão gemelar. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-329",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou massa fetiforme. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Teratomas",
      "Feto papiráceo",
      "Fetus in fetu",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-330",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-331",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-332",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou eixo vertebral. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Teratomas",
      "Fetus in fetu",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-333",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou inclusão gemelar. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-334",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou massa fetiforme. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-335",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-336",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-337",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou eixo vertebral. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-338",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou inclusão gemelar. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-339",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou massa fetiforme. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-340",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-341",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Fetus in fetu",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-342",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou eixo vertebral. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-343",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou inclusão gemelar. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-344",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou massa fetiforme. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-345",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-346",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou estrutura fetal dentro de outro indivíduo. Sou uma massa rara, organizada como um feto rudimentar, localizada dentro do corpo de meu irmão gêmeo hospedeiro, geralmente no retroperitônio. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Sou associado à inclusão de um concepto parasita durante o desenvolvimento de uma gestação gemelar, com organização corporal variável."
  },
  {
    "id": "qse-500-347",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou eixo vertebral. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou reconhecido pela organização ao redor de um eixo vertebral ou notocordal rudimentar, com estruturas que lembram membros e órgãos fetais. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A organização axial sugere desenvolvimento de um componente embrionário incluído, em vez de uma proliferação desorganizada de células germinativas."
  },
  {
    "id": "qse-500-348",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou inclusão gemelar. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou explicado classicamente pela inclusão de um gêmeo mono zigótico muito alterado no corpo do outro durante o desenvolvimento inicial. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A assimetria do desenvolvimento e a incorporação de um concepto no outro são propostas para minha origem."
  },
  {
    "id": "qse-500-349",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou massa fetiforme. Sou uma massa com estruturas fetiformes, podendo apresentar pele, membros ou órgãos rudimentares, mas sem viabilidade independente. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha organização anatômica parcial diferencia-me de uma massa tumoral sem eixo corporal reconhecível."
  },
  {
    "id": "qse-500-350",
    "theme": "Fetus in fetu",
    "category": "Fetus in fetu",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou diagnóstico diferencial. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou diferenciado de teratoma principalmente pela organização corporal e pela presença frequente de eixo vertebral; ainda assim, a distinção pode exigir análise anatomopatológica. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Fetus in fetu"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A hipótese de inclusão de um gêmeo explica a arquitetura mais organizada que a de muitos teratomas."
  },
  {
    "id": "qse-500-351",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou quatro gametas. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-352",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-353",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou fusão de zigotos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-354",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-355",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-356",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou quatro gametas. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-357",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-358",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou fusão de zigotos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-359",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-360",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-361",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou quatro gametas. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-362",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-363",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou fusão de zigotos. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-364",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-365",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-366",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou quatro gametas. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-367",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-368",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou fusão de zigotos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-369",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-370",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Fetus in fetu",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-371",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou quatro gametas. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-372",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-373",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou fusão de zigotos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-374",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-375",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-376",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou quatro gametas. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-377",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-378",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou fusão de zigotos. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-379",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-380",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-381",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou quatro gametas. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-382",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-383",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou fusão de zigotos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-384",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-385",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-386",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou quatro gametas. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Teratomas",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-387",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-388",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou fusão de zigotos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-389",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-390",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-391",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou quatro gametas. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-392",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-393",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou fusão de zigotos. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-394",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-395",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-396",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou quatro gametas. Sou um indivíduo que pode resultar da fusão precoce de dois zigotos distintos, cada um formado por um ovócito e um espermatozoide; por isso, posso apresentar quatro contribuições gaméticas. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A fusão de dois embriões iniciais permite que linhagens celulares geneticamente diferentes coexistam em um único organismo."
  },
  {
    "id": "qse-500-397",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou duas linhagens celulares. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou caracterizado pela presença de duas ou mais populações celulares geneticamente distintas em meu organismo, originadas de zigotos diferentes. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "No quimerismo tetragamético, a fusão embrionária precoce mistura linhagens celulares sem que elas necessariamente se distribuam igualmente por todos os tecidos."
  },
  {
    "id": "qse-500-398",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou fusão de zigotos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou formado, em uma explicação clássica, quando dois zigotos ou embriões muito precoces se fundem e passam a constituir um único indivíduo. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A fusão antes da diferenciação tecidual ampla permite a integração de populações celulares distintas."
  },
  {
    "id": "qse-500-399",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou genótipos distintos em tecidos. Sou suspeitado quando amostras de sangue, mucosa, pele ou gônadas apresentam perfis genéticos discordantes no mesmo indivíduo. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A distribuição desigual das linhagens celulares pode fazer com que um tecido represente uma linhagem e outro tecido represente a segunda."
  },
  {
    "id": "qse-500-400",
    "theme": "Quimerismo humano (Tetragamético / Linhagens celulares)",
    "category": "Quimerismo humano",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou distinção do mosaicismo. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou diferente do mosaicismo porque minhas linhagens celulares podem derivar de dois zigotos distintos, enquanto o mosaicismo costuma surgir de alterações após a fecundação em um único zigoto. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A origem embrionária das linhagens é a chave da distinção: dois zigotos no quimerismo tetragamético versus um zigoto no mosaicismo."
  },
  {
    "id": "qse-500-401",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-402",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-403",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Teratomas",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-404",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou teratoma maduro. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-405",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou teratoma imaturo. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-406",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Superfetação",
      "Teratomas",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-407",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-408",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-409",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou teratoma maduro. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Teratomas",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-410",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou teratoma imaturo. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-411",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Teratomas",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-412",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou dentes e cabelos. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-413",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-414",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou teratoma maduro. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-415",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou teratoma imaturo. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Teratomas",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-416",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-417",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-418",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Teratomas",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-419",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou teratoma maduro. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Teratomas",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-420",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou teratoma imaturo. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-421",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-422",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-423",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Teratomas",
      "Nascimento empelicado"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-424",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou teratoma maduro. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-425",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou teratoma imaturo. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Teratomas",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-426",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-427",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Fetus in fetu",
      "Teratomas",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-428",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-429",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou teratoma maduro. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Teratomas",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-430",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou teratoma imaturo. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Teratomas",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-431",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-432",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou dentes e cabelos. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-433",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-434",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou teratoma maduro. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-435",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou teratoma imaturo. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-436",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-437",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Teratomas",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-438",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-439",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou teratoma maduro. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Teratomas",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-440",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou teratoma imaturo. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-441",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-442",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Superfetação",
      "Teratomas",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-443",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-444",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou teratoma maduro. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-445",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou teratoma imaturo. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Teratomas",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-446",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou três folhetos embrionários. Sou um tumor de células germinativas que pode conter tecidos derivados de ectoderma, mesoderma e endoderma, inclusive cabelo, pele, cartilagem e estruturas glandulares. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A capacidade de diferenciação de células germinativas pluripotentes explica a presença de tecidos dos três folhetos embrionários."
  },
  {
    "id": "qse-500-447",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou dentes e cabelos. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou uma massa tumoral que pode apresentar dentes, pelos, pele, osso e outros tecidos maduros em seu interior. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Teratomas",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A diferenciação divergente de células germinativas pode produzir estruturas reconhecíveis, como dentes e cabelos."
  },
  {
    "id": "qse-500-448",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou células germinativas pluripotentes. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou originado de células germinativas com potencial de diferenciação em múltiplos tipos teciduais, formando estruturas de diferentes folhetos embrionários. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação",
      "Teratomas"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A pluripotência ou amplo potencial de diferenciação das células tumorais explica a variedade histológica."
  },
  {
    "id": "qse-500-449",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou teratoma maduro. Sou uma neoplasia que contém tecidos maduros e diferenciados, podendo incluir epitélio, tecido nervoso, cartilagem, gordura, dentes e cabelos. Quem sou eu?",
    "options": [
      "Teratomas",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A diferenciação tecidual relativamente completa caracteriza a forma madura; o comportamento clínico depende do local e do contexto biológico."
  },
  {
    "id": "qse-500-450",
    "theme": "Teratomas",
    "category": "Teratomas",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou teratoma imaturo. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou uma neoplasia que pode conter tecidos embrionários ou imaturos, especialmente componentes neuroepiteliais, e minha classificação depende da histologia. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A presença e a quantidade de tecidos imaturos ajudam a graduar o tumor, conforme critérios específicos do órgão e da idade."
  },
  {
    "id": "qse-500-451",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou membranas intactas. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-452",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-453",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ânmio e córion. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-454",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-455",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou evento raro do parto. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-456",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou membranas intactas. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-457",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-458",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ânmio e córion. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-459",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Teratomas",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-460",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou evento raro do parto. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-461",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou membranas intactas. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-462",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-463",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ânmio e córion. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Superfetação",
      "Nascimento empelicado",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-464",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Nascimento empelicado",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-465",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou evento raro do parto. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-466",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou membranas intactas. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-467",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Nascimento empelicado",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-468",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ânmio e córion. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Teratomas",
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-469",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Gêmeos siameses",
      "Superfetação",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-470",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou evento raro do parto. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-471",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou membranas intactas. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-472",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Superfetação",
      "Nascimento empelicado",
      "Gêmeos siameses"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-473",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ânmio e córion. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-474",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-475",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou evento raro do parto. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Fetus in fetu",
      "Nascimento empelicado",
      "Gêmeos siameses",
      "Superfetação"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-476",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou membranas intactas. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Nascimento empelicado",
      "Feto papiráceo"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-477",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-478",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ânmio e córion. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-479",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-480",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou evento raro do parto. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Superfecundação heteropaternal",
      "Nascimento empelicado",
      "Teratomas"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-481",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou membranas intactas. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Superfetação",
      "Fetus in fetu",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-482",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-483",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ânmio e córion. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Teratomas",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-484",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Fetus in fetu",
      "Nascimento empelicado",
      "Superfetação"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-485",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou evento raro do parto. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-486",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou membranas intactas. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-487",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-488",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ânmio e córion. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Gêmeos parasitas (Heterópagos)",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-489",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Teratomas",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-490",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou evento raro do parto. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-491",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou membranas intactas. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Feto papiráceo",
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-492",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Diferencie minha arquitetura embrionária de outras alterações da gemelaridade ou da diferenciação celular. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Teratomas",
      "Síndrome do gêmeo desaparecido",
      "Nascimento empelicado",
      "Superfecundação heteropaternal"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-493",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ânmio e córion. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Superfetação",
      "Fetus in fetu",
      "Gêmeos siameses",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-494",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Minha identificação exige relacionar o período gestacional ao mecanismo celular envolvido. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-495",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou evento raro do parto. Observe a relação entre eixo corporal, membranas, conexões vasculares ou linhagens celulares, conforme meu mecanismo. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Teratomas",
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  },
  {
    "id": "qse-500-496",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou membranas intactas. Sou o nascimento em que o bebê é expulso ainda envolto pelo saco amniótico, com as membranas permanecendo intactas durante a saída. Quem sou eu?",
    "options": [
      "Superfetação",
      "Gêmeos siameses",
      "Nascimento empelicado",
      "Fetus in fetu"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "O âmnio e o córion não se rompem antes da expulsão fetal, mantendo o concepto temporariamente envolvido pelo saco."
  },
  {
    "id": "qse-500-497",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou saco amniótico preservado. Considere a etapa inicial do desenvolvimento e a origem das minhas linhagens celulares. Sou reconhecido porque o recém-nascido sai envolvido por uma bolsa transparente formada pelas membranas fetais. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Gêmeos parasitas (Heterópagos)",
      "Feto papiráceo",
      "Nascimento empelicado"
    ],
    "correctAnswer": 3,
    "scientificExplanation": "A persistência do saco amniótico intacto até a expulsão caracteriza o nascimento empelicado."
  },
  {
    "id": "qse-500-498",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Difícil",
    "points": 30,
    "question": "QUEM SOU EU? Sou ânmio e córion. A nomenclatura anatômica ou a organização histológica é a pista que permite me reconhecer. Sou associado à preservação das membranas corioamnióticas ao redor do feto até o momento do nascimento. Quem sou eu?",
    "options": [
      "Nascimento empelicado",
      "Superfecundação heteropaternal",
      "Síndrome do gêmeo desaparecido",
      "Teratomas"
    ],
    "correctAnswer": 0,
    "scientificExplanation": "O âmnio envolve diretamente o líquido amniótico e o feto; o córion constitui a membrana fetal externa."
  },
  {
    "id": "qse-500-499",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Fácil",
    "points": 10,
    "question": "QUEM SOU EU? Sou ruptura tardia das membranas. Sou possível quando a ruptura das membranas ocorre somente após a completa expulsão do feto, mantendo o saco íntegro durante o parto. Quem sou eu?",
    "options": [
      "Superfetação",
      "Nascimento empelicado",
      "Fetus in fetu",
      "Gêmeos siameses"
    ],
    "correctAnswer": 1,
    "scientificExplanation": "A ruptura habitual antes ou durante o trabalho de parto não acontece antes da saída fetal neste evento."
  },
  {
    "id": "qse-500-500",
    "theme": "Nascimento empelicado",
    "category": "Nascimento empelicado",
    "difficulty": "Médio",
    "points": 20,
    "question": "QUEM SOU EU? Sou evento raro do parto. A cronologia da fecundação, clivagem, implantação ou gestação ajuda a explicar meu surgimento. Sou um evento obstétrico incomum, geralmente sem significar por si só uma doença ou malformação embrionária. Quem sou eu?",
    "options": [
      "Quimerismo humano (Tetragamético / Linhagens celulares)",
      "Feto papiráceo",
      "Nascimento empelicado",
      "Gêmeos parasitas (Heterópagos)"
    ],
    "correctAnswer": 2,
    "scientificExplanation": "Minha ocorrência depende da manutenção da integridade do saco amniótico e das membranas corioamnióticas até a expulsão."
  }
];

module.exports = qseQuestions;
