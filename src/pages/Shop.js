import React from "react";
import Cart from "./Cart";
import Products from "./Products";

const Shop = () => {
  const products = [
    { id: 1, name: "Hino AC", price: 122 },
    { id: 2, name: "Asus AC", price: 122 },
    { id: 3, name: "Honda AC", price: 122 },
    { id: 4, name: "Hino AC", price: 122 },
    { id: 5, name: "Hino AC", price: 122 },
  ];

  return (
    <div>
      <Cart />
      <h2>Our Best Products</h2>
      {products.map((product) => (
        <Products key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
