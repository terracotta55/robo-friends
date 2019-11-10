import React, { Component } from "react";
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
import "./App.css"
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
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }
    onSearchChange = e => {
        this.setState({searchfield: e.target.value})
	}
	render() {
        const filteredRobots = this.state.robots
        .filter(robot => robot.name.toLowerCase()
            .includes(this.state.searchfield
                .toLowerCase()))
        // console.log(filteredRobots);
        if (this.state.robots.length === 0) {
            return <h1>Page Loading...</h1>
        }
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
