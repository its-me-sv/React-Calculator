import React, {useState} from 'react';
import "../index.css";
import OutputBox from "../Components/OutputBox.js";
import InputBox from "../Components/InputBox.js";

function App() {
  const [expression, setExpression] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [prevValue, setPrevValue] = useState("0");
  const [lastOperator, setLastOperator] = useState("");

  function clearAll(){
    setExpression("");
    setCurrentValue("0");
    setPrevValue("0");
    setLastOperator("");
  }

  function evaluate(){
    if (expression.length === 0 || expression === '-')
      return;
    let result = eval(expression.replaceAll('--', '+'));
    result = Math.round(1000000000000 * result) / 1000000000000;
    result = result + '';
    setExpression(result);
    setCurrentValue(result);
    setPrevValue(result);
    setLastOperator("");
  }

  function handleZero(val){
    setLastOperator("");
    if (prevValue.length===1 && prevValue === val)
      return;
    setPrevValue(prevValue+val);
    setCurrentValue(prevValue+val);
    setExpression(expression+val);
  }

  function handleNumber(val){
    setLastOperator("");
    setPrevValue(prevValue === "0" ? val : prevValue+val);
    setCurrentValue(prevValue === "0" ? val : prevValue+val);
    setExpression(expression+val);
  }

  function handleDecimal(val){
    setCurrentValue(prevValue);
    setLastOperator("");
    if (prevValue === "0"){
      setPrevValue("0.");
      setCurrentValue(prevValue);
      setExpression(expression+"0.");
      setCurrentValue("0.");
      return;
    }
    if (prevValue.includes("."))
      return;
    setPrevValue(prevValue+'.');
    setCurrentValue(prevValue);
    setExpression(expression+'.');
  }

  function handleOperator(val){
    setCurrentValue(val);
    setPrevValue("0");
    if (expression.length === 0){
      if (val === '-'){
        setExpression('-');
        setLastOperator('-');
      }
      return;
    }
    if (val === '-'){
      if (lastOperator.length === 1){
        setExpression(expression+'-');
        setLastOperator(lastOperator+'-');
        return;
      }
    }
    setExpression(expression.slice(0, expression.length-lastOperator.length)+val);
    setLastOperator(val);
  }
  
  return (
    <div>
      <h1 className="text-gradient grad-insta">Calculator</h1>
      <div className="container">
        <OutputBox 
          steps={expression} 
          output={currentValue}
        />
        <InputBox 
          clearCall={clearAll} 
          findAnswer={evaluate}
          zHandler={handleZero}
          nHandler={handleNumber}
          dHandler={handleDecimal}
          oHandler={handleOperator}
        />
      </div>
   </div>
  );
}

export default App;