# Resultados da Avaliação com Usuário

Esta página consolida os resultados obtidos na sessão de teste de usabilidade do site **Oficial Farma**, conduzida de acordo com o [Roteiro de Avaliação](roteiro.md).

---

## Dados da Sessão

| Item | Detalhe |
| :--- | :--- |
| **Data** | 26 de junho de 2026, 14h35 (GMT-3) |
| **Site avaliado** | Oficial Farma |
| **Aplicador** | Caio de Andrade |
| **Usuário-teste** | João Victor |
| **Metodologia** | Think-Aloud Protocol |
| **Registro** | Gravação de reunião online (áudio + compartilhamento de tela) |

---

## Resumo Geral

!!! note "Síntese"
    O teste de usabilidade do site Oficial Farma **validou o fluxo de checkout** como ágil e eficiente (especialmente via autenticação por Google OAuth), mas **revelou falhas significativas de navegabilidade, visibilidade de informações e ausência de recursos de suporte** que comprometem a experiência e a confiança do usuário durante o processo de compra.

---

## Resultados por Tarefa

### Tarefa 1 – Encontrar um produto / Tarefa 2 – Filtrar produtos

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | Sucesso com assistência |

!!! abstract "Evidências da sessão"
    - O usuário demonstrou **dificuldades em localizar filtros de pesquisa avançados**, não sendo intuitivo como acessá-los ou utilizá-los durante a busca por produtos.
    - A pesquisa básica (barra de busca) funcionou, mas os recursos adicionais de filtragem e refinamento não foram percebidos sem orientação.

**Heurísticas e itens do checklist relacionados:**

- *Heurística 6 — Reconhecimento em vez de memorização*: opções e ações devem estar visíveis na tela. [(guia_design.md, item 65)](../guia_acessibilidade/guia_design.md)
- *WCAG 2.4.5 (AA) — Múltiplas formas de navegação*: oferecer pelo menos duas formas de navegar pelo conteúdo. [(guia_desenvolvimento.md, item 35)](../guia_acessibilidade/guia_desenvolvimento.md)

---

### Tarefa 3 – Avaliar um produto

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | Sucesso com assistência |

!!! abstract "Evidências da sessão"
    - O usuário teve **dificuldade em localizar a tabela nutricional** na página de detalhes do produto. A informação existia, mas sua apresentação visual não a destacava de forma acessível.
    - Foi identificada a **ausência de avaliações de clientes** (*reviews*) na página do produto, o que gerou insegurança sobre a qualidade e a confiabilidade do item.

**Heurísticas e itens do checklist relacionados:**

- *Heurística 8 — Design estético e minimalista*: apenas informações relevantes devem estar visíveis, mas informações **essenciais** (como a tabela nutricional) não devem estar escondidas. [(guia_design.md, item 66)](../guia_acessibilidade/guia_design.md)
- *WCAG 2.4.6 (AA) — Cabeçalhos e rótulos*: garantir que títulos descrevam corretamente o conteúdo da seção. [(guia_conteudo.md, item 70)](../guia_acessibilidade/guia_conteudo.md)

---

### Tarefa 4 – Adicionar ao carrinho / Tarefa 5 – Editar carrinho / Tarefa 6 – Simular compra

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | Sucesso (com ressalvas) |

!!! abstract "Evidências da sessão"
    - O **checkout via Google OAuth** foi considerado **ágil e eficiente** pelo participante, configurando um ponto positivo da experiência.
    - A tela do carrinho apresentou **problemas de contraste e usabilidade**: o botão "Continuar Comprando" estava com baixo destaque visual, dificultando a navegação de volta à loja.
    - Houve **ausência de informações claras sobre formas de pagamento e políticas de segurança** na página do carrinho, contribuindo para insegurança durante a transação.

**Heurísticas e itens do checklist relacionados:**

- *WCAG 1.4.3 (AA) — Contraste mínimo*: garantir contraste adequado de texto (mínimo 4.5:1). [(guia_design.md, item 52)](../guia_acessibilidade/guia_design.md)
- *WCAG 1.4.11 (AA) — Contraste de componentes*: botões e bordas com mínimo de 3:1. [(guia_design.md, item 53)](../guia_acessibilidade/guia_design.md)
- *Heurística 1 — Visibilidade de status*: feedback contínuo para o usuário sobre o estado da transação. [(guia_design.md, item 64)](../guia_acessibilidade/guia_design.md)

---

### Suporte e Ajuda (observação transversal)

| Critério | Resultado |
| :--- | :--- |
| **Desempenho** | Falha |

!!! abstract "Evidências da sessão"
    - A **falta de suporte claro** durante o processo de compra gerou insegurança no participante. Não foram encontrados botões flutuantes de ajuda, chat ou FAQ visíveis durante a navegação.
    - A navegação atual **depende excessivamente da familiaridade prévia** do usuário com a marca, prejudicando usuários de primeira visita.

**Heurísticas e itens do checklist relacionados:**

- *Heurística 10 — Ajuda e documentação*: auxílio com contexto para funções complexas. [(ux.md)](../ux/ux.md)
- *WCAG 3.2.6 (A) — Opções de ajuda*: disponibilizar contato humano e, se possível, ferramentas automatizadas. [(guia_design.md, item 57)](../guia_acessibilidade/guia_design.md)

---

## Quadro Consolidado

| Tarefa | Resultado | Problema Principal |
| :--- | :---: | :--- |
| Tarefas 1 e 2 — Busca e Filtros | Sucesso com assistência | Filtros avançados de difícil localização |
| Tarefa 3 — Detalhes do Produto | Sucesso com assistência | Tabela nutricional escondida; sem avaliações |
| Tarefas 4, 5 e 6 — Carrinho e Checkout | Sucesso (com ressalvas) | Baixo contraste no carrinho; falta de info de pagamento |
| Suporte e Ajuda | Falha | Ausência de canais de suporte visíveis |

---

## Próximos Passos

!!! success "Plano de ação definido pela equipe"
    Com base nas evidências coletadas na sessão, a equipe definiu as seguintes ações corretivas:

| Prioridade | Ação | Descrição |
| :---: | :--- | :--- |
| 🔴 Alta | **Melhorar botão "Continuar Comprando"** | Aumentar contraste e destaque do botão na tela do carrinho para melhorar visibilidade e intuitividade. |
| 🔴 Alta | **Implementar suporte visível** | Adicionar botões flutuantes de suporte ou ajuda em todas as etapas da compra para facilitar o atendimento ao usuário. |
| 🟡 Média | **Adicionar avaliações de produtos** | Criar aba de avaliações na página de detalhes dos itens, permitindo que usuários verifiquem feedbacks de outros clientes. |
| 🟡 Média | **Exibir formas de pagamento** | Apresentar informações claras de formas de pagamento e políticas de segurança na página do carrinho. |
| 🟡 Média | **Destacar tabela nutricional** | Melhorar a visibilidade da tabela nutricional nos detalhes do produto, garantindo que dados essenciais fiquem em destaque. |

---

## Registro da Sessão

!!! info "Transcrição da Reunião"
    Sessão de teste de usabilidade realizada em **26/06/2026 às 14h35 (GMT-3)**.

    **Preparação e contextualização do teste:** Caio de Andrade instruiu João Victor a compartilhar a tela e preparar o navegador, enquanto explicou que o objetivo da atividade era avaliar a experiência do usuário e a acessibilidade do site Oficial Farma. A metodologia adotada foi o **Think-Aloud Protocol** (Protocolo de Pensamento em Voz Alta).

??? details "Resumo da transcrição completa"
    **Contexto e testes iniciais:**
    Sessão iniciada com metodologia Think Aloud para avaliar usabilidade. Usuário demonstrou dificuldades em localizar tabelas nutricionais e aplicar filtros de pesquisa avançados.

    **Experiência de compra:**
    Checkout via Google OAuth foi considerado ágil e eficiente. Ausência de avaliações de clientes e falta de suporte claro geraram insegurança durante a transação.

    **Design e acessibilidade final:**
    Interface apresentou problemas de contraste e usabilidade no carrinho. Decisão tomada de que a navegação atual depende excessivamente da familiaridade prévia do usuário com a marca.
