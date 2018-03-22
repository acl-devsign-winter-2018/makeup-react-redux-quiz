import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Pet extends PureComponent {

  // eventhandlers


  render() {

    return (
      <section>
        <ul className="navigation">
          <li><Link to="/">Pets</Link></li>
          <li><Link to="/About">Pet Page</Link></li>
        </ul>
      </section>
    );
  }
}

export default connect(

)(Pet);