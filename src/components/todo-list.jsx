import React, { Component } from 'react';
import Header from './header';
import Filter from './filter';
import TodoItem from './todo-item';

export default class TodoList extends Component {
	state = {todos: [], filterResult: []};

	render() {
		const filters = (
			<React.Fragment>
				<Filter filterText="All"
        filterTask={() => this.filterTask(null)}/>
			  <Filter filterText="Active"
          filterTask={() => this.filterTask(false)} />
			  <Filter filterText="Compeleted"
          filterTask={() => this.filterTask(true)}/>
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

	filterTask = (status) => {
    let data;
    if (status === null)
      data = this.state.filterResult;
    else
      data = this.state.filterResult.filter(x => x.isCompleted === status);
    this.setState({todos: data});
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
  	this.setState({filterResult: todoItems});
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

