import React, { useState } from "react";
import { constSelector, useRecoilState, useRecoilValue } from "recoil";
import { cartItemsState } from "../store/cartItemsState";
import '../AmazonCart.css';
import check from '../assets/check.png';
import cartTotalSelector from '../store/cartTotalSelector';
import './success.css';

function PurchaseSuccessFul({ Amount, isPurchase, setIsPurchse }) {

    return (
        <>
            {/* Full-screen overlay with blur effect */}
            <div 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
                    zIndex: 999, // Ensure it's behind the modal but above other content
                    backdropFilter: 'blur(10px)' // Blur effect on the background
                }}
            />
            {/* Modal Content */}
            <div
                style={{
                    background: 'white',
                    position: 'fixed',
                    borderRadius: '10px',
                    width: '80%',
                    maxWidth: '500px',
                    minHeight: '200px',
                    paddingLeft: '2%',
                    zIndex: 1000, // Modal content above the overlay
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    padding: '20px'
                }}
            >
                <h1>Purchase Successful!</h1>
                <img 
                    style={{ width: '80px' }} 
                    src={check} 
                    alt="check" 
                />
                <p>Thank you for your purchase. Your order has been successfully processed.</p>
                <h1>Total Amount: ₹{Amount}.00</h1>
                <button
                    onClick={() => setIsPurchse(!isPurchase)}
                    className="close-button"
                >
                    Close
                </button>
            </div>
        </>
    );
}

    export default function AmazonCart(){

        const [ isPurchase , setIsPurchse ] = useState(false);
        const [cartItems,setcartItems ]  = useRecoilState(cartItemsState);
        const oderDetail = useRecoilValue(cartTotalSelector);
        
        const addQ = (item)=>{
            setcartItems((prevItem)=>{
                return prevItem.map((cartItems)=>
                    item.title === cartItems.title ?{...cartItems,quantity:cartItems.quantity+1}:cartItems);
            })
        }

        const removeQ = (item)=>{
            setcartItems((prevItem)=>{
                return prevItem.map((cartItems)=>
                    item.title === cartItems.title ? (item.quantity > 1 ?
                 {...cartItems,quantity:item.quantity-1}:cartItems):cartItems);
            })
        }
        
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
                                        <button onClick={()=>{removeQ(item)}} style={{padding:" 1px 8px",alignContent:"center",fontSize:"20px"}} > - </button>
                                        <span style={{margin:"4px"}}x>{item.quantity}</span>
                                        <button onClick={()=>addQ(item)} style={{padding:" 1px 8px",alignContent:"center",fontSize:"20px"}}> + </button>
                                    </div>
                                            
                                </div>   
                                <div className="hl"></div>  
                            </div>
                        ))} 
                    </div>
                           
                        
                </div>
                {isPurchase &&<PurchaseSuccessFul Amount={oderDetail.totalAmount} isPurchase={isPurchase} setIsPurchse={setIsPurchse}/>}
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
                        <button onClick={function(){
                            if(oderDetail.totalAmount!=0){
                                setIsPurchse(!isPurchase);
                                setcartItems([]);
                            }else{window.alert("Cart is empty")}
                        }}
                        className="ptb-button" >Proceed to Buy</button>
                </div>
        </div>)
        
    }
