'use client'

import { useState, useMemo } from 'react'
import { products, type Product } from '@/lib/products'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ProductCard } from '@/components/product-card'
import { ProductFilters, ProductFiltersSidebar } from '@/components/product-filters'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [selectedMaterial, setSelectedMaterial] = useState<string | undefined>()
  const [priceRange, setPriceRange] = useState<string | undefined>()
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Filter by material (simplified matching)
    if (selectedMaterial) {
      result = result.filter((p) =>
        p.material.toLowerCase().includes(selectedMaterial.replace('-', ' '))
      )
    }

    // Filter by price range
    if (priceRange) {
      const [min, max] = priceRange.split('-').map((v) =>
        v === '+' ? Infinity : parseInt(v) * 100
      )
      result = result.filter((p) => {
        if (priceRange.endsWith('+')) {
          return p.price >= parseInt(priceRange.replace('+', '')) * 100
        }
        return p.price >= (min || 0) && p.price <= (max || Infinity)
      })
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew))
        break
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
      default:
        result = result.filter((p) => p.isFeatured).concat(result.filter((p) => !p.isFeatured))
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-cream-50">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <Breadcrumbs
            items={[
              { label: 'Produtos' },
            ]}
          />

          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              Todos os Produtos
            </h1>
            <p className="mt-2 text-warm-gray">
              {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <ProductFiltersSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedMaterial={selectedMaterial}
              onMaterialChange={setSelectedMaterial}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />

            {/* Products Grid */}
            <div className="flex-1">
              <ProductFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedMaterial={selectedMaterial}
                onMaterialChange={setSelectedMaterial}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <p className="text-lg text-warm-gray">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
