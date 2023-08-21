import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductsListing from "./ProductsListing";

test("clicking on a product adds it to the cart", () => {
  const setCart = jest.fn();
  const cart = [];

  const { getByText } = render(
    <ProductsListing setCart={setCart} cart={cart} />
  );
  const productName = "Light";
  const addButton = getByText(productName);

  fireEvent.click(addButton);

  expect(setCart).toHaveBeenCalledTimes(1);
  expect(setCart).toHaveBeenCalledWith([
    {
      name: productName,
      price: "130",
      image: "/assets/images/Light.jpg",
      quantity: 1,
    },
  ]);
});
