import React from 'react';
import {Route, Routes} from "react-router-dom";
import PageError from "../Pages/PageError";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";

const RootRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Products/>}></Route>
            <Route jkj path='/products' element={<Products/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<PageError/>}></Route>


        </Routes>
    );
};

export default RootRouters;