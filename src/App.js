import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
// import Articules from './components/Articules';
// import ArticulePage from './components/ArticulePage';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Articules} />
        <Route exact path="/book/:id" component={ArticulePage} /> */}
      </Fragment>
    </Router>
  );
}

export default App;
