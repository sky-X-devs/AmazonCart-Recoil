import React from "react"
import shoppingCart from '../assets/shopping-cart.png';
import Wishlist from "./WishList";
import { RecoilRoot } from "recoil";
import AmazonCart from "./AmazonCart";

function NavigationBar(){

    return(
        <div>
            <div style={{backgroundColor:"gray",display:"flex",justifyContent:"space-between"}}>
                <h1><a style={{textDecoration:"none",color:"black"}} href="/">amazon.in</a></h1>
                <div style={{display:"flex"}}>
                    <h1>Hello,User</h1>
                    <a href="/" ><img src={shoppingCart}
                    style={{height:"60px",width:"70px",padding:"0 10px",paddingTop:"5px"}} alt="shopping" /></a>     
                </div>
            </div>
            <RecoilRoot>
                <Wishlist/>    
                <AmazonCart/>
            </RecoilRoot>
            
        </div>

    )
}
export default NavigationBar;