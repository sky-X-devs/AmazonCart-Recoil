import React from "react";
import { Link } from 'react-router-dom';
import shoppingCart from '../assets/shopping-cart.png';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="navbar">
            <h1>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    amazon.in
                </Link>
            </h1>
            <div style={{ display: "flex" }}>
                <h1>Hello, User</h1>
                <Link to="amazon/cart">   
                    <img
                        src={shoppingCart}
                        className="cart-icon"
                        alt="shopping"
                    />
                </Link>
            </div>
        </div>
    );
}

export default NavigationBar;
