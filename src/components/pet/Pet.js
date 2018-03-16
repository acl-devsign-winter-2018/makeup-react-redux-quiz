import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePet } from './actions';

class Pet extends Component {
  render() {
    const { animal, petId, description, removePet, name } = this.props;
    
    
    return (
      <li>
        <figure className="cell">
          
          <p>Pet: {name}</p>
          <p>Animal: {animal}</p>
          <figcaption>{description}</figcaption>
          
        
          <button onClick={()=> removePet(petId)}>REMOVE</button>
        </figure>
      </li>
    );
  }
}



export default connect(
  state => state, 
  { removePet }
)(Pet);
