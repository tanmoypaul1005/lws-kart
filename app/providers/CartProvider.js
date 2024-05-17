'use client'

import {useState} from 'react';
import { CartContext } from '../contexts';

export default function CartProvider({children}) {

    const [totalCart, setTotalCart] = useState(null);

    return(
        <CartContext.Provider value={{totalCart, setTotalCart}}>
            {children}
        </CartContext.Provider>
    )
}