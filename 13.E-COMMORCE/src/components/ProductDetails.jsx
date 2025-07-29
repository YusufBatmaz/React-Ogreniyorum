import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';
import '../css/ProductDetails.css';

function ProductDetails() {
    //params ile id alınır
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct || {};

    const [count, setCount] = useState(0);

    //dispatch ile redux'a erişilir
    const dispatch = useDispatch();
    
    const addBasket = () => {
        if (count <= 0) {
            alert('Lütfen en az 1 adet seçiniz!');
            return;
        }
        
        if (!selectedProduct) {
            alert('Ürün bilgileri yüklenemedi!');
            return;
        }
        
        const payload = {
            id,
            title,
            price,
            image,
            count
        }
        dispatch(addToBasket(payload));
        alert('Ürün sepete eklendi!');
        setCount(0); // Reset count after adding to basket
    }

    


    //id ile product detayı alınır
    useEffect(() => {
        if (products && products.length > 0) {
            const product = products.find((product) => product.id == id);
            if (product) {
                dispatch(setSelectedProduct(product));
            }
        }
    }, [products, id, dispatch]);

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        });
    }


    return (
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>

            <div >
                <img src={image} alt={title} style={{
                    width: '300px', height: '500px', marginRight: '50px',
                    borderRadius: '10px', objectFit: 'cover'
                }} />
            </div>

            <div>
                <h1 style={{ fontFamily: 'Arial', fontSize: '20px', fontWeight: 'bold' }}>{title}</h1>
                <p style={{ fontFamily: 'Arial', fontSize: '16px' }}>{description}</p>
                <h1 style={{ fontFamily: 'Arial', fontSize: '50px', fontWeight: 'bold', color: 'red' }}>{price}₺</h1>


                <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left', marginTop: '20px' }}>
                    <CiCirclePlus style={{ fontSize: '35px', marginRight: '10px', cursor: 'pointer' }}
                        onClick={() => setCount(count + 1)} /> <span style={{
                            fontSize: '35px'
                        }}>{count}
                    </span>                     <CiCircleMinus style={{ fontSize: '35px', marginLeft: '10px', cursor: 'pointer' }}
                        onClick={() => setCount(Math.max(0, count - 1))} />
                </div>
                <button 
                    onClick={() => addBasket()} 
                    className="add-to-basket-btn"
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    )
}

export default ProductDetails