import { Header } from '@/components/category/header'
import { ProductCategoryAside } from '@/components/category/product-category-aside'
import { ProductCategoryBreadcrumb } from '@/components/category/product-category-breadcrumb'
import { Footer } from '@/components/footer'

export default function ProductCategory() {
  return (
    <>
      <Header />
      <div className="w-full h-auto">
        <main className="w-full py-5">
          <div className="grid grid-cols-2">
            <ProductCategoryAside />

            <div className="flex-1">
              <ProductCategoryBreadcrumb />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
