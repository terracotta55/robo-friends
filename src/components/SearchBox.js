import React from "react";
const Fragment = React.Fragment;

export const SearchBox = ({ searchChange }) => {
	return (
		<Fragment>
			<div className="pa2">
				<input className="pa2 bg-moon-gray ba b--yellow br2 bw2 shadow-3" type="search" placeholder="search robots" onChange ={searchChange} />
			</div>
		</Fragment>
	);
};
