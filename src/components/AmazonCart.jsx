import React, { useEffect } from "react";
import {   useRecoilState, useRecoilValue } from "recoil";
import { cartItemsState } from "../store/cartItemsState";
import '../AmazonCart.css';
import cartTotalSelector from '../store/cartTotalSelector'

    export default function AmazonCart(){
        const[ cartItems,setcartItems ] = useRecoilState(cartItemsState);
        const oderDetail = useRecoilValue(cartTotalSelector);
        
        
        return(
            <div className="firstDiv">
                <div className="Cartcontainer">
                    <h1>Shopping Cart</h1>    
                    <div className="item-cart">
                        {cartItems.map((item,index)=>(
                            <div>
                                <div className="items" key={index}>
                                    <img src={item.picture} alt={item.title} />
                                    <div className="CartTitle">
                                        <h3>{item.title}</h3>
                                        <div className="amount">
                                            <h3 style={{color:"green"}}>In Stock</h3>
                                            <h3>₹{item.price *item.quantity}.00</h3>
                                        </div>    
                                        <button style={{padding:" 1px 8px",alignContent:"center",fontSize:"20px"}} > - </button>
                                        <span style={{margin:"4px"}}x>{item.quantity}</span>
                                        <button style={{padding:" 1px 8px",alignContent:"center",fontSize:"20px"}}> + </button>
                                    </div>
                                            
                                </div>   
                                <div className="hl"></div>  
                            </div>
                        ))} 
                    </div>
                           
                        
                </div>
                <div className="orderSummary">
                        <h1>Order Summary</h1>
                        <div className="sum">
                            <h4 style={{margin:'0',padding:'20px 0',fontSize:"25px"}}>Items({oderDetail.totalQantity})</h4 >
                            <h4>₹{oderDetail.totalAmount}.00</h4>
                        </div>
                        <div className="hl"></div>
                        <div className="sum">
                            <h3 style={{margin:'0',padding:'20px 0',fontSize:"25px"}}>Order Total:</h3>
                            <h3>₹{oderDetail.totalAmount}.00</h3>
                        </div>
                        <button style={{background:"#dab433",padding:"4px 30px",marginLeft:"30%"}}>Proceed to Buy</button>

                </div>
        </div>)
        
    }
    
