import React from 'react';
import Display from './Display';
import Number from './Number';
import ActionButtons from './ActionButton';
import './reset.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="calculator">
        <Display />
        <div className="buttonsBlock">
          <Number/>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
