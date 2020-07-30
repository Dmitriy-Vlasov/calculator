import React from 'react';
import './actionButtons.css';

const actions = ['÷', '×', '+', '-', '=']

const ActionButtons = () => {
    const actionButton = actions.map(action => {
            if (action != '=') {
                return (<button className="actionButton">{action}</button>)
            } else {
                return (<button className="equallyButton">{action}</button>)
            }
    })

    return (
        <div className="actionButtons">
            {actionButton}
        </div>
    )
}

export default ActionButtons;
