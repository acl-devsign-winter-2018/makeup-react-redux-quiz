import React, { Component } from 'react';
import Pets from './pets/Pets';

export default class App extends Component {

  render() {

    return (
      <div className="app">

        <main role="main" id="main">
          <section className="main-container maxwidth-wrap">
            <Pets/>
          </section>
        </main>

      </div>
    );
  }
}