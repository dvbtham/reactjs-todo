import React, { Component } from 'react';
import Header from './header';
import Filter from './filter';
import TodoItem from './todo-item';

export default class TodoList extends Component {
	state = {todos: []};

	render() {
		const filters = (
			<React.Fragment>
				<Filter filterText="All" />
			  <Filter filterText="Active" source={this.state.todos} />
			  <Filter filterText="Compeleted" />
			</React.Fragment>);
		return (
			<React.Fragment>
				<Header handleAddBtnClick={this.handleAddBtnClick} filters={filters} />				
				<ul>
				  {this.state.todos.map((todo) => 
				  	<TodoItem toggleTodoStatus={this.toggleTodoStatus}
				  	  key={todo.id} todo={todo} handleDelete={this.handleDelete} />
				  )}
				</ul>
			</React.Fragment>			
		);
	}

	filterItem = () => {
    const todoItems = this.state.todos.filter(x => x.isCompleted === false);
    this.setState({todos: todoItems});
    console.log(todoItems, 'YES');
	}

	handleAddBtnClick = (value) => {
		if(value === '') {
  		alert('Please enter title!!!');
  		return;
  	}
  	let todoItems = this.state.todos;
		let nextId = this.getNextId(todoItems);  	
  	todoItems.push({id: nextId, value: value, isCompleted: false});
  	this.setState({todos: todoItems});
  }

  handleDelete = (id) => {
  	const todoItems = this.state.todos.filter(x => x.id !== id);
  	this.setState({todos: todoItems});
  }

  toggleTodoStatus = (todoItem) => {
  	const todoItemList = [...this.state.todos];
  	const index = todoItemList.indexOf(todoItem);
  	todoItemList[index].isCompleted = !todoItemList[index].isCompleted;
	  this.setState({ todos: todoItemList });
  }

  getNextId(todoItems) {
  	if (todoItems.length >= 1)
      return todoItems[todoItems.length - 1].id + 1;
  	else
      return 1;
  }
}

