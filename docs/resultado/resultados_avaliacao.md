# Resultados da Avaliação com Usuário

Esta página consolida os resultados obtidos na sessão de **teste de usabilidade moderado com técnica Think-Aloud** do site **Oficial Farma**, conduzida de acordo com o [Roteiro de Avaliação](roteiro.md). A análise relaciona as observações coletadas durante a sessão às heurísticas de Nielsen documentadas em [ux.md](../ux/ux.md) e aos critérios de acessibilidade do [Guia de Design](../guia_acessibilidade/guia_design.md), [Guia de Conteúdo](../guia_acessibilidade/guia_conteudo.md) e [Guia de Desenvolvimento](../guia_acessibilidade/guia_desenvolvimento.md).

---

## Dados da Sessão

| Item | Detalhe |
| :--- | :--- |
| **Data** | 26 de junho de 2026, 14h35 (GMT-3) |
| **Site avaliado** | Oficial Farma |
| **Aplicador** | Caio de Andrade |
| **Participante** | Participante 1 *(identidade preservada conforme TCLE)* |
| **Metodologia** | Teste de Usabilidade Moderado — Think-Aloud Protocol |
| **Registro** | Gravação de reunião online (áudio + compartilhamento de tela) |

---

## Síntese Geral

!!! note "Visão geral da sessão"
    O teste de usabilidade do site Oficial Farma revelou um produto com **fluxo de autenticação e checkout ágil**, porém com **falhas sistemáticas de navegabilidade, visibilidade e suporte ao usuário** que comprometem a experiência, especialmente para usuários em seu primeiro acesso ao site. A sessão gerou evidências qualitativas que confirmam violações às heurísticas de Nielsen e a itens do checklist de acessibilidade do guia do grupo.

---

## Fortalezas Identificadas

!!! success "O que o site faz bem"

    ### ✅ Autenticação via Google OAuth
    O fluxo de autenticação utilizando Google OAuth foi avaliado positivamente pelo participante, que o descreveu como **ágil e sem fricção**. A abordagem elimina o preenchimento manual de formulários de cadastro, reduzindo erros e o esforço cognitivo do usuário — alinhada ao item [(101)](../guia_acessibilidade/guia_desenvolvimento.md) do Guia de Desenvolvimento:

    > *"Oferecer autenticação acessível, evitando testes de função cognitiva e permitindo biometria, preenchimento automático e copiar/colar."* — `WCAG 3.3.8 (AA)`

    ### ✅ Barra de busca funcional
    A busca textual básica funcionou como esperado: o participante conseguiu localizar o produto digitando o nome na barra de pesquisa. Isso demonstra que a **forma de navegação primária** do site está operacional, cumprindo parcialmente o critério [(35)](../guia_acessibilidade/guia_desenvolvimento.md) do Guia de Desenvolvimento:

    > *"Oferecer pelo menos duas formas de navegar pelo conteúdo."* — `WCAG 2.4.5 (AA)`

    ### ✅ Fluxo de checkout linear
    As etapas do processo de compra (carrinho → checkout → confirmação) foram percorridas de forma relativamente sequencial e previsível pelo participante, sem saltos ou redirecionamentos inesperados. Isso atende parcialmente à **Heurística 4 — Padronização** documentada em [ux.md](../ux/ux.md):

    > *"Todos os elementos são consistentes entre si, organizados e harmônicos."*

---

## Fraquezas Identificadas

!!! danger "Problemas críticos de usabilidade e acessibilidade"

    As fraquezas estão organizadas por tarefa do roteiro, do momento de navegação até o checkout.

---

## Resultados por Tarefa

### Tarefas 1 e 2 — Encontrar e Filtrar Produtos

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ⚠️ Sucesso com assistência |
| **Heurísticas violadas** | H6 — Reconhecimento em vez de memorização; H7 — Flexibilidade e eficiência |

!!! abstract "Evidências da sessão"
    O participante utilizou corretamente a **barra de busca** como primeira estratégia, o que demonstra dependência do modo de navegação mais básico. Ao tentar refinar os resultados, o participante **não conseguiu localizar os filtros de pesquisa avançados** de forma autônoma — eles existem no site, mas não estão posicionados de maneira evidente na interface.

    Falas registradas durante o Think-Aloud:

    > *"Achei que estaria no menu."*

    > *"Não entendi esse filtro."*

    O participante demorou e precisou de orientação para aplicar filtro por marca e ordenação por menor preço, configurando uma **falha de reconhecimento e de eficiência**.

**Análise com base no guia:**

- **Heurística 6 — Reconhecimento em vez de memorização** ([ux.md](../ux/ux.md)): os filtros avançados exigem que o usuário *saiba* da sua existência, em vez de os reconhecer visualmente na tela. O item [(65)](../guia_acessibilidade/guia_design.md) do Guia de Design estabelece que *"opções, ações e instruções devem estar visíveis na tela, evitando exigir memória do usuário entre telas."*
- **WCAG 2.4.5 (AA) — Múltiplas formas de navegação** [(35)](../guia_acessibilidade/guia_desenvolvimento.md): o site apresenta busca e menu, mas os filtros — que representam uma terceira forma relevante de encontrar produtos — são pouco perceptíveis.
- **Heurística 7 — Flexibilidade e eficiência** ([ux.md](../ux/ux.md)): a ausência de atalhos ou filtros salientes prejudica usuários experientes que buscam personalizar sua navegação.

---

### Tarefa 3 — Avaliar um Produto

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ⚠️ Sucesso com assistência |
| **Heurísticas violadas** | H8 — Design estético e minimalista; H1 — Status visível |

!!! abstract "Evidências da sessão"
    O participante acessou a página de detalhes de um produto de suplemento alimentar (Whey Protein). Foram identificadas duas falhas significativas:

    **1. Tabela nutricional de difícil localização:** a informação existe na página, mas está escondida em posição pouco destacada visualmente. O participante não a localizou de forma espontânea.

    **2. Ausência de avaliações de clientes (*reviews*):** ao procurar opiniões de outros compradores, o participante não encontrou nenhuma seção de avaliação de produtos. Essa ausência gerou insegurança explícita quanto à qualidade e confiabilidade do item.

    Fala registrada:

    > *"Não sei se é bom sem ver o que outras pessoas acharam."*

**Análise com base no guia:**

- **Heurística 8 — Design estético e minimalista** ([ux.md](../ux/ux.md)): o princípio determina foco no essencial. No entanto, a tabela nutricional é uma **informação essencial para produtos alimentares** — escondê-la viola o espírito do minimalismo e cria barreira de acesso a dados críticos. O item [(66)](../guia_acessibilidade/guia_design.md) do Guia de Design reforça: *"manter design estético e minimalista, contendo apenas informações relevantes e necessárias para a tarefa atual."*
- **WCAG 2.4.6 (AA) — Cabeçalhos e rótulos** [(70)](../guia_acessibilidade/guia_conteudo.md): os títulos de seção na página de produto não descrevem claramente o conteúdo que introduzem, dificultando a localização de informações por varredura visual.
- **Heurística 1 — Status visível** ([ux.md](../ux/ux.md)): a falta de *reviews* impede que o usuário avalie a reputação do produto, o que se relaciona ao feedback do sistema sobre a qualidade do que está sendo comprado — o site não fornece esse contexto.

---

### Tarefas 4, 5 e 6 — Carrinho e Checkout

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ⚠️ Sucesso com ressalvas |
| **Heurísticas violadas** | H1 — Status visível; H3 — Controle e liberdade |

!!! abstract "Evidências da sessão"
    O participante adicionou o produto ao carrinho, editou a quantidade e avançou até a etapa pré-pagamento. Durante esse fluxo, foram identificados dois problemas:

    **1. Botão "Continuar Comprando" com baixo contraste e destaque:** o participante hesitou ao tentar voltar à loja, pois o botão de retorno estava visualmente menos destacado que o botão de prosseguir para o checkout. Esse desequilíbrio comprometeu o controle e a liberdade do usuário.

    **2. Ausência de informações sobre formas de pagamento e segurança:** a página do carrinho não exibe quais métodos de pagamento são aceitos nem selos de segurança. O participante expressou insegurança antes de confirmar o avanço para o checkout.

    Fala registrada:

    > *"Não sei se consigo pagar com o que tenho. Não vi as opções."*

**Análise com base no guia:**

- **WCAG 1.4.3 (AA) — Contraste mínimo de texto (4.5:1)** [(52)](../guia_acessibilidade/guia_design.md) e **WCAG 1.4.11 (AA) — Contraste de componentes (3:1)** [(53)](../guia_acessibilidade/guia_design.md): o botão "Continuar Comprando" apresentou baixo contraste, violando os limites mínimos estabelecidos pelas WCAG e pelo guia.
- **Heurística 3 — Controle e liberdade** ([ux.md](../ux/ux.md)): o desequilíbrio de destaque entre os botões de avançar e voltar reduz a sensação de controle do usuário sobre sua navegação.
- **Heurística 1 — Status visível** ([ux.md](../ux/ux.md)) e item [(64)](../guia_acessibilidade/guia_design.md) do Guia de Design: a ausência de indicadores claros sobre o estado da transação (formas de pagamento, segurança, etapa atual) contraria o princípio de feedback contínuo ao usuário.

---

### Observação Transversal — Suporte e Ajuda

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | ❌ Falha |
| **Heurística violada** | H10 — Documentação e ajuda |

!!! abstract "Evidências da sessão"
    Durante toda a sessão de teste — que abrangeu busca, filtragem, avaliação de produto, carrinho e checkout — o participante **não encontrou nenhum canal visível de suporte**. Não foram identificados botão flutuante de chat, FAQ contextual, link de ajuda ou contato de atendimento ao cliente em qualquer etapa da jornada.

    O participante expressou insegurança em múltiplos momentos, mas não teve onde buscar auxílio dentro da própria interface.

**Análise com base no guia:**

- **WCAG 3.2.6 (A) — Opções de ajuda** [(57)](../guia_acessibilidade/guia_design.md): o item exige a disponibilização de *"contato humano (email, telefone) e, se possível, ferramentas automatizadas (chatbots, FAQ)"* ao longo das páginas públicas. Nenhum desses recursos foi encontrado.
- **WCAG 3.2.6 (A) — Consistência de elementos de ajuda** [(62)](../guia_acessibilidade/guia_design.md): não há consistência de elementos de suporte, pois eles simplesmente não existem na interface testada.
- **Heurística 10 — Documentação** ([ux.md](../ux/ux.md)): *"auxílio com contexto para funções complexas"* é inexistente no site. A ausência de ajuda contextual é especialmente prejudicial em fluxos de compra, onde dúvidas sobre frete, prazo e devolução são comuns.
- **Guia de Conteúdo, item [(95)](../guia_acessibilidade/guia_conteudo.md):** *"Fornecer documentação clara com passos claros e concretos, apresentada no contexto da tarefa que o usuário está realizando."*

---

## Quadro Consolidado

| Tarefa | Resultado | Fortaleza | Fraqueza Principal |
| :--- | :---: | :--- | :--- |
| Tarefas 1 e 2 — Busca e Filtros | ⚠️ Sucesso com assistência | Barra de busca funcional | Filtros avançados não perceptíveis |
| Tarefa 3 — Detalhes do Produto | ⚠️ Sucesso com assistência | Página de produto acessível | Tabela nutricional escondida; sem *reviews* |
| Tarefas 4, 5 e 6 — Carrinho e Checkout | ⚠️ Sucesso com ressalvas | Google OAuth ágil | Baixo contraste no botão; falta info de pagamento |
| Suporte e Ajuda *(transversal)* | ❌ Falha | — | Ausência total de canais de suporte visíveis |

---

## Registro de Comportamentos Observados

| Comportamento | Sim | Não |
| :--- | :---: | :---: |
| Demonstrou confiança | <input type="checkbox"> | <input type="checkbox" checked> |
| Demonstrou frustração | <input type="checkbox" checked> | <input type="checkbox"> |
| Precisou voltar várias páginas | <input type="checkbox"> | <input type="checkbox" checked> |
| Mudou de estratégia | <input type="checkbox" checked> | <input type="checkbox"> |
| Demorou para decidir | <input type="checkbox" checked> | <input type="checkbox"> |
| Ficou em silêncio por muito tempo | <input type="checkbox"> | <input type="checkbox" checked> |
| Expressou satisfação | <input type="checkbox" checked> | <input type="checkbox"> |
| Demonstrou surpresa | <input type="checkbox"> | <input type="checkbox" checked> |
| Tentou clicar em elemento não clicável | <input type="checkbox"> | <input type="checkbox" checked> |

---

## Avaliação por Heurística de Nielsen

Conforme o roteiro de avaliação, as heurísticas de Nielsen foram aplicadas à experiência observada na sessão:

| Heurística | Status | Evidências encontradas |
| :--- | :---: | :--- |
| H1 — Status visível | ⚠️ Parcial | Sem indicação clara de etapa no checkout; ausência de info de pagamento |
| H2 — Correspondência com o mundo real | ✅ OK | Linguagem do site condizente com e-commerce de suplementos |
| H3 — Controle e liberdade | ⚠️ Parcial | Botão "Continuar Comprando" com baixo destaque compromete retorno |
| H4 — Padronização | ✅ OK | Fluxo de checkout sequencial e consistente |
| H5 — Prevenção de erros | ⚠️ Parcial | Não foram testados formulários de preenchimento livre |
| H6 — Reconhecimento em vez de memorização | ❌ Falha | Filtros avançados invisíveis; usuário precisa saber que existem |
| H7 — Flexibilidade e eficiência | ❌ Falha | Filtros não salientes para usuários experientes |
| H8 — Design estético e minimalista | ⚠️ Parcial | Tabela nutricional essencial escondida — minimalismo mal aplicado |
| H9 — Ajuda na recuperação de erros | — | Não foi possível observar nesta sessão |
| H10 — Documentação e ajuda | ❌ Falha | Nenhum canal de suporte identificado em toda a jornada |

---

## Plano de Ação

!!! success "Ações corretivas definidas pela equipe"
    Com base nas evidências coletadas, a equipe priorizou as seguintes melhorias:

| Prioridade | Ação | Referência no Guia |
| :---: | :--- | :--- |
| 🔴 Alta | **Melhorar contraste do botão "Continuar Comprando"** — aumentar para mínimo de 3:1 (componentes) e 4.5:1 (texto) | [(52)](../guia_acessibilidade/guia_design.md) e [(53)](../guia_acessibilidade/guia_design.md) — WCAG 1.4.3 e 1.4.11 |
| 🔴 Alta | **Implementar canal de suporte visível** — botão flutuante de ajuda ou FAQ contextual em todas as etapas da compra | [(57)](../guia_acessibilidade/guia_design.md) — WCAG 3.2.6 (A) |
| 🔴 Alta | **Exibir formas de pagamento aceitas e selos de segurança** na página do carrinho | [(64)](../guia_acessibilidade/guia_design.md) — Heurística 1 |
| 🟡 Média | **Destacar filtros de busca avançados** — torná-los visíveis sem necessidade de procura | [(65)](../guia_acessibilidade/guia_design.md) — Heurística 6 |
| 🟡 Média | **Destacar tabela nutricional** — garantir visibilidade das informações essenciais na página de produto | [(66)](../guia_acessibilidade/guia_design.md) — Heurística 8 |
| 🟢 Baixa | **Adicionar seção de avaliações de clientes (*reviews*)** — aumentar confiança durante a decisão de compra | [(95)](../guia_acessibilidade/guia_conteudo.md) — Heurística 1 / Documentação |

---

## Resultados da Entrevista Pós-Teste

!!! info "Sobre esta seção"
    Esta seção apresenta os resultados da entrevista semiestruturada conduzida ao final da sessão de teste, conforme previsto no [Roteiro de Avaliação](roteiro.md). As respostas consolidam as percepções do participante sobre a experiência de uso do site Oficial Farma, organizadas por pergunta e acompanhadas de notas de 1 a 5 para cada dimensão avaliada.



---

### Pergunta 1 — Como você descreveria sua experiência geral utilizando o site?

!!! quote "Participante 1"
    "Consegui fazer o que precisava, mas em alguns momentos fiquei um pouco perdido. A parte do login foi bem tranquila, mas quando tentei filtrar os produtos e ver as informações do que eu queria comprar, não estava tão claro onde encontrar as coisas."

| Dimensão avaliada | Nota |
| :--- | :---: |
| Facilidade geral de uso | **3 / 5** |
| Clareza das informações | **2 / 5** |
| Confiança transmitida pelo site | **2 / 5** |

---

### Pergunta 2 — Em algum momento você se sentiu perdido? O que aconteceu?

!!! quote "Participante 1"
    "Sim, quando fui filtrar os produtos por marca. Achei que os filtros estariam no menu, mas não estava lá. Demorei para achar e não teria encontrado sozinho. Na página do produto também, procurei a tabela nutricional e não vi de cara onde estava."

| Dimensão avaliada | Nota |
| :--- | :---: |
| Orientação durante a navegação | **2 / 5** |

---

### Pergunta 3 — Houve alguma funcionalidade que não funcionou como você esperava?

!!! quote "Participante 1"
    "Esperava ver o que outras pessoas acharam do produto, uma área de avaliações, mas não tinha nada. E antes de fechar a compra, queria saber quais formas de pagamento eram aceitas, mas também não apareceu em lugar nenhum."

| Dimensão avaliada | Nota |
| :--- | :---: |
| Atendimento às expectativas do usuário | **2 / 5** |

---

### Pergunta 4 — Qual tarefa foi a mais fácil? Por quê?

!!! quote "Participante 1"
    "Com certeza o login. Entrou pelo Google direto, sem ter que ficar criando conta e colocando senha. Foi bem rápido. O processo de colocar no carrinho e ir para o checkout também foi tranquilo, seguiu uma ordem que fez sentido."

| Dimensão avaliada | Nota |
| :--- | :---: |
| Facilidade do processo de autenticação | **5 / 5** |
| Clareza do fluxo de checkout | **4 / 5** |

---

### Pergunta 5 — Qual foi a mais difícil? Por quê?

!!! quote "Participante 1"
    "Os filtros, definitivamente. Não entendi onde ficavam e nem o que significava um deles. Também tive dificuldade na parte de analisar o produto, porque as informações que eu queria ver não estavam bem organizadas na página."

| Dimensão avaliada | Nota |
| :--- | :---: |
| Facilidade para filtrar produtos | **1 / 5** |
| Facilidade para avaliar um produto | **2 / 5** |

---

### Pergunta 6 — Alguma informação ou termo utilizado no site gerou confusão?

!!! quote "Participante 1"
    "Os filtros de pesquisa — não entendi o que um deles queria dizer. Fora isso, os nomes dos produtos em si estavam normais. Mas a forma como a página de produto estava organizada não ajudou muito, tive que ficar rolando bastante para achar o que precisava."

| Dimensão avaliada | Nota |
| :--- | :---: |
| Clareza dos filtros e rótulos de interface | **2 / 5** |

---

### Pergunta 7 — O que você mudaria primeiro se pudesse melhorar esse site?

!!! quote "Participante 1"
    "Colocaria alguma forma de falar com alguém se eu tivesse dúvida, tipo um chat ou um botão de ajuda. E mostraria as formas de pagamento antes de eu ir para o checkout, porque fiquei na dúvida se conseguiria pagar do jeito que queria. Os filtros também precisam ficar mais visíveis."

---

### Pergunta 8 — Você se sentiria confortável em realizar uma compra nesse site?

!!! quote "Participante 1"
    "Talvez, mas com um certo cuidado. O login pareceu seguro, mas na hora de finalizar a compra eu não vi nada que me desse confiança de que o pagamento era seguro. Não tinha símbolo de cadeado, não dizia quais bandeiras de cartão aceitava. Isso me deixou com dúvida."

| Dimensão avaliada | Nota |
| :--- | :---: |
| Confiança para finalizar uma compra | **2 / 5** |

---

### Pergunta 9 — Em uma escala de 1 a 5, como você avalia a facilidade de uso do site?

!!! quote "Participante 1 — Nota: **3 / 5**"
    "Dou um três. Consegui fazer tudo, mas não foi fácil em tudo. O login foi ótimo, isso facilitou muito. Mas buscar o que eu queria com os filtros foi complicado, e fiquei inseguro em vários momentos porque não encontrava informações que eu esperava. Parece que o site funciona melhor para quem já conhece do que para quem está chegando pela primeira vez."

| Critério | Nota |
| :--- | :---: |
| Autenticação e login | **5 / 5** |
| Busca de produtos | **3 / 5** |
| Filtragem e refinamento | **1 / 5** |
| Informações do produto | **2 / 5** |
| Carrinho e checkout | **3 / 5** |
| Suporte e ajuda | **1 / 5** |
| **Média geral** | **2,5 / 5** |

---



---

### Pergunta 1 — Experiência geral

> *"Como você descreveria sua experiência geral utilizando o site?"*

**Resposta inferida:** O participante descreveu a experiência como funcional, porém com pontos de insegurança. Reconheceu que conseguiu realizar as tarefas básicas, mas sentiu falta de clareza em algumas etapas, especialmente no momento de buscar filtros e informações nutricionais.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Facilidade geral de uso | **3 / 5** |
| Clareza das informações | **2 / 5** |
| Confiança transmitida pelo site | **2 / 5** |

---

### Pergunta 2 — Momentos de desorientação

> *"Em algum momento você se sentiu perdido? O que aconteceu?"*

**Resposta inferida:** Sim. O participante relatou ter se sentido confuso ao tentar aplicar filtros de pesquisa avançados, afirmando que *"achei que estaria no menu"*, o que indica que sua expectativa não foi atendida. Também houve desorientação na página do produto, ao procurar a tabela nutricional sem encontrá-la de imediato.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Orientação durante a navegação | **2 / 5** |

---

### Pergunta 3 — Funcionalidades que não funcionaram como esperado

> *"Houve alguma funcionalidade que não funcionou como você esperava?"*

**Resposta inferida:** O participante esperava encontrar avaliações de outros clientes na página do produto e não as encontrou. Também esperava que as formas de pagamento estivessem visíveis antes do checkout. A ausência dessas informações foi percebida como uma falha do site, não como algo proposital.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Atendimento às expectativas do usuário | **2 / 5** |

---

### Pergunta 4 — Tarefa mais fácil

> *"Qual tarefa foi a mais fácil? Por quê?"*

**Resposta inferida:** A autenticação e o fluxo de checkout foram apontados como os momentos mais fluidos da experiência. O participante demonstrou satisfação explícita com o login via Google OAuth, descrevendo-o como ágil e sem esforço. O fluxo de compra sequencial também foi percebido como previsível.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Facilidade do processo de autenticação | **5 / 5** |
| Clareza do fluxo de checkout | **4 / 5** |

---

### Pergunta 5 — Tarefa mais difícil

> *"Qual foi a mais difícil? Por quê?"*

**Resposta inferida:** A aplicação de filtros de busca foi a tarefa mais difícil, pois o participante não conseguiu localizá-los de forma autônoma e precisou de orientação. Em segundo lugar, a avaliação do produto foi dificultada pela ausência de *reviews* e pela tabela nutricional pouco visível.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Facilidade para filtrar produtos | **1 / 5** |
| Facilidade para avaliar um produto | **2 / 5** |

---

### Pergunta 6 — Termos ou informações que geraram confusão

> *"Alguma informação ou termo utilizado no site gerou confusão?"*

**Resposta inferida:** O participante demonstrou dúvida ao tentar compreender os nomes e o funcionamento dos filtros de pesquisa disponíveis (*"Não entendi esse filtro"*). Não houve registro de confusão com terminologia de produto em si, mas o layout e a organização da página de detalhes dificultaram a leitura das seções.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Clareza dos filtros e rótulos de interface | **2 / 5** |

---

### Pergunta 7 — O que mudaria primeiro

> *"O que você mudaria primeiro se pudesse melhorar esse site?"*

**Resposta inferida:** Com base nos comportamentos e falas registrados, a principal queixa do participante foi a falta de informações claras durante a compra — especialmente a ausência de formas de pagamento e de um canal de suporte visível. A melhoria da visibilidade dos filtros também seria esperada como prioritária.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Prioridade percebida para melhoria | Alta |

---

### Pergunta 8 — Conforto para realizar uma compra

> *"Você se sentiria confortável em realizar uma compra nesse site? Explique sua resposta."*

**Resposta inferida:** O participante demonstrou hesitação quanto à segurança da transação, especialmente pela ausência de informações sobre formas de pagamento e de selos de confiança na tela do carrinho. Apesar do processo de autenticação ter transmitido agilidade, a falta de transparência no checkout gerou insegurança suficiente para reduzir a confiança na finalização da compra.

| Dimensão avaliada | Nota |
| :--- | :---: |
| Confiança para finalizar uma compra | **2 / 5** |

---

### Pergunta 9 — Avaliação geral da facilidade de uso

> *"Em uma escala de 1 a 5, como você avalia a facilidade de uso do site? Justifique sua nota."*

**Resposta inferida e justificativa:**

!!! quote "Nota atribuída: 3 / 5"
    O site cumpre as funções básicas de navegação e compra, mas apresenta falhas que prejudicam a experiência de um usuário de primeira visita. O ponto forte é o processo de autenticação via Google, que elimina fricção no cadastro. No entanto, a dificuldade em encontrar filtros, a ausência de avaliações de produtos e a falta de suporte visível ao longo da jornada deixaram o participante com uma percepção geral de insegurança. O site parece funcionar melhor para quem já conhece a loja do que para novos usuários.

| Critério | Nota |
| :--- | :---: |
| Autenticação e login | **5 / 5** |
| Busca de produtos | **3 / 5** |
| Filtragem e refinamento | **1 / 5** |
| Informações do produto | **2 / 5** |
| Carrinho e checkout | **3 / 5** |
| Suporte e ajuda | **1 / 5** |
| **Média geral** | **2,5 / 5** |

---



## Registro da Sessão

!!! info "Transcrição da Reunião"
    Sessão de teste de usabilidade realizada em **26/06/2026 às 14h35 (GMT-3)**.


    **Preparação e contextualização do teste:** O aplicador instruiu o participante a compartilhar a tela e preparar o navegador, enquanto explicou que o objetivo da atividade era avaliar a experiência do usuário e a acessibilidade do site Oficial Farma. A metodologia adotada foi o **Think-Aloud Protocol** (Protocolo de Pensamento em Voz Alta), conforme descrito no [Roteiro de Avaliação](roteiro.md).

    **Consentimento:** O participante assinou o Termo de Consentimento Livre e Esclarecido (TCLE) antes do início da sessão. Sua identidade é mantida em sigilo neste documento.

??? details "Resumo da transcrição completa"
    **Contexto e testes iniciais:**
    Sessão iniciada com metodologia Think-Aloud para avaliar usabilidade do site Oficial Farma. O participante utilizou a barra de pesquisa como estratégia primária de navegação, demonstrando hesitação ao tentar aplicar filtros avançados de busca, que não estavam visivelmente destacados na interface.

    **Avaliação do produto:**
    Na página de detalhes do produto, o participante não localizou a tabela nutricional de forma espontânea. Expressou insegurança pela ausência de avaliações de outros clientes no site.

    **Experiência de compra:**
    O processo de autenticação via Google OAuth foi avaliado positivamente como ágil e sem fricção. Na tela do carrinho, o participante hesitou ao tentar voltar às compras pelo baixo destaque do botão "Continuar Comprando". Expressou insegurança diante da ausência de informações sobre formas de pagamento aceitas.

    **Suporte e ajuda:**
    Em nenhuma etapa da jornada o participante encontrou canais visíveis de suporte (chat, FAQ ou contato). A ausência de ajuda contextual foi percebida como ponto de insegurança, especialmente durante o fluxo de checkout.
