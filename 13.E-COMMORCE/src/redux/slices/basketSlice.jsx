import { createSlice } from '@reduxjs/toolkit';


const getFromBasketFromStorage = () => {
    if (localStorage.getItem('basket')) {
        return JSON.parse(localStorage.getItem('basket'));
    }
    return [];
}
//Sayfa yüklendiğinde basket'i localStorage'dan al
const initialState = {
    basket: getFromBasketFromStorage(),

}

//Basket'i localStorage'a yaz
const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.basket.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity += action.payload.count;
            } else {
                state.basket.push({ ...action.payload, quantity: action.payload.count });
            }
            writeFromBasketToStorage(state.basket);
        },
        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter((product) => product.id !== action.payload.id);
            writeFromBasketToStorage(state.basket);
        },
    },
});


export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;