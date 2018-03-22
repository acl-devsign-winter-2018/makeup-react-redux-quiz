import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addPet } from './actions';
import AddPet from '../addPet/AddPet';
import Pet from './Pet';

class Pets extends Component {

  render() {
    const { pets, addPet } = this.props;

    return (
      <div className="pets">
        <AddPet onEdit={addPet}/>
        <Fragment>
          <ul className="pet-list">
            {pets.map(pet => <Pet key={pet.id} {...pet}/>)}
          </ul>
        </Fragment>
      </div>
    );
  }
}

export default connect(
  state => ({ pets: state.pets }),
  { addPet }
)(Pets);