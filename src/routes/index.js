import React, { Component } from 'react';
import { Match, Link } from 'react-router';

import Home from './home';
import Todo from './todo';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>
        <Match exactly pattern="/" component={Home}/>
        <Match exactly pattern="/todo" component={Todo}/>
      </div>
    );
  }
}

export default RootComponent;
