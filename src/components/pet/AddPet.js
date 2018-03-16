import React, { Component } from 'react';
import './pets.css';

export default class AddPet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
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
    const { id, name, animal, description } = this.state;
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          
          <label htmlFor="name"> Name:
          <input required id="name" name="name" value={name} onChange={this.handleChange} placeholder="ex: Greg"/>
          </label>

          <label htmlFor="animal"> Animal: 
          <input required id="animal" name="animal" value={animal} onChange={this.handleChange} placeholder="ex: Bobcat"/>
          </label>

          <label htmlFor="description"> Description:
          <input required id="description" name="description" value={description} onChange={this.handleChange} placeholder="ex: Eat"/>
          </label>

          <button type="submit">{ id ? 'Update Category' : 'Add' }</button>
        </form>
      </div>
    );
  }
}