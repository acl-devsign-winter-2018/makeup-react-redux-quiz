import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPet } from './actions';
import PetItem from './PetItem';

class PetItems extends Component {

  componentDidMount() {
    const { id, loadPet } = this.props;
    loadPet(id);
  }

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