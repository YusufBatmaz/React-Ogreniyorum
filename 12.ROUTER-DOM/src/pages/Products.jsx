import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products'

function Products() {
  return (
    <div className='products'>
      {products && products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products