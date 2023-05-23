import axios from "axios";

const API = axios.create({baseURL : "http://192.168.0.110:3002"})

export const logIn = ()=> API.get("/users")
export const signUp = (formData)=> API.post("/users", formData)