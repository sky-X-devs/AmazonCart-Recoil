import React from "react";
import { RecoilRoot } from "recoil";
import { wishItemsState } from "./store/wishItemsState";
import { cartItemsState } from "./store/cartItemsState";
import Wishlist from "./components/WishList";
import NavigationBar from "./components/Navbar";
function App(){
  return(
    <NavigationBar/>
  );
}
export default App;
