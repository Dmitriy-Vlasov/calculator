import React from 'react';
import './number.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', 'del'];

const Number = () => {
    const numbersButton = numbers.map(number => {
            return (
            <button value={number} className="number" key={number}>{number}</button>
            )
    })

    return (
        <div className = "numbers">
            <button className="resetButton">C</button>
            {numbersButton}
        </div>
    )
}


export default Number;