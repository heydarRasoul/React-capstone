import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import verticalLogo from "../../assets/icons/vertical-logo.png";
import UpdateShoppingCart from "../helper/UpdateShoppingCart";
import { AddToCartContext } from "../helper/CartContext";
import CategoryFilters from "../helper/CategoryFilters";
import SortingProducts from "../helper/SortingProducts";
import BackButton from "../helper/BackButton";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useState({
    menClothing: true,
    jewelery: true,
    electronics: true,
    womenClothing: true,
  });

  const [sortType, setSortType] = useState("id");
  const [sortOrder, setSortOrder] = useState("ascending");

  const { addToCart } = useContext(AddToCartContext);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSortChange = ({ type, order }) => {
    setSortType(type);
    setSortOrder(order);
  };

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

  const getVisibleProducts = () => {
    const filtered = products.filter((product) => {
      if (filters.menClothing && product.category === "men's clothing")
        return true;
      if (filters.electronics && product.category === "electronics")
        return true;
      if (filters.jewelery && product.category === "jewelery") return true;
      if (filters.womenClothing && product.category === "women's clothing")
        return true;
      return false;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (a[sortType] < b[sortType]) return sortOrder === "ascending" ? -1 : 1;
      if (a[sortType] > b[sortType]) return sortOrder === "ascending" ? 1 : -1;
      return 0;
    });

    return sorted;
  };

  return (
    <div className={`products-wrapper ${isOpen ? "menu-open" : ""}`}>
      {loading && (
        <p className="loading-message">
          Loading...
          <FontAwesomeIcon icon={faSpinner} spin />
        </p>
      )}

      {!loading && (
        <>
          <BackButton className="back-button" />

          <button
            className="filter-menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "Close" : "Filter"}
          </button>
          <div
            className={`left-menu-wrapper ${isOpen ? "visible" : ""}`}
            onReset={() => setIsOpen(false)}
          >
            <div className="filter-sort-wrapper">
              <CategoryFilters
                filters={filters}
                onChange={handleFilterChange}
              />
              <SortingProducts onSortChange={handleSortChange} />

              <div className="logo-wrapper">
                <img className="vertical-logo" src={verticalLogo} />
              </div>
            </div>
          </div>

          <div className="product-list">
            {getVisibleProducts().map((product) => (
              <div key={product.id} className="product-card">
                <NavLink
                  className="nav-link"
                  to={`/singleproduct/${product.id}`}
                >
                  <div className="card-items">
                    <div className="products-img-wraper">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <h4>{product.title}</h4>
                    <p>${product.price}</p>
                  </div>
                </NavLink>
                <UpdateShoppingCart
                  product={product}
                  type="ProductsPage"
                  className="update-shoping"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
