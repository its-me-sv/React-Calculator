import React from 'react';
import "../index.css";

function OutputBox({steps, output}){
	return (<div>
		<div className="steps-box"><p>{steps}</p></div>
		<div className="output-box pp" id="display">{output}</div>
	</div>);
}

export default OutputBox;