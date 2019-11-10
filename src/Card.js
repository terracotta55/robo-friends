import React from "react";

export const Card = ({ id, name, email }) => {
	return (
		<div className="tc bg-moon-gray dib br4 pa2 ma2 grow ba bw1 shadow-3">
			<img alt="robots-pic" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};
