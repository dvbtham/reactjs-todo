import React, { Component } from 'react';

export default class TodoItem extends Component {
	render() {
		return (
			<div>
				<li className={this.getCompletedClass()}
				  onClick={() => this.props.toggleTodoStatus(this.props.todo)}>
				  {this.props.todo.value} 
	      </li>
	      <span onClick={() => this.props.handleDelete(this.props.todo.id)}
			    className="close">×</span>	
			</div>
		);
	}

	getCompletedClass = () => this.props.todo.isCompleted ? 'checked' : '';
}
