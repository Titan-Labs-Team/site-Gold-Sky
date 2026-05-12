import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Heart, Gem, Sparkles } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história da Gold Sky — Ótica e Joalheria. Elegância, qualidade e exclusividade em cada peça.',
}

const values = [
  {
    icon: Gem,
    title: 'Qualidade',
    description:
      'Trabalhamos apenas com materiais premium e fornecedores certificados para garantir peças duradouras.',
  },
  {
    icon: Heart,
    title: 'Elegância',
    description:
      'Cada joia é selecionada com cuidado para oferecer designs sofisticados e atemporais.',
  },
  {
    icon: Sparkles,
    title: 'Exclusividade',
    description:
      'Oferecemos peças únicas que refletem a personalidade e o estilo de cada cliente.',
  },
  {
    icon: Award,
    title: 'Confiança',
    description:
      'Mais de 10 anos no mercado, construindo relacionamentos baseados em transparência e respeito.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-cream-100 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Sobre Nós' }]} />
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-charcoal lg:text-5xl">
                A Gold Sky
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                Nascemos da paixão por beleza e exclusividade. Na Gold Sky, cada
                joia e cada par de óculos é escolhido com cuidado para refletir
                sua história.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image Placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-sage-200">
                  <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202026-05-08%20083520%20%281%29-UGXhLCpXrNGnkDshypiMqOh8re43zX.png"
                alt="Fachada da loja Gold Sky - Ótica e Joalheria"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 rounded-lg bg-gold-400/30 lg:block" />
              </div>

              {/* Content */}
              <div>
                <span className="text-sm font-medium uppercase tracking-wider text-gold-600">
                  Nossa História
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
                  Tradição e Modernidade
                </h2>
                <div className="mt-6 space-y-4 text-warm-gray">
                  <p className="leading-relaxed">
                    A Gold Sky nasceu há mais de uma década com um propósito
                    claro: oferecer joias e óculos de qualidade excepcional,
                    combinando tradição artesanal com design contemporâneo.
                  </p>
                  <p className="leading-relaxed">
                    Nossa equipe é formada por profissionais apaixonados pelo
                    que fazem, dedicados a ajudar cada cliente a encontrar a
                    peça perfeita para cada momento especial de sua vida.
                  </p>
                  <p className="leading-relaxed">
                    Venha nos visitar e descubra peças únicas que combinam com
                    você. Nossa missão é fazer você se sentir especial em todos
                    os momentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-cream-50 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-charcoal lg:text-4xl">
                Nossos Valores
              </h2>
              <p className="mt-4 text-warm-gray">
                Os princípios que guiam tudo o que fazemos
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream-100 text-charcoal">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store Interior Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-charcoal lg:text-4xl">
                Nossa Loja
              </h2>
              <p className="mt-4 text-warm-gray">
                Um espaço pensado para proporcionar uma experiência única
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] overflow-hidden rounded-lg bg-cream-200"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-warm-gray">Foto da Loja {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-forest-800 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-cream-50 lg:text-4xl">
                Visite-nos
              </h2>
              <p className="mt-4 text-cream-300">
                Venha conhecer nossa loja e descubra peças que combinam com você.
                Será um prazer atendê-lo.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-md bg-gold-500 px-8 py-3 font-medium text-charcoal transition-colors hover:bg-gold-400"
                >
                  Fale Conosco
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-cream-400 px-8 py-3 font-medium text-cream-50 transition-colors hover:bg-cream-50 hover:text-charcoal"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
