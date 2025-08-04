import { useContext, useState } from "react";
import { AddToCartContext } from "./CartContext";

export default function ShoppingCart() {
  const { cart } = useContext(AddToCartContext);

  return (
    <div className="shopping-cart-wrapper">
      {cart.length === 0 ? (
        <p>Your shoping cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} width={100} />
              <h3>{item.title}</h3>
              <h3>{item.description}</h3>
              <h3>
                ${item.price} × {item.quantity}
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
