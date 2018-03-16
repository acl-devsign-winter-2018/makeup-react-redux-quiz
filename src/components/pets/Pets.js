import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPet } from './actions';
import PetForm from './PetForm';
import Pet from './Pet';

class Pets extends Component {
  
  componentDidMount() {
    this.props.addPet({ text: 'Dog' });
    this.props.addPet({ text: 'Fish' });
    this.props.addPet({ text: 'Cat' });
    this.props.addPet({ text: 'Frog' });
  }

  render() {
    const { pets, addPet } = this.props;
    return (
      <div>
        <div>
          <p>Add new Pet:</p>
          <PetForm onEdit={addPet}/>
        </div>
        <ul>
          {pets.map(pet => <Pet key={pet.id} {...pet}/>)}
        </ul>
      </div>);
  }
}

export default connect(
  state => ({ pets: state }),
  { addPet }
)(Pets);