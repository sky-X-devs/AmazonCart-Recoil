    import React from "react";
    import { useRecoilValue, useRecoilState  } from "recoil";
    import { wishItemsState } from "../store/wishItemsState";
    import '../wishlist.css';
    import { cartItemsState } from "../store/cartItemsState";
    import { useEffect } from "react";

    export default function Wishlist (){
        const WishListItems = useRecoilValue(wishItemsState);
        const [cartItems , setcartItems ] = useRecoilState(cartItemsState);

        const addToCart = (item) =>{
            setcartItems((prevCartItem)=>{
                const isAlreadyIncart = prevCartItem.some((cartItems)=>cartItems.title ===item.title);
                if(isAlreadyIncart){
                    return prevCartItem.map((cartItems)=>
                    cartItems.title === item.title?
                {...cartItems,quantity:cartItems.quantity+1}
                :cartItems);
                }
                return[...prevCartItem,{...item,quantity:1}]
        });
    }

        return (
            <div className="WishlistContainer">
                <div className="privateWishlist">
                    <h2>Your Wish List</h2>
                    <p>private</p>
                </div>
                <div className="vl"></div>
                <div className="publicWishlist">
                    <h1>Your Wish List</h1>
                    <p>public</p>
                    <div className="container">
                        {WishListItems.map((item, index) => (
                            <div key={index} className="item-container">
                                <div > 
                                    <img src={item.picture} alt={item.title} />
                                    <p>{item.title}</p>
                                    <p>₹{item.price}.00</p>
                                    <button className="addToCart" onClick={() => addToCart(item)}>Add to Cart</button>
                                </div>  
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
        
    }