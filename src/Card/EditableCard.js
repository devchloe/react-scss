import React, { Component } from 'react';

import CardForm from './CardForm';
import Card from './Card';

export default class EditableCard extends Component {
    state = {
        editFormOpen: false,
    };

    handleEditClick = () => {
        this.setState({editFormOpen: true});
    };

    handleFormClose = () => {
        this.setState({editFormOpen: false});
    };

    handleFormSubmit = (card) => {
        this.props.onFormSubmit(card);
        this.setState({editFormOpen: false});
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <CardForm id={this.props.id}
                          title={this.props.title}
                          category={this.props.category}
                          onFormSubmit={this.handleFormSubmit}
                          onFormClose={this.handleFormClose}
                />
            )
        } else {
            return (
                <Card id={this.props.id}
                      title={this.props.title}
                      category={this.props.category}
                      running={this.props.running}
                      onEditClick={this.handleEditClick}
                      onTrashClick={this.props.onTrashClick}
                      onStartClick={this.props.onStartClick}
                      onInProgressClick={this.props.onInProgressClick}
                      onDoneClick={this.props.onDoneClick}
                />
            )
        }
    }
}