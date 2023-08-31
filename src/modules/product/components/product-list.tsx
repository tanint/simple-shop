import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ProductCard } from '..'
import { featuredProducts } from '@/data/products'

export const ProductList = () => {
  return (
    <div className="relative">
      <ScrollArea>
        <div className="flex space-x-6 pb-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              className="w-[250px]"
              aspectRatio="portrait"
              width={250}
              height={330}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
