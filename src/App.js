import React, { PureComponent } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import About from './components/About';

function mapStateToProps(store, props) {
  return {

  };
}

class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return <div className="app">

      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>

      <Route exact path="/" render={ () => <Home {...this.props} /> } />
      <Route exact path="/about" render={ () => <About {...this.props} /> } />

    </div>;
   
      
  }
}

export default withRouter(connect(mapStateToProps)(App));