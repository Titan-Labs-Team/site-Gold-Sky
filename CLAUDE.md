# CLAUDE.md — Gold Sky Site

Documento de referência para o assistente em todas as sessões deste projeto.

---

## Visão Geral do Projeto

**Gold Sky** é uma boutique premium brasileira de joias e óculos.
- Design: **Parisian Atelier Minimalismo Quente** (inspirado em Cartier / Vivara)
- Repositório: `https://github.com/Titan-Labs-Team/site-Gold-Sky.git`
- Branch principal: `main`
- Cada feature deve ir em **branch separada** (ex: `feature/nome-da-feature`)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 19 |
| Roteamento | Wouter |
| Estilo | Tailwind CSS 4 + shadcn/ui |
| Animações | GSAP 3 + ScrollTrigger |
| Package manager | pnpm |
| Build | Vite 7 |
| Linguagem | TypeScript |

---

## Comandos

```bash
pnpm install       # instalar dependências
pnpm dev           # servidor de dev (http://localhost:3001)
pnpm build         # build de produção
pnpm check         # verificar tipos TypeScript
```

---

## Design System

### Paleta
| Token | Hex | Uso |
|---|---|---|
| Forest Green | `#2B4A2F` | CTAs principais, seção About |
| Cream | `#FAF5EE` | Backgrounds alternativos |
| Charcoal | `#1A1A1A` | Textos, elementos escuros |
| Gold | `#C9A96E` | Acentos, divisores, badges |
| White | `#FFFFFF` | Background principal |
| Warm Gray | `#7A7A7A` | Textos secundários |

### Tipografia
- **Serif** (títulos): `Cormorant Garamond` — carregado via Google Fonts no `index.html`
- **Sans** (corpo/labels): `Inter`
- Labels/botões: uppercase + `tracking-[0.12em~0.2em]`

### Componentes de estilo globais (`index.css`)
- `.gold-divider` — linha dourada 1px entre seções
- `.btn-primary` — botão verde floresta
- `.btn-outline` — botão contorno preto
- `.product-img-wrap` — zoom suave no hover
- `.glass-cta` — glassmorphism em cards de produto

---

## Arquitetura de Arquivos

```
client/src/
  pages/
    Home.tsx            ← Página principal com hero, categorias, novidades, destaques, about
    Products.tsx        ← Listagem/filtro de produtos
    ProductDetail.tsx   ← Detalhe do produto
    About.tsx           ← Sobre a marca
    Contact.tsx         ← Contato + mapa
    Cart.tsx            ← Carrinho
    Wishlist.tsx        ← Favoritos
    NotFound.tsx        ← 404

  components/
    Header.tsx              ← Navbar fixa com drawer mobile
    Footer.tsx              ← Rodapé
    PageTransition.tsx      ← Transição entre rotas (fade + slide)
    PageLoadOverlay.tsx     ← Overlay preto na entrada inicial da Home
    AnimatedSectionTitle.tsx← Títulos com animação char-by-char
    ProductCard.tsx         ← Card de produto reutilizável
    WhatsAppButton.tsx      ← Botão flutuante WhatsApp
    CustomCursor.tsx        ← REMOVIDO (não usar)

  hooks/
    useGSAPAnimation.ts     ← shouldAnimate(), helpers GSAP
    useFadeUp.ts
    useMobile.tsx

  contexts/
    StoreContext.tsx         ← Carrinho e wishlist (estado global)
    ThemeContext.tsx

  data/
    products.ts              ← Mock de produtos + categoryImages (Unsplash)
```

---

## Regras de Animação GSAP

1. **Sempre usar `gsap.context(ref)`** por seção — nunca `ScrollTrigger.getAll().kill()`
2. **`once: true`** em todas as animações de entrada (scroll triggers)
3. **`force3D: true`** e **`clearProps: 'transform,opacity'`** em animações de transform
4. **`scrub: 1.5`** no parallax do hero (suavidade)
5. **Nunca usar `clipPath`** para animações — causa repaints; usar `opacity + translateX/Y`
6. **`shouldAnimate()`** sempre retorna `true` neste projeto (sem respeitar prefers-reduced-motion)
7. **`useLayoutEffect`** para inicializar opacity antes do primeiro paint (evita flash)
8. O GSAP é **dono exclusivo** do atributo `opacity` em elementos animados — não usar `style={{ opacity }}` no JSX junto

---

## Regras de Roteamento

- `PageTransition` envolve o `<Switch>` inteiro em `App.tsx`
- A transição segura o conteúdo antigo (`displayChildren`) até a animação de saída terminar
- `window.scrollTo(0, 0)` é chamado dentro do `onComplete` da saída
- Nunca navegar fora do wouter `<Link>` — evita bypass da transição

---

## Git Workflow

```
main                          ← branch de produção, nunca commitar direto
feature/nome-da-feature       ← uma branch por feature
```

Ao finalizar uma feature:
1. `git add` apenas arquivos relevantes (nunca `.env`, `node_modules`)
2. `git commit -m "feat: descrição concisa"`
3. `git push -u origin feature/nome-da-feature`
4. Abrir PR para `main` no GitHub

---

## Imagens

- **Produtos**: Unsplash (já configurado em `products.ts`)
- **Categorias**: Unsplash via `categoryImages` em `products.ts`
- **Hero**: URL original Manus CDN (imagem da noiva com joias)
- **Loja (About)**: URL original Manus CDN
- **Nunca** colocar imagens em `client/public/` (timeout de deploy)
