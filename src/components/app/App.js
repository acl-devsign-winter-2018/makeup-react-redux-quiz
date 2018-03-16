import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PetForm from '../pet/PetForm';



export default class App extends Component {


  render() {

    return (
      <Router>
        
        <main id="main" role="main">
          <div><p>HELLO</p></div>
          {/* <div><PetForm/></div> */}
          {/* <Switch> */}
          {/* <Route exact path="/" component={PetForm}/> */}
          {/* <Route path="/pets/:id" component={Images}/>
        <Redirect to="/"/>  */}
          {/* </Switch> */}

        </main>
 
      </Router>
    );
  }
}



