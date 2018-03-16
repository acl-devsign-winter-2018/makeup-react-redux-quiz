import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePet } from './actions';

class PetItem extends Component {

  render() {
    const { id, name, animal, description } = this.props;

    return (
      <div>
        <h3>{name} the {animal}</h3>
        <p>{description}</p>
        <button onClick={() => removePet(id)}>✖</button>
      </div>
    );
  }
}

export default connect(
  null,
  { removePet }
)(PetItem);