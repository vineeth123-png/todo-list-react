import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(evt) {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}

export default Todo;
