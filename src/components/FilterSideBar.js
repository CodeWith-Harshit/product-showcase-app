import { useEffect, useState } from 'react';
import axios from 'axios';
import './FilterSideBar.css'


function FilterSideBar({ setFilters }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then(res => setCategories(res.data));
  }, []);

  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>
      <label>Category:</label>
      <select
        onChange={(e) =>
          setFilters((f) => ({ ...f, category: e.target.value }))
        }
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div className="price-range">
        <label>Min Price</label>
        <input
          type="number"
          onChange={(e) => setFilters((f) => ({ ...f, min: e.target.value }))}
        />
        <label>Max Price</label>
        <input
          type="number"
          onChange={(e) => setFilters((f) => ({ ...f, max: e.target.value }))}
        />
      </div>
    </aside>
  );
}
export default FilterSideBar