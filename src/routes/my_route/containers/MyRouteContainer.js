import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../actions';
import MyRouteView from '../components/MyRouteView';

const mapStateToProps = state => ({
  actionCompleted: state.myRoute.actionCompleted
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyRouteView);
