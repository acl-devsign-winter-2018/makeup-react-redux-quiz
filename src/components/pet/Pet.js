import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removePet } from './actions';
import { Link } from 'react-router-dom';


class Pet extends PureComponent {

  render() {
    const { id, name, animal } = this.props;

    return (
      <li className="pet-li">
        <Link to={`/pets/${id}`}><h3>{name} the {animal}</h3></Link>
      </li>
    );
  }
}

export default connect(
  null,
  { removePet }
)(Pet);