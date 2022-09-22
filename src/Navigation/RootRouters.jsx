import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../Pages/About";
import Posts from "../Pages/Posts";
import PageError from "../Pages/PageError";
import PostPage from "../Pages/PostPage";
import MainLearn from "../Pages/archive/MainLearn";
import LearnPage from "../Pages/archive/LearnPage";
import ProductInfo from "../conponents/ProductInfo/ProductInfo";
import Cart from "../Pages/Cart";

const RootRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Posts/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route jkj path='/posts' element={<Posts/>}></Route>
            <Route path='/posts/:id' element={<PostPage/>}></Route>
            <Route path='*' element={<PageError/>}></Route>
            <Route path='/learn' element={<MainLearn/>}></Route>
            <Route path='/learn/:name' element={<LearnPage/>}></Route>
            <Route path='/test' element={<ProductInfo/>} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>

        </Routes>
    );
};

export default RootRouters;