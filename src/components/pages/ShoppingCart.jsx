import { React, useContext, useState } from "react";

import onePlaceLogo from "../../assets/icons/one-place-logo.png";
import verticalLogo from "../../assets/icons/vertical-logo.png";
import UpdateShoppingCart from "../helper/UpdateShoppingCart";
import { AddToCartContext } from "../helper/CartContext";
import MessageModal from "../modals/MessageModal";

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
      <div className="shopping-cart-container">
        {cart.length === 0 ? (
          <div className="empty-shopping-cart-wrapper">
            <p className="empty-shopping-cart-message">
              <img className="horizantl-logo" src={onePlaceLogo} />
              Your shoping cart is empty
            </p>
          </div>
        ) : (
          <div className="shopping-cart-wrapper">
            <div className="checkout-content-wrapper">
              <img className="vertical-logo" src={verticalLogo} />
              <img className="one-logo" src={onePlaceLogo} />
              <div className="checkout-info-wrapper">
                <h4>Subtotal: ${sub.toFixed(2)}</h4>
                <h4>Shipping: $ {shipping}</h4>
                <h4>Total: $ {(sub + shipping).toFixed(2)}</h4>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>

            <div>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div className="product-info-wrapper">
                      <div>
                        <img
                          className="shopping-product-img"
                          src={item.image}
                          alt={item.title}
                          width={100}
                        />
                      </div>
                      <div className="product-title">
                        <h4>{item.title}</h4>

                        <h4>
                          ${item.price} × {item.quantity} = $
                          {item.price * item.quantity}
                        </h4>
                        <UpdateShoppingCart
                          product={item}
                          type="shoppingCart"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
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
