# Gold Sky — Brainstorm de Design

## Contexto
Boutique premium brasileira de joias e óculos. Inspiração: Vivara meets Parisian atelier.
Paleta definida no PRD: Forest Green (#2B4A2F), Cream (#FAF5EE), Charcoal (#1A1A1A), Gold (#C9A96E), White (#FFFFFF), Warm Gray (#7A7A7A).

---

<response>
<probability>0.08</probability>
<idea>

**Design Movement:** Parisian Atelier Minimalismo Quente — inspirado em maisons como Cartier e Dinh Van, com toques de calor brasileiro.

**Core Principles:**
1. Espaço negativo como elemento de luxo — o vazio comunica exclusividade
2. Tipografia como joia — Cormorant Garamond em tamanhos dramáticos, quase escultórica
3. Fotografia editorial como âncora visual — produtos em cream, lifestyle em luz dourada
4. Hierarquia cromática rígida: branco → cream → verde floresta, nunca misturado aleatoriamente

**Color Philosophy:**
O branco e o cream criam um "silêncio visual" que faz o verde floresta e o dourado "cantarem". O charcoal ancora sem pesar. Cada cor tem seu território e não invade o outro — como uma vitrine bem curada.

**Layout Paradigm:**
Assimétrico editorial: colunas de larguras diferentes (1/3 + 2/3), texto justificado à esquerda com imagens sangradas à direita. Seções alternadas cream/white com divisores dourados finos. Nenhum elemento centrado sem intenção.

**Signature Elements:**
1. Linha dourada horizontal de 1px entre seções — sutil, elegante, como um fio de ouro
2. Letras maiúsculas com tracking extremamente amplo nos títulos de seção
3. Imagens de produto sempre em proporção 3:4 com fundo cream, sem sombra

**Interaction Philosophy:**
Cada hover é uma revelação suave — o produto se aproxima levemente (scale 1.05), o CTA emerge com glassmorphism. Nada grita, tudo sussurra.

**Animation:**
- Entrance: fade-up 400ms cubic-bezier(0.23, 1, 0.32, 1), translateY 20px → 0
- Image zoom: 500ms ease-out no hover
- Botões: 200ms color transition
- Parallax no hero: 0.3x scroll speed
- Stagger de 60ms entre cards em grid

**Typography System:**
- Display/H1: Cormorant Garamond 700, 72-96px desktop, uppercase, tracking 0.1em
- H2/H3: Cormorant Garamond 600, 40-56px, tracking 0.05em
- Body: Inter 400, 16px, line-height 1.7
- Labels/Buttons: Inter 700, uppercase, tracking 0.15-0.2em
- Preços: Cormorant Garamond 600, tamanho maior para dar peso

</idea>
</response>

<response>
<probability>0.07</probability>
<idea>

**Design Movement:** Wabi-Sabi Luxuoso — imperfeição intencional como sofisticação, inspirado em joalherias japonesas de alto padrão.

**Core Principles:**
1. Texturas orgânicas sutis — grain noise em backgrounds cream
2. Composições assimétricas deliberadas — nada perfeitamente alinhado
3. Tipografia com variação de peso extrema — ultra-light ao lado de bold
4. Espaçamento generoso que respira

**Color Philosophy:**
O cream recebe uma textura de papel japonês. O verde floresta é usado com opacidade variável. O dourado aparece apenas como traço, nunca como preenchimento.

**Layout Paradigm:**
Masonry assimétrico para produtos. Hero com texto posicionado em 1/3 inferior esquerdo. Seções com alturas variáveis, quebrando o ritmo esperado.

**Signature Elements:**
1. Textura de grain sutil em todos os backgrounds cream
2. Bordas irregulares em alguns elementos decorativos
3. Espaços em branco intencionalmente "excessivos"

**Interaction Philosophy:**
Transições lentas e deliberadas — como abrir uma caixa de joias. Cada ação tem peso e intenção.

**Animation:**
- Entrance: fade 600ms, sem translateY
- Hover: scale 1.03 muito lento (600ms)
- Transições de página: crossfade suave

**Typography System:**
- Display: Cormorant Garamond 300 (ultra-light) em tamanhos enormes
- Contraste com Inter 700 em labels pequenos
- Mixing intencional de pesos para criar ritmo visual

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement:** Neo-Art Déco Brasileiro — geometria do Art Déco com calor tropical, como o Copacabana Palace encontra uma joalheria moderna.

**Core Principles:**
1. Geometria decorativa como elemento estrutural — não apenas ornamental
2. Contraste dramático entre áreas densas e áreas vazias
3. Dourado como elemento estrutural, não apenas decorativo
4. Ritmo visual forte — seções com "batida" visual clara

**Color Philosophy:**
O dourado (#C9A96E) ganha mais protagonismo como elemento geométrico. O verde floresta é usado em blocos sólidos dramáticos. O cream tem padrão geométrico sutil.

**Layout Paradigm:**
Grid de 12 colunas com módulos que quebram o grid intencionalmente. Elementos decorativos geométricos em SVG. Divisores com padrões Art Déco.

**Signature Elements:**
1. Motivos geométricos em SVG dourado como divisores e decorações
2. Tipografia com serifa extremamente pronunciada
3. Blocos de cor sólidos como elementos de composição

**Interaction Philosophy:**
Transições com easing personalizado que evoca movimento mecânico preciso. Cada interação tem "click" visual.

**Animation:**
- Entrance: slide-in lateral 300ms com easing agressivo
- Hover: border dourada aparece com clip-path animation
- Botões: fill animation da esquerda para direita

**Typography System:**
- Display: Cormorant Garamond 700 com serifa muito pronunciada
- Subtítulos: Inter 300 uppercase em tracking extremo (0.4em)
- Contraste máximo entre pesos

</idea>
</response>

---

## Design Escolhido: Parisian Atelier Minimalismo Quente (Resposta 1)

Esta abordagem é a mais alinhada com o PRD e com a referência Vivara. Ela cria o equilíbrio perfeito entre elegância europeia e calor brasileiro, com espaço negativo como luxo, tipografia dramática e interações suaves que revelam sem gritar.
