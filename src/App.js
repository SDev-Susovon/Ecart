import React from 'react'
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ChechOut from "./pages/ChechOut";
import Login from "./pages/Login";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pdtls/:pid" element={<ProductDetails/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/chkout" element={<ChechOut/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
