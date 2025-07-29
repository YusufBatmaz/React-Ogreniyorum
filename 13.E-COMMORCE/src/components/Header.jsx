import React, { useState } from 'react'
import '../css/Header.css'
import '../css/darkMode.css'
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import BasketDrawer from './BasketDrawer';
import logo from '../images/logo.png'; // adjust extension if needed

function Header() {

    const [theme, setTheme] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const navigate = useNavigate();

    const basket = useSelector((state) => state.basket.basket);
    const products = useSelector((state) => state.product.products);

    const changeTheme = () => {
        const root = document.documentElement;
        if (theme) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        setTheme(!theme);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search term:', searchTerm);
        console.log('Products:', products);
        
        if (!searchTerm.trim()) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        if (!products || products.length === 0) {
            console.log('No products available');
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        const results = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log('Search results:', results);
        setSearchResults(results);
        setShowResults(true);
    }

    const clearSearch = () => {
        setSearchTerm("");
        setSearchResults([]);
        setShowResults(false);
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='flex-row' onClick={() => navigate('/')}> 
                    <img src={logo} className='logo' alt="Logo" />
                    <p className='logo-text'>Yusuf A.Ş.</p>
                </div>

                                                <div className='flex-row' style={{ position: 'relative' }}>
                    <div style={{ position: 'relative' }}>
                        <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <input 
                                className='search-input' 
                                type="text" 
                                placeholder='Ara...'
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <button className='search-button' type="submit">Ara</button>
                            {searchTerm && (
                                <button 
                                    type="button" 
                                    onClick={clearSearch}
                                    style={{
                                        position: 'absolute',
                                        right: '60px',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--secondary-text)',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    ×
                                </button>
                            )}
                        </form>
                        
                        {/* Search Results */}
                        {showResults && (
                            <div className="search-results-container">
                                <div className="search-results-header">
                                    <h3>Arama Sonuçları ({searchResults.length} ürün)</h3>
                                    <button onClick={clearSearch} className="close-results-btn">×</button>
                                </div>
                                {searchResults.length === 0 ? (
                                    <div className="no-results">
                                        <p>Aradığınız ürün bulunamadı.</p>
                                    </div>
                                ) : (
                                    <div className="search-results-grid">
                                        {searchResults.map((product) => (
                                            <div key={product.id} className="search-result-item" onClick={() => navigate(`/product/${product.id}`)}>
                                                <img src={product.image} alt={product.title} className="result-image" />
                                                <div className="result-details">
                                                    <h4 className="result-title">{product.title}</h4>
                                                    <p className="result-price">{product.price}₺</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <div>
                        {theme ? <CiLight className='icons' onClick={changeTheme} /> : 
                        <IoMoonOutline className='icons' onClick={changeTheme} />}

                        <Badge badgeContent={basket.length} color="error">
                            <FaBasketShopping 
                                className='icons' 
                                style={{ marginRight: '1px', cursor: 'pointer' }} 
                                onClick={() => setIsBasketOpen(true)}
                            />
                        </Badge>
                    </div>
                </div>
            </div>
            
            <BasketDrawer 
                isOpen={isBasketOpen} 
                onClose={() => setIsBasketOpen(false)} 
            />
        </>
    )
}

export default Header