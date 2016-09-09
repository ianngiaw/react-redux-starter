import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppContainer extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    const { history, routes, store } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Router history={history} children={routes} />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default AppContainer;
