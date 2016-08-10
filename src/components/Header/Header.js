import React, { Component } from 'react';
import classes from './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className={classes.headerContent}>
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item is-brand" href="#">
              <span className={classes.headerLogo}>BigBro</span>
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item" href="#">
              Home
            </a>
            <a className="nav-item" href="#">
              Documentation
            </a>
            <a className="nav-item" href="#">
              Blog
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
