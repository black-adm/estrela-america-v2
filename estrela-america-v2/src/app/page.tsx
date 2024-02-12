import { BannerCarousel } from '@/components/banner-carousel'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ListCollections } from '@/components/list-collections'
import { ListProducts } from '@/components/list-products'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-silver">
        <BannerCarousel />
        <ListProducts />
        <ListCollections />
      </div>
      <Footer />
    </div>
  )
}
