import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//todos: [{ task: "Walk the Fish" }, { task: "Groom chickens" }]
			todos: []
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(newTodo) {
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	}

	remove(id) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	}
	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	toggleCompletion(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				task={todo.task}
				key={todo.id}
				id={todo.id}
				completed={todo.completed}
				updateTodo={this.update}
				removeTodo={this.remove}
				toggleTodo={this.toggleCompletion}
			/>
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
