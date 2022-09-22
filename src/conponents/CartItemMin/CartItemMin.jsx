import React from 'react';
import classes from "./CartItemMin.module.css";
import Button from "../Button/button";

const CartItemMin = ({item, RemoveFromCart}) => {
    return (
        <div className={classes.modalProduct_container}>
            <div className={classes.modalProduct}>
                <button onClick={() => RemoveFromCart(item.CartItemID)} className={classes.deleteItemCart_button}
                        aria-label={'Delete'}></button>
                <div className={classes.image_container}>
                    <img src={item.imageLink}/>

                </div>
                <div className={classes.modalInfo}>
                    <div className={classes.modalText}>

                        <h3 className={classes.modalTitle}>{item.title}</h3>
                        <p>{`${(item.price).toFixed(2).replace('.', ',')} PLN`}</p>

                        <h3>Material: </h3>
                        <p>{item.material}</p>

                        <h3>Size: </h3>
                        <p>{item.selectedSize.name}</p>
                    </div>
                </div>


            </div>

            <hr className={classes.product_cartLine}/>
        </div>
    )
        ;
};

export default CartItemMin;