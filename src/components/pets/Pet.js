import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { removePet } from './actions';

class Pet extends Component {

  render() {
    const { name, animal, description, removePet } = this.props;
    return (
      <div>
        <Fragment>
          <li className="pet">
            <h3>{name}</h3>
            <p>{animal}</p>
            <p>{description}</p>
            <button onClick={removePet}>X</button>
          </li>
        </Fragment>
      </div>
    );
  }
}

export default connect(
  state => ({ pets: state.pets }),
  { removePet }
)(Pet);