import { useState } from "react";
import Cart from "./components/cart";
import ProductsListing from "./components/productsListing";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="wrapper">
      <div className="cart_section">
        <Cart cart={cart} setCart={setCart} />
      </div>
      <div className="products_section">
        <ProductsListing setCart={setCart} cart={cart} />
      </div>
    </div>
  );
}

export default App;
