import React from "react";
import { selector } from "recoil";
import { cartItemsState } from "./cartItemsState";

 const cartTotalSelector = selector({
    key:'cartTotalSelector',
    get:({get}) => {
        const cartTotal = get(cartItemsState);
        if(cartTotal.length === 0 || !cartTotal)
        {   
            return {totalAmount:0,totalQantity:0};
        }
        const totalAmount = cartTotal.reduce((accumulator,item)=>{
           return accumulator + item.price * item.quantity; 
        },0);

        const totalQantity = cartTotal.reduce((accumulator,item)=>{
            return accumulator + item.quantity;                                                                                                       
        },0);

        return {totalAmount,totalQantity};
    }
})  
export default cartTotalSelector;
