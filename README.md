# 🧬 Os Mistérios da Vida: Curiosidades e Fenômenos Extraordinários da Embriologia

### Plataforma de Competição Educacional On-line — Grupo 5 (Seminário de Embriologia para Odontologia)

---

## 📖 Visão Geral

Esta plataforma educacional interativa transforma o conteúdo apresentado no seminário do **Grupo 5** em uma competição de conhecimentos científicos sincronizada em tempo real para estudantes universitários de **Odontologia**.

O projeto alia rigor científico, raciocínio embriológico, competição saudável e design moderno, abordando 10 fenômenos raros e surpreendentes do desenvolvimento humano além de tópicos comparativos essenciais:

1. **Gêmeos siameses** (Mecanismo de fissão incompleta pós-13º dia vs fusão secundária, toracópagos, craniópagos com independência craniofacial);
2. **Gêmeos parasitas** (Díade autossito-parasita heterópago, isquemia intrauterina precoce, epignathus oral);
3. **Superfecundação heteropaternal** (Poli-ovulação no mesmo ciclo, fertilização por parceiros distintos, meios-irmãos simultâneos);
4. **Superfetação** (Concepção em gestação em curso; barreiras da progesterona, tampão cervical e decídua capsular);
5. **Feto papiráceo** (Morte fetal precoce no 2º trimestre retida, dessecação e compressão mecânica);
6. **Síndrome do gêmeo desaparecido** (Reabsorção trofoblástica embrionária precoce no 1º trimestre);
7. **Fetus in fetu** (Critério patognomônico de Willis: presença obrigatória de coluna vertebral/eixo axial organizado);
8. **Quimerismo humano** (Quimerismo tetragamético por fusão de blastocistos, microquimerismo fetomaterno e implicações na saliva e DNA bucal);
9. **Teratomas** (Células germinativas primordiais pluripotentes formando dentes, esmalte, dentina e folículos pilosos em sítios ectópicos);
10. **Nascimento empelicado** (Integridade das membranas amnióticas âmnio e córion no momento do parto);
11. **Revisão geral e comparação entre fenômenos** (Fetus in fetu vs Teratoma, Quimerismo vs Mosaicismo pós-zigótico).

---

## 🚀 Como Iniciar a Plataforma

Para iniciar o servidor local:

```bash
npm start
```

Ou diretamente com o Node:
```bash
node index.js
```

O servidor iniciará automaticamente em:
👉 **`http://localhost:3000`**

---

## 🔑 Credenciais e Permissões Administrativas

O Painel Administrativo é protegido por senha criptografada com salt (`bcrypt`):
- **Senha Padrão:** `embrio2026`
- **Acesso:** Clique no botão superior direito **"🔒 Painel Admin"** na barra de navegação.

---

## 🎮 Modos de Competição

### 1. Modo Solo (Individual)
1. O estudante escolhe uma sala no Modo Solo;
2. Informa seu nome ou identificação acadêmica;
3. Aguarda na sala de espera (lobby);
4. Ao início da rodada pelo anfitrião, recebe as questões simultaneamente;
5. Pontua individualmente com base no tempo e na precisão.

### 2. Modo Dupla (Cooperativo com Alternância Estrita)
- **Opção A — Criar uma Dupla:**
  - O participante define o nome da dupla (ex: *Blastômeros da Odonto*);
  - O sistema gera um código de acesso exclusivo (ex: `DP-4821`);
  - O participante define uma senha de acesso para seu colega;
  - O criador é registrado como **Integrante A** (responsável pelas perguntas de número ímpar: 1, 3, 5...).
- **Opção B — Entrar em Dupla Existente:**
  - O parceiro informa o código da equipe e digita a senha de acesso;
  - O sistema valida a senha no servidor e o aloca como **Integrante B** (responsável pelas perguntas de número par: 2, 4, 6...);
  - **Limite Estrito:** A equipe é travada em exatamente 2 integrantes. Qualquer tentativa de entrada de um 3º membro é bloqueada com mensagem de erro.
- **Regras da Rodada em Dupla:**
  - O servidor valida quem é o integrante ativo da rodada;
  - O integrante que não está no seu turno acompanha o enunciado e o cronômetro, mas suas alternativas ficam desabilitadas com aviso visual;
  - A pontuação acumula para a dupla, e as métricas individuais são registradas para consulta no ranking e no pódio.

---

## ⚡ Fórmula Oficial de Pontuação

A pontuação é calculada de forma soberana pelo servidor (evitando manipulação no navegador):
- **Resposta incorreta:** 0 ponto
- **Tempo esgotado sem envio:** 0 ponto
- **Resposta correta:**
  $$\text{Pontos} = \text{round}\left(\text{pontuação máxima} \times \left(1 - 0.5 \times \frac{\text{tempo utilizado}}{\text{tempo total}}\right)\right)$$
- **Valores máximos por questão:**
  - Perguntas Fáceis: 10 pontos
  - Perguntas Médias: 10 pontos
  - Perguntas Difíceis: 20 pontos
- **Critério de Desempate:**
  1. Maior número de acertos;
  2. Menor tempo total acumulado nas respostas corretas.

---

## 🔬 Revelação Científica & Aprendizado (Fase de Feedback)

Após o encerramento da rodada, a plataforma exibe:
- A alternativa correta em verde e o feedback do que foi assinalado;
- **Explicação Científica:** Mecanismos celulares e embriológicos detalhados;
- **Curiosidade do Fenômeno:** Fatos extraordinários do acervo do Grupo 5;
- **Diferença Chave:** Quadro comparativo com condições semelhantes;
- **Fonte Bibliográfica:** Citações canônicas de Moore, Langman e Larsen.

---

## 🛠️ Recursos do Painel Administrativo

- **Criar Salas:** Definir nome, modo (Solo/Dupla), tempo (60s a 180s) e fórmula;
- **Controle Ao Vivo:**
  - Iniciar competição;
  - Pausar e Retomar;
  - Avançar manualmente / Revelar explicação;
  - Encerrar competição;
  - Monitorar respostas submetidas em tempo real (ex: "8/10 responderam");
  - Distribuição de alternativas A, B, C, D em tempo real.
- **Banco de Questões (CRUD Completo):**
  - Cadastrar novas questões com todos os campos científicos;
  - Editar perguntas existentes;
  - Excluir perguntas;
  - Botão "Restaurar Banco Original do Grupo 5".
- **Histórico & Exportação de Dados:**
  - Exportação em **CSV formatado** (com BOM UTF-8 compatível com Microsoft Excel);
  - Exportação em **JSON**.

---

## 🧪 Testes Automatizados

O projeto inclui uma suíte completa de testes de ponta a ponta (E2E) que valida autenticação, WebSockets, criação de salas, criação e bloqueio de duplas, alternância de turnos, cálculo de pontos, avanço de rodadas, ranking e exportação:

```bash
npm test
```

---

*Grupo 5 — Seminário de Embriologia Humana para Odontologia*
