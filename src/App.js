import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import configureStore from './redux/configureStore';

const App = () => {
  const store = configureStore;
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
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
    </Provider>
  );
};

export default App;
