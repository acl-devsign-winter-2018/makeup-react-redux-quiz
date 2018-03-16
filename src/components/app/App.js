import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PetForm from '../pet/PetForm';
import Pets from '../pet/Pets';
import Pet from '../pet/Pet';



class App extends Component {


  render() {

    return (
      <Router>
        
        <main id="main" role="main">
          <div><p>HELLO</p></div>
          {/* <div><PetForm/></div> */}
          <Switch>
            <Route exact path="/" component={Pets}/>
            <Route path="/pets/:id" component={Pet}/>
            <Redirect to="/"/>
          </Switch>

        </main>
 
      </Router>
    );
  }
}

// export default connect(
//   null, { PetForm }
// )(App);

