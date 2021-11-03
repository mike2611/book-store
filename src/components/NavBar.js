import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';

const NavBar = () => (
  <Router>
    <div>
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
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default (NavBar);
