import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadPets, addPet } from './actions';
import AddPet from '../addPet/AddPet';
import Pet from './Pet';

class Pets extends Component {

  // componentDidMount() {
  //   this.props.loadPets();
  // }

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
  { loadPets, addPet }
)(Pets);