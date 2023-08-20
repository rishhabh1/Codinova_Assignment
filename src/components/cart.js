import React, { useState } from "react";
import { String_Constants } from "../utlits/constants/stringConstants";

export default function Cart(props) {
  const { cart, setCart } = props;

  const handleIncreaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((totalQty, item) => totalQty + item.quantity, 0);
  };
  return (
    <div className="cart_page">
      <table>
        <thead>
          <tr>
            <td>{String_Constants.products}</td>
            <td>{String_Constants.price}</td>
            <td>{String_Constants.qty}</td>
            <td>{String_Constants.total}</td>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td>{String_Constants.no_products}</td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleDecreaseQuantity(index)}>
                    -
                  </button>
                  {item.quantity}
                  <button onClick={() => handleIncreaseQuantity(index)}>
                    +
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                {/* <td>{item.total}</td> */}
                <td>
                  <button onClick={() => handleRemoveItem(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="cart-subtotal">
        Subtotal: ${calculateSubtotal().toFixed(2)}
      </div>

      <div className="cart-total-quantity">
        Total Quantity: {calculateTotalQuantity()}
      </div>
      <div className="cart-amount"></div>
    </div>
  );
}
