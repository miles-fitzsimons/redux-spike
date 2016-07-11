import React, { Component } from 'react'

class Counter extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1>{this.props.value}</h1>
				<button onClick={this.props.onIncrement}>+</button>
				<button onClick={this.props.onDecrement}>-</button>
			</div>
		)
	}


}

export default Counter