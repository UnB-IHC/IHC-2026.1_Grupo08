# Relatório de Avaliação de Acessibilidade e Usabilidade
## Site Avaliado: OficialFarma
**URL de Referência:** https://www.oficialfarma.com.br/
**Avaliador/Parceiro:** Assistente AI & João Guilherme (jonas3688)

---

### 1. Introdução e Contexto
Este documento apresenta uma avaliação detalhada de acessibilidade e usabilidade do site de e-commerce **OficialFarma**. O objetivo é verificar a conformidade do site em relação às diretrizes do Guia de Acessibilidade Digital compilado pelo Grupo 08 (Gestão, Desenvolvimento, Design e Conteúdo).

A avaliação foi realizada navegando pelo site (página inicial, ferramenta de busca e página detalhada de produtos - Ex: Vitamina B12 Metilcobalamina) e inspecionando o código-fonte gerado, o comportamento via teclado e o contraste visual.

---

### 2. Avaliação Detalhada por Categoria

Para cada categoria, foram testados os itens aplicáveis ao site atual, rotulando-os em:
* <span class="badge-status badge-c">C</span> **Conforme:** O site atende plenamente ao critério.
* <span class="badge-status badge-p">P</span> **Parcialmente Conforme:** O site atende ao critério, mas com ressalvas.
* <span class="badge-status badge-nc">NC</span> **Não Conforme:** O site viola criticamente o critério de acessibilidade.

#### 3.1. Gestão e Navegação Inicial
| Critério / Diretriz | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Pular para o conteúdo (Skip Link)** | <span class="badge-status badge-nc">NC</span> | O site não possui um link de atalho "Pular para o conteúdo principal" no topo. Um usuário navegando apenas por teclado precisa percorrer dezenas de itens do menu principal a cada página. |
| **Idioma Principal Declarado** | <span class="badge-status badge-c">C</span> | O atributo `lang` está corretamente declarado. |

#### 3.2. Desenvolvimento (Marcação e Semântica)
| Critério / Diretriz | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Usar elementos HTML nativos para ações** | <span class="badge-status badge-p">P</span> | Os botões primários da página de produto e os botões do carrossel usam tags `<button>` nativas, o que é ótimo. Porém, o botão de abrir o carrinho no cabeçalho usa a tag `<button>` misturada com o atributo de link `href="..."`, o que causa erro de parsing na estrutura do HTML. |
| **Navegação por Teclado e Foco Visível** | <span class="badge-status badge-nc">NC</span> | A navegação usando a tecla `Tab` não exibe um "anel de foco" (outline) visível na maior parte dos menus do cabeçalho e rodapé. Além disso, a barra inferior flutuante de "Comprar" fica invisível e inacessível para quem navega por teclado. |
| **Controles e Ações com Nomes Acessíveis** | <span class="badge-status badge-nc">NC</span> | Os controles essenciais de comércio (botão de aumentar e diminuir quantidade `+` e `-`) são tags `<button>` completamente vazias e sem os atributos de texto oculto (`aria-label` ou `title`). O leitor de tela anuncia apenas "botão". |
| **Rótulos de Formulários (Inputs)** | <span class="badge-status badge-nc">NC</span> | O campo principal de Busca, o input de quantidade e o campo de CEP para cálculo do frete não possuem tag `<label>` conectada (através do atributo `for` vinculado ao `id` do input) e não têm descrição acessível programática. |

#### 3.3. Design
| Critério / Diretriz | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Contraste de Texto Adequado** | <span class="badge-status badge-c">C</span> | A maioria dos botões principais de "Call to Action" possui contraste excelente. O botão de "Adicionar ao carrinho" (verde escuro `#1b5e20` com texto branco `#ffffff`) atende facilmente as regras de contraste WCAG (mínimo de 4.5:1). |
| **Localização do Usuário (Breadcrumbs)** | <span class="badge-status badge-c">C</span> | As páginas de produtos contam com "migalhas de pão" (breadcrumbs) totalmente funcionais e visíveis, permitindo que o usuário identifique exatamente o departamento e a hierarquia onde se encontra. |

#### 3.4. Conteúdo
| Critério / Diretriz | Status | Evidência / Observação |
| :--- | :---: | :--- |
| **Textos Alternativos em Imagens (Atributo `alt`)** | <span class="badge-status badge-nc">NC</span> | **Falha Crítica:** A grande maioria do conteúdo visual do e-commerce é inatingível para deficientes visuais. O logotipo da empresa (que fica numa tag de imagem interna) e as fotos de exibição do produto falham na descrição alternativa (o atributo `alt` é deixado em branco e a imagem não está declarada como decorativa). |

---

### 4. Diagnóstico de Problemas Críticos e Propostas de Correção

Abaixo estão as recomendações técnicas e pontuais de correções (de alto impacto, porém de simples implementação no código da OficialFarma):

#### Problema 1: Foco de Navegação Invisível (WCAG 2.4.7)
* **Descrição e Impacto:** A aplicação de `outline: none;` sem uma regra de `:focus` equivalente destrói a navegabilidade para pessoas com deficiências motoras e usuários power-users de teclado. É impossível saber onde o cursor está na tela.
* **Proposta de Correção (CSS):**
  ```css
  /* Restaurar o estado visual do foco para botões, inputs e links */
  a:focus, button:focus, input:focus {
      outline: 2px solid #1b5e20;
      outline-offset: 2px;
  }
  ```

#### Problema 2: Botões Vazios e Entradas de Formulário "Órfãs" (WCAG 1.3.1 e 4.1.2)
* **Descrição e Impacto:** O usuário de tecnologia assistiva ao entrar no produto ouve inputs e botões (como a alteração da quantidade do produto) sendo identificados como genéricos.
* **Proposta de Correção (HTML):**
  Adicionar a propriedade `aria-label` aos botões de controle de quantidade e vincular devidamente o label ao input numérico:
  ```html
  <!-- Botões -->
  <button class="decrease" aria-label="Diminuir quantidade em um">-</button>
  <button class="increase" aria-label="Aumentar quantidade em um">+</button>

  <!-- Input de CEP -->
  <label for="zip-code-frete" class="sr-only">Calcular frete e prazo</label>
  <input type="text" id="zip-code-frete" name="postcode">
  ```

#### Problema 3: Falta de Imagens Descritivas (WCAG 1.1.1)
* **Descrição e Impacto:** Falha principal em e-commerces. As fotos dos medicamentos, potes e caixas, essenciais para a escolha de compra, não comunicam nada aos leitores de tela.
* **Proposta de Correção (HTML):**
  Atribuir adequadamente o campo textual vindo do backend/banco de dados das imagens de produtos:
  ```html
  <img src=".../vitamina-b12.jpg" alt="Pote Branco de Vitamina B12 Metilcobalamina 1mg com 60 Doses da OficialFarma">
  ```

---

### 5. Conclusão da Avaliação
O e-commerce OficialFarma atende satisfatoriamente algumas heurísticas básicas de usabilidade, como botões de alto contraste e boa estrutura de orientação/breadcrumbs. 

No entanto, o site **falha em múltiplos pilares básicos de Acessibilidade Digital (WCAG)**, gerando um ambiente excludente para pessoas com deficiência visual (pela ausência descritiva em imagens dos produtos e falta de rótulos em ferramentas-chave de compra como Carrinho e Frete) e para pessoas com deficiência motora (foco invisível e ausência do skip link). Ao implementar simples metadados (como ARIA) e pequenos ajustes de CSS, o site alcançaria uma vasta evolução em sua maturidade de acessibilidade.
