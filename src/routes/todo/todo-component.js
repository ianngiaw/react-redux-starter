import React, { Component, PropTypes } from 'react';

class TodoComponent extends Component {
  static propTypes = {
    actions: PropTypes.object,
    inputValue: PropTypes.string,
    items: PropTypes.array
  };

  handleAddClick() {
    this.props.actions.addTodo(this.props.inputValue);
  }

  handleRemoveClick(id) {
    this.props.actions.removeTodo(id);
  }

  handleInputChange(event) {
    this.props.actions.changeInput(event.target.value);
  }

  render() {
    const { inputValue, items } = this.props;

    return (
      <div>
        <h1>Todo</h1>
        <div>
          <ul>
            {items.map(i => (
              <li key={ i.id }>
                { i.text }
                <button onClick={this.handleRemoveClick.bind(this, i.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input type="text" value={ inputValue } onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleAddClick.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
