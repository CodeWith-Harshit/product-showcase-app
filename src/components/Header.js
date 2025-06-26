import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <header className="header">
      <h1 className="logo">Product Showcase</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
export default Header