// Gold Sky — Mock Product Data
// 16+ produtos distribuídos em 6 categorias

export interface Product {
  id: string
  name: string
  slug: string
  category: 'aneis' | 'brincos' | 'colares' | 'pulseiras' | 'aliancas' | 'oculos'
  price: number
  installments: number
  material: string
  sku: string
  images: string[]
  description: string
  details: string
  care: string
  benefits: string
  isNew: boolean
  isFeatured: boolean
  inStock: boolean
}

// Placeholder product images using cream background
const CREAM_PRODUCT = () =>
  `https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop&auto=format&q=80`

export const products: Product[] = [
  // ANÉIS
  {
    id: '1',
    name: 'Anel Solitário Zircônia Gold Sky',
    slug: 'anel-solitario-zirconia-gold-sky',
    category: 'aneis',
    price: 1899.00,
    installments: 10,
    material: 'Prata 925 com banho de ouro 18k',
    sku: 'GS-AN-001',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'O Anel Solitário Zircônia Gold Sky é uma peça atemporal que celebra a simplicidade com sofisticação. A pedra central de zircônia cúbica AAA captura a luz de forma extraordinária, criando um brilho comparável ao diamante.',
    details: 'Material: Prata 925 com banho de ouro 18k\nPedra: Zircônia cúbica AAA\nTamanhos disponíveis: 12 ao 22\nPeso: 3,2g\nGarantia: 1 ano',
    care: 'Evite contato com perfumes, cremes e produtos químicos. Guarde separadamente em estojo macio. Limpe com pano de microfibra seco.',
    benefits: 'Antialérgico | Resistente à oxidação | Certificado de autenticidade incluso | Embalagem premium para presente',
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '2',
    name: 'Anel Aparador Infinity Diamante',
    slug: 'anel-aparador-infinity-diamante',
    category: 'aneis',
    price: 2450.00,
    installments: 10,
    material: 'Ouro 18k com diamantes',
    sku: 'GS-AN-002',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Design infinito que simboliza amor eterno. Cravejado com diamantes naturais certificados, este anel aparador é perfeito para usar sozinho ou em conjunto com sua aliança.',
    details: 'Material: Ouro 18k\nPedras: Diamantes naturais 0,15ct total\nTamanhos: 12 ao 22\nPeso: 2,8g\nCertificado GIA incluso',
    care: 'Leve para limpeza profissional a cada 6 meses. Evite impactos e atividades físicas intensas.',
    benefits: 'Diamantes certificados | Ouro 18k garantido | Certificado de autenticidade | Embalagem exclusiva',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '3',
    name: 'Anel Marquise Esmeralda',
    slug: 'anel-marquise-esmeralda',
    category: 'aneis',
    price: 3200.00,
    installments: 10,
    material: 'Ouro 18k com esmeralda natural',
    sku: 'GS-AN-003',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Esmeralda colombiana de alta qualidade em cravação marquise. Uma peça de colecionador que combina a riqueza da pedra com o refinamento do design.',
    details: 'Material: Ouro 18k\nPedra: Esmeralda colombiana natural 1,2ct\nTamanhos: 12 ao 22\nPeso: 4,1g',
    care: 'Esmeraldas são sensíveis a choques térmicos. Evite exposição a temperaturas extremas e ultrassom.',
    benefits: 'Pedra natural certificada | Ouro 18k | Embalagem premium | Garantia de 1 ano',
    isNew: true,
    isFeatured: false,
    inStock: true,
  },

  // BRINCOS
  {
    id: '4',
    name: 'Brinco Argola Slim Gold',
    slug: 'brinco-argola-slim-gold',
    category: 'brincos',
    price: 890.00,
    installments: 6,
    material: 'Prata 925 com banho de ouro 18k',
    sku: 'GS-BR-001',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Argola slim de design minimalista e elegante. Perfeita para o dia a dia ou para ocasiões especiais, combina com qualquer look.',
    details: 'Material: Prata 925 com banho de ouro 18k\nDiâmetro: 30mm\nEspessura: 2mm\nFecho: Pressão\nPeso: 2,1g o par',
    care: 'Evite contato com água e produtos de beleza. Guarde em estojo separado.',
    benefits: 'Antialérgico | Banho de ouro 18k | Embalagem presente',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '5',
    name: 'Brinco Pérola Barroca Dourada',
    slug: 'brinco-perola-barroca-dourada',
    category: 'brincos',
    price: 1650.00,
    installments: 10,
    material: 'Pérola natural com montagem em ouro 18k',
    sku: 'GS-BR-002',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Pérolas barrocas naturais com lustre excepcional. Cada par é único, com a forma orgânica característica das pérolas barrocas que as torna tão especiais.',
    details: 'Material: Pérola natural barroca + ouro 18k\nTamanho das pérolas: 10-12mm\nFecho: Tarracha\nPeso: 4,5g o par',
    care: 'Pérolas são orgânicas e sensíveis. Evite contato com ácidos, perfumes e cosméticos. Limpe com pano úmido.',
    benefits: 'Pérolas naturais certificadas | Ouro 18k | Embalagem premium',
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '6',
    name: 'Brinco Ear Cuff Diamante',
    slug: 'brinco-ear-cuff-diamante',
    category: 'brincos',
    price: 2100.00,
    installments: 10,
    material: 'Ouro 18k com diamantes',
    sku: 'GS-BR-003',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Ear cuff moderno cravejado com diamantes. Não precisa de furo na orelha — simplesmente encaixa com elegância e segurança.',
    details: 'Material: Ouro 18k\nPedras: Diamantes 0,08ct total\nAjuste: Universal\nPeso: 1,8g',
    care: 'Evite dobrar ou torcer. Guarde em estojo rígido.',
    benefits: 'Sem necessidade de furo | Diamantes certificados | Ajuste universal',
    isNew: true,
    isFeatured: false,
    inStock: true,
  },

  // COLARES
  {
    id: '7',
    name: 'Colar Veneziana Ouro 18k',
    slug: 'colar-veneziana-ouro-18k',
    category: 'colares',
    price: 2800.00,
    installments: 10,
    material: 'Ouro 18k maciço',
    sku: 'GS-CO-001',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Corrente veneziana em ouro 18k maciço. Design clássico e atemporal que pode ser usado sozinho ou com pingentes. Uma peça de investimento que dura gerações.',
    details: 'Material: Ouro 18k maciço\nComprimento: 45cm + 5cm extensão\nEspessura: 1,5mm\nFecho: Lagosta\nPeso: 6,2g',
    care: 'Ouro maciço é durável mas evite impactos. Limpe com solução de água morna e sabão neutro.',
    benefits: 'Ouro 18k maciço | Certificado de pureza | Embalagem exclusiva | Garantia vitalícia',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '8',
    name: 'Colar Pingente Coração Diamante',
    slug: 'colar-pingente-coracao-diamante',
    category: 'colares',
    price: 3500.00,
    installments: 10,
    material: 'Ouro 18k com diamante central',
    sku: 'GS-CO-002',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Pingente coração com diamante central em cravação solitária. Um presente perfeito para expressar amor eterno. Acompanha corrente veneziana em ouro 18k.',
    details: 'Material: Ouro 18k\nPedra: Diamante 0,25ct H/SI1\nComprimento da corrente: 45cm\nPeso total: 4,8g\nCertificado GIA',
    care: 'Evite impactos na pedra. Leve para inspeção profissional anualmente.',
    benefits: 'Diamante certificado GIA | Ouro 18k | Embalagem premium para presente',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '9',
    name: 'Colar Choker Pérolas Naturais',
    slug: 'colar-choker-perolas-naturais',
    category: 'colares',
    price: 4200.00,
    installments: 10,
    material: 'Pérolas de água doce com fecho em ouro 18k',
    sku: 'GS-CO-003',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Choker de pérolas de água doce com lustre excepcional. Cada pérola é selecionada individualmente para garantir uniformidade de tamanho e brilho.',
    details: 'Material: Pérolas de água doce + fecho ouro 18k\nTamanho das pérolas: 7-8mm\nComprimento: 40cm\nQuantidade: 47 pérolas',
    care: 'Pérolas são sensíveis. Coloque-as por último ao se arrumar e tire-as primeiro ao se despir.',
    benefits: 'Pérolas naturais selecionadas | Fecho em ouro 18k | Embalagem exclusiva',
    isNew: true,
    isFeatured: false,
    inStock: true,
  },

  // PULSEIRAS
  {
    id: '10',
    name: 'Pulseira Tennis Zircônia',
    slug: 'pulseira-tennis-zirconia',
    category: 'pulseiras',
    price: 1200.00,
    installments: 10,
    material: 'Prata 925 com banho de ouro 18k e zircônias',
    sku: 'GS-PU-001',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Pulseira tennis clássica com zircônias cúbicas AAA em cravação channel. O design eterno que nunca sai de moda, perfeito para qualquer ocasião.',
    details: 'Material: Prata 925 com banho de ouro 18k\nPedras: Zircônias AAA 2mm\nComprimento: 18cm + 2cm extensão\nFecho: Caixa com segurança dupla\nPeso: 8,5g',
    care: 'Evite contato com água clorada e do mar. Guarde em estojo separado.',
    benefits: 'Antialérgico | Banho de ouro 18k | Fecho de segurança dupla | Embalagem presente',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '11',
    name: 'Bracelete Bangle Ouro Liso',
    slug: 'bracelete-bangle-ouro-liso',
    category: 'pulseiras',
    price: 3800.00,
    installments: 10,
    material: 'Ouro 18k maciço',
    sku: 'GS-PU-002',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Bracelete bangle em ouro 18k maciço com acabamento polido. Design minimalista e atemporal que pode ser empilhado com outros bangles ou usado sozinho.',
    details: 'Material: Ouro 18k maciço\nDiâmetro interno: 58mm\nEspessura: 4mm\nPeso: 12,3g',
    care: 'Ouro maciço é resistente. Evite riscos com superfícies abrasivas.',
    benefits: 'Ouro 18k maciço | Certificado de pureza | Garantia vitalícia',
    isNew: false,
    isFeatured: false,
    inStock: true,
  },

  // ALIANÇAS
  {
    id: '12',
    name: 'Aliança Clássica Ouro Amarelo',
    slug: 'alianca-classica-ouro-amarelo',
    category: 'aliancas',
    price: 2200.00,
    installments: 10,
    material: 'Ouro 18k amarelo maciço',
    sku: 'GS-AL-001',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Aliança clássica em ouro 18k amarelo com acabamento polido. O símbolo eterno do amor e compromisso, fabricada com os mais altos padrões de qualidade.',
    details: 'Material: Ouro 18k amarelo maciço\nLargura: 4mm\nTamanhos: 10 ao 30\nPeso médio: 5,2g\nVendida individualmente',
    care: 'Ouro maciço é durável. Evite contato com produtos químicos e cloro.',
    benefits: 'Ouro 18k maciço | Gravação interna gratuita | Certificado de pureza | Garantia vitalícia',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '13',
    name: 'Aliança Diamantada Ouro Branco',
    slug: 'alianca-diamantada-ouro-branco',
    category: 'aliancas',
    price: 4500.00,
    installments: 10,
    material: 'Ouro 18k branco com diamantes',
    sku: 'GS-AL-002',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Aliança em ouro 18k branco cravejada com diamantes naturais em toda a extensão. Brilho incomparável para o dia mais especial da sua vida.',
    details: 'Material: Ouro 18k branco\nPedras: Diamantes naturais 0,30ct total\nLargura: 3mm\nTamanhos: 10 ao 30\nCertificado GIA',
    care: 'Leve para limpeza profissional a cada 6 meses para manter o brilho dos diamantes.',
    benefits: 'Diamantes certificados GIA | Ouro 18k branco | Gravação gratuita | Garantia vitalícia',
    isNew: true,
    isFeatured: true,
    inStock: true,
  },

  // ÓCULOS
  {
    id: '14',
    name: 'Óculos Solar Oversized Gold',
    slug: 'oculos-solar-oversized-gold',
    category: 'oculos',
    price: 1450.00,
    installments: 6,
    material: 'Armação em metal dourado com lentes polarizadas',
    sku: 'GS-OC-001',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Óculos solar oversized com armação em metal dourado e lentes polarizadas de alta qualidade. Design editorial que eleva qualquer look com sofisticação.',
    details: 'Material: Armação em metal dourado\nLentes: Polarizadas UV400\nFormato: Oversized quadrado\nIncluí estojo rígido e flanela',
    care: 'Limpe as lentes apenas com a flanela fornecida. Guarde sempre no estojo.',
    benefits: 'Proteção UV400 | Lentes polarizadas | Estojo premium incluso | Garantia de 1 ano',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '15',
    name: 'Armação Óptica Redonda Dourada',
    slug: 'armacao-optica-redonda-dourada',
    category: 'oculos',
    price: 980.00,
    installments: 6,
    material: 'Armação em metal dourado fino',
    sku: 'GS-OC-002',
    images: [
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Armação óptica redonda em metal dourado fino. Design intelectual e elegante que combina com rostos ovais e quadrados. Aceita lentes de grau.',
    details: 'Material: Metal dourado\nFormato: Redondo\nMedidas: 48-21-140\nIncluí estojo e flanela\nCompatível com lentes de grau',
    care: 'Ajuste profissional recomendado. Limpe com flanela seca ou levemente úmida.',
    benefits: 'Aceita lentes de grau | Ajuste gratuito | Estojo incluso | Garantia de 1 ano',
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '16',
    name: 'Óculos Solar Aviador Clássico',
    slug: 'oculos-solar-aviador-classico',
    category: 'oculos',
    price: 1200.00,
    installments: 6,
    material: 'Armação em metal dourado com lentes espelhadas',
    sku: 'GS-OC-003',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Aviador clássico com armação dourada e lentes espelhadas em degradê. O design icônico que nunca sai de moda, agora com acabamento premium.',
    details: 'Material: Armação em metal dourado\nLentes: Espelhadas degradê UV400\nFormato: Aviador\nIncluí estojo rígido e flanela',
    care: 'Evite deixar no carro em dias quentes. Guarde sempre no estojo.',
    benefits: 'Proteção UV400 | Lentes espelhadas premium | Estojo rígido incluso | Garantia de 1 ano',
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '17',
    name: 'Anel Eternity Safira Azul',
    slug: 'anel-eternity-safira-azul',
    category: 'aneis',
    price: 5800.00,
    installments: 10,
    material: 'Ouro 18k com safiras naturais',
    sku: 'GS-AN-004',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Anel eternity com safiras naturais azuis em cravação canal ao redor de toda a aliança. Uma peça extraordinária que simboliza amor eterno e infinito.',
    details: 'Material: Ouro 18k\nPedras: Safiras naturais 1,8ct total\nTamanhos: 12 ao 22\nPeso: 5,1g\nCertificado de autenticidade',
    care: 'Safiras são muito resistentes (dureza 9 Mohs). Evite apenas impactos fortes.',
    benefits: 'Safiras naturais certificadas | Ouro 18k | Embalagem exclusiva | Garantia de 1 ano',
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '18',
    name: 'Pulseira Elo Cartier Ouro Rosé',
    slug: 'pulseira-elo-cartier-ouro-rose',
    category: 'pulseiras',
    price: 2900.00,
    installments: 10,
    material: 'Ouro 18k rosé maciço',
    sku: 'GS-PU-003',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop&auto=format&q=80',
    ],
    description: 'Pulseira de elos em ouro 18k rosé com fecho de caixa e segurança dupla. O rosé dourado confere um tom quente e feminino, perfeito para qualquer ocasião.',
    details: 'Material: Ouro 18k rosé maciço\nComprimento: 18cm + 2cm extensão\nEspessura dos elos: 3mm\nFecho: Caixa com segurança\nPeso: 9,8g',
    care: 'Ouro rosé é durável. Evite contato com produtos químicos que podem alterar a tonalidade.',
    benefits: 'Ouro 18k rosé maciço | Certificado de pureza | Fecho de segurança | Garantia vitalícia',
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
]

export const getProductsByCategory = (category: string) =>
  products.filter(p => p.category === category)

export const getFeaturedProducts = () =>
  products.filter(p => p.isFeatured)

export const getNewProducts = () =>
  products.filter(p => p.isNew)

export const getProductBySlug = (slug: string) =>
  products.find(p => p.slug === slug)

export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)

export const categoryLabels: Record<string, string> = {
  aneis: 'Anéis',
  brincos: 'Brincos',
  colares: 'Colares',
  pulseiras: 'Pulseiras',
  aliancas: 'Alianças',
  oculos: 'Óculos',
}

export const categoryImages: Record<string, string> = {
  aneis: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=900&fit=crop&auto=format&q=80',
  brincos: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=900&fit=crop&auto=format&q=80',
  colares: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=900&fit=crop&auto=format&q=80',
  pulseiras: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=900&fit=crop&auto=format&q=80',
  aliancas: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&h=900&fit=crop&auto=format&q=80',
  oculos: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=900&fit=crop&auto=format&q=80',
}
