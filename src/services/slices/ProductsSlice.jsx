import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const url = "http://localhost:3001/products"

export const fetchProducts = createAsyncThunk("products", async ()=>{
    try{
        const res = await axios.get("http://localhost:3001/products")
        return res?.data
    }catch(err){
        console.log(err);
    }
})

const initialState = {
    all_products : [],
    filter_products:[],
    fetch_status : "idle"
}

export const ProductsSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        setProducts(state, {payload}){
            if(payload === "All"){
                return{
                    ...state,
                    filter_products : state.all_products
                }
            }
            else{
                let prodList = state.all_products?.filter(item => item.category === payload)
                return{
                    ...state,
                    filter_products : prodList
                }
            }
        },
        searchProducts(state, {payload}){
            // console.log(payload);
            // return{
            //     ...state,
            //     product_query : payload
            // }
            if(payload === ""){
                return{
                    ...state,
                    filter_products : state.all_products
                }
            }else{
                let result = state.all_products.filter(item => item.title.toLowerCase().includes(payload.toLowerCase()))
                return{
                    ...state,
                    filter_products : result
                }
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.all_products = null
            state.fetch_status = "Loading..."
        })
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.all_products = action.payload
            state.fetch_status = "success"
        })
        builder.addCase(fetchProducts.rejected, (state)=>{
            state.fetch_status = "failed"
        })
    }
})

export const { setProducts, searchProducts } = ProductsSlice.actions
export default ProductsSlice.reducer