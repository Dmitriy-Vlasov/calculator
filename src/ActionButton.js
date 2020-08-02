import React from 'react';
import './actionButtons.css';

const actions = ['/', '*', '+', '-', '=']

const ActionButtons = (props) => {
    const {onButtonClick, onEquallClick} = props;

    const actionButton = actions.map(action => {
            if (action !== '=') {
                return (<button 
                            className="actionButton"
                            key={Math.random()}
                            onClick = {() => onButtonClick(action)}
                            >
                                {action}
                            </button>)
            } else {
                return (<button 
                            className="equallyButton"
                            key={Math.random()}
                            onClick = {() => onEquallClick()}
                        >
                            {action}
                        </button>)
            }
    })

    return (
        <div className="actionButtons">
            {actionButton}
        </div>
    )
}

export default ActionButtons;
