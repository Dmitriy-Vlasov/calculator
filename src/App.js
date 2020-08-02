import React, {useState, useEffect} from 'react';
import Display from './Display';
import Number from './Number';
import ActionButtons from './ActionButton';
import './reset.css'
import './App.css';
import HistoryList from './HistoryList';

function App() {

  let [history, setHistory] = useState({
    items: [],
    view: false,
  });


  let [expression, setExpression] = useState('');
  let [equally, setEqually] = useState(null);


  const onButtonClick = (value) => {
    if (equally !== null && value !== 'C') {
      if (value !== '+'  && value !== '/' && value !== '*' && value !== '.' && value !== '-') {
        clearFields();
        takeAction(value);
      } else {
        clearFields();
      }
    } else
    if (value === 'C') {
        clearFields();
    } else
    if (value === '+'  || value === '/' || value === '*' || value === '.' || value === '-') {
      if (expression !== '') {
        takeAction(value);
      }
    } else
    if (typeof(value) === 'number') {
      takeAction(value);
    }
  }

  const clearFields = () => {
    setEqually(equally = null)
        setExpression(expression = '');
  };

  const takeAction = (value) => {
    setExpression(expression += String(value));
  }

  const onEquallClick = () => {
    const result = String(eval(expression)).includes('.') ? eval(expression).toFixed(5) + '...' : eval(expression);
    setEqually(result);

    if (result != null) {
      history.items.push(`${expression}=${result}`);
      setHistory(history);
    }
  }

  const onHistoryMenuClick = () => {
    const newHistory = {
      view: !history.view,
      items: history.items
    }
    console.log(newHistory)

    setHistory(newHistory);
  }

  const onClearListClick = () => {
    setHistory({
      view: true,
      items: []
    })
  }

  return (
    <div className="App">
      
      <div className="calculator">
        {
        history.view && <HistoryList 
          history={history.items} 
          onClearListClick = {onClearListClick}
        />
        }
        <div 
          className="icons8-меню"
          onClick={onHistoryMenuClick}
        ></div>
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
            onEquallClick = {onEquallClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
