import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import FilterSideBar from '../components/FilterSideBar';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState('');
  const [filters, setFilters] = useState({ category: '', min: 0, max: 1000 });
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(res.data);
      setFiltered(res.data);
    });
  }, []);

  useEffect(() => {
    let data = [...products];
    if (filters.category) data = data.filter(p => p.category === filters.category);
    data = data.filter(p => p.price >= filters.min && p.price <= filters.max);
    if (sort === 'price-asc') data.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') data.sort((a, b) => b.price - a.price);
    if (sort === 'name') data.sort((a, b) => a.title.localeCompare(b.title));
    setFiltered(data);
  }, [filters, sort, products]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <Header />
      <div className="flex">
        <FilterSideBar setFilters={setFilters} />
        <div className="flex-1 p-4">
          <Sort setSort={setSort} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginated.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <Pagination currentPage={page} totalPages={Math.ceil(filtered.length / perPage)} onPageChange={setPage} />
        </div>
      </div>
    </div>
  );
}

export default Home