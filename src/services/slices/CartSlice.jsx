import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart_data : [],
    sub_total : 0,
    shipping_value : 0,
    total : 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct(state, action){
            state.cart_data.push(action.payload)
        },
        removeProduct(state,action){
            state.cart_data = state.cart_data.filter(item => item.id !== action.payload)
        },
        incQty(state, {payload}){
            const newData = state.cart_data.map(item =>{
                if(item.id === payload){
                    let newQty = item.qty + 1
                    return{
                        ...item,
                        qty : newQty
                    }
                }
                return item
            })
            return{
                ...state,
                cart_data : newData
            }
        },
        decQty(state, {payload}){
            const newData = state.cart_data.map(item =>{
                if(item.id === payload){
                    let newQty = item.qty - 1
                    if(newQty < 1){
                        newQty = 1
                    }
                    return{
                        ...item,
                        qty : newQty
                    }
                }
                return item
            })
            return{
                ...state,
                cart_data : newData
            }
        },
        totalAmount(state){
            let amount = 0
            let shipping = 0
            state.cart_data.map(item=>{
                if((Number(item.qty) * Number(item.price)) <= 2999 ){
                    shipping += 500
                }
                amount += (Number(item.qty) * Number(item.price))
                return amount
            })
            
            return{
                ...state,
                sub_total : amount,
                shipping_value : shipping,
                total : (amount + shipping)
            }
        },
        emptyCart(state){
            return{
                ...state,
                cart_data: []
            }
        }
    }
})

export const { addProduct, removeProduct, incQty, decQty, totalAmount, emptyCart } = CartSlice.actions
export default CartSlice.reducer