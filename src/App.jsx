import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/searchproduct" element={<SearchProduct/>}/>
      <Route path="/" element={<SearchProduct/>}/>

      <Route path="/productdetail" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
