import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import AddToShoppingNow from "./UpdateShoppingCart";
import TruncateDescription from "./TruncateDescription";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

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
    <div className="product-container">
      {loading && (
        <p className="loading-message">
          Loading...
          <FontAwesomeIcon icon={faSpinner} spin />
        </p>
      )}
      {!loading && product && (
        <>
          <BackButton />
          <div className="product-wrapper">
            <div className="product-info-wrapper">
              <h3>{product.title}</h3>
              <TruncateDescription text={product.description} />
              <div className="product-info">
                <h5>{product.category}</h5>
                <h5>Rate: {product.rating.rate}</h5>
                <h5>Reviews: {product.rating.count}</h5>
              </div>
              <p>${product.price}</p>
              <AddToShoppingNow product={product} />
            </div>
            <div className="img-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-img"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
