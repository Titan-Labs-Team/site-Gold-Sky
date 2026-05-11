import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { HeroBanner } from '@/components/home/hero-banner'
import { CategoriesSection } from '@/components/home/categories-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { AboutSection } from '@/components/home/about-section'
import { NewArrivals } from '@/components/home/new-arrivals'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <CategoriesSection />
        <FeaturedProducts />
        <AboutSection />
        <NewArrivals />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
