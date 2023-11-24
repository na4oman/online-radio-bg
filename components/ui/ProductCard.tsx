import React from 'react'

import { Product } from '@/types'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <Link
      href='/'
      className='outline-0 focus:ring-2 hover:ring-1 ring-primary transition duration-300 rounded-lg'
    >
      <Card className='rounded-lg border-2'>
        <CardContent className='pt-4'>
          <div className='w-[250px] h-[150px] relative bg-foreground/5 dark:bg-background rounded-lg'>
            <Image
              src={data?.images?.[0]}
              alt={data.name}
              fill
              className='w-[250px] h-[150px] object-cover rounded-lg transition-all duration-300 hover:scale-105'
            />
          </div>
        </CardContent>
        <CardFooter className='flex-col items-start'>
          <div>
            <p className='font-semibold text-lg'>{data.name}</p>
            <p className='text-sm text-primary/80'>{data.category}</p>
          </div>
          <div className='flex items-center justify-between'>{data.price}</div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard
