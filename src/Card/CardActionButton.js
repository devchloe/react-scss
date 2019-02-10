import React from 'react';

const CardActionButton = (props) => {

    const status = props.status;

    switch (status) {
        case 1:
            return (
                <div className="ui bottom attached green basic button" onClick={props.onInProgressClick}>
                    In Progress
                </div>
            );
        case 2:
            return (
                <div className="ui bottom attached red basic button" onClick={props.onDoneClick}>
                    Done
                </div>
            );
        case 3:
            return (
                <div className="ui bottom attached grey basic button">
                    Success!
                </div>
            );
        default:
            return (
                <div className="ui bottom attached blue basic button" onClick={props.onStartClick}>
                    Start
                </div>
            )
    }
};

export default CardActionButton;