import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Product } from '../types'

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

export function ProductCard({
  product,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: ProductCardProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={product.cover}
          alt={product.title}
          width={width}
          height={height}
          className={cn(
            'h-auto w-auto object-cover transition-all hover:scale-105',
            aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{product.title}</h3>
        <p className="text-xs text-muted-foreground">{product.description}</p>
      </div>
    </div>
  )
}
