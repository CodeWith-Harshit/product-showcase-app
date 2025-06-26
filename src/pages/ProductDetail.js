import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="detail-image" />
      <h2 className="detail-title">{product.title}</h2>
      <p className="detail-description">{product.description}</p>
      <p className="detail-price">INR{product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}
export default ProductDetail