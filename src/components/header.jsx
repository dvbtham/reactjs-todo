import React, { Component } from 'react';

class Header extends Component {
	state = {
		value: ''
	}

  render() {
    return (
  		<div className="header">
			  <h2>Todo list with ReactJS</h2>
			  <input placeholder="Title..." onChange={this.handleChange} />
			  <span type="button" className="addBtn" onClick={() => 
			  	this.props.handleAddBtnClick(this.state.value)}>Add</span>
			  {this.props.filters}
	  	</div>
	  );
  }

  handleChange = (event) => this.setState({value: event.target.value});
}

export default Header;
