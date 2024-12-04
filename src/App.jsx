import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar"; 
import AmazonCart from "./components/AmazonCart";
import Wishlist from './components/WishList';
import { RecoilRoot } from "recoil";
function App() {
    return (
      <RecoilRoot>
        <Router>
            <NavigationBar />
            <Routes>
              <Route path="/" element= {<Wishlist />}/>
              <Route path="amazon/cart"element={<AmazonCart/>}/>
            </Routes> 
          </Router>
      </RecoilRoot>
    );
}

export default App;
