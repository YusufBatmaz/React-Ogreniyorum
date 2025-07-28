import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Product({ product }) {

    const { id, name, price } = product

    const navigate = useNavigate()

    return (
        <div className='product'>
            <div className='product-detail'>
                <p>Ürün Detayı</p>
                <h3>İsim : {name}</h3>
                <p>Fiyat : {price}</p>
                <button onClick={() => navigate("/product-details/" + id)}>Detaylara Git</button>
            </div>
        </div>
    )
}

export default Product