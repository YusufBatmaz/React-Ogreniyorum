import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/slices/basketSlice';
import { FaTrash } from "react-icons/fa";
import '../css/BasketDrawer.css';

function BasketDrawer({ isOpen, onClose }) {
    const basket = useSelector((state) => state.basket.basket);
    const dispatch = useDispatch();

    const handleRemoveFromBasket = (productId) => {
        dispatch(removeFromBasket({ id: productId }));
    };

    const calculateTotal = () => {
        return basket.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    if (!isOpen) return null;

    return (
        <div className="basket-drawer-overlay" onClick={onClose}>
            <div className="basket-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="basket-header">
                    <h2>Sepetim ({basket.length} ürün)</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                
                <div className="basket-content">
                    {basket.length === 0 ? (
                        <div className="empty-basket">
                            <p>Sepetiniz boş</p>
                            <p>Alışverişe başlamak için ürünlerimize göz atın!</p>
                        </div>
                    ) : (
                        <>
                            <div className="basket-items">
                                {basket.map((item) => (
                                    <div key={item.id} className="basket-item">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="item-image"
                                        />
                                        <div className="item-details">
                                            <h3 className="item-title">{item.title}</h3>
                                            <p className="item-price">{item.price}₺</p>
                                            <p className="item-quantity">Adet: {item.quantity}</p>
                                        </div>
                                        <button 
                                            className="remove-btn"
                                            onClick={() => handleRemoveFromBasket(item.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="basket-footer">
                                <div className="total">
                                    <span>Toplam:</span>
                                    <span className="total-price">{calculateTotal()}₺</span>
                                </div>
                                <button className="checkout-btn">
                                    Siparişi Tamamla
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BasketDrawer; 