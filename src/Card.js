import React from "react";
const Fragment = React.Fragment;

export const Card = ({ id, name, email }) => {
	return (
		<Fragment>
			<div className="tc bg-moon-gray dib br4 pa2 ma2 grow ba b--green bw1 shadow-3">
				<img alt="robots-pic" src={`https://robohash.org/${id}?200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		</Fragment>
	);
};
