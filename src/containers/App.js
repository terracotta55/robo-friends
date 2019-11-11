import React, { Component } from "react";
import { CardList } from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import { Scroll } from "../components/Scroll";
import "./App.css";
import { ErrorBoundary } from "../components/ErrorBoundary";
const Fragment = React.Fragment;

export class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ""
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => {
				this.setState({ robots: users });
			});
	}
	onSearchChange = e => {
		this.setState({ searchfield: e.target.value });
	};
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
		// console.log(filteredRobots);
		if (!robots.length) {
			return <h2>Page Loading...</h2>;
		}
		return (
			<Fragment>
				<div className="tc">
					<h1>Robot Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			</Fragment>
		);
	}
}
