// Gold Sky — Products Listing Page
// /produtos e /categoria/[slug]
import { useState, useMemo } from 'react'
import { Link, useParams } from 'wouter'
import { ChevronDown, ChevronRight, SlidersHorizontal, X } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import WhatsAppButton from '@/components/WhatsAppButton'
import { products, categoryLabels } from '@/data/products'
import { useFadeUpGroup } from '@/hooks/useFadeUp'

const CATEGORY_HERO_IMAGES: Record<string, string> = {
  aneis: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/category-rings-oXogvm6CQCZi9S8TuSgAc3.webp',
  brincos: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/category-earrings-Ymz3tXYVw8pdyqFwdNr3de.webp',
  colares: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/category-necklaces-5wWWhnR33r5HQvWfXSNCLA.webp',
  pulseiras: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/category-bracelets-BSgQrACHai6hb9iucucnbC.webp',
  aliancas: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/category-aliancas-Z8FvRv5F8RxWYxiPN6hYgF.webp',
  oculos: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/category-eyewear-KpKseR9SGQCeypTHXPJqPs.webp',
}

const sortOptions = [
  { value: 'relevance', label: 'Relevância' },
  { value: 'price-asc', label: 'Menor Preço' },
  { value: 'price-desc', label: 'Maior Preço' },
  { value: 'newest', label: 'Mais Recentes' },
]

const priceRanges = [
  { label: 'Até R$ 1.000', min: 0, max: 1000 },
  { label: 'R$ 1.000 – R$ 2.000', min: 1000, max: 2000 },
  { label: 'R$ 2.000 – R$ 4.000', min: 2000, max: 4000 },
  { label: 'Acima de R$ 4.000', min: 4000, max: Infinity },
]

interface ProductsProps {
  categorySlug?: string
}

export default function Products({ categorySlug }: ProductsProps) {
  const params = useParams<{ slug: string }>()
  const slug = categorySlug || params?.slug
  const [sort, setSort] = useState('relevance')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(slug ? [slug] : [])
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [page, setPage] = useState(1)
  const PER_PAGE = 12

  const gridRef = useFadeUpGroup()

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategories.length > 0) {
      list = list.filter(p => selectedCategories.includes(p.category))
    }
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange]
      list = list.filter(p => p.price >= range.min && p.price <= range.max)
    }
    switch (sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'newest': list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break
    }
    return list
  }, [selectedCategories, selectedPriceRange, sort])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
    setPage(1)
  }

  const categoryTitle = slug ? categoryLabels[slug] : 'Todas as Joias'
  const heroImage = slug ? CATEGORY_HERO_IMAGES[slug] : null

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Category Hero (if category page) */}
      {heroImage && (
        <div className="relative h-48 lg:h-64 overflow-hidden">
          <img src={heroImage} alt={categoryTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-serif font-bold text-white text-3xl lg:text-5xl uppercase tracking-[0.1em]">
              {categoryTitle}
            </h1>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-[11px] font-sans text-[#7A7A7A]">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Início</Link>
          <ChevronRight size={10} />
          {slug ? (
            <>
              <Link href="/produtos" className="hover:text-[#1A1A1A] transition-colors">Joias</Link>
              <ChevronRight size={10} />
              <span className="text-[#1A1A1A]">{categoryTitle}</span>
            </>
          ) : (
            <span className="text-[#1A1A1A]">Todas as Joias</span>
          )}
        </div>
      </div>

      {/* Gold divider */}
      <div className="gold-divider" />

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Page title (non-category) */}
        {!heroImage && (
          <h1 className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-4xl mb-8">
            {categoryTitle}
          </h1>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <p className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-5">
                Filtros
              </p>

              {/* Categoria */}
              <div className="mb-6">
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-3">
                  Categoria
                </p>
                <div className="space-y-2">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(key)}
                        onChange={() => toggleCategory(key)}
                        className="w-3.5 h-3.5 accent-[#2B4A2F]"
                      />
                      <span className="text-sm font-sans text-[#1A1A1A] group-hover:text-[#7A7A7A] transition-colors">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Faixa de Preço */}
              <div className="mb-6">
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-3">
                  Faixa de Preço
                </p>
                <div className="space-y-2">
                  {priceRanges.map((range, i) => (
                    <label key={i} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === i}
                        onChange={() => { setSelectedPriceRange(i); setPage(1) }}
                        className="w-3.5 h-3.5 accent-[#2B4A2F]"
                      />
                      <span className="text-sm font-sans text-[#1A1A1A] group-hover:text-[#7A7A7A] transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                  {selectedPriceRange !== null && (
                    <button
                      onClick={() => setSelectedPriceRange(null)}
                      className="text-[10px] font-sans text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors flex items-center gap-1 mt-1"
                    >
                      <X size={10} /> Limpar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {/* Sort + count bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-sans text-[#7A7A7A]">
                <span className="font-semibold text-[#1A1A1A]">{filtered.length}</span> produtos
              </p>
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 text-[11px] font-sans font-bold uppercase tracking-[0.12em] text-[#1A1A1A] border border-[#1A1A1A] px-3 py-2"
                >
                  <SlidersHorizontal size={12} strokeWidth={1.5} />
                  Filtros
                </button>
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={e => { setSort(e.target.value); setPage(1) }}
                    className="appearance-none text-[11px] font-sans font-medium text-[#1A1A1A] border border-[#E5E5E5] px-3 py-2 pr-7 bg-white outline-none cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#7A7A7A] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {paginated.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={`fade-up stagger-${(i % 4) + 1}`}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className={`w-9 h-9 text-sm font-sans font-medium transition-colors duration-200 ${
                      p === page
                        ? 'bg-[#1A1A1A] text-white'
                        : 'border border-[#E5E5E5] text-[#1A1A1A] hover:border-[#1A1A1A]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[4px] p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">Filtros</p>
              <button onClick={() => setMobileFilterOpen(false)}><X size={18} /></button>
            </div>
            <div className="mb-6">
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-3">Categoria</p>
              <div className="space-y-2">
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <label key={key} className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" checked={selectedCategories.includes(key)} onChange={() => toggleCategory(key)} className="w-3.5 h-3.5 accent-[#2B4A2F]" />
                    <span className="text-sm font-sans text-[#1A1A1A]">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-3">Faixa de Preço</p>
              <div className="space-y-2">
                {priceRanges.map((range, i) => (
                  <label key={i} className="flex items-center gap-2.5 cursor-pointer">
                    <input type="radio" name="price-mobile" checked={selectedPriceRange === i} onChange={() => setSelectedPriceRange(i)} className="w-3.5 h-3.5 accent-[#2B4A2F]" />
                    <span className="text-sm font-sans text-[#1A1A1A]">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button onClick={() => setMobileFilterOpen(false)} className="w-full py-3.5 bg-[#1A1A1A] text-white text-[11px] font-sans font-bold uppercase tracking-[0.12em]">
              Ver {filtered.length} Produtos
            </button>
          </div>
        </>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
