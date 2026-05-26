// Gold Sky — About Page
import { Link } from 'wouter'
import { Award, Heart, Star, Shield } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useFadeUp } from '@/hooks/useFadeUp'

const STORE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/store-interior-HTHi5RvpsMwTbpN2nnzBHf.webp'
const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/hero-jewelry-hm2b4iKNnbk84yRrgRNV8P.webp'

const values = [
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Cada peça passa por rigoroso controle de qualidade. Trabalhamos apenas com materiais certificados e artesãos especializados.',
  },
  {
    icon: Heart,
    title: 'Elegância',
    description: 'Design atemporal que transcende tendências. Nossas peças são criadas para durar e emocionar por gerações.',
  },
  {
    icon: Star,
    title: 'Exclusividade',
    description: 'Coleções limitadas e peças únicas que garantem que você sempre terá algo verdadeiramente especial.',
  },
  {
    icon: Shield,
    title: 'Confiança',
    description: 'Mais de 15 anos de história, certificados de autenticidade e garantia em todas as peças.',
  },
]

export default function About() {
  const heroRef = useFadeUp()
  const storyRef = useFadeUp()
  const valuesRef = useFadeUp()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#FAF5EE] py-16 lg:py-24">
        <div ref={heroRef} className="fade-up max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block text-[#C9A96E] text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-4">
            Nossa História
          </span>
          <h1 className="font-serif font-bold text-[#1A1A1A] text-4xl lg:text-6xl mb-6">
            A Gold Sky
          </h1>
          <p className="font-sans text-[#7A7A7A] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Nascemos da paixão por beleza e exclusividade. Uma boutique brasileira que une o melhor da joalheria artesanal com o design contemporâneo.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Brand Story */}
      <section className="py-16 lg:py-24">
        <div ref={storyRef} className="fade-up max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C9A96E]/30" />
              <img
                src={STORE_IMAGE}
                alt="Loja Gold Sky"
                className="relative w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            <div>
              <h2 className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-4xl mb-6">
                Uma história de paixão e beleza
              </h2>
              <div className="space-y-4 text-[#7A7A7A] font-sans text-sm lg:text-base leading-relaxed">
                <p>
                  A Gold Sky nasceu em 2009, fruto do sonho de criar um espaço onde joias e óculos de alta qualidade pudessem ser encontrados em um ambiente acolhedor e sofisticado.
                </p>
                <p>
                  Nossa fundadora, com mais de 20 anos de experiência no setor de joalheria, selecionou pessoalmente cada peça do nosso catálogo, garantindo que apenas o melhor chegasse às mãos dos nossos clientes.
                </p>
                <p>
                  Hoje, a Gold Sky é referência em São Paulo como destino para quem busca peças únicas que contam histórias e celebram momentos especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Values */}
      <section className="bg-[#FAF5EE] py-16 lg:py-24">
        <div ref={valuesRef} className="fade-up max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-5xl">
              Nossos Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <value.icon size={20} strokeWidth={1.5} className="text-[#2B4A2F]" />
                </div>
                <h3 className="font-serif font-semibold text-[#1A1A1A] text-xl mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-[#7A7A7A] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Store Photos */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <img src={HERO_IMAGE} alt="Gold Sky" className="w-full object-cover col-span-2 lg:col-span-1" style={{ aspectRatio: '4/3' }} />
            <img src={STORE_IMAGE} alt="Interior Gold Sky" className="w-full object-cover" style={{ aspectRatio: '4/3' }} />
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=450&fit=crop&auto=format&q=80" alt="Joias Gold Sky" className="w-full object-cover" style={{ aspectRatio: '4/3' }} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2B4A2F] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-white text-3xl lg:text-5xl mb-4">
            Venha nos Visitar
          </h2>
          <p className="font-sans text-white/80 text-base mb-8 max-w-lg mx-auto">
            Nossa equipe está pronta para ajudá-lo a encontrar a peça perfeita para cada momento especial.
          </p>
          <Link href="/contato">
            <button className="px-8 py-4 bg-[#FAF5EE] text-[#1A1A1A] text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-[#f0e8da] transition-colors">
              Fale Conosco
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
