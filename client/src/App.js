import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Products from './components/products/Products';
import Product from './components/products/Product';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='app'>
        <Navbar />

        <div className='container-fluid' id='container'>
          <Landing />
          <Switch>
            <Route exact path='/' component={Products} />
            <Route path='/products/:id' component={Product} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
