import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk the Fish" }, { task: "Groom chickens" }]
    };
    this.create = this.create.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo task={todo.task} createTodo={this.create} />
    ));
    return (
      <div>
        <NewTodoForm createTodo={this.create} />
        <h1>TodoList</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
