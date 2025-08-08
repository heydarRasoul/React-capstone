import { React, useContext, useState } from "react";
import { AddToCartContext } from "./CartContext";

import BackButton from "./BackButton";
import UpdateShoppingCart from "./UpdateShoppingCart";
import MessageModal from "./MessageModal";

export default function ShoppingCart() {
  const { cart, removeAllFromCart } = useContext(AddToCartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    removeAllFromCart();
  };

  const subTotalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const sub = subTotalPrice;
  const shipping = sub > 50 ? 0 : 7;
  const Total = shipping + sub;

  return (
    <div className="shopping-cart-wrapper">
      <BackButton />
      {cart.length === 0 ? (
        <p>Your shoping cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} width={100} />
                <h3>{item.title}</h3>
                <h3>{item.description}</h3>
                <h3>
                  ${item.price} × {item.quantity} = $
                  {item.price * item.quantity}
                </h3>
                <UpdateShoppingCart product={item} type="shoppingCart" />
              </li>
            ))}
          </ul>
          <ul>
            <li>Subtotal: ${sub.toFixed(2)}</li>
            <li>Shipping: $ {shipping}</li>

            <li>Total: $ {sub + shipping}</li>
          </ul>

          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
      <MessageModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        id="checkout"
      />
    </div>
  );
}
