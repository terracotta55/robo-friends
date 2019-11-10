import React from "react";
const Fragment = React.Fragment;

export const SearchBox = ({ searchChange }) => {
	return (
		<Fragment>
			<div className="pa2">
				<input className="pa2 bg-lightest-blue ba b--green br2 bw1 shadow-3" type="search" placeholder="search robots" onChange ={searchChange} />
			</div>
		</Fragment>
	);
};
