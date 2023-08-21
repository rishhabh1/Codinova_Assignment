import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

test("increasing quantity updates cart", () => {
  const setCart = jest.fn();
  const cart = [{ name: "Light", price: "130", quantity: 2 }];

  const { getByText } = render(<Cart setCart={setCart} cart={cart} />);
  const increaseButton = getByText("+");

  fireEvent.click(increaseButton);

  expect(setCart).toHaveBeenCalledTimes(1);
  expect(setCart).toHaveBeenCalledWith([
    { name: "Light", price: "130", quantity: 3 },
  ]);
});

test("decreasing quantity updates cart", () => {
  const setCart = jest.fn();
  const cart = [{ name: "Light", price: "130", quantity: 3 }];

  const { getByText } = render(<Cart setCart={setCart} cart={cart} />);
  const decreaseButton = getByText("-");

  fireEvent.click(decreaseButton);

  expect(setCart).toHaveBeenCalledTimes(1);
  expect(setCart).toHaveBeenCalledWith([
    { name: "Light", price: "130", quantity: 2 },
  ]);
});
