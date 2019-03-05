import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<span className="filterBtn mr-15 mt-15"
        onClick={this.props.filterTask}>
      {this.props.filterText}</span>
		);
	}
}
