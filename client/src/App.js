import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='app'>
        <Navbar />
        <div className='container-fluid' id='container'>
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
