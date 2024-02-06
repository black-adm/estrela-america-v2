import { BannerCarousel } from '@/components/banner-carousel'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <BannerCarousel />
      </div>
    </>
  )
}
