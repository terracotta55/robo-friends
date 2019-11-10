import React from "react";
import { robots } from "./robots";
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
const Fragment = React.Fragment;

export const App = () => {
	return (
		<Fragment>
			<div className="tc">
				<h1>Robot Friends</h1>
				<SearchBox />
				<CardList robots={robots} />
			</div>
		</Fragment>
	);
};
