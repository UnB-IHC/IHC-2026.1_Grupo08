# Relatório de Avaliação de Acessibilidade e Usabilidade
## Site: Guia de Acessibilidade Digital (Grupo 08 - IHC 2026/1)
**URL de Referência:** https://unb-ihc.github.io/IHC-2026.1_Grupo08/
**Avaliador/Parceiro:** Assistente AI & João Guilherme (jonas3688)

---

### 1. Introdução e Contexto
Este documento apresenta uma avaliação detalhada de acessibilidade e usabilidade do site **Guia de Acessibilidade Digital** (desenvolvido pelo Grupo 08 para a disciplina de Interação Humano-Computador da UnB). O objetivo desta avaliação é verificar se o próprio portal que hospeda os guias e checklists está em conformidade com as diretrizes e boas práticas nele compiladas, garantindo coerência entre o conteúdo de orientação apresentado e a implementação técnica da ferramenta.

A avaliação foi realizada de forma **analítica e técnica**, analisando o código-fonte (HTML/CSS/JS), a navegação por teclado, a estrutura de conteúdo e a experiência de uso de ponta a ponta.

---

### 2. Metodologia de Avaliação
A avaliação baseou-se diretamente nas quatro categorias de checklists contidas no portal:
1. **Gestão de Projetos**
2. **Desenvolvimento**
3. **Design**
4. **Conteúdo**

Para cada categoria, foram testados os itens aplicáveis ao site atual, rotulando-os em:
* <span class="badge-status badge-c">C</span> **Conforme:** O site atende plenamente ao critério.
* <span class="badge-status badge-p">P</span> **Parcialmente Conforme:** O site atende ao critério, mas com ressalvas ou oportunidades latentes de melhoria.
* <span class="badge-status badge-nc">NC</span> **Não Conforme:** O site viola o critério de acessibilidade.
* <span class="badge-status badge-na">NA</span> **Não Aplicável:** O critério não se aplica à natureza do site (ex: formulários de transação financeira, modais complexos, audiodescrição de vídeos inexistentes).

---

### 3. Avaliação Detalhada por Categoria

#### 3.1. Gestão de Projetos
| Critério / Item do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Considerar acessibilidade desde o início** | <span class="badge-status badge-c">C</span> | O projeto nasceu com o foco central em acessibilidade digital. |
| **Aplicar princípios de Desenho Universal** | <span class="badge-status badge-c">C</span> | Utiliza o framework MkDocs com o tema Material, que nativamente suporta múltiplos dispositivos, leitores de tela e navegação por teclado. |
| **Incluir pessoas com deficiência (PcD)** | <span class="badge-status badge-p">P</span> | Não há documentação no site demonstrando testes empíricos com PcDs para validação do portal. |
| **Criar personas variadas** | <span class="badge-status badge-c">C</span> | Personas e mapas de empatia estão documentados na seção de UX (`docs/ux/personas.md`). |
| **Monitoramento contínuo** | <span class="badge-status badge-c">C</span> | O guia fornece uma página com ferramentas de teste sugeridas (WAVE, Lighthouse, etc.). |
| **Garantir conformidade com a legislação (LBI Art. 63)** | <span class="badge-status badge-c">C</span> | O site segue boas práticas de acessibilidade de modo a cumprir as exigências da Lei Brasileira de Inclusão. |

#### 3.2. Desenvolvimento
| Critério / Item do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Usar elementos HTML nativos** | <span class="badge-status badge-c">C</span> | Elementos como cabeçalhos, botões, checkboxes e links utilizam tags nativas (`<a>`, `<h1>-<h6>`, `<input type="checkbox">`), garantindo a semântica adequada. |
| **Navegação por teclado** | <span class="badge-status badge-c">C</span> | Todas as seções e links são alcançáveis via tecla `Tab` e ativados com `Enter` ou `Espaço`. |
| **Evitar armadilhas de foco** | <span class="badge-status badge-c">C</span> | A navegação flui livremente sem prender o cursor do teclado. |
| **Link "Pular para o conteúdo"** | <span class="badge-status badge-c">C</span> | O site implementa um link oculto de salto de blocos que se torna visível ao primeiro `Tab`. |
| **Definir idioma principal (`lang`)** | <span class="badge-status badge-p">P</span> | O site define `lang="pt"` na tag `<html>`. Embora correto, o ideal para a regionalização no Brasil é usar `lang="pt-BR"`. |
| **Não bloquear o recurso de zoom** | <span class="badge-status badge-c">C</span> | A meta tag viewport não restringe o zoom da página (`user-scalable` não bloqueado). |
| **Mudanças dinâmicas de estado (`aria-live`)** | <span class="badge-status badge-p">P</span> | O indicador circular de progresso fixo (`.vaaa-floating`) possui `role="status"` and `aria-live="polite"`. Contudo, a atualização se dá pela mudança do `aria-label` do SVG/contêiner e textos secundários. Dependendo do leitor de tela, a atualização do atributo `aria-label` não é anunciada de forma automática. O ideal é atualizar uma mensagem em texto plano. |
| **Informar quando o link abre em nova guia** | <span class="badge-status badge-nc">NC</span> | Vários links externos (como os links de referências WCAG ao lado de cada item do checklist) abrem em nova aba sem qualquer aviso sonoro ou textual ao usuário (ex: falta `aria-label` ou texto indicativo como "abre em nova janela"). |

#### 3.3. Design
| Critério / Item do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Indicador de foco visível** | <span class="badge-status badge-c">C</span> | Elementos focados por teclado possuem um contorno contrastante e nítido. |
| **Contraste de texto (mínimo 4.5:1)** | <span class="badge-status badge-c">C</span> | O tema padrão do MkDocs Material e o tema escuro possuem contraste adequado. O indicador circular também calcula dinamicamente a cor baseada na porcentagem usando HSL, garantindo legibilidade. |
| **Evitar depender apenas de cores** | <span class="badge-status badge-c">C</span> | O progresso do checklist exibe a porcentagem em texto e o número de itens marcados (ex: `15%` e `2/13`), não dependendo apenas da cor do anel (que muda de vermelho a verde). |
| **Design responsivo** | <span class="badge-status badge-c">C</span> | O site se adapta de forma excelente a telas mobile, movendo a navegação lateral para uma gaveta suspensa. |
| **Área clicável mínima de 44x44px** | <span class="badge-status badge-nc">NC</span> | **Oportunidade crítica:** Os checkboxes padrão do markdown têm um tamanho físico pequeno (cerca de 18x18px). Como eles não estão associados a um elemento `<label>` que englobe o texto do item, clicar no texto do item não ativa o checkbox. O usuário é obrigado a clicar precisamente sobre o pequeno quadrado do checkbox, violando o critério WCAG 2.5.8 de área de toque mínima para telas de toque e acessibilidade motora. |
| **Localização do usuário na interface** | <span class="badge-status badge-c">C</span> | A trilha de navegação (breadcrumbs), o destaque no menu lateral e o título do documento sinalizam claramente a posição atual do usuário. |

#### 3.4. Conteúdo
| Critério / Item do Checklist | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Linguagem simples e clara** | <span class="badge-status badge-c">C</span> | Textos estruturados de forma direta, clara e de fácil entendimento. |
| **Hierarquia lógica de títulos** | <span class="badge-status badge-c">C</span> | Páginas utilizam H1 para o título principal, seguidos de H2 e H3 de forma sequencial e sem saltos de níveis. |
| **Textos alternativos em imagens** | <span class="badge-status badge-c">C</span> | As imagens na página inicial (Logotipo do MiFarma e avatares dos desenvolvedores) contêm atributos `alt` preenchidos e descritivos. |
| **Links com textos significativos e funcionais** | <span class="badge-status badge-nc">NC</span> | **Oportunidade crítica:** Os links que apontam para as referências das diretrizes (ex: `[(49)]`) estão literalmente quebrados (apontando para `href="#"`), ou seja, não levam o usuário ao recurso. Além disso, quando lidos isoladamente por leitores de tela, soam apenas como números sem sentido, violando a regra de propósito claro do link (WCAG 2.4.4). |
| **Alinhamento do texto à esquerda** | <span class="badge-status badge-c">C</span> | Textos padrão alinhados à esquerda, evitando alinhamento justificado que prejudica pessoas com dislexia. |

---

### 4. Diagnóstico de Problemas Críticos e Propostas de Correção

Abaixo estão detalhados os três problemas de acessibilidade mais significativos identificados no site, acompanhados de propostas práticas de correção (código e práticas) para que o grupo possa implementar.

#### Problema 1: Área de Toque Insuficiente nos Checkboxes (WCAG 2.5.8 - AA)
* **Descrição:** Os checkboxes do checklist de acessibilidade exigem um clique preciso sobre a caixa de seleção de 18x18px. O texto do item ao lado não é clicável para ativar a caixa.
* **Impacto:** Usuários de dispositivos móveis com telas de toque ou pessoas com tremores/dificuldades motoras enfrentam sérias barreiras para marcar os itens.
* **Proposta de Correção:** 
  Como o MkDocs gera a estrutura de lista de tarefas padrão, podemos injetar uma pequena rotina no script `docs/js/progress.js` para envolver o texto de cada item em um elemento `<label>` clicável ou interceptar o clique no item de lista `<li>` para alternar o checkbox correspondente.
  * *Exemplo de melhoria via CSS/JS para aumentar a área clicável:*
    ```css
    /* Adicionar no docs/css/custom.css */
    .md-content article li.task-list-item {
      cursor: pointer;
      padding: 8px 12px; /* Aumenta a área de clique em volta do item */
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    .md-content article li.task-list-item:hover {
      background-color: var(--md-accent-fg-color--transparent);
    }
    ```
    E no JavaScript `docs/js/progress.js`, permitir que clicar no texto do `li` selecione o checkbox:
    ```javascript
    // No script de inicialização dos checkboxes:
    document.querySelectorAll(".md-content article li.task-list-item").forEach(function(li) {
      li.addEventListener("click", function(e) {
        // Evita loop se o clique já foi no próprio input
        if (e.target.tagName === "INPUT") return;
        var cb = li.querySelector("input[type='checkbox']");
        if (cb) {
          cb.checked = !cb.checked;
          // Dispara o evento de mudança manualmente para atualizar o progresso
          cb.dispatchEvent(new Event("change"));
        }
      });
    });
    ```

#### Problema 2: Links Quebrados e Pouco Descritivos (WCAG 2.4.4 - A)
* **Descrição:** Existem dezenas de links de referência rápida ao lado de cada item do checklist (ex: `[(49)]`, `[(50)]`) que estão estruturados de forma incompleta: eles apontam para um link nulo (`href="#"`), recarregando a página atual ao invés de direcionar à diretriz correta. Além disso, por exibirem apenas números, são lidos de forma não clara pelos leitores de tela.
* **Impacto:** Pessoas com ou sem deficiência clicam nos links em busca de entender as diretrizes, mas recebem uma falha (não são redirecionadas) e acabam com frustração na navegação. Leitores de tela também perdem completamente o contexto do destino.
* **Proposta de Correção:**
  Preencher as URLs corretas de referência no Markdown (apontando para o site do W3C ou materiais locais) e adicionar um atributo `aria-label` ou `title` contextual a eles.
  * *Exemplo via Markdown:*
    ```markdown
    - [ ] **Garantir um indicador de foco visível**... [(49)](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html){ aria-label="Referência do critério de Foco Visível na WCAG" }
    ```
  * *Solução paliativa se as URLs ainda não estiverem prontas:* Remover a tag `<a href="#">` e transformar em texto normal (`<span>[(49)]</span>`) até que os links reais da W3C sejam mapeados, para evitar que o usuário clique em algo que não funciona.

#### Problema 3: Aviso Dinâmico do Progresso para Leitores de Tela (WCAG 4.1.2 / 4.1.3 - AA)
* **Descrição:** O anel de progresso circular flutuante se atualiza dinamicamente na tela, mas o feedback sonoro de que a tarefa foi concluída ou que o progresso mudou não é explicitamente disparado para quem utiliza leitores de tela de forma clara.
* **Proposta de Correção:**
  Criar um elemento de texto oculto exclusivo para leitores de tela (`sr-only`) dentro da div com `aria-live="polite"` e atualizar o seu texto a cada mudança.
  * *Exemplo CSS:*
    ```css
    .vaaa-sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
    ```
  * *Exemplo JS:*
    ```javascript
    // Na criação do container floating:
    var srLive = document.createElement("span");
    srLive.className = "vaaa-sr-only";
    floating.appendChild(srLive);

    // E na função update():
    srLive.textContent = "Progresso atualizado para " + pct + "% (" + checked + " de " + total + " itens marcados).";
    ```

---

### 5. Conclusão
O site **Guia de Acessibilidade Digital** do Grupo 08 apresenta um altíssimo nível de conformidade geral com os seus próprios critérios de acessibilidade e usabilidade. Graças à escolha do MkDocs Material, a semântica estrutural, a navegação por teclado e a responsividade são excelentes. O mecanismo de checklist interativo com persistência local e indicador flutuante é muito inovador e bem implementado.

No entanto, a equipe tem a oportunidade de elevar o portal de um patamar excelente para impecável ao implementar os ajustes propostos nesta avaliação. Aumentar a área de clique dos itens da lista de tarefas e adicionar metadados de acessibilidade (`aria-label` e avisos no `aria-live`) garantirá que pessoas com limitações motoras e visuais possam desfrutar de toda a interatividade do site sem dificuldades.
