import React, { Component } from 'react';

import CardForm from './CardForm';

export default class ToggleableCardForm extends Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({isOpen: true});
    };

    handleFormClose = () => {
        this.setState({isOpen: false});
    };

    handleFormSubmit = (card) => {
        this.props.onFormSubmit(card);
        this.setState({isOpen: false});
    };

    render() {
        if (this.state.isOpen) {
            return <CardForm onFormClose={this.handleFormClose}
                             onFormSubmit={this.handleFormSubmit}
            />;
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button className="ui basic button icon" onClick={this.handleFormOpen}>
                        <i className="plus icon"/>
                    </button>
                </div>
            )
        }
    }
}
