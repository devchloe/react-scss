import React, { Component } from 'react';

import CardActionButton from './CardActionButton';

export default class Card extends Component {

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    };

    handleInProgressClick = () => {
        this.props.onInProgressClick(this.props.id);
    };

    handleDoneClick = () => {
        this.props.onDoneClick(this.props.id);
    };

    render() {
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="meta">
                        {this.props.category}
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={this.props.onEditClick}>
                            <i className='edit icon'/>
                        </span>
                        <span className="right floated trash icon" onClick={this.handleTrashClick}>
                            <i className='trash icon'/>
                        </span>
                    </div>
                </div>
                <CardActionButton status={this.props.running}
                                  onStartClick={this.handleStartClick}
                                  onInProgressClick={this.handleInProgressClick}
                                  onDoneClick={this.handleDoneClick}
                />
            </div>
        )
    }
}