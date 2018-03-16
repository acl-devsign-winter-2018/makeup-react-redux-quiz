import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Pet from './Pet';
import Pets from './Pets';

// function mapStateToProps(store, props) {
//   return {

//   };
// }

class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <main>
            <Switch>
             
              <Route exact path="/" component={Pets}/>
              <Route exact path="/Pets" component={Pet}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </Router>
      </div>
    );
      
  }
}

export default (connect()(App));
// mapStateToProps