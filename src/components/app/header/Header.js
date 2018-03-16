import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Header extends Component {

  render() { 
    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <Link to="/" className="no-line"><h1 className="logo">Title</h1></Link>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              {/* <Route path="/movies" render={() => <li>~</li>}/> */}
            </ul>
          </nav>
        </section> 
      </header>
    );
  }
}