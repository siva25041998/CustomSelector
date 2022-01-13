import React from "react";

// First of all you should gothrogh the Example.js file before this file
function CustomSelector(props){

	const {options, className } = props; //passing className and options as a props wherever you want
	const OptionData = options; //Example of how to using the Options in Example.js file
    	const OptionItem = function(val) {
            			return <option>{val}</option>;
				};

	return(
		<>
			//OptionData is mapping and return the array values.
			<select className={className}>{OptionData.map(OptionItem)}</select> 
		</>

	)
}

export default CustomSelector
