import React from 'react'
import { Product, Radio } from '@/types'
import ProductCard from './ui/ProductCard'
import RadioCard from './ui/RadioCard'

interface ProductList {
  items: Radio[]
}

const ProductList: React.FC<ProductList> = ({ items }) => {
  return (
    <div className='space-y-4 mb-8'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-1 md:gap-4'>
        {items.map(item => (
          // <ProductCard key={item.id} data={item} />
          <RadioCard key={item.radio_id} product={item} />
        ))}
      </div>
    </div>
  )
}

ProductList.propTypes = {}

export default ProductList
