import React from "react";
import { Card } from "./Card";
const Fragment = React.Fragment;

export const CardList = ({ robots }) => {
	const cardComponent = robots.map((robot, i) => <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
	return (
		<Fragment>
			<div>{cardComponent}</div>
		</Fragment>
	);
};
