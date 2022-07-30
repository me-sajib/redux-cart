import React from "react";
import { addToCart } from "../redux/actions/cartAction";
import { connect } from "react-redux";
import Products from "./Products";

const Shop = (props) => {
  const { products, addToCart } = props;

  return (
    <div>
      <h2>Our Best Products</h2>
      {products.map((product) => (
        <Products key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
