import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("user/login", async ({email, password})=>{
    try{
        let res = await axios.get("http://localhost:3002/users")
        const user = res?.data?.filter(item => item.email === email && item.password === password)
        if(user?.length){
            return user
        }else{
            alert("Invalid Email or Password !!")
        }
    }catch(err){
        console.log(err);
    }
})

export const userSignup = createAsyncThunk("user/signup", async (formData)=>{
    try{
        await axios.post("http://localhost:3002/users", formData)
    }catch(err){
        console.log(err);
    }
})

const AuthSlice = createSlice({
    name:"authentication",
    initialState:{
        user: null,
        error: "",
        msg:"",
        token: false
    },
    reducers:{
        setLogout(state){
            state.token = false
            state.user =null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(userLogin.pending, (state)=>{
            state.msg = "Loading"
        })
        builder.addCase(userLogin.fulfilled, (state, {payload})=>{
            if(payload?.length){
                state.token = true
                state.user = payload
            }
            state.msg = "Successfully Logged In !!"
        })
        builder.addCase(userLogin.rejected, (state)=>{
            state.error = "Something Went Wrong !!"
            state.token = false
        })

        builder.addCase(userSignup.pending, (state)=>{
            state.msg = "Loading"
        })
        builder.addCase(userSignup.fulfilled, (state)=>{
            state.msg = "Successfully Registered. Please Login to Continue !!"
        })
        builder.addCase(userSignup.rejected, (state)=>{
            state.error = "Something Went Wrong !!"
        })
    }
})

export const { setLogout } = AuthSlice.actions
export default AuthSlice.reducer