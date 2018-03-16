import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removePet } from './actions';
import { Link } from 'react-router-dom';
import PetDetail from './PetDetail';

class Pet extends PureComponent {

  render() {
    const { id, name, animal } = this.props;

    return (
      <li className="pet-li">
        <Link to={`/pets/${id}`}><h3>{name} the {animal}</h3></Link>
        {/* <p>{description}</p>
        <button onClick={() => removePet(id)}>✖</button> */}
        <PetDetail/>
      </li>
    );
  }
}

export default connect(
  null,
  { removePet }
)(Pet);