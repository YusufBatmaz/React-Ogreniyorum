import React, { useState } from 'react'
import '../CSS/currency.css'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_QSsi9p5wiRjghu0W3JHIoZvPy3uS4C4N1TgEy67o";

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        let EXCHANGE_API = `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}&currencies=${toCurrency}`;
        const response = await axios.get(EXCHANGE_API);
        console.log(response.data.data[toCurrency]);
        setResult((response.data.data[toCurrency] * amount).toFixed(2));
    };

    return (
        <div className='currency-div'>
            <div>
                <div className='currency-title'>
                    <h3>Döviz Kuru Uygulaması</h3>   
                </div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)}
                 type="number" className='amount' placeholder='Enter the amount' />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                    <option value="TRY">TRY</option>
                </select>

                <FaArrowRight style={{fontSize: '20px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>

                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number"         
                 className='result' placeholder='result' />
                
                <div className='convert-button-div'>
                    <button onClick={exchange} className='convert-button'>Convert</button>
                </div>
            </div>
        </div>)
}

export default Currency