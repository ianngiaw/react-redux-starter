import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoComponent from './todo-component';
import { addTodo, removeTodo, changeInput } from 'rootDir/actions/todo';

const mapStateToProps = state => ({
  inputValue: state.todo.input,
  items: state.todo.items
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addTodo, removeTodo, changeInput }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
