import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadPet } from './actions';
import PetItems from './PetItems';

class PetDetail extends PureComponent {

  componentDidMount() {
    const { id, loadPet } = this.props;
    loadPet(id);
  }

  render() {
    const { pets } = this.props;
    const { name } = pets;

    return (
      <div>
        <h4>{name}</h4>
        <PetItems/>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    pets: state.pets,
    id: props.match.params.id
  }),
  { loadPet }
)(PetDetail);
