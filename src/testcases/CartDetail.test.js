import React from "react";
import { render } from "@testing-library/react";
import CartDetail from "./CartDetail";

test("renders cart details correctly", () => {
  const cart = [{ name: "Light", price: "130", quantity: 2 }];
  const calculateGrandTotal = jest.fn(() => 260);
  const vatPercentage = 10;
  const discountPercentage = 5;
  const calculateTotalQuantity = jest.fn(() => 2);
  const setShowCart = jest.fn();

  const { getByText } = render(
    <CartDetail
      cart={cart}
      calculateGrandTotal={calculateGrandTotal}
      vatPercentage={vatPercentage}
      discountPercentage={discountPercentage}
      calculateTotalQuantity={calculateTotalQuantity}
      setShowCart={setShowCart}
    />
  );

  expect(getByText("Light")).toBeInTheDocument();
  expect(getByText("2")).toBeInTheDocument();
  expect(getByText("260.00 INR")).toBeInTheDocument();
});
