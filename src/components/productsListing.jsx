import React from "react";
import { PRODUCTS_LIST } from "./products";

export default function ProductsListing(props) {
  const { setCart, cart } = props;
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ul>
      {PRODUCTS_LIST?.map((item, index) => (
        <li key={index} onClick={() => addToCart(item)} className="product_box">
          <img src={item.image} />
          <div className="item_name">{item.name}</div>
        </li>
      ))}
    </ul>
  );
}
