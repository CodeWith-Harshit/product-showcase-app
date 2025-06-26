
import { Link } from 'react-router-dom';
import './ProductCard.css'


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">INR{product.price}</p>
        <p className="product-rating">{product.rating.rate}</p>
      </Link>
    </div>
  );
}

export default ProductCard