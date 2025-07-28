import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'


function ProductDetails() {
    const { id } = useParams()
    const product = products.find((product) => product.id === parseInt(id))
    return (
        <div>
            <h1>Product Details</h1>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>  
  )
}

export default ProductDetails