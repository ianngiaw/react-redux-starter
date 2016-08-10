// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classes from './HomeView.scss';

class HomeView extends Component {
  // static propTypes = {
  //   children: PropTypes.element.isRequired
  // };

  render() {
    // const { children } = this.props;
    return (
      <div className="container">
      <div className={classes.homeContent}>
        <p>Welcome home!</p>
      </div>
      </div>
    );
  }
}

export default HomeView;
