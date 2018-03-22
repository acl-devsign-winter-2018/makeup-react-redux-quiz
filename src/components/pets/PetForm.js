import React, { Component } from 'react';

export default class PetForm extends Component {

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

    this.setState({ text: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit = {this.handleSubmit} className="add-pet">
          <label htmlFor="pet">
            <input required id="pet" name="text" value={text} onChange={this.handleChange} placeholder="ex: Cat"/>
          </label>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}