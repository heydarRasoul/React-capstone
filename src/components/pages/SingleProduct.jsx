import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { AddToCartContext } from "./CartContext";
import BackButton from "./BackButton";
import AddToShoppingNow from "./UpdateShoppingCart";
import TruncateDescription from "./TruncateDescription";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // const { addToCart } = useContext(AddToCartContext);

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
          <BackButton />
          <div>
            <img src={product.image} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <h4>{product.category}</h4>
            <h5>Rate: {product.rating.rate}</h5>
            <h5>Reviews: {product.rating.count}</h5>

            <TruncateDescription text={product.description} />
            <p>${product.price}</p>
            <AddToShoppingNow product={product} />
          </div>
        </>
      )}
    </div>
  );
}
