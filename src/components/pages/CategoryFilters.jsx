export default function CategoryFilters({ filters, onChange }) {
  return (
    <div className="category-filter">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          name="menClothing"
          checked={filters.menClothing}
          onChange={onChange}
        />
        <span className="checkmark" />
        Men's Clothing
      </label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          name="jewelery"
          checked={filters.jewelery}
          onChange={onChange}
        />
        <span className="checkmark" />
        Jewelery
      </label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          name="electronics"
          checked={filters.electronics}
          onChange={onChange}
        />
        <span className="checkmark" />
        Electronics
      </label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          name="womenClothing"
          checked={filters.womenClothing}
          onChange={onChange}
        />
        <span className="checkmark" />
        Women's clothing
      </label>
    </div>
  );
}
