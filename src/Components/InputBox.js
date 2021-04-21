import React from 'react';
import "../index.css";

function InputBox({clearCall, findAnswer, zHandler, nHandler, dHandler, oHandler}){
	return (<div>
		<div className="top-part">
			<div className="ac" id="clear" onClick={clearCall}>AC</div>
			<div className="division" id="divide" onClick={()=>oHandler('/')}>/</div>
			<div className="multiplication" id="multiply" onClick={()=>oHandler('*')}>X</div>
		</div>
		<div className="digits-box">
			<div className="digit" id="seven" onClick={()=>nHandler('7')}>7</div>
			<div className="digit" id="eight" onClick={()=>nHandler('8')}>8</div>
			<div className="digit" id="nine" onClick={()=>nHandler('9')}>9</div>
			<div className="division" id="subtract" onClick={()=>oHandler('-')}>-</div>
			<div className="digit" id="four" onClick={()=>nHandler('4')}>4</div>
			<div className="digit" id="five" onClick={()=>nHandler('5')}>5</div>
			<div className="digit" id="six" onClick={()=>nHandler('6')}>6</div>
			<div className="division" id="add" onClick={()=>oHandler('+')}>+</div>
			<div className="digit" id="one" onClick={()=>nHandler('1')}>1</div>
			<div className="digit" id="two" onClick={()=>nHandler('2')}>2</div>
			<div className="digit" id="three" onClick={()=>nHandler('3')}>3</div>
			<div className="division" id="decimal" onClick={()=>dHandler('.')}>.</div>
		</div>
		<div className="bottom-part">
			<div className="digit" id="zero" onClick={()=>zHandler('0')}>0</div>
			<div className="equal-to" id="equals" onClick={()=>findAnswer()}>=</div>
		</div>
	</div>);
}

export default InputBox;