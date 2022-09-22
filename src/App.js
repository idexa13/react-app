import React, {useContext, useState} from "react";
import "./styles/App.css"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Redirect,
    Switch, useParams
} from "react-router-dom";

import About from "./Pages/About";
import Posts from "./Pages/Posts";
import PageError from "./Pages/PageError";
import Navigation from "./conponents/Navigation/Navigation";
import RootRouters from "./Navigation/RootRouters";

export const CartContext =  React.createContext();


function App() {

    // product added to cart {id,size}
    const [cartItems,setCartItems] = useState([]);
    const currency = 'PLN'

    const cartItemsCount = cartItems.length;

    const RemoveFromCart = (CartItemID) => {

        setCartItems(cartItems.filter((item) => item.CartItemID !== CartItemID))

    };

    return (
        <CartContext.Provider value={{cartItems,setCartItems,cartItemsCount,currency,RemoveFromCart}} >


            <BrowserRouter>
                <Navigation/>
                <div style={{marginTop:"50px"}} >
                <RootRouters/>
                </div>
            </BrowserRouter>

        </CartContext.Provider>

    );
}

export default App;
