import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartAction";

const initialState = {
  cart: [],
  products: [
    { id: 1, name: "Hino AC", price: 122 },
    { id: 2, name: "Asus AC", price: 122 },
    { id: 3, name: "Honda AC", price: 122 },
    { id: 4, name: "Hino AC", price: 122 },
    { id: 5, name: "Hino AC", price: 122 },
  ],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    case REMOVE_TO_CART:
      const remainingCart = state.cart.filter(
        (i) => i.cartId !== action.cartId
      );
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};

export default cartReducer;
