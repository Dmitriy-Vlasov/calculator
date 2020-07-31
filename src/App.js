import React, {useState} from 'react';
import Display from './Display';
import Number from './Number';
import ActionButtons from './ActionButton';
import './reset.css'
import './App.css';

function App() {
  let [expression, setExpression] = useState('');
  let [equally, setEqually] = useState(null);

  const onButtonClick = (value) => {
    if (equally !== null && value !== 'C') {
      if (value !== '+' && value !== '-' && value !== '/' && value !== '*') {
        setEqually(equally = null)
        setExpression(expression = '');
        setExpression(expression += String(value));
      } else {
        setEqually(equally = null)
        setExpression(expression = '');
      }
    } else
    if (value === 'C') {
      setEqually(equally = null)
      setExpression(expression = '');
    } else
    if (value === '+' || value === '-' || value === '/' || value === '*') {
      if (expression !== '') {
        setExpression(expression += String(value));
      }
    } else
    if (typeof(value) === 'number') {
      setExpression(expression += String(value));
    }
  }

  const fixEqually = () => {
    const result = String(eval(expression)).includes('.') ? 
                          eval(expression).toFixed(5) + '...': 
                          eval(expression);
    setEqually(result);
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
