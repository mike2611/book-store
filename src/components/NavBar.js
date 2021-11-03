import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-light bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" class="nav-link">Books</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" class="nav-link">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default (NavBar);
