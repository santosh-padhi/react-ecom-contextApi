import React, {createContext, useEffect, useState} from 'react';
import {addItemToCart, removeItemFromCart,filterItemFromCart,getCartItemsCount,getCartTotal} from "./cart.utils";


export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {
    },
    cartItems: [],
    addItem: () => {
    },
    removeItem: () => {
    },
    clearItem: () => {
    },
    cartItemCount: 0,
    cartTotal:0


});

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);

    const [cartItems, setCartItems] = useState([]);

    const [cartItemCount, setCartItemCount] = useState([0]);
    const [cartTotal, setCartTotal] = useState([0]);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item=>setCartItems(removeItemFromCart(cartItems,item));
    const clearItem = item => setCartItems(filterItemFromCart(cartItems,item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(()=>{
        setCartItemCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    },[cartItems]);


    return (
        <CartContext.Provider value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            clearItem,
            cartItemCount,
            cartTotal
        }}>{children}</CartContext.Provider>
    );
};

export default CartProvider;


