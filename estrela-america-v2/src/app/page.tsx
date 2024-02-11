import { BannerCarousel } from '@/components/banner-carousel'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-white">
        <BannerCarousel />
      </div>
      <Footer />
    </div>
  )
}
