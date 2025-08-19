import { createContext, useState } from "react";

export const AddToCartContext = createContext();

export default function AddToCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, action, type) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== productId) return item;

          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          }

          if (action === "decrease") {
            const newQuantity = item.quantity - 1;
            if (type === "shoppingCart") {
              return newQuantity > 0
                ? { ...item, quantity: newQuantity }
                : item;
            } else {
              return newQuantity > 0
                ? { ...item, quantity: newQuantity }
                : null;
            }
          }

          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  return (
    <AddToCartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        removeAllFromCart,
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
}
