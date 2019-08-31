import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/CodeDestinee/About" component={About} />
        <Route exact path="/CodeDestinee/Blog" component={Blog} />
        <Route exact path="/CodeDestinee/Contact" component={Contact} />
      </Fragment>
    </Router>
  );
}

export default App;
