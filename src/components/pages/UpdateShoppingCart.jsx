import { useContext, useState } from "react";

import { AddToCartContext } from "./CartContext";

export default function UpdateShoppingCart({ product, type }) {
  const { addToCart, updateQuantity, removeFromCart } =
    useContext(AddToCartContext);

  return (
    <div>
      <button onClick={() => updateQuantity(product.id, "decrease")}>-</button>
      {type === "shoppingCart" ? (
        <button onClick={() => removeFromCart(product.id)}>Remov</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to cart</button>
      )}
      <button onClick={() => updateQuantity(product.id, "increase")}>+</button>
    </div>
  );
}
