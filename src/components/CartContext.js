import React from 'react';
import { createContext, useState } from 'react';
import './CartContext.css'

export const CartContext = createContext ({})

const {Provider} = CartContext
 /*const carritoCompra = [
    {
        item: {
            title: 'cerveza',
            precio: '$750',
            definicion: 'Cerveza Tirada Hopson. American Amber Ale. Suave, Roja, dulce y de lúpulos americanos.'
        },
        quantity: 8
    },
    {
        item: {
            title: 'Berenjenas',
            precio: '$600',
            definicion: 'Berenjenas en escabeche. Marinadas previamente con Romero, Laurel, Ajo, Vinagre y Aceite'
        },
        quantity: 10
    },
 ]*/

export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);
    const clearCart = () => {
        setCart ([]);
    }

    const addToCart = (item, quantity) => {
        console.log(item)
        if (isInCart(item.id)) {
            const newCart = [...cart]
            for (const element of newCart) {
                if(element.item.id === item.id)
                element.quantity = element.quantity + quantity;
            }
            setCart(newCart);
        } else {
            setCart ([
                ...cart,
                {
                    item: item,
                    quantity: quantity
                }
            ])
        }
        
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id)
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id)
        setCart(newCart);
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart
    }

    return (
        <Provider value = {context}>
            {children}
        </Provider>
    )
}


