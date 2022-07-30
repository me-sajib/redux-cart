import React from "react";

const Products = (props) => {
  const { addToCart } = props;
  const { id, name, price } = props.product;
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={() => addToCart(id, name)}>Add Product</button>
    </div>
  );
};

export default Products;
