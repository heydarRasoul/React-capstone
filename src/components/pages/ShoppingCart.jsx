import { useContext, useState } from "react";
import { AddToCartContext } from "./CartContext";
import BackButton from "./BackButton";
import UpdateShoppingCart from "./UpdateShoppingCart";
import MessageModal from "./MessageModal";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useContext(AddToCartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleCheckout = () => {
  //   e.preventDefault();
  //   {
  //     cart.map((item) => {
  //       setCart((prev) => prev.filter((item) => item.id !== productId));
  //     });
  //   }
  //   setIsModalOpen(true);
  // };

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
                  ${item.price} × {item.quantity}
                </h3>
                <UpdateShoppingCart product={item} type="shoppingCart" />
              </li>
            ))}
          </ul>
          {/* <button onClick={() => removeFromCart(item)}>Checkout </button> */}

          <MessageModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            Type="shopping-cart"
          />
        </div>
      )}
    </div>
  );
}
