import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AddToCartContext } from "./CartContext";
import CategoryFilters from "./CategoryFilters";
import BackButton from "./BackButton";
import UpdateShoppingCart from "./UpdateShoppingCart";
import SortingProducts from "./SortingProducts";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="products-wrapper">
      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <BackButton />
          <div className="filter-sort-wrapper">
            <CategoryFilters filters={filters} onChange={handleFilterChange} />
            <SortingProducts onSortChange={handleSortChange} />
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
