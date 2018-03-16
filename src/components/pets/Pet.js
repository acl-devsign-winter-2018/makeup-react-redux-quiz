import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Pet extends Component {


  // componentDidMount() {
  //   this.props.loadSupplies();
  // }

  render() {
    const { name, completed, date } = this.props;
    return (
      <div>
        <Fragment>
          <li className="pet">
            {completed ? null : 
              <div>
                {name} added on {date}
              </div>
            }
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