import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { BannerCarousel } from '@/components/marketing/banner-carousel'
import { Slider } from '@/components/marketing/slider'
import { ListCategories } from '@/components/products/list-categories'
import { ListCollections } from '@/components/products/list-collections'
import { ListProducts } from '@/components/products/list-products'
import { MostViewsProducts } from '@/components/products/most-views-products'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div>
        <BannerCarousel />
        <ListProducts />
        <ListCategories />
        <MostViewsProducts />
        <ListCollections />
        <Slider />
      </div>
      <Footer />
    </div>
  )
}
