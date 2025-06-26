import './Sort.css'


function Sort({ setSort }) {
  return (
    <div className="sort-options">
      <label>Sort By:</label>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}
export default Sort