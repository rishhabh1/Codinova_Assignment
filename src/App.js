import { useState } from "react";
import Cart from "./components/cart";
import ProductsListing from "./components/productsListing";

function App() {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((acc, item) => acc + parseInt(item.price), 0);

  console.log(total);

  return (
    <div className="wrapper">
      <div className="cart_section">{/* <Cart /> */}</div>
      <div className="products_section">
        <ProductsListing setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
