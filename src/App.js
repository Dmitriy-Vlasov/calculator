import React, {useState} from 'react';
import Display from './Display';
import Number from './Number';
import ActionButtons from './ActionButton';
import './reset.css'
import './App.css';

function App() {
  let [expression, setExpression] = useState('');
  let [equally, setEqually] = useState();

  const onButtonClick = (value) => {
    if (expression === '' && typeof(value) !== 'number') {
      setExpression(expression = '')
    } else
    if (equally !== null && value !== 'C') {
      setEqually(equally = null)
      setExpression(expression = '');
      setExpression(expression += String(value));
    } else
    if (value !== 'del' && value !== 'C') {
      setExpression(expression += String(value)); 
    } else 
    if (value === 'del'){
      setExpression(expression.substring(0, expression.length - 1))
    } else 
    if (value === 'C') {
      setEqually(equally = null)
      setExpression(expression = '');
    }
  }

  const fixEqually = () => {
    const result = String(eval(expression)).includes('.') ? 
                          eval(expression).toFixed(5) : 
                          eval(expression);
    setEqually(result)
  }

  return (
    <div className="App">
      <div className="calculator">
        <Display 
          expression = {expression}
          equally = {equally}
        />
        <div className="buttonsBlock">
          <Number
            onButtonClick = {onButtonClick}
          />
          <ActionButtons 
            onButtonClick = {onButtonClick}
            onEquallClick = {fixEqually}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
