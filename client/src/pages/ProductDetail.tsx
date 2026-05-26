// Gold Sky — Product Detail Page
// /produto/[slug]
// Gallery left, info right, sticky add-to-cart bar, related products
import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'wouter'
import { Heart, Check, Minus, Plus, ChevronRight, ChevronDown } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getProductBySlug, getRelatedProducts, categoryLabels } from '@/data/products'
import { useStore } from '@/contexts/StoreContext'

const accordionItems = [
  { key: 'descricao', label: 'Descrição', field: 'description' as const },
  { key: 'detalhes', label: 'Detalhes', field: 'details' as const },
  { key: 'cuidados', label: 'Cuidados', field: 'care' as const },
  { key: 'beneficios', label: 'Benefícios', field: 'benefits' as const },
]

export default function ProductDetail() {
  const params = useParams<{ slug: string }>()
  const product = getProductBySlug(params?.slug || '')
  const related = product ? getRelatedProducts(product) : []
  const { addToCart, toggleWishlist, isInWishlist } = useStore()

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState<string | null>('descricao')
  const [stickyVisible, setStickyVisible] = useState(false)
  const [added, setAdded] = useState(false)

  const addBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!addBtnRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(addBtnRef.current)
    return () => observer.disconnect()
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-24 text-center">
          <h1 className="font-serif text-3xl text-[#1A1A1A] mb-4">Produto não encontrado</h1>
          <Link href="/produtos">
            <button className="btn-primary">Ver Todos os Produtos</button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const inWishlist = isInWishlist(product.id)
  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const installmentValue = product.price / product.installments

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-[11px] font-sans text-[#7A7A7A]">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Início</Link>
          <ChevronRight size={10} />
          <Link href="/produtos" className="hover:text-[#1A1A1A] transition-colors">Joias</Link>
          <ChevronRight size={10} />
          <Link href={`/categoria/${product.category}`} className="hover:text-[#1A1A1A] transition-colors">
            {categoryLabels[product.category]}
          </Link>
          <ChevronRight size={10} />
          <span className="text-[#1A1A1A] truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      <div className="gold-divider" />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* ── Gallery ── */}
          <div>
            {/* Main image */}
            <div className="product-img-wrap mb-3" style={{ aspectRatio: '3/4' }}>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-20 overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImage === i ? 'border-[#1A1A1A]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Product Info ── */}
          <div>
            {/* Category */}
            <p className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-[#7A7A7A] mb-2">
              {categoryLabels[product.category]}
            </p>

            {/* Name */}
            <h1 className="font-serif font-bold text-[#1A1A1A] uppercase tracking-[0.05em] leading-tight mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              {product.name}
            </h1>

            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              {product.isNew && (
                <span className="px-2 py-0.5 bg-[#2B4A2F] text-white text-[9px] font-sans font-bold uppercase tracking-[0.1em]">
                  Novidade
                </span>
              )}
              {product.inStock && (
                <span className="flex items-center gap-1 text-green-600 text-[11px] font-sans font-medium">
                  <Check size={12} strokeWidth={2} />
                  Em Estoque
                </span>
              )}
            </div>

            {/* Price */}
            <div className="mb-1">
              <span className="font-sans text-3xl font-bold text-[#1A1A1A]">
                {formatPrice(product.price)}
              </span>
            </div>
            <p className="text-sm font-sans text-[#7A7A7A] mb-2">
              ou {product.installments}x de {formatPrice(installmentValue)} sem juros
            </p>

            {/* Material */}
            <p className="text-sm font-sans text-[#7A7A7A] mb-6">
              {product.material}
            </p>

            {/* Quantity selector */}
            <div className="flex items-center gap-0 mb-4">
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mr-4">
                Quantidade
              </p>
              <div className="flex items-center border border-[#E5E5E5]">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#FAF5EE] transition-colors duration-200"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans font-medium text-[#1A1A1A] border-x border-[#E5E5E5]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#1A1A1A] hover:bg-[#FAF5EE] transition-colors duration-200"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              ref={addBtnRef}
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#2B4A2F] text-white text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-[#1e3521] transition-colors duration-200 mb-3"
            >
              {added ? '✓ Adicionado à Sacola' : 'Adicionar à Sacola'}
            </button>

            {/* Wishlist */}
            <button
              onClick={() => toggleWishlist(product)}
              className={`w-full py-3.5 border border-[#1A1A1A] text-[11px] font-sans font-bold uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-all duration-200 ${
                inWishlist
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <Heart
                size={14}
                strokeWidth={1.5}
                className={inWishlist ? 'fill-white stroke-white' : ''}
              />
              {inWishlist ? 'Nos Seus Favoritos' : 'Lista de Desejos'}
            </button>

            {/* SKU */}
            <p className="text-[10px] font-sans text-[#7A7A7A] mt-4">
              SKU: {product.sku}
            </p>

            {/* Accordion */}
            <div className="mt-8 border-t border-[#E5E5E5]">
              {accordionItems.map(item => (
                <div key={item.key} className="border-b border-[#E5E5E5]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
                      {item.label}
                    </span>
                    <span className="text-[#7A7A7A] text-lg leading-none">
                      {openAccordion === item.key ? '−' : '+'}
                    </span>
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4">
                      <p className="text-sm font-sans text-[#7A7A7A] leading-relaxed whitespace-pre-line">
                        {product[item.field]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <div className="gold-divider mb-12" />
            <h2 className="font-serif font-bold text-[#1A1A1A] text-2xl lg:text-4xl mb-8">
              Você também pode gostar
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Add-to-Cart Bar — frosted glass */}
      {stickyVisible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E5E5E5]"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255,255,255,0.85)',
          }}
        >
          {/* Mobile */}
          <div className="lg:hidden px-4 py-3">
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.1em] text-[#1A1A1A] truncate mb-2">
              {product.name}
            </p>
            <div className="flex items-center justify-between gap-3">
              <span className="font-sans font-bold text-[#1A1A1A]">{formatPrice(product.price)}</span>
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 bg-[#2B4A2F] text-white text-[10px] font-sans font-bold uppercase tracking-[0.12em] hover:bg-[#1e3521] transition-colors"
              >
                {added ? '✓ Adicionado' : 'Adicionar à Sacola'}
              </button>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between max-w-[1280px] mx-auto px-8 py-3 gap-8">
            <p className="font-sans font-medium text-[#1A1A1A] text-sm truncate flex-1">
              {product.name}
            </p>
            <span className="font-sans font-bold text-[#1A1A1A] text-lg shrink-0">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAddToCart}
              className="shrink-0 px-8 py-3 bg-[#1A1A1A] text-white text-[11px] font-sans font-bold uppercase tracking-[0.12em] hover:bg-[#333] transition-colors"
            >
              {added ? '✓ Adicionado' : 'Adicionar à Sacola'}
            </button>
          </div>
        </div>
      )}

      <WhatsAppButton stickyBarVisible={stickyVisible} />
      <Footer />
    </div>
  )
}
