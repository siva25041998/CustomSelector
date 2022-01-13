import React from "react";
import Button from "../Button/Button";


function CustomSelector(props){

	const {options, className } = props;
	const OptionData = options;
    const   OptionItem = function(val) {
            return <option>{val}</option>;
			};


	return(
			<>

				<select className={className}>{OptionData.map(OptionItem)}</select>

			</>

	)
}

export default CustomSelector
