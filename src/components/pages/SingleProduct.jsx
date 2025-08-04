import { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AddToCartContext } from "./CartContext";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  const { addToCart } = useContext(AddToCartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={{ margin: "300px" }}>
      {loading && <p>Loading...</p>}
      {!loading && product && (
        <>
          <button onClick={() => history.goBack()}>Back to Praducts</button>
          <div>
            <img src={product.image} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {/* can create seprate component for this 2 buttons and define functionality there and then i can add component to place i need. like what i did for email champion and change stage in prioritfy app */}
            <button onClick={() => addToCart(product)}>Add to cart</button>
            <button>Shop Now</button>
          </div>
        </>
      )}
    </div>
  );
}
