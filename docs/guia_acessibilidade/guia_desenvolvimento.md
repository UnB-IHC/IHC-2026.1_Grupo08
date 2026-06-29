# Checklist de Desenvolvimento (Aplicado à OficialFarma)

Este checklist agrega critérios técnicos estruturais do código-fonte (semântica HTML, rótulos ARIA, controle de foco e teclado). Na fase de avaliação técnica do nosso projeto, varremos a estrutura do carrinho, a busca e as páginas de produto da **OficialFarma** exatamente através destas validações.

### Conhecimento e Princípios
- [ ] **Garantir que a equipe de desenvolvimento conheça as diretrizes WCAG**, especialmente os níveis A e AA. `Guia-UK` [(13)](#)
- [ ] **Usar elementos HTML nativos para a sua função real** (links como `<a>`, botões como `<button>`, cabeçalhos como `<hN>`), evitando transformar elementos neutros (`<div>`/`<span>`) em controles interativos, pois a navegação por toque e por leitor de tela depende da semântica nativa.   `Grupo 08 – Guia BP (seção 3, p.25) / WCAG 1.3.1, 4.1.2 (A)` [(100)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)

### Foco, Navegação e Teclado
- [ ] **Garantir navegação por teclado** em todos os elementos interativos, utilizando Tab, Shift+Tab, Enter, Espaço e Teclas de Seta.   `5.1.5/2.1.1 (A)` [(14)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [ ] **Evitar armadilhas de foco**, permitindo que o usuário saia de qualquer elemento (pop-ups ou menus) usando a tecla Tab.   `5.1.6/2.1.2 (A)` [(15)](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap)
- [ ] **Manter ordem de foco previsível e lógica**, permitindo navegação intuitiva e sequencial entre os elementos a focar.   `5.4.1/2.4.3 (A)` [(16)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order)
- [ ] **Controlar a exibição ou ocultação de conteúdo extra no foco**, garantindo que o conteúdo seja dispensável ou só seja dispensado após o elemento perder foco.   `5.1.8, 5.1.9/1.4.13 (AA)` [(17)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus)
- [ ] **Oferecer instruções para componentes customizados**, especialmente aqueles com comportamentos complexos ou não previsíveis, para a correta operação.   `5.1.16/3.3.2 (A)` [(18)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [ ] **Garantir que a ordem de leitura do leitor de tela siga a ordem lógica e previsível da tela**, respeitando o fluxo visual (cima/baixo, esq/dir).   `1.3.2/1.3.2 (A)` [(19)](#)

### Tabelas
- [ ] **Usar a tag `<th>` (table header)** para marcar os títulos de colunas e/ou linhas, permitindo que leitores de tela associem os dados corretamente.   `5.6.3/1.3.1 (A)` [(20)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [ ] **Evitar tabelas para layout**, usando-as apenas para exibir dados e não para organizar o layout visual da página.   `5.6.2/1.3.1 (A)` [(21)](#)
- [ ] **Marcar tabelas de dados** no código com a tag `<table>`.   `5.6.1/1.3.1 (A)` [(22)](#)
- [ ] **Incluir descrição em texto** em todas as tabelas complexas.   `5.6.6/3.1.5 (AAA)` [(23)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose)

### Formulários
- [ ] **Garantir a tag `<label>` para todos os campos do formulário**, fornecendo um rótulo visível que indica o que deve ser preenchido.   `5.9.1/3.3.2 (A)` [(24)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [ ] **Evitar pedir informações repetidas** no formulário que o usuário já forneceu nesta mesma sessão.   `5.9.15/3.3.7 (A) ITRAC` [(25)](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry)
- [ ] **Permitir reverter formulários críticos** (como aqueles envolvendo dados legais ou financeiros).   `5.9.12/3.3.4 (AA)` [(26)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data)
- [ ] **Oferecer alternativa a formulários que exijam percepção ou capacidade motora** (como gestos ou movimentos).   `5.9.16/1.1.1 (A), 2.5.4 (A), 2.5.6(AAA)` [(27)](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation)
- [ ] **Oferecer bons valores padrão (default)** no sistema para minimizar a chance de erro no preenchimento do usuário.   `H5` [(28)](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [ ] **Oferecer autenticação acessível**, evitando testes de função cognitiva (memorizar senhas complexas ou resolver quebra-cabeças) e permitindo biometria, preenchimento automático e copiar/colar.   `Grupo 08 / NBR 5.9.18 / WCAG 3.3.8 (AA)` [(101)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum)
- [ ] **Identificar programaticamente o propósito de cada campo de entrada** (atributos de `autocomplete`), permitindo preenchimento automático e apresentações personalizadas.   `NBR 5.9.8 / WCAG 1.3.5 (AA)` [(102)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose)
- [ ] **Agrupar campos relacionados de forma programática** (ex.: `<fieldset>` e `<legend>`), para que a relação entre eles seja transmitida à tecnologia assistiva.   `NBR 5.9.6 / WCAG 1.3.1 (A)` [(103)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [ ] **Identificar os campos obrigatórios de forma perceptível** por todos (não apenas pela cor), de modo que o leitor de tela também os anuncie.   `NBR 5.9.7 / WCAG 3.3.2 (A)` [(104)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)

### Regiões
- [ ] **Usar as tags `<nav>`, `<main>`, `<footer>` e landmarks corretos** para identificar as áreas principais da página (cabeçalho, menu, rodapé, etc.).   `5.4.1/1.3.1 (A)` [(29)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [ ] **Adicionar um link "Pular para o conteúdo"** (ou "Ignorar repetição") no topo da página, que apareça ao começar a navegar com a tecla Tab.   `5.4.2/1.3.1 (A), 1.3.6 (AAA) ITRAC` [(30)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [ ] **Identificar todas as regiões do mesmo tipo com nomes únicos** e acessíveis.   `5.4.5/4.1.2 (A)` [(31)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ ] **Dar um título único e descritivo a cada `<frame>` ou `<iframe>`**, identificando seu conteúdo para a tecnologia assistiva.   `NBR 5.13.4 / WCAG 4.1.2 (A)` [(105)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)

### Listas e Links
- [ ] **Usar as tags `<ul>`, `<ol>` e `<li>` corretamente** para agrupar itens semelhantes no código.   `5.5.1/1.3.1 (A)` [(32)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [ ] **Garantir que o código de lista seja usado semanticamente** para agrupar itens semelhantes, e não apenas para obter um efeito visual.   `5.5.2/1.3.1 (A)` [(33)](#)
- [ ] **Garantir que links sejam claros e semânticos**, utilizando a tag `<a>` com `href` para o texto que leva a outra página ou recurso.   `5.7.1/1.3.1 (A)` [(34)](#)
- [ ] **Oferecer pelo menos duas formas de navegar pelo conteúdo** (Ex: menu principal e mapa do site, ou menu e busca).   `5.7.13/2.4.5 (AA)` [(35)](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways)
- [ ] **Disponibilizar um campo de busca acessível** (bem rotulado e operável por teclado e leitor de tela), facilitando a localização de conteúdo.   `Grupo 08 – Guia BP (seção 3, p.29)` [(106)](#)
- [ ] **Informar quando um link abre em nova guia ou janela**, no texto ou no nome acessível do link.   `NBR 5.7.6 / WCAG 3.2.5 (AAA)` [(107)](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request)
- [ ] **Informar o formato e o tamanho de links para arquivos não-HTML** (ex.: "PDF, 2 MB") no texto ou no nome acessível do link.   `NBR 5.7.7` [(108)](#)
- [ ] **Informar a localização do usuário no conjunto de páginas** (ex.: trilha de navegação / *breadcrumbs*).   `NBR 5.7.14 / WCAG 2.4.8 (AAA) / Guia-UK` [(109)](https://www.w3.org/WAI/WCAG22/Understanding/location)

### Botões e Controles
- [ ] **Usar a tag `<button>` ou `role="button"`** em elementos que executam uma ação na página (como "Enviar", "Buscar", "Fechar").   `5.8.1/1.3.1 (A)` [(36)](#)
- [ ] **Garantir que o texto acessível do botão corresponda ao texto visível** (Ex: se o botão diz "Ver Carrinho", o leitor de tela deve ler "Ver Carrinho").   `5.13.7/2.5.3 (A)` [(37)](#)

### Idioma e Zoom
- [ ] **Definir o idioma principal da página com o atributo `lang="pt-BR"`**, para que os leitores de tela usem a pronúncia correta.   `5.13.2/3.1.1 (A)` [(38)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)
- [ ] **Não bloquear o recurso de zoom do navegador** (evitar `user-scalable=no` / `maximum-scale=1`), permitindo a ampliação até 200% sem perda de conteúdo ou funcionalidade.   `NBR 5.13.5 / WCAG 1.4.4 (AA)` [(110)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [ ] **Evitar alturas fixas que impeçam a expansão natural do conteúdo** quando o texto aumenta, prevenindo truncamento e sobreposição.   `Grupo 08 – Guia BP (seção 3, p.28)` [(111)](#)

### Multimídia e Feedback
- [ ] **Fornecer controle para pausar, parar ou silenciar áudio/vídeo automático**, caso comece a tocar sozinho por mais de 3 segundos.   `5.14.7/1.4.2 (A)` [(39)](https://www.w3.org/WAI/WCAG22/Understanding/audio-control)
- [ ] **Garantir que o leitor de tela avise o usuário sobre mudanças automáticas na página** (Ex: "Item adicionado ao carrinho"), sem que o usuário perca o foco.   `5.13.8/4.1.3 (AA)` [(40)](#)
- [ ] **Anunciar mudanças dinâmicas de estado da interface** (conteúdo injetado por script) usando `aria-live` e `role="alert"`, e dar nome/função/valor acessíveis aos componentes WAI-ARIA.   `Grupo 08 / WCAG 4.1.2, 4.1.3 (A/AA)` [(112)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages)

### Movimento, Tempo e Gestos
- [ ] **Permitir desativar animações de rolagem (scroll)**, caso haja movimentos que disparem ao rolar a página.   `5.15.2/2.3.3 (AAA) ITRAC` [(41)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions)
- [ ] **Permitir estender o tempo de sessão**, caso haja um limite de tempo na página, com aviso prévio do sistema.   `5.16.2/2.2.1 (A)` [(42)](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable)
- [ ] **Fornecer um botão visível para pausar ou parar animações automáticas** (como carrosséis ou movimentos).   `5.15.1/2.2.2 (A) ITRAC` [(43)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)
- [ ] **Garantir que gestos complexos possuam alternativa simples**, como pedir confirmação ou permitir desfazer a ação.   `5.8.11/2.5.2 (A) ITRAC` [(44)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation)
- [ ] **Evitar que componentes sejam acionados apenas por foco de cursor** (ao passar o mouse), necessitando de uma ação como clique.   `5.8.9/3.2.1 (AA)` [(45)](#)
- [ ] **Evitar Mudança de Contexto Inesperada**, garantindo que o site não mude de lugar ou abra pop-ups sozinho ao focar ou preencher um campo.   `5.8.9/3.2.2 (AA) ITRAC` [(46)](#)
- [ ] **Oferecer alternativa de ponteiro único, sem arrastar, para toda funcionalidade operada por movimento de arrastar**.   `Grupo 08 / NBR 5.8.13 / WCAG 2.5.7 (AA)` [(113)](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements)
- [ ] **Limitar conteúdos com flash a no máximo três piscadas por segundo** (abaixo dos limites de flash geral e vermelho), evitando o risco de convulsões.   `NBR 5.15.4 / WCAG 2.3.1 (A)` [(114)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold)
- [ ] **Permitir continuar a atividade após a reautenticação sem perda dos dados já inseridos**, quando uma sessão expira.   `NBR 5.16.5 / WCAG 2.2.5 (AAA)` [(115)](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating)

### Modais e Componentes
- [ ] **Tornar modais acessíveis** quando indispensáveis: botão de fechar claro e visível, suporte à tecla ESC, conteúdo breve, interação limitada a uma tarefa e validação com leitor de tela; evitar abrir modal a partir de outro modal ou de forma automática.   `Grupo 08 – Guia BP (seção 3, p.32–33)` [(116)](#)

### Recomendações
- [ ] **Garantir que Captchas tenham alternativas acessíveis**, como desafios de áudio ou outras formas de verificação.   `Guia-UK` [(47)](#)
- [ ] **Evitar o uso de plugins que prometem acessibilidade automática**, priorizando um código bem escrito que respeite os padrões.   `Guia-UK` [(48)](#)