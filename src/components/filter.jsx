import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<span className="filterBtn mr-15 mt-15" onClick={this.handleClick}>
			{this.props.filterText}</span>
		);
	}

	handleClick = () => {
		console.log(this.props.source)
	}
}
