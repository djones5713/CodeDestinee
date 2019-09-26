import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ArticulesPage from './components/ArticulesPage';
import './App.css';


function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/articule/:id" component={ArticulesPage} />
      </Fragment>
    </Router>
  );
}

export default App;
