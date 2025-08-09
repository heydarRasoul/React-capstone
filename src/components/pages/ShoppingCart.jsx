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
    <div>
      <BackButton />
      <div className="shopping-cart-container">
        {cart.length === 0 ? (
          <p className="empty-shopping-cart-message">
            Your shoping cart is empty
          </p>
        ) : (
          <div className="shopping-cart-wrapper">
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div className="product-info-wrapper">
                    <div>
                      <img src={item.image} alt={item.title} width={100} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <h3>
                        ${item.price} × {item.quantity} = $
                        {item.price * item.quantity}
                      </h3>
                      <UpdateShoppingCart product={item} type="shoppingCart" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="checkout-wrapper">
              <ul>
                <li>Subtotal: ${sub.toFixed(2)}</li>
                <li>Shipping: $ {shipping}</li>

                <li>Total: $ {sub + shipping}</li>
              </ul>

              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        )}
        <MessageModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          id="checkout"
        />
      </div>
    </div>
  );
}
