import React, { Component } from 'react';

export default class PetForm extends Component {

  state = {
    name: '',
    animal: '',
    description: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    });
     
    this.setState({
      name: '',
      animal: '',
      description: ''
         
    });
      
  };


  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  render() {
    const { name, animal, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          Name: 
          <input name="name" value={name} onChange={this.handleChange} placeholder="Enter name"/>

          Animal:
          <input name="animal" value={animal} onChange={this.handleChange} placeholder="Enter animal"/>
         
          Description:
          <input name="description" value={description} onChange={this.handleChange} placeholder="Enter description"/>

        </fieldset>
        <button type="submit">Add</button>
      </form>

      
    );
  }

}