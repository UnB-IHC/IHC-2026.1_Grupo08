# Avaliação de UX e Heurísticas de Nielsen

A **Avaliação de UX** é a fase do desenvolvimento de software que coloca o
**usuário no centro** e tem como objetivo **validar e melhorar a experiência** que
o produto oferece. Em vez de tratar a qualidade apenas como ausência de bugs, ela
investiga como as pessoas percebem, sentem e usam a interface, gerando evidências
para corrigir o que não funciona e potencializar o que já funciona bem.

## Métodos e técnicas

Vale separar dois conceitos que costumam ser confundidos:

- **Métodos** são abordagens mais amplas, que combinam várias técnicas para
  conduzir uma avaliação.
- **Técnicas** são os procedimentos concretos usados **enquanto um método é
  aplicado**.

Em outras palavras, o método define a estratégia geral e as técnicas são as
ferramentas práticas acionadas durante o processo.

## Dimensões de uma avaliação

Antes de escolher um método, ajuda entender que toda avaliação pode ser
classificada em diferentes eixos, que não são excludentes e ajudam a desenhar o
estudo adequado ao momento do projeto:

- **Atitudinal x Comportamental:** a avaliação **atitudinal** olha para o grupo de
  crenças e pontos de vista particulares do indivíduo, com a limitação natural de
  quanto ele quer compartilhar; a **comportamental** tem enfoque nas **interações**
  desse indivíduo com o sistema.
- **Qualitativa x Quantitativa:** a **qualitativa** foca em percepções contextuais
  e detalhadas dos comportamentos dos usuários; a **quantitativa** foca em análises
  numéricas dos dados dos fenômenos observados.
- **Formativa x Somativa:** a **formativa** é um diagnóstico feito **durante** o
  desenvolvimento para corrigir falhas de UX; a **somativa** é realizada **ao fim**
  do desenvolvimento para medir o sucesso da experiência entregue.
- **Empírica x Analítica:** a **empírica** parte da **interação real** com os
  usuários finais; a **analítica** se baseia em estudos e dados já existentes,
  **sem interação direta** com os usuários.

## Métodos de avaliação mais utilizados

Alguns métodos aparecem com frequência na prática de avaliação de UX:

- **Avaliação Heurística:** criada por Jakob Nielsen, analisa problemas de
  usabilidade com base em 10 heurísticas. É bastante **prática e econômica**.
- **AttrakDiff:** vai além da usabilidade e mede também a parte **emocional e
  hedônica** da experiência.
- **e-SQUUX:** avalia não só a usabilidade, mas também a **qualidade do serviço** e
  a experiência do usuário de forma integrada.
- **SERVQUAL / SERVPERF:** métodos focados em medir a **percepção de qualidade** dos
  serviços digitais.

## A avaliação heurística em detalhe

Por ser o método mais utilizado, a avaliação heurística merece um olhar mais
próximo. Trata-se de um método desenvolvido por **Jakob Nielsen** cujo objetivo
principal é **identificar problemas de design em uma interface**. Para avaliar a
usabilidade do sistema, ela se baseia nas **10 heurísticas**, seguindo a ideia de
padronização, visibilidade e linguagem.

Essas heurísticas podem ser usadas em diversas aplicações, como sistemas web, jogos
e até produtos físicos. Além das de Nielsen, existem outros conjuntos bem
estabelecidos, como as **8 regras de ouro de Shneiderman**. As características
marcantes do método são a **economia e simplicidade**, a natureza **analítica** e a
**utilidade**.

Estudos de Nielsen (1994) mostram ainda que a proporção de problemas de usabilidade
encontrados cresce com o número de avaliadores, mas a melhor **relação
custo-benefício** costuma ficar em torno de **três a cinco avaliadores**, e não
quanto mais melhor.

### Vantagens

- Alto **custo-benefício**;
- Utilidade já no **começo do desenvolvimento**;
- **Acessibilidade** para equipes pouco experientes;
- Auxílio na identificação de problemas **sem depender de usuários reais**.

### Desvantagens

- **Não substitui** testes reais com usuários;
- É dependente de um **contexto real** e de uma demanda real;
- Serve apenas como **complemento** aos testes e ao desenvolvimento.

### As 10 heurísticas

O seminário resumiu as heurísticas de usabilidade de Nielsen da seguinte forma:

1. **Status visível:** *feedback* contínuo para o usuário.
2. **Correspondência:** linguagem familiar para o usuário.
3. **Controle e liberdade:** voltar atrás ou desfazer ações é uma facilidade
   concedida ao usuário.
4. **Padronização:** todos os elementos são consistentes entre si, organizados e
   harmônicos.
5. **Prevenção:** prevenir erros possíveis e impedir entradas erradas.
6. **Reconhecimento:** opções fáceis de serem vistas e acessadas.
7. **Flexibilidade:** atalhos, filtros e opções que permitem personalização.
8. **Minimalismo:** foco centrado apenas no essencial para a aplicação.
9. **Diagnóstico:** mensagens que reportem os erros de forma simples e entendível e
   que sugiram como resolver.
10. **Documentação:** auxílio com contexto para funções complexas.

### Passo a passo da avaliação

A condução de uma avaliação heurística costuma seguir três etapas:

1. **Preparação:** definir a **equipe** (quantas pessoas e treinamento), as
   **ferramentas** (planilhas, Miro, Figma, entre outras) e o **escopo** (qual será
   o foco e quais os critérios).
2. **Avaliação:** familiarização (primeiro contato e exploração da interface),
   **identificação de problemas** (verificação das heurísticas e sugestões de
   correção) e controle do **tempo**, que precisa ser bem definido.
3. **Consolidação dos problemas:** **agrupamento** dos problemas semelhantes e
   **discussão** com base nas questões-chave, com alinhamento entre pontos de vista,
   validação, priorização e estimativa de tempo.

## Por que avaliar a experiência

A avaliação de UX é importante porque:

- garante o **alinhamento** entre as necessidades dos usuários e as metas do
  produto;
- **reduz retrabalho**;
- **não substitui** testes com usuários reais, mas os complementa;
- **deve ser contínua** ao longo do projeto;
- contribui para a **diminuição de custos**.

## Relação com a acessibilidade

Para o nosso guia, a avaliação de UX é o momento em que a acessibilidade deixa de
ser uma intenção e passa a ser **verificada**. Métodos analíticos como a avaliação
heurística permitem detectar barreiras logo no início do desenvolvimento, sem
depender de usuários reais, o que torna a inclusão mais barata de corrigir. Ainda
assim, vale a ressalva do próprio seminário: a avaliação analítica **não substitui**
os testes com pessoas reais, em especial com pessoas com deficiência e usuárias de
tecnologias assistivas. Tratar a avaliação como um processo **contínuo** é o que
garante que a experiência permaneça acessível a cada nova entrega.

## Referências

- NIELSEN, Jakob. *10 heurísticas de usabilidade para design de interface de
  usuário*. Nielsen Norman Group, 1995. Disponível em:
  https://www.nngroup.com/articles/ten-usability-heuristics. Acesso em: 23 set.
  2025.
- MORAN, Kate; GORDON, Kelley. *Heuristic Evaluations: How to Conduct*. Nielsen
  Norman Group, 2023. Disponível em:
  https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/. Acesso
  em: 23 set. 2025.
- MAIA, E.; RAMOS, J. L. *Avaliação da Experiência do Usuário: levantamento de
  métodos e técnicas*. Trabalho de Conclusão de Curso — UnB, 2025.
