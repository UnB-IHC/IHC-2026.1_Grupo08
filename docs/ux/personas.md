# Personas

As **personas** são artefatos que descrevem um personagem fictício, funcionando
como um perfil que representa um grupo específico de pessoas: usuários reais do
sistema, clientes ou um subgrupo de stakeholders, com necessidades e padrões de
comportamento semelhantes. Em vez de pensar em um "usuário genérico", a equipe
passa a projetar para alguém com objetivos, dores e contexto bem definidos.

## Um pouco de história

A metodologia de personas foi criada por **Alan Cooper**, na década de 90, para
humanizar os processos de engenharia de software. Antes disso, o usuário era
tratado como uma figura genérica, sem traços específico: uma espécie de "ator"
abstrato. A proposta das personas foi justamente internalizar na equipe a
mentalidade de quem realmente usa o sistema, garantindo que cada decisão de
produto seja focada em necessidades reais, objetivos claros e comportamentos
específicos. No fundo, é uma estratégia centrada em **empatia**.

## Para que servem

As personas representam usuários com objetivos, comportamentos e necessidades
específicas e, a partir disso, ajudam a equipe em diferentes etapas do processo
de design:

- **Comunicação entre a equipe:** facilitam o diálogo entre designers,
  desenvolvedores e demais envolvidos no projeto, todos falando do mesmo
  "usuário".
- **Decisões centradas no usuário:** ajudam a considerar as necessidades e os
  objetivos dos usuários ao longo do design.
- **Definição de requisitos:** contribuem para requisitos mais conectados ao
  contexto e às necessidades reais de uso.

## Elementos que compõem uma persona

Segundo Cooper, uma persona em software é composta por objetivos,
comportamentos, necessidades, dores e contexto de uso que representam um grupo
real de usuários. Na prática, os principais elementos são:

- **Objetivos:**  os resultados que a persona quer alcançar (resolver um
  problema, economizar tempo, se sentir mais segura).
- **Comportamentos:** como ela age na prática: hábitos, padrões de uso, nível de
  experiência e forma de interagir com a tecnologia.
- **Necessidades:** as condições que precisam ser atendidas para que ela atinja
  os objetivos (funcionalidades, informações, suporte).
- **Frustrações / dores:** os obstáculos que atrapalham a experiência: erros do
  sistema, processos confusos ou qualquer coisa que gere irritação, atraso ou
  abandono.
- **Motivações:** o porquê de ela agir de determinada forma, ligado a desejos
  internos como evitar erros, ganhar eficiência ou ter mais controle.
- **Identidade:** uma breve caracterização (nome e informações básicas) que a
  torna mais realista, sem focar demais em dados demográficos.
- **Contexto de uso:** o ambiente e as circunstâncias de uso: local, momento,
  dispositivo e limitações que influenciam o comportamento.
- **Cenários:** pequenas narrativas que mostram a persona usando o sistema para
  atingir um objetivo, conectando todos os elementos anteriores.

## Como construir uma persona

Um caminho prático para montar personas pode ser resumido em cinco passos:

1. **Estudar o contexto** real da situação, grupo ou pessoas (pesquisas,
   entrevistas, convivência).
2. **Agrupar o público** a partir de dados ou comportamentos em comum.
3. **Definir os objetivos** que aquela persona tem.
4. **Incluir as informações** mais relevantes (necessidades, motivação,
   história).
5. **Montar a persona**, dando um "rosto" a ela com base em tudo o que foi
   coletado.

## Por que coletar dados (e não inventar)

Um ponto importante é que a persona não deve ser baseada em achismos. Coletar
dados ajuda a aproximar a equipe da realidade dos usuários, a entender objetivos,
dificuldades e comportamentos, e a transformar percepções soltas em informações
úteis para o projeto.

**O que coletar:** perfil, objetivos, tarefas, dificuldades, motivações e
contexto de uso. **De quem coletar:** usuários finais, stakeholders, gestores,
equipe de suporte/atendimento e clientes ou parceiros.

**Técnicas de coleta** comuns incluem entrevistas, grupos de foco,
brainstorming, questionários, observação/investigação contextual e card sorting, a escolha depende do objetivo da pesquisa e do contexto do projeto. Para
melhorar a qualidade e a representatividade dos dados, valem estratégias como
triangulação, diversidade dos participantes, organização dos dados e validação
contínua.

## Ferramentas e o papel da IA

Existem ferramentas que apoiam tanto a coleta quanto a criação das personas:

- **Coleta e análise de dados:** Google Analytics (dados quantitativos e
  demográficos), Hotjar (comportamento visual e feedback direto) e Dovetail
  (pesquisa qualitativa com apoio de IA).
- **Criação colaborativa:** quadros como Figma/FigJam, Canva, Miro e Adobe
  Express, que permitem ao time organizar ideias e montar personas em conjunto.
- **Inteligência artificial:** soluções como Delve AI e UXPressia automatizam a
  transição entre coleta e criação, gerando perfis a partir de grandes volumes de
  dados. Ainda assim, vale lembrar que a IA é um apoio: a síntese final precisa
  de olhar crítico para não reproduzir vieses.

## Questões éticas na coleta

Como a construção de personas envolve dados de pessoas reais, alguns cuidados são
indispensáveis:

- **Consentimento livre e esclarecido:** o participante precisa entender o que
  será feito, por quê e quais os riscos, em linguagem acessível.
- **Confidencialidade e anonimato:** na confidencialidade, o pesquisador sabe
  quem é a pessoa mas garante sigilo; no anonimato, nem o pesquisador consegue
  vincular o dado à pessoa.
- **Direito de desistência:** a pessoa pode sair do estudo ou pedir a exclusão
  dos seus dados a qualquer momento, sem precisar se justificar.
- **Uso responsável dos dados:** os dados têm um propósito específico e não
  podem ser reaproveitados para outros fins sem nova autorização, respeitando a
  segurança digital e a **LGPD**.

## Personas ecossistêmicas

Uma evolução do conceito tradicional é a **persona ecossistêmica**. Enquanto a
persona clássica concentra o olhar no usuário final, a ecossistêmica parte de uma
**visão holística**: ela mapeia todos os atores envolvidos em um serviço (usuários,
equipes internas, sistemas e demais stakeholders) e, principalmente, as
**interdependências** entre eles. O foco deixa de ser o perfil isolado e passa a
ser a rede de relações: quem depende de quem e como o valor (informação, esforço,
dinheiro) circula entre as partes. A premissa é que o software é apenas uma das
camadas de um serviço mais amplo, e não uma "ilha tecnológica".

Essa abordagem cobre o serviço por inteiro e ao longo de todo o ciclo (antes,
durante e depois da interação), o que tende a gerar serviços mais integrados e com
menos falhas. Para isso, ela costuma se apoiar no **mapa de ecossistema**, uma
ferramenta que visualiza a rede por trás da experiência e distingue o que o usuário
vê (*frontstage*) dos processos e sistemas internos que sustentam o serviço
(*backstage*), revelando gargalos, dependências e lacunas antes mesmo de se pensar
na interface.

### Da pesquisa ao perfil de competência

A construção começa por **pesquisa qualitativa profunda** (entrevistas contextuais,
observação de campo e oficinas), porque dados quantitativos sozinhos respondem
apenas "quem são" os usuários, e não "como agem" no dia a dia, com quais motivações
reais e onde a colaboração trava. A partir disso, a persona ecossistêmica funciona
como um **perfil de competência e de decisão**: em vez de detalhar só gostos e
dados demográficos, ela descreve responsabilidades, riscos e dependências, o que
ajuda a engenharia de software a definir funcionalidades, priorizar o backlog e
alinhar treinamento e sistemas.

### Um exemplo: a analista Márcia

Um caso prático usado para ilustrar a ideia é o da Secretaria do Patrimônio da União
(SPU), mapeada pelo laboratório ITRAC. A persona **"Márcia, a analista de
destinação"** tem a missão de garantir a destinação legal e socioambiental do
patrimônio, mas vive uma tensão funcional: depende de outros papéis (como analista
de cadastro e fiscal de campo) e impacta gestores, cidadãos e órgãos de controle.
A lição é direta: se a experiência do *backstage* da Márcia falha, o serviço
simplesmente não chega ao *frontstage* do cidadão. Por isso o design não é só sobre
interfaces, mas sobre mapear competência e decisão para resolver o gargalo certo,
deslocando essa preocupação para o início do desenvolvimento (*shift-left*) e
reduzindo retrabalho.

## Relação com a acessibilidade

Personas são uma ótima ferramenta para incluir a acessibilidade desde o início:
ao representar pessoas com deficiência, com suas dores, contextos e tecnologias
assistivas, a equipe evita projetar apenas para um "usuário médio" e passa a
considerar diferentes formas de interação. Construir essas personas a partir de
dados reais (e não de suposições) é o que garante que a inclusão seja tratada
como necessidade concreta.

## Referências

- COOPER, Alan; REIMANN, Robert; CRONIN, David; NOESSEL, Christopher.
  *About Face: The Essentials of Interaction Design*. 4. ed. Indianapolis:
  Wiley, 2014.
- BARBOSA, Simone; SILVA, Bruno. *Interação Humano-Computador*. Rio de Janeiro:
  Elsevier, 2010.
- SILVEIRA, Milene Selbach; GASPARINI, Isabela. *Práticas de IHC em Sala de
  Aula*. Porto Alegre: Sociedade Brasileira de Computação, 2024.
- LESLIE, David. *Data Ethics*. London: The Alan Turing Institute, 2019.
- STICKDORN, Marc et al. *Isto é Design de Serviço na Prática*. Porto Alegre:
  Bookman, 2019.
- BARBOSA, Simone; SILVA, Bruno. *Interação Humano-Computador e Experiência de
  Usuário*. Rio de Janeiro: Elsevier Brasil, 2021.
- PINTO, Henrique Pucci et al. *Exploring the Role of Service Design in Software
  Development: A Systematic Mapping*. Brasília: ITRAC/UnB.
