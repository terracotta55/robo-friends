import React from "react";
const Fragment = React.Fragment;

export const Scroll = (props) => {
    return (
        <Fragment>
            <div style={{overflowY: 'scroll', border: '4px solid yellow', height: '450px'}}>
                {props.children}
            </div>
        </Fragment>
    );
}