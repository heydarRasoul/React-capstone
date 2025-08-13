import { useContext, useState } from "react";

import { AddToCartContext } from "./CartContext";
import MessageModal from "../modals/MessageModal";

export default function UpdateShoppingCart({ product, type }) {
  const { addToCart, updateQuantity, removeFromCart } =
    useContext(AddToCartContext);
  const [confirm, setConfirm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleConfirm = () => {
    setConfirm(true);
  };

  const removeItemFromCart = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="update-buttons-wrapper">
      <button
        className="update-qountity-button"
        onClick={() => updateQuantity(product.id, "decrease")}
      >
        -
      </button>
      {type === "shoppingCart" ? (
        <div>
          <button className="remove-button" onClick={removeItemFromCart}>
            Remove
          </button>
          <MessageModal
            handleRemove={() => removeFromCart(product.id)}
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            id="removing-item"
          />
        </div>
      ) : (
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      )}
      <button
        className="update-qountity-button"
        onClick={() => updateQuantity(product.id, "increase")}
      >
        +
      </button>
    </div>
  );
}
