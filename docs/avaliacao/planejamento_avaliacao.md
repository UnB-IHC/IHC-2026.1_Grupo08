# Planejamento da Avaliação de Acessibilidade

## 1. Introdução

A avaliação é uma etapa fundamental no ciclo de vida de desenvolvimento de sistemas interativos. Ela orienta o avaliador a realizar julgamentos de valor sobre a qualidade da interface e da interação (Barbosa e Silva, 2010). 

Para o escopo deste projeto, focado no e-commerce **OficialFarma**, será realizada uma **Avaliação por Inspeção** focada em acessibilidade e usabilidade. O método escolhido baseia-se na aplicação dos Checklists construídos no "Guia de Acessibilidade Digital", fundamentados nas diretrizes WCAG e nas Heurísticas de Nielsen.

Para guiar e organizar o planejamento desta avaliação, utilizamos o **Framework DECIDE**, que orienta os passos da avaliação de forma sistemática.

## 2. Framework DECIDE

O framework DECIDE é um acrônimo onde cada letra corresponde a uma etapa do planejamento:

### D - Determinar os objetivos gerais da avaliação
O objetivo principal desta avaliação é **verificar a conformidade do e-commerce OficialFarma** com os padrões estabelecidos de acessibilidade digital (WCAG) e usabilidade (Nielsen). A avaliação buscará identificar barreiras de acesso na interface pública, em especial no fluxo de compra, que dificultam ou impedem a navegação por usuários com limitações visuais, motoras ou cognitivas.

### E - Explorar perguntas a serem respondidas
A avaliação buscará responder às seguintes perguntas principais:
1. O site OficialFarma permite a navegação completa pelo fluxo de compra utilizando apenas o teclado?
2. Os elementos visuais do sistema possuem contraste adequado e as imagens informativas possuem alternativas em texto?
3. A semântica do código HTML (botões, links e labels) orienta corretamente as tecnologias assistivas (ex: leitores de tela)?
4. As mensagens de erro e feedbacks do sistema são claros e informam os usuários de maneira não unicamente visual?

### C - Escolher (Choose) os métodos de avaliação
O método selecionado foi a **Inspeção por Checklist (Avaliação Heurística/Conformance)**. 
- **Justificativa:** É um método de baixo custo e alta eficácia para descobrir violações diretas de normas técnicas e de design. Os checklists aplicados foram desenvolvidos no nosso Guia de Acessibilidade, abrangendo Design, Desenvolvimento, Conteúdo e Gestão de Projetos.

### I - Identificar e administrar as questões práticas
* **Avaliadores:** A inspeção será conduzida pelos membros da equipe do projeto (Jonas e assistência de IA).
* **Equipamentos e Ferramentas:** Utilização de computadores desktop, navegadores modernos (Chrome/Firefox) com ferramentas de desenvolvedor (DevTools) e leitores de tela nativos (ex: NVDA ou VoiceOver) para simulação.
* **Prazos:** A avaliação será realizada no contexto da sprint atual da disciplina de Interação Humano-Computador.
* **Escopo da Avaliação:** Home page da OficialFarma, campo de busca, listagem de categorias e página detalhada de um produto (fluxo até a adição ao carrinho).

### D - Decidir como lidar com as questões éticas
Como este método (Avaliação por Inspeção/Checklist) **não envolve a participação direta de usuários reais** em laboratório (testes de usabilidade), não há necessidade de aplicação de um Termo de Consentimento Livre e Esclarecido (TCLE). Toda a avaliação ocorrerá de forma remota, em ambiente público (frontend) do e-commerce OficialFarma, respeitando os Termos de Uso do sistema e agindo de forma não intrusiva.

### E - Avaliar, interpretar e apresentar os dados
Os dados obtidos na inspeção serão tabulados de forma rigorosa em matrizes de conformidade, classificando cada critério como:
- Conforme (C)
- Parcialmente Conforme (P)
- Não Conforme (NC)
- Não Aplicável (NA)

Ao final, os problemas críticos de usabilidade e acessibilidade serão catalogados, acompanhados de evidências visuais (capturas de tela) e sugestões teóricas de correção (código e design), gerando um **Relato dos Resultados** estruturado.

---
## Bibliografia
* BARBOSA, S. D. J.; SILVA, B. S. Interação Humano-Computador. Rio de Janeiro: Elsevier, 2010.
