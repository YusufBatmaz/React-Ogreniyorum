import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    products: [],
    selectedProduct:{},
    loading:false,
}

//API CALL
const BASE_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = createAsyncThunk('product/getAllProducts',async(_,{dispatch})=>{
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
})

//SLICE
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setSelectedProduct:(state,action)=>{
            state.selectedProduct = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.loading = false;
        })
    }
})

export const {setProduct,setSelectedProduct} = productSlice.actions;
export default productSlice.reducer;