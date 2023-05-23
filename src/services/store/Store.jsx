import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import CartSlice from "../slices/CartSlice";
import ProductsSlice from "../slices/ProductsSlice";

export const Store = configureStore({
    reducer:{
        productSlice : ProductsSlice,
        cart : CartSlice,
        auth : AuthSlice
    }
})