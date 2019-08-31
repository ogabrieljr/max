import React, { Component } from "react";

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false,
			message: "ERROR"
		};
	}
	componentDidCatch = (error, message) => {
		this.setState({ error: true, message: error });
	};

	render() {
		if (this.state.error) {
			return <h1>{this.state.message}</h1>;
		} else return this.props.children;
	}
}
