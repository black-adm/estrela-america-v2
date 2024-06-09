import { CategoryAside } from '@/components/category/category-aside'
import { CategoryBreadcrumb } from '@/components/category/category-breadcrumb'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'

export default function ProductCategory() {
  return (
    <>
      <Header />
      <div className="w-full h-auto">
        <main className="w-full py-5">
          <div className="grid grid-cols-2">
            <CategoryAside />

            <div className="flex-1">
              <CategoryBreadcrumb />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
