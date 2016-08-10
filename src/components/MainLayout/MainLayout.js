import React, { Component, PropTypes } from 'react';
import Header from '../Header/Header';
import classes from './MainLayout.scss';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.mainContainer}>
          {children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
