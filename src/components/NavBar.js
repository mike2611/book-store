import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-white d-flex justify-content-center justify-content-md-start">
    <ul className="navbar-nav d-flex align-items-baseline">
      <li className="navbar-brand ms-md-5">
        <h1 className="navTitle">Bookstore CMS</h1>
      </li>
      <li className="nav-item mx-auto">
        <Link to="/" className="nav-link navBooks">Books</Link>
      </li>
      <li className="nav-item mx-auto">
        <Link to="/categories" className="nav-link">Categories</Link>
      </li>
    </ul>
    <FaUserAlt className="navIcon ms-auto me-5 d-none d-md-flex" />
  </nav>
);

export default (NavBar);
