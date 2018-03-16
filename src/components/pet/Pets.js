import React, { PureComponent } from 'react';
import './pets.css';
import { connect } from 'react-redux';
import { addPet } from './actions';
import AddPet from './AddPet';
import Pet from './Pet';

class Pets extends PureComponent {

  componentDidMount() {
    this.props.addPet({ name: 'Chewy', animal: 'Unicorn', description: 'Likes to eat' });
  }

  render() { 
    const { pets, addPet } = this.props;
    
    return (
      <section className="main-container maxwidth-wrap">
        <div>
          <div>
            <p className="create-title">Create new pet:</p>
            <AddPet onEdit={addPet}/>
          </div>
          <ul className="pet-ul">
            {pets.map(pet => <Pet key={pet.id} {...pet}/>)}
          </ul>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({ pets: state.pets }),
  { addPet }
)(Pets);