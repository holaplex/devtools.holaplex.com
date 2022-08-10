import React from "react";


const GetAPIButton = (props) => {
	return <a
		href='/get-api'
		className={"rounded font-bold py-2 px-4 lg:px-8 text-white " + props.className}
		style={{ background: '#278BD2' }}
	>
		Get API
	</a>;
};

export default GetAPIButton;
