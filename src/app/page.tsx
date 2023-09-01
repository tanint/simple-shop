import { featuredProducts, foodDrinkProducts, productList3 } from '@/data/products'
import { Example } from '@/modules/common/layout/example'
import { ProductList } from '@/modules/product/components/product-list'

export default function Home() {
  return (
    <>
      {/* <Example /> */}
      <section aria-label="Made for You" className="py-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
          <p className="text-sm text-muted-foreground">Your personal product. Updated daily.</p>
        </div>
        <ProductList productList={featuredProducts} />
      </section>
      <section aria-label="Fruit & Vegetable" className="py-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Fruit & Vegetable</h2>
          <p className="text-sm text-muted-foreground">Fresh and vibrant produce for a healthy lifestyle</p>
        </div>
        <ProductList productList={foodDrinkProducts} />
      </section>
      <section aria-label="Frozen Food" className="py-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Sweet Treats</h2>
          <p className="text-sm text-muted-foreground">Indulge in delightful confections for a satisfying sugar rush</p>
        </div>
        <ProductList productList={productList3} />
      </section>
    </>
  )
}
