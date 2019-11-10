import React, { Component } from "react";
import { robots } from "./robots";
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
const Fragment = React.Fragment;

export class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ""
		};
	}
	onSearchChange = e => {
        this.setState({searchfield: e.target.value})
	}
	render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        console.log(filteredRobots);
		return (
			<Fragment>
				<div className="tc">
					<h1>Robot Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList robots={filteredRobots} />
				</div>
			</Fragment>
		);
	}
}
