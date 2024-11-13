import { createContext } from "react";

export const CartContext =  createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
}); // Returns an objext that is a react component

