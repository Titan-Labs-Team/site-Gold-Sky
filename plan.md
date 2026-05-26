# plan.md — Gold Sky Site

Rastreamento de features e tarefas do projeto. Atualizar a cada sessão.

---

## ✅ Feature 1 — Animações GSAP + Transições de Página
**Branch:** `feature/animations-and-transitions`
**Status:** Concluída e commitada

### O que foi feito

#### Correções de bug
- [x] Corrigir URLs 404 do Manus CDN nas imagens de categoria → Unsplash
- [x] Restaurar imagem hero original (noiva com joias) — estava funcionando no CDN
- [x] Remover `CustomCursor` de `App.tsx` e `Home.tsx` — cursor volta ao padrão do sistema
- [x] Corrigir `removeChild` error do React causado por `overlayRef.current?.remove()` no PageLoadOverlay
- [x] Remover `scroll-behavior: smooth` do CSS global — conflitava com GSAP ScrollTrigger

#### Animações GSAP
- [x] `shouldAnimate()` sempre retorna `true` (removida restrição `prefers-reduced-motion`)
- [x] `PageLoadOverlay`: overlay preto com entrada cinemática (logo, nav, hero stagger)
  - `gsap.set()` para estados iniciais antes da timeline
  - Sem `overlayRef.current.remove()` — React gerencia o unmount
- [x] Hero parallax: `scrub: 1.5` (suave), `force3D: true`, `invalidateOnRefresh: true`
- [x] Animações de entrada de seção: `once: true`, `clearProps`, `force3D`
- [x] `AnimatedSectionTitle`: char-by-char com `gsap.context()` e `once: true`
- [x] About section: substituído `clipPath` por `opacity + translateX` (GPU-compositable)
- [x] Cada `useEffect` usa `gsap.context(ref)` — nunca `ScrollTrigger.getAll().kill()`
- [x] `backface-visibility: hidden` nos elementos animados (CSS global)
- [x] Parallax image: `transform: translateZ(0) scale(1.08)` para GPU layer

#### Transições de página
- [x] `PageTransition` com `displayChildren`: conteúdo novo só aparece após exit animation
- [x] `useLayoutEffect` define `opacity: 0` antes do primeiro paint (sem flash)
- [x] Sem `style={{ opacity }}` no JSX — GSAP é dono exclusivo do atributo
- [x] `window.scrollTo(0, 0)` no `onComplete` da saída (scroll sempre vai ao topo)
- [x] `gsap.killTweensOf(el)` protege contra navegação rápida em sequência
- [x] Funciona para **todos** os links do site (navbar, cards, botões)

---

## 🔲 Features Pendentes

> Adicionar aqui as próximas features solicitadas.

---

## 📋 Backlog / Ideias (não solicitadas ainda)

- [ ] Página de conta/login
- [ ] Sistema de busca funcional
- [ ] Integração com WhatsApp para pedidos
- [ ] Mapa real na página de contato
- [ ] Filtros avançados na página de produtos
- [ ] Galeria de imagens no ProductDetail (lightbox)
- [ ] Animações nas demais páginas (Products, About, Contact, ProductDetail)
- [ ] Skeleton loading nos cards de produto
- [ ] Otimização de imagens (WebP, lazy loading nativo)
- [ ] SEO meta tags por página
