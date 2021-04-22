import React from 'react';
import "../index.css";
import sound1 from '../sound1.mp3';
import sound2 from '../sound2.mp3';
import sound3 from '../sound3.mp3';

function InputBox({clearCall, findAnswer, zHandler, nHandler, dHandler, oHandler}){
	return (<div>
		<div className="top-part">
			<div className="ac" id="clear" onClick={clearCall}>
				<audio id="cr" src={sound1}></audio>
				AC
			</div>
			<div className="division" id="divide" onClick={()=>oHandler('/')}>
				<audio id="/" src={sound1}></audio>
				/
			</div>
			<div className="multiplication" id="multiply" onClick={()=>oHandler('*')}>
				<audio id="*" src={sound1}></audio>
				X
			</div>
		</div>
		<div className="digits-box">
			<div className="digit" id="seven" onClick={()=>nHandler('7')}>
				<audio id="7" src={sound2}></audio>
				7
			</div>
			<div className="digit" id="eight" onClick={()=>nHandler('8')}>
				<audio id="8" src={sound2}></audio>
				8
			</div>			
			<div className="digit" id="nine" onClick={()=>nHandler('9')}>
				<audio id="9" src={sound2}></audio>
				9
			</div>
			<div className="division" id="subtract" onClick={()=>oHandler('-')}>
				<audio id="-" src={sound1}></audio>
				-
			</div>
			<div className="digit" id="four" onClick={()=>nHandler('4')}>
				<audio id="4" src={sound2}></audio>
				4
			</div>
			<div className="digit" id="five" onClick={()=>nHandler('5')}>
				<audio id="5" src={sound2}></audio>
				5
			</div>
			<div className="digit" id="six" onClick={()=>nHandler('6')}>
				<audio id="6" src={sound2}></audio>
				6
			</div>
			<div className="division" id="add" onClick={()=>oHandler('+')}>
				<audio id="+" src={sound1}></audio>
				+
			</div>
			<div className="digit" id="one" onClick={()=>nHandler('1')}>
				<audio id="1" src={sound2}></audio>
				1
			</div>
			<div className="digit" id="two" onClick={()=>nHandler('2')}>
				<audio id="2" src={sound2}></audio>
				2
			</div>
			<div className="digit" id="three" onClick={()=>nHandler('3')}>
				<audio id="3" src={sound2}></audio>
				3
			</div>
			<div className="division" id="decimal" onClick={()=>dHandler('.')}>
				<audio id="." src={sound1}></audio>
				.
			</div>
		</div>
		<div className="bottom-part">
			<div className="digit" id="zero" onClick={()=>zHandler('0')}>
				<audio id="0" src={sound2}></audio>
				0
			</div>
			<div className="equal-to" id="equals" onClick={()=>findAnswer()}>
				<audio id="=" src={sound3}></audio>
				=
			</div>
		</div>
	</div>);
}

export default InputBox;