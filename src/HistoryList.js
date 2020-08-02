import React, { Fragment } from 'react';

import './historyList.css';

const HistoryList = (props) => {
    const {history, onClearListClick} = props;

    const historyList = history.map(item => {
        return (
            <li className="historyItem" key={Math.random()}>{item}</li>
        )
    })

    const List = () => {
        return (
            <Fragment>
                {historyList} 
                <li 
                    className='clearButton'
                    onClick={onClearListClick}
                >
                    clear
                </li>
            </Fragment>
        )
    }

    const EmptyList = () => {
        return <li className="empty">История пуста</li>
    }

    const validList = history.length === 0 ? <EmptyList/> : <List/>;

    console.log(validList)

    return (
        <ul className="historyList"> 
            {validList}
        </ul>
    )
}

export default HistoryList;
