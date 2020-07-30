import React from 'react';
import './display.css';


const Display = (props) => {
    const {expression, equally} = props;

    return (
        <div className="display">
            <div className="expression">{expression}</div>
            <div className="result">= {equally}</div>
        </div>
    )
}

export default Display;