import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-warm-gray transition-colors hover:text-forest-800"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Início</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-cream-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-warm-gray transition-colors hover:text-forest-800"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-charcoal">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
