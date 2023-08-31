import { Separator } from '@/components/ui/separator'
import { ProductList } from '@/modules/product/components/product-list'

export default function Home() {
  return (
    <div>
      <div className="py-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
          <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
        </div>
        <ProductList />
      </div>
      <div className="py-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
          <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
        </div>
        <ProductList />
      </div>
      <div className="py-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
          <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
        </div>
        <ProductList />
      </div>
    </div>
  )
}
