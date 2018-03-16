import React, { Component } from 'react';

export default class AddForm extends Component {

  state = { text: '' };
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onEdit(event.target.elements.name.value);
    this.props.onEdit(event.target.elements.animal.value);
    this.props.onEdit(event.target.elements.description.value);
  };

  render() {

    return (
      <div>
        <h2>Add A Pet</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Pet's name: <input name="name"/>
          </label>
          <label htmlFor="animal">
            Animal: <input name="animal"/>
          </label>
          <label htmlFor="description">
            Description: <input name="description"/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}