/**
 * ENCICLOPÉDIA ACADÊMICA DO GRUPO 5 — BASES CELULARES
 * Explicações científicas aprofundadas dos 10 fenômenos extraordinários da embriologia.
 * Fundamentado em:
 * - Alberts, B. et al. Biologia Molecular da Célula (6ª/7ª ed.).
 * - Moore, K. L. Embriologia Clínica (11ª ed.).
 * - Sadler, T. W. Langman: Embriologia Médica (14ª ed.).
 * - Schoenwolf et al. Larsen: Embriologia Humana (5ª ed.).
 */

const topicsData = {
  siameses: {
    id: 'siameses',
    badge: 'Morfogênese & Clivagem Tardia',
    title: 'Gêmeos Siameses (Unidos)',
    subtitle: 'Falhas na divisão do disco embrionário bilaminar e trilaminar pós-13º dia',
    icon: '🧬',
    definition: 'Gêmeos monozigóticos que nascem conectados fisicamente por uma ou mais regiões anatômicas, compartilhando tecidos tegumentares, esqueléticos e frequentemente órgãos vitais internos (coração, fígado, encéfalo). A ocorrência estimada varia de 1 a cada 50.000 a 100.000 nascidos vivos, com predominância notável no sexo feminino (aproximadamente 3:1).',
    cellularMechanism: `
      <p>Na embriologia e biologia celular do desenvolvimento, existem duas teorias principais para a formação de gêmeos siameses:</p>
      <ul style="margin: 0.75rem 0 0.75rem 1.5rem; line-height: 1.6;">
        <li><strong>1. Teoria da Fissão Incompleta (Teoria da Fissão):</strong> É a mais amplamente aceita. Em gêmeos monozigóticos comuns, a clivagem do zigoto ou embrioblasto ocorre precocemente (antes do 8º a 12º dia). Se a divisão do disco embrionário for tentada tardiamente — <em>após o 13º ao 15º dia pós-fertilização</em>, quando a linha primitiva já começou a se formar no epiblasto —, as forças de adesão celular (mediadas por caderinas e moléculas de adesão da matriz extracelular) e o estabelecimento dos eixos corporais impedem a separação completa das massas celulares, originando corpos unidos.</li>
        <li><strong>2. Hipótese da Fusão Secundária:</strong> Propõe que dois discos embrionários monoamnióticos inicialmente separados e muito próximos colidem durante a gastrulação e dobramento lateral do embrião, ocorrendo uma fusão tecidual ectodérmica e mesodérmica secundária guiada por fatores de sinalização morfogenética congruentes.</li>
      </ul>
      <p>A classificação anatômica baseia-se na região de união acompanhada do sufixo <em>-pago</em> (do grego <em>pagos</em> = unido): <strong>Toracópagos</strong> (~70%, união ventral pelo tórax compartilhando pericárdio/coração), <strong>Onfalópagos</strong> (união umbilical/abdominal inferior), <strong>Craniópagos</strong> (~2-6%, calvária craniana), <strong>Pigópagos</strong> (sacrococcígeo dorsal) e <strong>Isquiópagos</strong> (bacia e pelve).</p>
    `,
    odontologyRelevance: `
      <p>Em <strong>Odontologia e Cirurgia Craniofacial</strong>, os gêmeos <em>Craniópagos</em> e <em>Cefalópagos</em> (janiceps) são de fundamental importância. Nos craniópagos, a união se restringe à calvária craniana e duramáter, preservando a independência do viscerocrânio, das maxilas, mandíbulas e arcos faríngeos. Já nos cefalópagos, ocorre fusão da face e do estomodeu (boca primitiva), com desenvolvimento de cavidades orais confluentes, arcadas dentárias atípicas e má-oclusões severas que exigem modelagem tomográfica tridimensional de alta precisão para planejamento ortodôntico e bucomaxilofacial.</p>
    `,
    curiosity: 'O termo histórico "gêmeos siameses" consagrou-se no século XIX devido aos irmãos Chang e Eng Bunker (1811-1874), nascidos no Sião (atual Tailândia). Eram xifópagos (unidos por uma ponte cartilaginosa e hepática na altura do apêndice xifoide), casaram-se, tiveram 21 filhos no total e viveram até os 62 anos.',
    difference: 'Diferente dos gêmeos parasitas (heterópagos), nos gêmeos siameses simétricos clássicos AMBOS os indivíduos possuem cérebros, eixos corporais funcionais e metabolismo ativo.',
    reference: 'Moore, K.L. Embriologia Clínica, 11ª Ed., Cap. 7; Sadler, T.W. Langman: Embriologia Médica, 14ª Ed.'
  },

  parasitas: {
    id: 'parasitas',
    badge: 'Acidente Vascular Intrauterino',
    title: 'Gêmeos Parasitas (Heterópagos)',
    subtitle: 'Assimetria extrema entre o gêmeo hospedeiro autossito e a massa dependente',
    icon: '👁️',
    definition: 'Anomalia congênita em que uma gestação gemelar monozigótica resulta em um indivíduo dominante anatomicamente completo (o hospedeiro ou "autossito") que carrega aderido ao seu corpo partes rudimentares, dismórficas e dependentes de um gêmeo secundário inviável (o "parasita" ou heterópago).',
    cellularMechanism: `
      <p>A etiologia celular do gêmeo parasita está fortemente associada a um <strong>acidente vascular isquêmico seletivo intrauterino precoce</strong>.</p>
      <p>Na placenta monocoriônica compartilhada, formam-se anastomoses vasculares anômalas arterioarteriais e venovenosas. O embrião hemodinamicamente mais forte estabelece dominância de fluxo, causando um fenômeno de "roubo vascular" extremo no concepto secundário. Privado de oxigênio e glicose durante a fase crítica da organogênese (semanas 4 a 8), o embrião hipoperfundido sofre apoptose massiva, necrose isquêmica dos tecidos cefálicos e torácicos superiores e interrupção do desenvolvimento.</p>
      <p>As células remanescentes dos membros inferiores e abdômen continuam proliferando de maneira dependente, nutridas exclusivamente pelas artérias do gêmeo hospedeiro autossito.</p>
    `,
    odontologyRelevance: `
      <p>O <strong>Epignathus</strong> é a manifestação de maior relevância para os cirurgiões-dentistas e cirurgiões bucomaxilofaciais. Trata-se de uma massa heterópaga ou teratomatosa complexa que se ancora na base do crânio (esfenoide), no palato mole ou na parede posterior da orofaringe, protruindo diretamente pela cavidade bucal do recém-nascido. Causa obstrução aguda das vias aéreas superiores no nascimento, necessitando frequentemente do procedimento <em>EXIT (Ex Utero Intrapartum Treatment)</em> para garantir a intubação orotraqueal antes de cortar o cordão umbilical.</p>
    `,
    curiosity: 'O gêmeo parasita pode conter membros extranumerários perfeitamente formados com unhas, ossos longos e tecido adiposo funcional, mas carece de coração e sistema nervoso central autônomo.',
    difference: 'Ao contrário do Fetus in fetu (que se desenvolve internalizado dentro de cavidades corporais retroperitoneais do hospedeiro), o gêmeo parasita clássico fica externamente visível e fixado na superfície corporal.',
    reference: 'Larsen: Embriologia Humana, 5ª Ed., Cap. 15; Journal of Pediatric Surgery.'
  },

  superfecundacao: {
    id: 'superfecundacao',
    badge: 'Genética & Fecundação Múltipla',
    title: 'Superfecundação Heteropaternal',
    subtitle: 'Fertilização de ovócitos distintos no mesmo ciclo por espermatozoides de homens diferentes',
    icon: '🧪',
    definition: 'Fenômeno reprodutivo e genético no qual uma mulher libera dois ou mais ovócitos durante o mesmo ciclo menstrual (ovulação múltipla/poliovulação) e estes são fecundados por espermatozoides de parceiros masculinos diferentes em relações sexuais ocorridas com intervalos de horas a poucos dias.',
    cellularMechanism: `
      <p>O mecanismo celular depende da <strong>janela de fertilidade e viabilidade dos gametas humanos</strong>:</p>
      <ul style="margin: 0.75rem 0 0.75rem 1.5rem; line-height: 1.6;">
        <li>O ovócito secundário humano permanece viável para fertilização na ampola da tuba uterina por aproximadamente 12 a 24 horas após a ovulação;</li>
        <li>Os espermatozoides humanos capacitados mantêm sua capacidade fecundante no trato reprodutor feminino por até 3 a 5 dias;</li>
        <li>Em mulheres com poliovulação induzida ou espontânea (pico duplo de hormônio luteinizante LH ou co-dominância folicular), coitos sucessivos com parceiros distintos dentro dessa janela temporal resultam na fusão de gametas com materiais genéticos paternos totalmente independentes.</li>
      </ul>
      <p>O resultado embriológico são gêmeos dizigóticos que compartilham 50% dos alelos maternos, mas possuem pais biológicos distintos — isto é, <strong>são geneticamente meios-irmãos gestados simultaneamente no mesmo útero</strong>.</p>
    `,
    odontologyRelevance: `
      <p>Na <strong>Odontologia Legal e Forense</strong>, o fenômeno é de alto valor pericial. Em testes de paternidade ou investigações periciais de identificação de arcadas dentárias, a presença de divergências nos polimorfismos de microssatélites (STRs) e perfil de DNA entre gêmeos que compartilham o mesmo parto revela a superfecundação heteropaternal, auxiliando na elucidação de perícias judiciais de família e herança genética.</p>
    `,
    curiosity: 'Estudos epidemiológicos sugerem que a superfecundação ocorre em cerca de 1 a cada 400 gestações gemelares nos Estados Unidos, mas a imensa maioria dos casos permanece oculta a menos que testes forenses de DNA sejam solicitados formalmente.',
    difference: 'Fundamental não confundir com a Superfetação: na superfecundação, os embriões pertencem estritamente ao MESMO ciclo menstrual e possuem a mesma idade gestacional cronológica.',
    reference: 'Sadler, T.W. Langman: Embriologia Médica, 14ª Ed., Cap. 2; Nussbaum et al. Genética Médica.'
  },

  superfetacao: {
    id: 'superfetacao',
    badge: 'Barreiras Endócrinas & Celulares',
    title: 'Superfetação (Superfetation)',
    subtitle: 'Concepção de um segundo embrião durante uma gestação já em curso em ciclos sucessivos',
    icon: '⏳',
    definition: 'Condição extraordinariamente rara na espécie humana na qual uma mulher grávida ovula novamente em um ciclo menstrual subsequente, ocorre uma nova fertilização tubária e um segundo blastocisto consegue se implantar com sucesso em um endométrio já ocupado por uma gestação em andamento.',
    cellularMechanism: `
      <p>Para que a superfetação ocorra em humanos, três barreiras biológicas celulares e hormonais extremamente rígidas precisam falhar ao mesmo tempo:</p>
      <ol style="margin: 0.75rem 0 0.75rem 1.5rem; line-height: 1.6;">
        <li><strong>Bloqueio do Eixo Hipotálamo-Hipófise-Ovário:</strong> A alta concentração plasmática de progesterona secretada inicialmente pelo corpo lúteo gravídico e posteriormente pelo sinciciotrofoblasto placentário inibe o GnRH, o FSH e o LH, impedindo novas ondas de recrutamento folicular e ovulação.</li>
        <li><strong>Tampão Mucoso Cervical:</strong> Sob a ação da progesterona, as células epiteliais do canal endocervical produzem um muco glicoproteico espesso, viscoso e insolúvel que oblitera o óstio cervical, criando uma barreira física e enzimática impenetrável à ascensão espermática.</li>
        <li><strong>Obliteramento da Cavidade Uterina:</strong> Por volta da 12ª semana de gestação, o crescimento do saco gestacional inicial funde a decídua capsular com a decídua parietal na parede endometrial oposta, eliminando o espaço físico disponível para uma nova nidação de blastocisto.</li>
      </ol>
      <p>Casos comprovados em humanos quase sempre envolvem ciclos ovulatórios irregulares em úteros didelfos (útero duplo) ou pacientes sob protocolos de reprodução assistida com estimulação hormonal exógena.</p>
    `,
    odontologyRelevance: `
      <p>Nos conceitos de embriogênese craniofacial, os conceptos da superfetação nascem com <strong>idades biológicas e graus de mineralização dentária discordantes</strong>. Enquanto o gêmeo mais velho já possui germes dentários primários em estágio de campânula avançada com aposição inicial de matriz de dentina, o feto mais jovem pode estar em estágios iniciais de botão ou capuz, demonstrando o impacto do tempo de desenvolvimento celular.</p>
    `,
    curiosity: 'Embora seja um evento com menos de dez casos mundiais documentados em seres humanos, a superfetação é um mecanismo fisiológico normal em mamíferos como lebres, cangurus, texugos e peixes poecilídeos.',
    difference: 'Diferença capital com Superfecundação: na superfecundação os embriões são concebidos no mesmo ciclo menstrual; na superfetação, são concebidos em ciclos menstruais DISTINTOS com idades gestacionais cronologicamente diferentes.',
    reference: 'Carlson, B.M. Embriologia Humana e Biologia do Desenvolvimento, 6ª Ed.; European Journal of Obstetrics & Gynecology.'
  },

  papiraceo: {
    id: 'papiraceo',
    badge: 'Dessecação & Compressão Mecânica',
    title: 'Feto Papiráceo (Fetus Papyraceus)',
    subtitle: 'Morte fetal no segundo trimestre com retenção, desidratação e compressão semelhante a papel',
    icon: '📜',
    definition: 'Condição em que ocorre a morte intrauterina de um concepto em gestações múltiplas entre a 12ª e a 24ª semana de gestação (fim do primeiro trimestre ou segundo trimestre). Por estar retido, o feto sofre desidratação contínua e compressão mecânica pelo gêmeo viável em crescimento, transformando-se em uma lâmina fina achatada como pergaminho (papiráceo).',
    cellularMechanism: `
      <p>O processo celular baseia-se na <strong>perda gradativa de fluídos intersticiais e lise celular asséptica sob hiperpressão hidrostática</strong>:</p>
      <p>Ao contrário da perda embrionária antes da 8ª semana (onde o conceito é completamente digerido por enzimas lisossomais trofoblásticas), no feto do segundo trimestre o esqueleto cartilaginoso e os centros de ossificação endocondral e intramembranosa já estão estabelecidos.</p>
      <p>Com a interrupção da circulação feto-placentária, o feto falecido perde líquido amniótico próprio. O feto sobrevivente e a cavidade amniótica adjacente continuam em franca expansão volumétrica, prensando o concepto inviável contra as membranas corioamnióticas e a parede miometrial uterina. A perda hídrica causa dessecação e mumificação do colágeno e dos tecidos moles.</p>
    `,
    odontologyRelevance: `
      <p>Ao exame histológico e radiológico de um feto papiráceo, as <strong>arcadas dentárias e os ossos maxilares preservam os alvéolos e os folículos dentários mineralizados</strong>, servindo como elementos duradouros de identificação médico-legal da idade gestacional exata em que ocorreu o óbito intrauterino.</p>
    `,
    curiosity: 'O feto papiráceo pode passar completamente despercebido durante a gestação e o pré-natal se a paciente não realizar ultrassonografias seriadas, sendo descoberto pelo obstetra grudado na face fetal da placenta no momento do parto do bebê saudável.',
    difference: 'Diferente da Síndrome do Gêmeo Desaparecido (que ocorre nas primeiras semanas com reabsorção tecidual completa sem deixar massa corporal), o Feto Papiráceo retém o esqueleto mineralizado achatado.',
    reference: 'Moore, K.L. Embriologia Clínica, 11ª Ed., Cap. 7 (Gestações Múltiplas).'
  },

  desaparecido: {
    id: 'desaparecido',
    badge: 'Apoptose & Reabsorção Trofoblástica',
    title: 'Síndrome do Gêmeo Desaparecido',
    subtitle: 'Reabsorção precoce no primeiro trimestre identificada pela ultrassonografia seriada',
    icon: '👻',
    definition: 'Fenômeno clínico e embriológico no qual uma gestação múltipla diagnosticada precocemente por ultrassonografia (semanas 5 a 8) tem a evolução de um dos embriões interrompida, ocorrendo sua lise celular e reabsorção biológica total pelo endométrio e pela placenta, culminando no nascimento de um bebê único saudável a termo.',
    cellularMechanism: `
      <p>As bases celulares da síndrome envolvem <strong>aneuploidias celulares embrionárias e autofagia/fagocitose trofoblástica</strong>:</p>
      <ul style="margin: 0.75rem 0 0.75rem 1.5rem; line-height: 1.6;">
        <li>Cerca de 70% dos casos de óbito precoce do concepto são causados por erros cromossômicos letais na meiose parental (trissomias, monossomias ou triploidias) que inviabilizam o prosseguimento da mitose embrionária;</li>
        <li>O tecido embrionário pré-esqueleto (constituído predominantemente por água, epitélio primitivo e mesênquima avascular sem deposição de fosfato de cálcio/hidroxiapatita) é rapidamente degradado por enzimas lisossomais;</li>
        <li>Macrófagos deciduais e células do trofoblasto extraviloso materno fagocitam os restos apoptóticos, reabsorvendo os nutrientes para a circulação uterina materna.</li>
      </ul>
    `,
    odontologyRelevance: `
      <p>Estudos recentes em biologia molecular investigam se pessoas adultas que tiveram um "gêmeo desaparecido" carregam <strong>células-tronco quiméricas remanescentes na polpa dental ou na mucosa jugal bucal</strong>, demonstrando como células do concepto reabsorvido podem migrar transplacentariamente e colonizar os tecidos do co-gêmeo sobrevivente.</p>
    `,
    curiosity: 'Com o advento da ultrassonografia precoce de alta resolução, descobriu-se que até 20% a 30% das gestações concebidas naturalmente iniciam como gestações gemelares, mas apenas uma fração dessas chega ao parto como gêmeos de fato.',
    difference: 'O gêmeo desaparecido sofre lise nas semanas iniciais antes da deposição de matriz óssea mineralizada; o feto papiráceo morre mais tarde e deixa uma lâmina rígida comprimida.',
    reference: 'Sadler, T.W. Langman: Embriologia Médica, 14ª Ed., Cap. 8; American Journal of Medical Genetics.'
  },

  fetus_in_fetu: {
    id: 'fetus_in_fetu',
    badge: 'Organogênese Primária & Eixo Axial',
    title: 'Fetus in Fetu (FIF)',
    subtitle: 'Englobamento de um feto vestigial com eixo vertebral no corpo do gêmeo hospedeiro',
    icon: '🦴',
    definition: 'Anomalia congênita extremamente rara (estimada em 1 para cada 500.000 nascimentos) caracterizada pela presença de uma massa fetiforme incorporada no interior do corpo de um gêmeo bem-desenvolvido, alojada mais frequentemente no retroperitônio (80%), crânio, escroto ou mediastino.',
    cellularMechanism: `
      <p>O Fetus in fetu resulta da <strong>incorporação física assimétrica de um concepto monoamniótico durante o dobramento lateral da gastrulação</strong>:</p>
      <p>Ao contrário dos teratomas, a massa do Fetus in fetu passou com sucesso pelo processo da gastrulação e pelo estabelecimento do nó primitivo (organizador de Spemann). Por isso, apresenta <strong>organogênese primária demonstrável</strong>: folhetos germinativos organizados, eixos corporais definidos, brotos de membros com metâmeros, pele queratinizada e cavidade peritoneal rudimentar.</p>
      <p>O <em>Critério Patognomônico de Willis (1953)</em> estipula que para um diagnóstico médico de Fetus in fetu é <strong>obrigatória a presença demonstrável de coluna vertebral ou eixo axial segmentado</strong> por radiografia ou tomografia.</p>
    `,
    odontologyRelevance: `
      <p>Embora raríssimo, foram documentados casos na literatura cirúrgica e odontológica de <strong>Fetus in fetu alojados na cavidade oral e assoalho bucal</strong>, onde a massa fetiforme apresentava arcos ósseos mandibuliformes com dentes formados e língua rudimentar englobados nas criptas submandibulares, mimetizando tumores congênitos orais.</p>
    `,
    curiosity: 'O Fetus in fetu é um tecido vivo, benigno, envolto por um saco membranoso análogo ao âmnio, mas que não possui cérebro funcional ou batimentos cardíacos próprios, alimentando-se por conexões vasculares da artéria mesentérica ou aorta do hospedeiro.',
    difference: 'DIFERENÇA CRUCIAL: O Fetus in fetu possui EIXO VERTEBRAL e organogênese axial metamerica; o Teratoma maduro é uma neoplasia desorganizada de células germinativas SEM eixo corporal ou coluna.',
    reference: 'Willis, R.A. The Borderland of Embryology and Pathology; Spencer, R. Conjoined Twins (Oxford University Press).'
  },

  quimerismo: {
    id: 'quimerismo',
    badge: 'Fusão de Blastocistos & Pluripotência',
    title: 'Quimerismo Humano',
    subtitle: 'Um único organismo composto por linhagens celulares derivadas de dois ou mais zigotos distintos',
    icon: '🎨',
    definition: 'Fenômeno genético e celular em que um único indivíduo é formado por populações de células geneticamente distintas com origens em dois ou mais zigotos diferentes que se fundiram nos primeiros estágios da clivagem embrionária.',
    cellularMechanism: `
      <p>As bases celulares do <strong>Quimerismo Tetragamético</strong> envolvem a fusão e totipotência de embriões pré-implantação:</p>
      <ul style="margin: 0.75rem 0 0.75rem 1.5rem; line-height: 1.6;">
        <li>Dois ovócitos independentes são fertilizados por dois espermatozoides distintos gerando dois zigotos dizigóticos;</li>
        <li>Durante a fase de clivagem (estágio de mórula ou blastocisto de 8 a 32 células), as duas massas celulares se aproximam e, devido à elevada plasticidade das células-tronco e expressão de caderinas de adesão intercelular, agregam-se em uma única massa embrionária contínua;</li>
        <li>O concepto resultante implanta-se como um único feto, mas suas células carregam dois patrimônios genéticos (cariótipos e perfis de DNA) completamente diferentes intercalados em tecidos distintos (pele, rins, sangue, gônadas).</li>
      </ul>
      <p>Outra modalidade de alto interesse é o <strong>Microquimerismo Fetomaterno</strong>, no qual pequenas quantidades de células-tronco fetais atravessam a barreira sinciciotrofoblástica da placenta e persistem colonizando tecidos maternos (gengiva, mucosa bucal, tireoide, pele) por várias décadas.</p>
    `,
    odontologyRelevance: `
      <p>Na <strong>Odontologia Forense e Genética</strong>, o quimerismo produz desafios periciais marcantes. O DNA extraído da saliva e de raspados de mucosa jugal pode acusar um perfil genético <em>A</em>, enquanto o DNA obtido do sangue periférico ou da polpa dentária de um dente extraído acusa um perfil <em>B</em>. Casos históricos célebres (como o de Lydia Fairchild) quase levaram mães a perderem a guarda de seus filhos porque os exames de DNA do sangue convencional apontavam falsamente que elas não eram as mães biológicas!</p>
    `,
    curiosity: 'Muitas pessoas quiméricas apresentam heterocromia ocular (um olho de cada cor), linhas de Blaschko (padrões pigmentares de listras na pele visíveis sob luz ultravioleta) ou tipos sanguíneos mistos.',
    difference: 'Quimerismo deriva da união de DOIS OU MAIS ZIGOTOS distintos; Mosaicismo deriva de UM ÚNICO ZIGOTO que sofreu mutação mitótica pós-zigótica posterior.',
    reference: 'Nussbaum et al. Thompson & Thompson: Genética Médica, 8ª Ed.; Nature Reviews Genetics.'
  },

  teratomas: {
    id: 'teratomas',
    badge: 'Células Germinativas & Odontogênese',
    title: 'Teratomas (Odontogênese Ectópica)',
    subtitle: 'Tumores originados de células germinativas pluripotentes contendo tecidos dos 3 folhetos',
    icon: '🦷',
    definition: 'Neoplasias constituídas por tecidos múltiplos e desorganizados derivados dos três folhetos embrionários (ectoderma, mesoderma e endoderma), originadas da persistência ou desvio migratório de células germinativas primordiais pluripotentes.',
    cellularMechanism: `
      <p>O desenvolvimento dos teratomas é um dos experimentos naturais mais ilustrativos da <strong>pluripotência celular</strong>:</p>
      <ul style="margin: 0.75rem 0 0.75rem 1.5rem; line-height: 1.6;">
        <li>Na 2ª semana embrionária, as <strong>Células Germinativas Primordiais (CGPs)</strong> originam-se no epiblasto e migram para a parede do saco vitelino;</li>
        <li>Durante a 4ª e 5ª semana, as CGPs migram ao longo do mesentério dorsal em direção às cristas gonadais primitivas;</li>
        <li>Células que extravasam ou persistem na linha média (região sacrococcígea, retroperitônio, mediastino e estomodeu/região faríngea) mantêm sua pluripotência ativa. Sob estímulos epigenéticos desregulados, proliferam e diferenciam-se em tecidos maduros complexos: epitélio escamoso, folículos pilosos, glândulas sebáceas, tecido tireoidiano, músculo e cartilagem.</li>
      </ul>
    `,
    odontologyRelevance: `
      <p>Em <strong>Odontologia e Patologia Oral</strong>, os teratomas são lendários por apresentarem <strong>odontogênese ectópica completa</strong>. As células pluripotentes recapitulam com perfeição as interações epitélio-mesenquimais da formação dentária: ameloblastos sintetizam esmalte prismático denso, odontoblastos produzem matriz de dentina tubular e fibroblastos formam polpa e ligamento periodontal rudimentar no interior de cistos ovarianos e sacrococcígeos!</p>
      <p>Além disso, o <em>Epignatus</em> oral é uma variante de teratoma complexo inserido nas estruturas estomodeais maxilares e faríngeas.</p>
    `,
    curiosity: 'É relativamente frequente radiografias pélvicas de rotina revelarem dentes molares e incisivos completamente mineralizados dentro de cistos dermoides ovarianos em mulheres jovens!',
    difference: 'O teratoma é uma neoplasia desorganizada SEM eixo corporal ou coluna vertebral; o Fetus in fetu possui eixo espinhal vertebral obrigatório.',
    reference: 'Neville, B.W. Patologia Oral e Maxilofacial, 4ª Ed.; Alberts, B. Biologia Molecular da Célula.'
  },

  empelicado: {
    id: 'empelicado',
    badge: 'Integridade Amniótica & Membranas',
    title: 'Nascimento Empelicado (En Caul)',
    subtitle: 'O parto do concepto completamente contido dentro do saco amniótico intacto',
    icon: '💧',
    definition: 'Evento obstétrico raro (menos de 1 em cada 80.000 partos) no qual o bebê é expelido no momento do nascimento completamente envolto pelo saco amniótico íntegro, sem a ruptura prévia das membranas fetais (córion e âmnio) e com o líquido amniótico preservado ao seu redor.',
    cellularMechanism: `
      <p>As bases celulares envolvem a <strong>resistência mecânica e arquitetura do córion e do âmnio</strong>:</p>
      <p>A membrana amniótica humana é composta por um epitélio cúbico simples com microvilosidades apicais assentado sobre uma membrana basal espessa e uma camada de tecido conjuntivo avascular rico em colágeno dos tipos I, III e IV e proteoglicanos sintetizados por fibroblastos amnióticos. Esse arcabouço confere grande elasticidade e tenacidade tênsil hidrostática.</p>
      <p>No nascimento empelicado, a dilatação cervical e o trajeto pelo canal de parto ocorrem sem que haja pressão focal suficiente para romper essa matriz fibrosa de colágeno, mantendo o feto imerso em seu microambiente hidrostático original até que o obstetra rompa manualmente a membrana para liberar a primeira respiração aérea.</p>
    `,
    odontologyRelevance: `
      <p>No ambiente intrauterino fluido, o concepto realiza movimentos de deglutição de líquido amniótico essenciais para a <strong>maturação da deglutição, sucção e motricidade orofacial</strong>. O nascimento empelicado exemplifica a proteção hidrostática das arcadas dentárias e do viscerocrânio contra as forças compressivas extremas do canal de parto vaginal.</p>
    `,
    curiosity: 'Historicamente, em diversas culturas antigas da Europa e do Mediterrâneo, bebês que nasciam empelicados eram considerados predestinados a terem sorte extraordinária, poderes de cura ou intuição especial.',
    difference: 'Diferente de um parto prematuro com ruptura antecipada da bolsa (amniorrexe), no nascimento empelicado a cavidade amniótica permanece intacta e estéril.',
    reference: 'Moore, K.L. Embriologia Clínica, 11ª Ed., Cap. 7 (Membranas Fetais e Placenta).'
  },

  revisao: {
    id: 'revisao',
    badge: 'Síntese Acadêmica do Grupo 5',
    title: 'Revisão Geral e Diagnóstico Diferencial',
    subtitle: 'Comparações embriológicas e celulares essenciais para a prática em Odontologia',
    icon: '⚖️',
    definition: 'Quadro comparativo de consolidação elaborado pelo Grupo 5 para unificar os conceitos de Biologia Celular e Embriologia, diferenciando com precisão os fenômenos morfogenéticos semelhantes e sintetizando o conhecimento para os estudantes universitários.',
    cellularMechanism: `
      <p>Principais contrastes conceituais exigidos pela ciência:</p>
      <div style="overflow-x: auto; margin-top: 1rem;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
          <thead>
            <tr style="border-bottom: 2px solid var(--primary-cyan); color: #38bdf8;">
              <th style="padding: 0.6rem;">Condição A</th>
              <th style="padding: 0.6rem;">Condição B</th>
              <th style="padding: 0.6rem;">Diferença Celular / Embriológica Chave</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 0.6rem;"><strong>Fetus in Fetu</strong></td>
              <td style="padding: 0.6rem;"><strong>Teratoma Maduro</strong></td>
              <td style="padding: 0.6rem;">FIF possui eixo vertebral e simetria axial (organogênese pós-gastrulação); Teratoma é neoplasia desorganizada sem coluna.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 0.6rem;"><strong>Superfetação</strong></td>
              <td style="padding: 0.6rem;"><strong>Superfecundação</strong></td>
              <td style="padding: 0.6rem;">Superfetação ocorre em ciclos menstruais sucessivos (idades gestacionais desiguais); Superfecundação é no mesmo ciclo menstrual.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 0.6rem;"><strong>Feto Papiráceo</strong></td>
              <td style="padding: 0.6rem;"><strong>Gêmeo Desaparecido</strong></td>
              <td style="padding: 0.6rem;">Feto papiráceo morre no 2º trimestre e retém esqueleto mineralizado comprimido; o desaparecido sofre lise e reabsorção trofoblástica completa no 1º trimestre.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 0.6rem;"><strong>Quimerismo</strong></td>
              <td style="padding: 0.6rem;"><strong>Mosaicismo</strong></td>
              <td style="padding: 0.6rem;">Quimerismo resulta da união de dois ou mais zigotos distintos; Mosaicismo surge de um único zigoto com mutações mitóticas posteriores.</td>
            </tr>
            <tr>
              <td style="padding: 0.6rem;"><strong>Gêmeos Siameses</strong></td>
              <td style="padding: 0.6rem;"><strong>Gêmeos Parasitas</strong></td>
              <td style="padding: 0.6rem;">Siameses possuem viabilidade compartilhada com encéfalos ativos; Parasita é heterópago anencefálico nutrido pelo autossito.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    odontologyRelevance: `
      <p>Dominar essas distinções confere ao cirurgião-dentista fundamentação científica sólida para interpretar achados radiográficos maxilofaciais atípicos, conduzir perícias de identificação forense e compreender os mecanismos celulares de odontogênese e morfologia craniofacial.</p>
    `,
    curiosity: 'O estudo desses fenômenos demonstra a plasticidade e os limites da diferenciação celular nas primeiras semanas após a fertilização, consolidando os pilares do seminário do Grupo 5.',
    difference: 'A precisão terminológica é fundamental para evitar sensacionalismos e garantir raciocínio clínico de alto nível.',
    reference: 'Moore, K.L.; Sadler, T.W.; Alberts, B.; Neville, B.W.'
  }
};

window.topicsData = topicsData;
