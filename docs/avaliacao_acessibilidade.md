# Relatório de Avaliação de Acessibilidade e Usabilidade
## Site Avaliado: OficialFarma
**URL de Referência:** https://www.oficialfarma.com.br/
**Avaliador/Parceiro:** Assistente AI & João Guilherme (jonas3688)

---

### 1. Introdução e Contexto
Este documento apresenta uma avaliação detalhada de acessibilidade e usabilidade do e-commerce **OficialFarma**. O objetivo deste relatório é confrontar a interface pública e a marcação técnica do site com as diretrizes compiladas nos quatro checklists do nosso **Guia de Acessibilidade Digital** (Gestão de Projetos, Design, Desenvolvimento e Conteúdo).

A varredura foi realizada analisando o fluxo de compra de ponta a ponta (Home Page, busca de produtos, listagem e página detalhada de produto - Ex: Vitamina B12 Metilcobalamina), avaliando a semântica do código, o comportamento sob navegação exclusiva por teclado e o contraste visual.

---

### 2. Metodologia de Avaliação
Para cada critério listado em nossos checklists, aplicou-se a seguinte classificação:
* <span class="badge-status badge-c">C</span> **Conforme:** O site OficialFarma atende plenamente ao critério.
* <span class="badge-status badge-p">P</span> **Parcialmente Conforme:** O site OficialFarma atende em parte, mas com ressalvas críticas de aplicação ou código.
* <span class="badge-status badge-nc">NC</span> **Não Conforme:** O site OficialFarma viola o critério de acessibilidade.
* <span class="badge-status badge-na">NA</span> **Não Aplicável:** O critério não se aplica ao escopo atual avaliado (ex: processos internos da equipe da OficialFarma ou mídias não utilizadas).

---

### 3. Checklists de Avaliação

#### 3.1. Gestão de Projetos
Esta seção avalia a presença de políticas de acessibilidade e a conformidade legal do e-commerce OficialFarma.

| Diretriz / Critério do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Considerar acessibilidade desde a iniciação** | <span class="badge-status badge-na">NA</span> | Critério de processo interno da equipe da OficialFarma. |
| **Aplicar princípios de Desenho Universal** | <span class="badge-status badge-p">P</span> | O site tem visual moderno e adaptável para vários dispositivos, mas erra em não estender essa universalidade para usuários com limitações visuais e motoras severas. |
| **Incluir pessoas com deficiência (PcD) nos testes** | <span class="badge-status badge-na">NA</span> | Critério de processo interno de desenvolvimento. |
| **Criar personas variadas** | <span class="badge-status badge-na">NA</span> | Critério de processo interno de UX. |
| **Implementar monitoramento contínuo** | <span class="badge-status badge-na">NA</span> | Critério de processo interno da empresa. |
| **Garantir equipe ciente da importância** | <span class="badge-status badge-na">NA</span> | Critério de treinamento interno da empresa. |
| **Definir critérios de aceite acessíveis** | <span class="badge-status badge-na">NA</span> | Critério de processo interno de qualidade (QA). |
| **Acessibilidade nos requisitos do projeto** | <span class="badge-status badge-na">NA</span> | Critério de escopo interno. |
| **Prever tempo no cronograma para correções** | <span class="badge-status badge-na">NA</span> | Critério de gestão de tempo interno. |
| **Registrar decisões e riscos de acessibilidade** | <span class="badge-status badge-na">NA</span> | Critério de documentação interno. |
| **Testes de acessibilidade a cada sprint** | <span class="badge-status badge-na">NA</span> | Critério de desenvolvimento ágil interno. |
| **Garantir que ferramentas da equipe são acessíveis** | <span class="badge-status badge-na">NA</span> | Critério de infraestrutura interna. |
| **Conformidade com a legislação (LBI Art. 63 / ABNT NBR 17225)** | <span class="badge-status badge-nc">NC</span> | O site OficialFarma viola o Art. 63 da Lei Brasileira de Inclusão, pois mantém barreiras críticas de acesso em suas páginas de venda pública, impossibilitando a autonomia de PcDs. |

---

#### 3.2. Design
Avaliação dos aspectos visuais, contraste, responsividade e affordance.

| Diretriz / Critério do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Garantir um indicador de foco visível (Tab)** | <span class="badge-status badge-nc">NC</span> | O site desativa o contorno nativo de foco do navegador (via CSS `outline: none;` ou `outline: 0`) na maior parte das seções e categorias do menu, impedindo que o usuário de teclado saiba visualmente onde está o cursor. |
| **Oferecer mensagens de erro descritivas** | <span class="badge-status badge-p">P</span> | Os formulários (login/cadastro) indicam campos vazios de forma direta, mas sem detalhamento sonoro ou associação direta aos inputs para tecnologias assistivas. |
| **Sugerir correções de formato** | <span class="badge-status badge-p">P</span> | Feedbacks visuais simples são exibidos ao errar o formato de campos (como CPF ou data), mas não são programaticamente atrelados via `aria-describedby`. |
| **Garantir contraste de texto (mínimo 4.5:1)** | <span class="badge-status badge-c">C</span> | A paleta padrão do site (texto escuro sobre fundo branco e botões verdes primários `#1b5e20` com texto branco) atende perfeitamente ao contraste mínimo exigido. |
| **Garantir contraste de componentes (mínimo 3:1)** | <span class="badge-status badge-c">C</span> | As bordas dos campos de formulários e caixas de seleção possuem boa visibilidade. |
| **Contraste adequado em objetos gráficos (mínimo 3:1)** | <span class="badge-status badge-c">C</span> | Ícones chaves do cabeçalho (busca, redes sociais e carrinho) têm contraste visual adequado. |
| **Evitar depender apenas de cores** | <span class="badge-status badge-c">C</span> | Mensagens de aviso e erro trazem textos explicativos associados, não usando apenas a sinalização por cores. |
| **Links distinguíveis visualmente** | <span class="badge-status badge-p">P</span> | No rodapé, os links são distinguíveis visualmente do texto estático apenas pela cor cinza um pouco mais escura, sem sublinhado padrão (este só surge no mouse-hover). |
| **Disponibilizar opções de ajuda** | <span class="badge-status badge-c">C</span> | Central de atendimento, chat/chatbot e telefone de contato visíveis na home e rodapé. |
| **Garantir design responsivo** | <span class="badge-status badge-c">C</span> | O layout flui de forma adaptativa no mobile, organizando-se em coluna única de fácil navegação vertical. |
| **Zoom do navegador até 200% sem quebra** | <span class="badge-status badge-c">C</span> | O conteúdo se reorganiza e escala corretamente sem ocultar textos ou quebrar o fluxo. |
| **Manter espaçamento adequado de texto** | <span class="badge-status badge-c">C</span> | O espaçamento de linhas, parágrafos e letras padrão do site segue boas práticas de legibilidade. |
| **Garantir consistência de navegação** | <span class="badge-status badge-c">C</span> | O menu principal e a barra do cabeçalho operam de forma idêntica e consistente em todo o portal. |
| **Consistência de elementos de ajuda** | <span class="badge-status badge-c">C</span> | Os botões de ajuda e FAQ possuem o mesmo design e locais de acesso em todas as páginas. |
| **Garantir área clicável mínima de 44x44px** | <span class="badge-status badge-nc">NC</span> | Os botões de ajuste de quantidade de produto (`+` e `-`) e vários links institucionais no rodapé têm tamanho físico e área de toque inferiores a 44x44px. |
| **Informar ao usuário sua localização (Breadcrumbs)** | <span class="badge-status badge-c">C</span> | As páginas de produto usam "breadcrumbs" (migalhas de pão) claros, situando o usuário na categoria correta. |
| **Exibir opções, ações e instruções visíveis** | <span class="badge-status badge-c">C</span> | Botões de comprar, preços, formas de pagamento e campo de frete estão explícitos e de fácil localização. |
| **Design estético e minimalista** | <span class="badge-status badge-p">P</span> | O excesso de pop-ups intrusivos de cupons, banners de ofertas deslizantes e avisos flutuantes polui visualmente a experiência. |
| **Evitar esconder conteúdo de tecnologias assistivas** | <span class="badge-status badge-c">C</span> | Textos e elementos ocultos por CSS de forma deliberada não geram conflito na navegação lógica. |
| **Não restringir conteúdo a uma única orientação** | <span class="badge-status badge-c">C</span> | O site funciona tanto na horizontal quanto na vertical em tablets e celulares. |
| **Não depender apenas de características sensoriais** | <span class="badge-status badge-c">C</span> | As ações e avisos são descritos por texto simples e claro, sem instruções baseadas unicamente em formatos ou localizações visuais. |
| **Contraste mínimo de 3:1 do indicador de foco** | <span class="badge-status badge-nc">NC</span> | Como o indicador visual de foco foi desabilitado no código CSS para a maior parte dos links, este critério é violado. |
| **Botões de alto contraste e tamanho de fonte** | <span class="badge-status badge-na">NA</span> | O site não disponibiliza controles próprios para isso, porém o layout aceita bem as extensões e ajustes nativos do sistema. |

---

#### 3.3. Desenvolvimento
Avaliação técnica da estrutura do código HTML, navegação por teclado e semântica de componentes.

| Diretriz / Critério do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Equipe conhece as diretrizes WCAG** | <span class="badge-status badge-na">NA</span> | Critério interno de desenvolvimento da OficialFarma. |
| **Usar elementos HTML nativos para a função real** | <span class="badge-status badge-p">P</span> | A maioria dos botões de compra usa `<button>`, mas há erros sérios de tags: o botão do carrinho no topo é um `<button>` configurado com um atributo `href` (inválido por especificação W3C), e vários links do rodapé usam `href="#"`. |
| **Garantir navegação por teclado (Tab/Setas)** | <span class="badge-status badge-nc">NC</span> | A barra flutuante de checkout rápido ("Comprar") na página de produtos, bem como os carrosséis de produtos, ignoram completamente o foco por teclado. |
| **Evitar armadilhas de foco** | <span class="badge-status badge-c">C</span> | Não há pontos de navegação onde o foco do teclado fica infinitamente aprisionado. |
| **Manter ordem de foco previsível e lógica** | <span class="badge-status badge-p">P</span> | O foco salta alguns elementos secundários do carrossel fora de ordem antes de descer para a área principal do produto. |
| **Controlar exibição/ocultação de conteúdo extra** | <span class="badge-status badge-nc">NC</span> | O menu suspenso de categorias ("Mega Menu") abre apenas com o evento de passar o mouse (`hover`). O usuário de teclado que navega usando `Tab` não consegue expandir os submenus para acessar as subcategorias. |
| **Oferecer instruções para componentes customizados** | <span class="badge-status badge-na">NA</span> | O site não utiliza componentes customizados altamente complexos que exijam documentação de uso extra. |
| **Ordem de leitura do leitor de tela lógica** | <span class="badge-status badge-c">C</span> | A estrutura do HTML segue uma ordem linear que reflete a apresentação lógica do conteúdo. |
| **Usar tag `<th>` para tabelas de dados** | <span class="badge-status badge-na">NA</span> | Não há tabelas de dados nas principais páginas de produto avaliadas. |
| **Evitar tabelas para layout** | <span class="badge-status badge-c">C</span> | O layout visual é inteiramente estruturado via CSS (Grid/Flexbox). |
| **Marcar tabelas de dados com a tag `<table>`** | <span class="badge-status badge-na">NA</span> | Não aplicável. |
| **Incluir descrição em texto nas tabelas** | <span class="badge-status badge-na">NA</span> | Não aplicável. |
| **Garantir a tag `<label>` para todos os campos** | <span class="badge-status badge-nc">NC</span> | O campo principal de Busca, o input numérico de quantidade de produtos e o input de cálculo de frete (CEP) não contam com `<label>` associados programaticamente via atributo `for`. |
| **Evitar pedir informações repetidas** | <span class="badge-status badge-c">C</span> | Fluxo normal de checkout. |
| **Permitir reverter formulários críticos** | <span class="badge-status badge-c">C</span> | O usuário pode revisar, editar e esvaziar o carrinho de compras antes da transação de pagamento. |
| **Alternativa a formulários que exijam cap. motora** | <span class="badge-status badge-c">C</span> | As entradas de formulário dependem apenas de digitação simples e cliques normais. |
| **Oferecer bons valores padrão (default)** | <span class="badge-status badge-p">P</span> | O seletor de quantidade de produto vem pré-marcado em `1`, mas o sistema poderia preencher automaticamente campos de endereço baseando-se em cookies autorizados. |
| **Oferecer autenticação acessível** | <span class="badge-status badge-p">P</span> | Permite gerenciadores de senhas e colar credenciais, mas a tela de cadastro e login de segurança impõe soluções de Captcha visual complexas sem opção de áudio acessível clara. |
| **Identificar propósito do campo (autocomplete)** | <span class="badge-status badge-p">P</span> | O atributo `autocomplete` está parcialmente configurado nos inputs de email e senha, mas ausente em campos de endereço e frete. |
| **Agrupar campos relacionados (`<fieldset>`)** | <span class="badge-status badge-na">NA</span> | Não há formulários extensos que demandem agrupamento nas páginas avaliadas. |
| **Identificar campos obrigatórios de forma perceptível** | <span class="badge-status badge-c">C</span> | Campos obrigatórios de cadastro trazem asteriscos informativos e avisos em texto. |
| **Usar `<nav>`, `<main>`, `<footer>` landmarks** | <span class="badge-status badge-c">C</span> | A estrutura do HTML adota as tags semânticas corretas para demarcar o cabeçalho, rodapé e o conteúdo principal. |
| **Adicionar link "Pular para o conteúdo"** | <span class="badge-status badge-nc">NC</span> | Ausente na raíz do site. O usuário do teclado é forçado a atravessar dezenas de links de menu antes de alcançar o conteúdo. |
| **Identificar regiões do mesmo tipo com nomes únicos** | <span class="badge-status badge-c">C</span> | Elementos semânticos do mesmo tipo são diferenciados corretamente. |
| **Dar título descritivo a frames/iframes** | <span class="badge-status badge-na">NA</span> | Não há iframes essenciais na estrutura principal de compra. |
| **Usar `<ul>`, `<ol>`, `<li>` para listas** | <span class="badge-status badge-c">C</span> | Menus e vitrines de produtos são estruturados de forma semântica com listas HTML. |
| **Garantir uso semântico de listas** | <span class="badge-status badge-c">C</span> | Não há uso incorreto de listas apenas para obter estilização visual. |
| **Garantir que links sejam claros e semânticos** | <span class="badge-status badge-p">P</span> | Diversos links institucionais no rodapé usam termos fracos ou repetitivos. |
| **Oferecer duas formas de navegar** | <span class="badge-status badge-c">C</span> | Disponibiliza navegação estruturada via categorias do menu e campo de busca global. |
| **Disponibilizar campo de busca acessível** | <span class="badge-status badge-nc">NC</span> | A barra de busca não possui um rótulo associado e o botão de lupa não traz um texto acessível descritivo (anuncia apenas "botão" ao leitor). |
| **Informar quando o link abre em nova guia** | <span class="badge-status badge-nc">NC</span> | Banners e links de selos de qualidade no rodapé abrem novas guias de navegação sem emitir qualquer aviso de áudio ou descrição textual prévia. |
| **Informar formato e tamanho de arquivos** | <span class="badge-status badge-na">NA</span> | Não há download de documentos não-HTML (como PDFs) nas seções críticas. |
| **Informar localização (breadcrumbs)** | <span class="badge-status badge-c">C</span> | Breadcrumbs estruturados no topo das páginas de produto. |
| **Usar `<button>` ou `role="button"` para ações** | <span class="badge-status badge-p">P</span> | Os links de paginação e controles secundários de ordenação de busca usam elementos genéricos com eventos de JavaScript em vez de botões nativos. |
| **Nome acessível do botão igual ao visível** | <span class="badge-status badge-c">C</span> | Botões textuais correspondem perfeitamente ao texto lido. |
| **Definir idioma principal (`lang="pt-BR"`)** | <span class="badge-status badge-p">P</span> | O site declara apenas `lang="pt"`, falhando em indicar a regionalização específica do Brasil (`pt-BR`). |
| **Não bloquear o recurso de zoom** | <span class="badge-status badge-c">C</span> | A tag viewport permite a ampliação do zoom sem restrições. |
| **Evitar alturas fixas que quebrem no zoom** | <span class="badge-status badge-c">C</span> | Os blocos de texto principais expandem-se de forma flexível ao receber zoom de 200%. |
| **Pausar/silenciar áudio ou vídeo automático** | <span class="badge-status badge-na">NA</span> | O site não toca áudios ou vídeos de forma automática. |
| **Avisar mudanças automáticas via leitor de tela** | <span class="badge-status badge-nc">NC</span> | A mensagem flutuante de sucesso que surge ao adicionar um item ao carrinho é puramente visual e não é anunciada programaticamente aos leitores de tela. |
| **Anunciar mudanças dinâmicas (`aria-live`)** | <span class="badge-status badge-nc">NC</span> | A contagem de itens do carrinho no cabeçalho atualiza de forma silenciosa para o leitor de tela. |
| **Desativar animações de scroll** | <span class="badge-status badge-na">NA</span> | Sem animações complexas ativadas por rolagem. |
| **Permitir estender o tempo de sessão** | <span class="badge-status badge-na">NA</span> | Não há cronômetros de tempo limite rígidos que barrem a navegação. |
| **Botão de pausa para animações (carrossel)** | <span class="badge-status badge-nc">NC</span> | O carrossel rotativo principal de banners na home page gira sozinho e não disponibiliza nenhum controle visível de pausa. |
| **Alternativa programática a gestos de arrastar** | <span class="badge-status badge-na">NA</span> | Não há interações baseadas em arrastar e soltar. |
| **Limitar flash a 3 piscadas por segundo** | <span class="badge-status badge-c">C</span> | O portal não faz uso de elementos gráficos piscantes perigosos. |
| **Continuar atividade após reautenticação** | <span class="badge-status badge-na">NA</span> | Critério aplicável a áreas restritas após expiração de sessão longa. |
| **Tornar modais acessíveis** | <span class="badge-status badge-p">P</span> | Os modais de ofertas/newsletter abrem na tela sem mover o foco do teclado automaticamente e o botão de fechamento ("X") é difícil de ser ativado via teclado. |
| **Captchas com alternativas acessíveis** | <span class="badge-status badge-p">P</span> | Desafios de Captcha visual no cadastro/login não oferecem alternativa de áudio clara para deficientes visuais. |
| **Evitar plugins de acessibilidade automática** | <span class="badge-status badge-c">C</span> | O site não adota aquelas ferramentas de barra de acessibilidade flutuantes prontas, o que é correto, focando na estrutura real (embora esta ainda precise de correções). |

---

#### 3.4. Conteúdo
Avaliação da clareza das informações, links, alts de imagem e rotulação textual.

| Diretriz / Critério do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Usar linguagem simples, clara e direta** | <span class="badge-status badge-c">C</span> | A linguagem informativa geral e textos institucionais são de fácil compreensão. |
| **Organizar o conteúdo com títulos e parágrafos** | <span class="badge-status badge-c">C</span> | Blocos de texto de produtos e termos são bem distribuídos e espaçados. |
| **Títulos descrevem corretamente a seção** | <span class="badge-status badge-c">C</span> | Cabeçalhos e títulos de seções são coerentes com o conteúdo apresentado abaixo deles. |
| **Usar tags de cabeçalho (`<h1>` a `<h6>`)** | <span class="badge-status badge-c">C</span> | A estrutura do site adota tags de cabeçalho nativas para organizar as seções. |
| **Garantir o uso Semântico de Títulos** | <span class="badge-status badge-c">C</span> | As tags `<h1>-<h6>` são usadas para demarcar a hierarquia de conteúdo real e não apenas para formatação visual. |
| **Manter Ordem Lógica de Títulos** | <span class="badge-status badge-c">C</span> | A hierarquia textual é respeitada de forma lógica (geralmente H1 para nome do produto, H2 e H3 para descrições e detalhes). |
| **Evitar abreviações ou termos sem explicação** | <span class="badge-status badge-p">P</span> | Uso excessivo de jargões técnicos farmacêuticos e médicos nas descrições de produtos sem a presença de explicações simples ou glossários. |
| **Manter consistência terminológica** | <span class="badge-status badge-c">C</span> | Rótulos de compra e termos do menu mantêm a consistência visual no portal todo. |
| **Escrever conteúdo compreendido fora de ordem** | <span class="badge-status badge-c">C</span> | Os blocos de descrição do produto são modulares e de fácil entendimento individual. |
| **Usar um único cabeçalho de nível 1 (`<h1>`)** | <span class="badge-status badge-c">C</span> | Cada página exibe apenas um título `<h1>` principal (nome do produto na página de vendas ou o título da seção). |
| **Marcar semanticamente trechos de ênfase** | <span class="badge-status badge-c">C</span> | Textos em negrito usam as tags HTML semânticas adequadas (`<strong>`). |
| **Alinhar blocos de texto à esquerda** | <span class="badge-status badge-c">C</span> | Os blocos de texto do e-commerce estão devidamente alinhados à esquerda, evitando justificação que dificulta a leitura. |
| **Limitar blocos de texto a 80 caracteres** | <span class="badge-status badge-c">C</span> | Larguras máximas de parágrafos de descrição respeitam margens confortáveis. |
| **Textos alternativos (`alt`) em imagens informativas** | <span class="badge-status badge-nc">NC</span> | **Falha Crítica:** A maior parte das imagens de produtos, banners de promoções e até o logotipo principal da loja carecem do atributo `alt` (ficam vazios ou ausentes), deixando o usuário de leitor de tela sem saber qual produto está vendo. |
| **Usar `alt=""` em imagens puramente decorativas** | <span class="badge-status badge-p">P</span> | Ícones ilustrativos e grafismos decorativos não utilizam `alt=""` explícito, fazendo com que alguns leitores de tela tentem ler os nomes dos arquivos de imagem. |
| **Alternativa textual para imagens com texto** | <span class="badge-status badge-nc">NC</span> | Selos de segurança e imagens promocionais com textos embutidos não trazem nenhuma descrição ou alternativa equivalente em formato texto. |
| **Evitar texto dentro de imagens** | <span class="badge-status badge-nc">NC</span> | Os banners do carrossel principal de ofertas são formados quase que inteiramente por imagens com cupons de desconto desenhados diretamente nelas. |
| **Alternativa em texto para conteúdo visual/auditivo** | <span class="badge-status badge-nc">NC</span> | Nenhuma descrição textual ou áudio alternativo fornecido para as fotos de produtos na vitrine. |
| **Alternativas para mídia de sentido único** | <span class="badge-status badge-na">NA</span> | Não há mídias exclusivas de áudio ou vídeo. |
| **Fornecer transcrição para áudios** | <span class="badge-status badge-na">NA</span> | Não há arquivos de áudio. |
| **Evitar uso de metáforas visuais complexas** | <span class="badge-status badge-c">C</span> | A simbologia gráfica adotada (carrinho, lupa, perfil) é simples e amplamente conhecida. |
| **Descrição detalhada para imagens complexas** | <span class="badge-status badge-na">NA</span> | Não há tabelas de dosagem ou infográficos complexos no formato de imagem isolada que demandem descrições apartadas. |
| **Audiodescrição em vídeos pré-gravados** | <span class="badge-status badge-na">NA</span> | O site não dispõe de vídeos de produtos. |
| **Janela de interpretação em Libras** | <span class="badge-status badge-na">NA</span> | Não aplicável no contexto textual atual. |
| **Escrever links com textos significativos** | <span class="badge-status badge-nc">NC</span> | As listagens de produtos trazem múltiplos links rotulados apenas como "Comprar" ou "Ver Produto" repetidamente, o que se torna confuso se lidos fora de contexto por um leitor de telas. |
| **Garantir Propósito do Link Claro** | <span class="badge-status badge-nc">NC</span> | Links genéricos e referências incompletas de rodapé falham em descrever o destino de forma autônoma. |
| **Garantir Links Compreensíveis de forma isolada** | <span class="badge-status badge-nc">NC</span> | O leitor de tela ao extrair a lista de links da página lê apenas sequências de "Comprar, Comprar, Comprar..." sem o nome associado do medicamento/produto. |
| **Garantir Nomes de Links Únicos** | <span class="badge-status badge-nc">NC</span> | Vários links chamados "Comprar" apontam para páginas de produtos totalmente distintos. |
| **Garantir Propósito do Botão Claro** | <span class="badge-status badge-nc">NC</span> | Conforme detalhado no desenvolvimento, os botões vazios de ajuste de quantidade não descrevem sua finalidade. |
| **Garantir que ícones tenham rótulos acessíveis** | <span class="badge-status badge-nc">NC</span> | Os ícones visuais do cabeçalho (Carrinho de Compras, Minha Conta) e do rodapé (redes sociais) carecem de tags de descrição textual programática. |
| **Identificar idioma com `lang="pt-BR"`** | <span class="badge-status badge-p">P</span> | Declarado de forma genérica como `lang="pt"`. |
| **Sinalizar mudança de idioma no texto** | <span class="badge-status badge-na">NA</span> | O conteúdo textual é inteiramente em português. |
| **Garantir listas com estrutura de lista** | <span class="badge-status badge-c">C</span> | A codificação das listas de itens nas vitrines e menus usa as tags semânticas corretas. |
| **Garantir Título na Aba do Navegador descritivo** | <span class="badge-status badge-c">C</span> | A tag `<title>` é configurada de forma clara, refletindo o nome do produto ou categoria seguido do nome da marca. |
| **Fornecer Documentação Clara** | <span class="badge-status badge-c">C</span> | Central de FAQ, termos de uso e políticas de devolução são fáceis de localizar e bem escritos. |
| **Mensagens de erro claras em formulários** | <span class="badge-status badge-p">P</span> | Indicações visuais de erros nos inputs orientam o preenchimento, mas falham em detalhar a correção programática. |
| **Usar CamelCase em Hashtags** | <span class="badge-status badge-na">NA</span> | O site não publica hashtags nas páginas de compra. |
| **Manter o uso de emojis moderado** | <span class="badge-status badge-c">C</span> | O uso de emojis na interface é escasso, concentrado em ícones estruturais. |

---

### 4. Diagnóstico de Problemas Críticos e Propostas de Correção

#### Problema 1: Imagens e Produtos Sem Alternativa Textual (WCAG 1.1.1 - Nível A)
* **Descrição:** A ausência de atributo `alt` nas fotos de produtos e no logotipo principal impede deficientes visuais de saber quais medicamentos ou suplementos estão selecionando na vitrine.
* **Proposta de Correção (HTML):**
  ```html
  <!-- Antes -->
  <img src="https://.../vitamina-b12.jpg" />
  
  <!-- Correção -->
  <img src="https://.../vitamina-b12.jpg" alt="Vitamina B12 Metilcobalamina 1mg com 60 Doses - OficialFarma" />
  ```

#### Problema 2: Teclado Sem Foco Visual e Menus Inacessíveis (WCAG 2.4.7 - Nível AA e 2.1.1 - Nível A)
* **Descrição:** O contorno visual de foco foi desativado no CSS. Além disso, o menu principal de departamentos só expande com o mouse (`hover`), bloqueando a navegação de usuários de teclado.
* **Proposta de Correção (CSS & JS):**
  ```css
  /* Restaurar indicador de foco */
  a:focus, button:focus, input:focus {
      outline: 2px solid #1b5e20;
      outline-offset: 2px;
  }
  ```
  Adicionar scripts que expandam o menu ao receber foco do teclado (`focusin`) e colapsem ao perder (`focusout`).

#### Problema 3: Botões e Inputs Sem Nome Acessível (WCAG 4.1.2 - Nível A)
* **Descrição:** Os botões de aumentar/diminuir quantidade de produto e o input de busca não possuem textos descritivos programáticos, impossibilitando leitores de tela de descreverem a ação ao usuário.
* **Proposta de Correção (HTML):**
  ```html
  <!-- Adicionar aria-label nos botões de quantidade -->
  <button aria-label="Diminuir quantidade em um">-</button>
  <button aria-label="Aumentar quantidade em um">+</button>
  ```

---

### 5. Conclusão da Avaliação
O e-commerce OficialFarma possui um design estético agradável, responsividade sólida no mobile e boas escolhas cromáticas com excelente contraste. 

Contudo, sob a ótica da **Acessibilidade Digital (WCAG)**, o site falha em múltiplos pilares estruturais (como a falta de atalhos iniciais, ausência de foco no teclado, links inacessíveis no mega menu e falta de descrição alternativa nas fotos de produtos). Ao implementar as melhorias e correções programáticas sugeridas neste relatório, o portal pode atingir um excelente nível de inclusão social e conformidade com a legislação brasileira (LBI).
