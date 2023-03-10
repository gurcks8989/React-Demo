import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShwon, setCartIsShown] = useState(false) ;

  const showCartHandler = () => {
    setCartIsShown(true) ;
  } ;

  const hideCartHandler = () => {
    setCartIsShown(false) ;
  } ;


  return (
    <CartProvider>
      {cartIsShwon && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
