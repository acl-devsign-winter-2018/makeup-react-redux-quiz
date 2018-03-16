import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPet } from './actions';
import PetItem from './PetItem';

class PetItems extends Component {

  render() { 
    const { pets } = this.props;

    return (
      <ul>
        {pets.map(pet => <PetItem key={pet.id} {...pet}/>)}
      </ul>
    );
  }
}

export default connect(
  state => ({ pets: state.pets }),
  { loadPet }
)(PetItems);