import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section className="bg-[#2B4A2F] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-[4px] bg-forest-700">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202026-05-08%20083520%20%281%29-UGXhLCpXrNGnkDshypiMqOh8re43zX.png"
                alt="Fachada da loja Gold Sky - Ótica e Joalheria"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 rounded-[4px] bg-gold-400/20 lg:block" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Nossa História
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white lg:text-4xl">
              A Gold Sky
            </h2>
            <div className="mt-6 space-y-4 text-white/85">
              <p className="leading-relaxed">
                Nascemos da paixão por beleza e exclusividade. Na Gold Sky, cada
                joia e cada par de óculos é escolhido com cuidado para refletir
                sua história.
              </p>
              <p className="leading-relaxed">
                Venha nos visitar e descubra peças únicas que combinam com você.
                Nossa missão é fazer você se sentir especial em todos os
                momentos.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { title: 'Qualidade',      description: 'Materiais premium' },
                { title: 'Elegância',      description: 'Design sofisticado' },
                { title: 'Exclusividade',  description: 'Peças únicas' },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="font-serif text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="bg-cream-50 font-bold text-charcoal hover:bg-cream-200"
              >
                <Link href="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
