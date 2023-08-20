import React from "react";
import { PRODUCTS_LIST } from "./products";

export default function ProductsListing(props) {
  const { setCart } = props;
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
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
