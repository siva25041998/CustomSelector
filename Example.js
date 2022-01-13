import React from "react";
import CustomSelector from "./CustomSelector.js";


function Example{
	
	const Options = [1 ,2 , '3', 'Four', 'Five']
	return(
		<>
			<CustomSelector options={Options} />
		</>

	)
}

export default Example
