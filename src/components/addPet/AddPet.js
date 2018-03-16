import React, { Component } from 'react';

export default class AddForm extends Component {

  state = { text: '' };
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onEdit(event.target.elements.name.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input name="name"/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}