import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, setCart, totalPrice } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <Link className="fill-cart" to="/products">
            fill it
          </Link>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div>
        <div className="footer-btns">
          <Link className="to-cart" to="/products">
            continue shopping
          </Link>
          <button className="btn clear-btn" onClick={() => setCart([])}>
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
