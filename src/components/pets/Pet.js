import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetForm from './PetForm';

class Pet extends Component {

  state = {
    editing: false
  };

  render() {
    const { id, text } = this.props;

    return (
      <li className="category-li">
        {
          <PetForm id={id} text={text} onEdit={this.handleEdit}/>
        }
      </li>
    );
  }
}

export default connect(
  null
)(Pet);