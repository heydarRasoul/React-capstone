import { useState } from "react";

export default function SortingProducts({ onSortChange }) {
  const [sortByType, setSortByType] = useState("id");
  const [sortByOrder, setSortByOrder] = useState("ascending");

  const handleSortChange = (typeOfSort, value) => {
    if (typeOfSort === "type") {
      setSortByType(value);
    } else {
      setSortByOrder(value);
    }

    onSortChange({
      type: typeOfSort === "type" ? value : sortByType,
      order: typeOfSort === "order" ? value : sortByOrder,
    });
  };

  return (
    <div className="sorting-box-wrapper">
      <select
        className="sorting-box"
        value={sortByType}
        onChange={(e) => handleSortChange("type", e.target.value)}
      >
        <option value="id">ID</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="category">Category</option>
      </select>

      <select
        className="sorting-box"
        value={sortByOrder}
        onChange={(e) => handleSortChange("order", e.target.value)}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}
