import React from 'react'
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div>
            <div className='product-container'>
                <img src={image} alt={title} className='product-image' />
                <div className='product-details'>
                    <p className='product-title'>{title}</p>
                    <h3 className='product-price'>{price}₺</h3>
                </div>
                <div className='flex-row'>
                    <button onClick={() => navigate(`/product/${id}`)} className='product-button-detail'>Detayına Git</button>
                </div>
            </div>
        </div>
    )
}

export default Product