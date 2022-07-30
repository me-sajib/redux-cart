import React from "react";
import { removeToCart } from "../redux/actions/cartAction";
import { connect } from "react-redux";

const Cart = (props) => {
  const { cart, removeToCart } = props;
  console.log(cart);
  return (
    <div>
      <h2>Add items to cart: {cart.length}</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.cartId}>
            {item.name} |{" "}
            <button onClick={() => removeToCart(item.cartId)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeToCart: removeToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
