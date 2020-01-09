import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FlexTable = ({messages}) => {
    const msgState = [
        <div className="text-green">Отправлено</div>,
        <div className="text-gray">В очереди</div>,
        <div className="text-red">Ошибка</div>,
    ];

    const reversedMessages = [...messages].reverse();

    return (
        <div className="flex-table-wrap">
            <h2 className="flex-table__title">Отправленные сообщения</h2>
            {
                messages.length ?
                <div>
                    <div className="flex-table-header">
                        <div className="flex-table-row">
                            <div>Дата</div>
                            <div>Тема</div>
                            <div>Статус</div>
                        </div>
                    </div>
                    <div className="flex-table-body">
                        {
                            reversedMessages.map(({date, title, status, trackId: id}) => {
                                return (
                                    <div className="flex-table-row" key={id}>
                                        <div>{date}</div>
                                        <div>{title}</div>
                                        { 
                                            status === -1 ? msgState[0]
                                            : status > -1 ? msgState[1] : msgState[2]
                                        }
                                    </div>)
                            })
                        }
                    </div>
                </div>  
                : <p>Сообщения ещё не отправлялись</p>
            }
        </div>
    )
}

FlexTable.propTypes = {
    messages: PropTypes.array,
}

export default FlexTable;