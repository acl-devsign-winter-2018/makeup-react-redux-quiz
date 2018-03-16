import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pets from '../pets/Pets';

class App extends Component {

  render() {

    return (
      <Router>
        <div id="container">
          <header id="header">
            <h1></h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pets">My Pets</Link></li>
              </ul>
            </nav>
          </header>
          <main id="main" role="main">
            <Switch>
              <Route exact path="/" component={Pets}/>
              <Route exact path="/pets" component={Pets}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer id="footer">
            <small>&copy; 2018 Charly Welch | React/redux Quiz</small>
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error
  }),
  null
)(App);