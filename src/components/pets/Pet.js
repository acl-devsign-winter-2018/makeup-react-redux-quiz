import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Pet extends Component {


  // componentDidMount() {
  //   this.props.loadSupplies();
  // }

  render() {
    const { name, animal, description } = this.props;
    return (
      <div>
        <Fragment>
          <li className="pet">
            <h3>{name}</h3>
            <p>{animal}</p>
            <p>{description}</p>
          </li>
        </Fragment>
      </div>
    );
  }
}

export default connect(
  state => ({ pets: state.pets }),
  null
)(Pet);