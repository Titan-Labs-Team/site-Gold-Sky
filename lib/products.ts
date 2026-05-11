export interface Product {
  id: string
  name: string
  slug: string
  category: 'aneis' | 'brincos' | 'colares' | 'pulseiras' | 'aliancas' | 'oculos'
  price: number // in BRL cents, e.g., 189900 = R$ 1.899,00
  installments: number
  material: string
  sku: string
  images: string[]
  description: string
  isNew: boolean
  isFeatured: boolean
  inStock: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Anéis',
    slug: 'aneis',
    description: 'Anéis elegantes para todas as ocasiões',
    image: '/products/anel-solitario-zirconia.jpg',
  },
  {
    id: '2',
    name: 'Brincos',
    slug: 'brincos',
    description: 'Brincos sofisticados que completam seu visual',
    image: '/products/brincos-argola-media.jpg',
  },
  {
    id: '3',
    name: 'Colares',
    slug: 'colares',
    description: 'Colares delicados e marcantes',
    image: '/products/colar-pingente-coracao.jpg',
  },
  {
    id: '4',
    name: 'Pulseiras',
    slug: 'pulseiras',
    description: 'Pulseiras que expressam sua personalidade',
    image: '/products/pulseira-riviera.jpg',
  },
  {
    id: '5',
    name: 'Alianças',
    slug: 'aliancas',
    description: 'Alianças para selar momentos especiais',
    image: '/products/alianca-classica-ouro.jpg',
  },
  {
    id: '6',
    name: 'Óculos',
    slug: 'oculos',
    description: 'Óculos de sol e grau com estilo',
    image: '/products/oculos-aviador.jpg',
  },
]

export const products: Product[] = [
  // Anéis
  {
    id: '1',
    name: 'Anel Solitário Zircônia Gold Sky',
    slug: 'anel-solitario-zirconia-gold-sky',
    category: 'aneis',
    price: 189900,
    installments: 10,
    material: 'Prata 925 com banho de ouro 18k',
    sku: 'GS-AN-001',
    images: [
      '/products/anel-solitario-zirconia.jpg',
    ],
    description:
      'Anel solitário com zircônia cravejada, perfeito para ocasiões especiais. Design atemporal que combina elegância e sofisticação.',
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Anel Dourado Minimalista',
    slug: 'anel-dourado-minimalista',
    category: 'aneis',
    price: 129900,
    installments: 10,
    material: 'Ouro 18k',
    sku: 'GS-AN-002',
    images: [
      '/products/anel-dourado-minimalista.jpg',
    ],
    description:
      'Anel minimalista em ouro 18k, ideal para uso diário. Acabamento polido de alta qualidade.',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  // Brincos
  {
    id: '3',
    name: 'Brincos Argola Média Gold Sky',
    slug: 'brincos-argola-media-gold-sky',
    category: 'brincos',
    price: 159900,
    installments: 10,
    material: 'Prata 925 com banho de ouro 18k',
    sku: 'GS-BR-001',
    images: [
      '/products/brincos-argola-media.jpg',
    ],
    description:
      'Brincos de argola média, versáteis e elegantes. Perfeitos para o dia a dia ou ocasiões especiais.',
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '4',
    name: 'Brincos Pérola Clássicos',
    slug: 'brincos-perola-classicos',
    category: 'brincos',
    price: 249900,
    installments: 10,
    material: 'Ouro 18k com pérolas naturais',
    sku: 'GS-BR-002',
    images: [
      '/products/brincos-perola-classicos.jpg',
    ],
    description:
      'Brincos clássicos com pérolas naturais de água doce. Elegância atemporal para mulheres sofisticadas.',
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  // Colares
  {
    id: '5',
    name: 'Colar Pingente Coração',
    slug: 'colar-pingente-coracao',
    category: 'colares',
    price: 179900,
    installments: 10,
    material: 'Prata 925 com banho de ródio',
    sku: 'GS-CO-001',
    images: [
      '/products/colar-pingente-coracao.jpg',
    ],
    description:
      'Colar delicado com pingente de coração cravejado em zircônias. Um presente especial para quem você ama.',
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '6',
    name: 'Colar Corrente Veneziana',
    slug: 'colar-corrente-veneziana',
    category: 'colares',
    price: 89900,
    installments: 10,
    material: 'Prata 925 com banho de ouro 18k',
    sku: 'GS-CO-002',
    images: [
      '/products/colar-corrente-veneziana.jpg',
    ],
    description:
      'Corrente veneziana clássica, perfeita para usar sozinha ou com seus pingentes favoritos.',
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  // Pulseiras
  {
    id: '7',
    name: 'Pulseira Riviera Gold Sky',
    slug: 'pulseira-riviera-gold-sky',
    category: 'pulseiras',
    price: 299900,
    installments: 10,
    material: 'Prata 925 com banho de ouro 18k e zircônias',
    sku: 'GS-PU-001',
    images: [
      '/products/pulseira-riviera.jpg',
    ],
    description:
      'Pulseira riviera com zircônias brilhantes, ideal para ocasiões especiais. Brilho e sofisticação.',
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '8',
    name: 'Pulseira Elos Dourados',
    slug: 'pulseira-elos-dourados',
    category: 'pulseiras',
    price: 199900,
    installments: 10,
    material: 'Ouro 18k',
    sku: 'GS-PU-002',
    images: [
      '/products/pulseira-elos-dourados.jpg',
    ],
    description:
      'Pulseira de elos em ouro 18k, design contemporâneo e atemporal. Perfeita para compor looks elegantes.',
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  // Alianças
  {
    id: '9',
    name: 'Aliança Clássica Ouro Amarelo',
    slug: 'alianca-classica-ouro-amarelo',
    category: 'aliancas',
    price: 399900,
    installments: 10,
    material: 'Ouro amarelo 18k',
    sku: 'GS-AL-001',
    images: [
      '/products/alianca-classica-ouro.jpg',
    ],
    description:
      'Aliança clássica em ouro amarelo 18k, acabamento polido. Símbolo eterno de amor e compromisso.',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '10',
    name: 'Aliança Anatômica Ouro Rosé',
    slug: 'alianca-anatomica-ouro-rose',
    category: 'aliancas',
    price: 449900,
    installments: 10,
    material: 'Ouro rosé 18k',
    sku: 'GS-AL-002',
    images: [
      '/products/alianca-anatomica-rose.jpg',
    ],
    description:
      'Aliança anatômica em ouro rosé 18k, conforto e elegância únicos. Design exclusivo Gold Sky.',
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  // Óculos
  {
    id: '11',
    name: 'Óculos de Sol Aviador Gold Sky',
    slug: 'oculos-sol-aviador-gold-sky',
    category: 'oculos',
    price: 89900,
    installments: 10,
    material: 'Armação em metal dourado com lentes polarizadas',
    sku: 'GS-OC-001',
    images: [
      '/products/oculos-aviador.jpg',
    ],
    description:
      'Óculos de sol modelo aviador com armação dourada e lentes polarizadas. Proteção UV400 e estilo clássico.',
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '12',
    name: 'Óculos Gatinho Acetato',
    slug: 'oculos-gatinho-acetato',
    category: 'oculos',
    price: 129900,
    installments: 10,
    material: 'Acetato italiano de alta qualidade',
    sku: 'GS-OC-002',
    images: [
      '/products/oculos-gatinho.jpg',
    ],
    description:
      'Óculos modelo gatinho em acetato italiano, design retrô e sofisticado. Ideal para armação de grau ou solar.',
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured)
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew)
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100)
}

export function formatInstallments(price: number, installments: number): string {
  const installmentValue = price / installments
  return `ou ${installments}x de ${formatPrice(installmentValue)} sem juros`
}
