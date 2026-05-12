import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile: retrato 9:16 */}
      <Image
        src="/images/banner2.jpeg"
        alt="Gold Sky — banner principal"
        fill
        className="object-cover object-center md:hidden"
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

      {/* Overlay mobile: cima-baixo para legibilidade no centro */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/50 to-forest-900/70 md:hidden" />
      {/* Overlay desktop: esquerda-direita */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-forest-900/80 via-forest-900/50 to-forest-900/10 md:block" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex min-h-[100svh] flex-col justify-start pt-10 pb-16 md:min-h-[500px] md:justify-center md:py-16 lg:min-h-[600px] lg:max-w-xl lg:py-24">
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

          <div className="mt-auto flex flex-col gap-4 pb-0 pt-8 sm:flex-row md:mt-8 md:pb-0 md:pt-0">
            <Button
              asChild
              size="lg"
              className="bg-black px-8 text-white hover:bg-gray-900"
            >
              <Link href="/produtos">Ver Presentes</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-black px-8 text-white hover:bg-gray-900"
            >
              <Link href="/sobre">Nossa História</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
