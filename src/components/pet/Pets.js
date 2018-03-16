import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPet } from './actions';
// import Pet from './Pet';
import PetForm from './PetForm';
// loadPets

class Pets extends Component {

  render() {
    const { pets, addPet, id } = this.props;
    return (
      <div>

        <section>
          <PetForm onComplete={addPet}/>
        </section>

        <section className="grid">
          {/* <ul>
            {pets &&
          pets.map((pet, i) => <Pet key={i} {...pet} petId={this.props.id}/>)}
          </ul> */}
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({ pets: state.pets }),
  { addPet }
)(Pets);