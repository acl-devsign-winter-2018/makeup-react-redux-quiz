import React, { PureComponent } from 'react';
import Pet from './Pet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css';

class Pets extends PureComponent {


  render() {
    return (
      <section>
        <h1>Happy Pets</h1>
        <ul className="navigation">
          <li><Link to="/">Pets</Link></li>
          <li><Link to="/About">Pet Page</Link></li>
        </ul>
        <footer>
          <small>(c) redux quiz</small>
        </footer>
      </section>
    );
  }
}

export default connect (
  null
)(Pets);