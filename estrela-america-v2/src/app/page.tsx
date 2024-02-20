import { BannerCarousel } from '@/components/banner-carousel'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ListCollections } from '@/components/list-collections'
import { ListProducts } from '@/components/list-products'
import { Slider } from '@/components/slider'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-gray-100">
        <BannerCarousel />
        <ListProducts />
        <Slider />
        <ListCollections />
      </div>
      <Footer />
    </div>
  )
}
