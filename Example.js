import React from "react";
import CustomSelector from "CustomSelector.js";


function Example{
	
	const weekDays = [1 ,2 , 3, 4, 5, 6 ,7];
	const Months = ['jan' ,'Feb' , 'Mar', 'Apr', 'May', 'jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	return(
		<>
			<CustomSelector options={weekDays} className= 'use classes as per your need' />
			<CustomSelector options={Months} />
		</>

	)
}

export default Example
//Thank You
