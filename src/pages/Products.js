import React from "react";

const Products = ({ product }) => {
  const { id, name, price } = product;
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button>Add Product</button>
    </div>
  );
};

export default Products;
