import React, { useState } from "react";
import { String_Constants } from "../utlits/constants/stringConstants";
import CartDetail from "./cartDetail";

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


  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [vatPercentage, setVatPercentage] = useState(0);
  const calculateDiscount = () => {
    return (calculateSubtotal() * discountPercentage) / 100;
  };

  const calculateVAT = () => {
    return (calculateSubtotal() * vatPercentage) / 100;
  };

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateVAT() - calculateDiscount();
  };






  const [showCart, setShowCart] = useState(false)


  // const

  return (
    <div className="cart_page">
      <table >
        <thead>
          <tr >
            <td className="del-btn"></td>
            <td >{String_Constants.products}</td>
            <td>{String_Constants.price}</td>
            <td>{String_Constants.qty}</td>
            <td>{String_Constants.total}</td>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="5"><span className="no-prod">{String_Constants.no_products}</span></td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr key={index} className="item_tr" >
                <td className="del-btn">
                  <button onClick={() => handleRemoveItem(index)}>
                    X
                  </button>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="qty_num">
                  <button onClick={() => handleDecreaseQuantity(index)}>
                    -
                  </button>
                  <span >{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(index)}>
                    +
                  </button>
                </td>
                <td>{(item.price * item.quantity).toFixed(2)} INR</td>
                {/* <td>{item.total}</td> */}

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
      <div className="cart-discount">
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
        % Discount: ${calculateDiscount().toFixed(2)}
      </div>
      <div className="cart-vat">
        <input
          type="number"
          value={vatPercentage}
          onChange={(e) => setVatPercentage(e.target.value)}
        />
        % VAT: ${calculateVAT().toFixed(2)}
      </div>
      <div className="cart-grand-total">
        Grand Total: ${calculateGrandTotal().toFixed(2)}
      </div>

      <div className="buttons">
        <span onClick={cancelbtn => { setCart([]) }}>CANCEL SALE</span>
        <span onClick={processbtn => { setShowCart(true) }}>PROCESS SALE</span>

      </div>


      {showCart && <CartDetail cart={cart} calculateGrandTotal={calculateGrandTotal} vatPercentage={vatPercentage} discountPercentage={discountPercentage} />}
    </div >
  );
}
