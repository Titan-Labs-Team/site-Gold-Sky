'use client'

import { useState } from 'react'
import { Filter, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface ProductFiltersProps {
  selectedCategory?: string
  onCategoryChange: (category: string | undefined) => void
  selectedMaterial?: string
  onMaterialChange: (material: string | undefined) => void
  priceRange?: string
  onPriceRangeChange: (range: string | undefined) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

const categories = [
  { value: 'aneis', label: 'Anéis' },
  { value: 'brincos', label: 'Brincos' },
  { value: 'colares', label: 'Colares' },
  { value: 'pulseiras', label: 'Pulseiras' },
  { value: 'aliancas', label: 'Alianças' },
  { value: 'oculos', label: 'Óculos' },
]

const materials = [
  { value: 'ouro-18k', label: 'Ouro 18k' },
  { value: 'prata-925', label: 'Prata 925' },
  { value: 'ouro-rose', label: 'Ouro Rosé' },
  { value: 'perola', label: 'Pérola' },
]

const priceRanges = [
  { value: '0-500', label: 'Até R$ 500' },
  { value: '500-1000', label: 'R$ 500 - R$ 1.000' },
  { value: '1000-2000', label: 'R$ 1.000 - R$ 2.000' },
  { value: '2000+', label: 'Acima de R$ 2.000' },
]

const sortOptions = [
  { value: 'featured', label: 'Destaques' },
  { value: 'newest', label: 'Mais Recentes' },
  { value: 'price-asc', label: 'Menor Preço' },
  { value: 'price-desc', label: 'Maior Preço' },
  { value: 'name-asc', label: 'A - Z' },
]

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  selectedMaterial,
  onMaterialChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hasActiveFilters = selectedCategory || selectedMaterial || priceRange

  const clearAllFilters = () => {
    onCategoryChange(undefined)
    onMaterialChange(undefined)
    onPriceRangeChange(undefined)
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-3 font-medium text-charcoal">Categorias</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.value} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${category.value}`}
                checked={selectedCategory === category.value}
                onCheckedChange={(checked) =>
                  onCategoryChange(checked ? category.value : undefined)
                }
              />
              <Label
                htmlFor={`cat-${category.value}`}
                className="text-sm text-warm-gray cursor-pointer"
              >
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div>
        <h3 className="mb-3 font-medium text-charcoal">Material</h3>
        <div className="space-y-2">
          {materials.map((material) => (
            <div key={material.value} className="flex items-center gap-2">
              <Checkbox
                id={`mat-${material.value}`}
                checked={selectedMaterial === material.value}
                onCheckedChange={(checked) =>
                  onMaterialChange(checked ? material.value : undefined)
                }
              />
              <Label
                htmlFor={`mat-${material.value}`}
                className="text-sm text-warm-gray cursor-pointer"
              >
                {material.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-3 font-medium text-charcoal">Faixa de Preço</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center gap-2">
              <Checkbox
                id={`price-${range.value}`}
                checked={priceRange === range.value}
                onCheckedChange={(checked) =>
                  onPriceRangeChange(checked ? range.value : undefined)
                }
              />
              <Label
                htmlFor={`price-${range.value}`}
                className="text-sm text-warm-gray cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          className="w-full"
          onClick={clearAllFilters}
        >
          <X className="mr-2 h-4 w-4" />
          Limpar Filtros
        </Button>
      )}
    </div>
  )

  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        {/* Mobile Filter Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="lg:hidden"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filtros
              {hasActiveFilters && (
                <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-xs">
                  !
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-cream-50">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Filters Sidebar Content - rendered in parent */}
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-warm-gray">Ordenar por:</span>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export function ProductFiltersSidebar({
  selectedCategory,
  onCategoryChange,
  selectedMaterial,
  onMaterialChange,
  priceRange,
  onPriceRangeChange,
}: Omit<ProductFiltersProps, 'sortBy' | 'onSortChange'>) {
  const hasActiveFilters = selectedCategory || selectedMaterial || priceRange

  const clearAllFilters = () => {
    onCategoryChange(undefined)
    onMaterialChange(undefined)
    onPriceRangeChange(undefined)
  }

  return (
    <aside className="hidden lg:block lg:w-64">
      <div className="sticky top-32 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-6 font-serif text-lg font-semibold text-forest-900">
          Filtros
        </h2>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="mb-3 font-medium text-charcoal">Categorias</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`sidebar-cat-${category.value}`}
                    checked={selectedCategory === category.value}
                    onCheckedChange={(checked) =>
                      onCategoryChange(checked ? category.value : undefined)
                    }
                  />
                  <Label
                    htmlFor={`sidebar-cat-${category.value}`}
                    className="text-sm text-warm-gray cursor-pointer"
                  >
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h3 className="mb-3 font-medium text-charcoal">Material</h3>
            <div className="space-y-2">
              {materials.map((material) => (
                <div key={material.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`sidebar-mat-${material.value}`}
                    checked={selectedMaterial === material.value}
                    onCheckedChange={(checked) =>
                      onMaterialChange(checked ? material.value : undefined)
                    }
                  />
                  <Label
                    htmlFor={`sidebar-mat-${material.value}`}
                    className="text-sm text-warm-gray cursor-pointer"
                  >
                    {material.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="mb-3 font-medium text-charcoal">Faixa de Preço</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`sidebar-price-${range.value}`}
                    checked={priceRange === range.value}
                    onCheckedChange={(checked) =>
                      onPriceRangeChange(checked ? range.value : undefined)
                    }
                  />
                  <Label
                    htmlFor={`sidebar-price-${range.value}`}
                    className="text-sm text-warm-gray cursor-pointer"
                  >
                    {range.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <Button
              variant="outline"
              className="w-full"
              onClick={clearAllFilters}
            >
              <X className="mr-2 h-4 w-4" />
              Limpar Filtros
            </Button>
          )}
        </div>
      </div>
    </aside>
  )
}
