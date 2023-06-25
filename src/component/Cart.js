import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, resetItem } from "../actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
        className="green"
      >
        Add Item to Cart
      </button>
      <button
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
        className="red"
      >
        Remove Item from Cart
      </button>

      <button
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(resetItem());
        }}
        className="red"
      >
        Reset Item
      </button>
    </div>
  );
};

export default Cart;
