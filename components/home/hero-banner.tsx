import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroBanner() {
  return (
    <section className="relative h-[68vh] overflow-hidden md:h-auto">
      {/* Mobile: retrato 9:16 */}
      <Image
        src="/images/banner2.jpeg"
        alt="Gold Sky — banner principal"
        fill
        className="object-cover object-[50%_65%] md:hidden"
        priority
      />
      {/* Desktop: paisagem */}
      <Image
        src="/images/bannerHero.png"
        alt="Gold Sky — banner principal"
        fill
        className="hidden object-cover object-center md:block"
        priority
      />

      {/* Overlay: topo escuro → base transparente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex h-[68vh] flex-col justify-between py-8 pb-12 md:h-auto md:min-h-[500px] md:justify-center md:py-16 lg:min-h-[600px] lg:max-w-xl lg:py-24">
          {/* Bloco de texto — fica colado ao topo */}
          <div>
            <span className="mb-4 inline-block w-fit rounded-full bg-gold-400/20 px-4 py-1.5 text-sm font-medium text-white">
              Dia das Mães
            </span>

            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-balance">Traduza seu amor em joias</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-white/85 lg:text-xl">
              Presenteie quem você ama com peças exclusivas que guardam para sempre
              os momentos mais especiais.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row md:mt-8">
            <Button
              asChild
              size="lg"
              className="border-0 bg-transparent px-8 text-white shadow-none hover:bg-white/10"
            >
              <Link href="/produtos">Ver Presentes</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-forest-800 px-8 text-white hover:bg-forest-900"
            >
              <Link href="/sobre">Nossa História</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
