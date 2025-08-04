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

  return (
    <AddToCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
}
