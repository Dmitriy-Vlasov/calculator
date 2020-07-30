import React from 'react';
import './number.css';

const numbers = ['C', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', ];

const Number = (props) => {
    const {onButtonClick} = props;

    const numbersButton = numbers.map(number => {
        if (number !== 'C') {
            return (
                <button 
                    value={number} 
                    className="number" 
                    key={number}
                    onClick = {() => onButtonClick(number)}
                >
                    {number}
                </button>
            )
            } else {
                return (
                <button 
                key={number}
                    className="resetButton"
                    onClick = {() => onButtonClick(number)}>
                        {number}
                </button>
                )
            }
    })

    return (
        <div className = "numbers">
            {numbersButton}
        </div>
    )
}


export default Number;