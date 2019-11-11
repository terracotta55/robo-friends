import React, { Component } from "react";

export class ErrorBoundary extends Component {
	constructor(props) {
		super();
		this.state = {
			hasError: false
		};
	}
	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
			return <h2>There's been an error...</h2>;
		}
		return this.props.children;
	}
}
