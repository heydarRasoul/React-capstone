import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AddToCartContext } from "./CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(AddToCartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-wrapper">
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <NavLink to={`/singleproduct/${product.id}`}>
                  <img src={product.image} alt={product.title} width={100} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <p>{product.category}</p>
                </NavLink>
                <button onClick={() => addToCart(product)}>Add to cart</button>
                <button>Shop Now</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
