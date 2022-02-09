import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    console.log(cart);
  };
  const removeCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  let totalPrice = cart.reduce((total, cartItem) => {
    const { price, qty } = cartItem;
    let itemPrice = price * qty;
    total += itemPrice;
    total = parseFloat(total.toFixed(2));
    return total;
  }, 0);

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        setCart,
        totalPrice,
        removeProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
