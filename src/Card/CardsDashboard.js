import React, {Component} from 'react';
import uuid from "uuid";


import EditableCardList from './EditableCardList';
import ToggleableCardForm from './ToggleableCardForm';

export default class CardsDashboard extends Component {
    state = {
        cards: [
            {
                id: uuid.v4(),
                title: 'React Programming',
                category: 'frontend',
                running: 0
            },
            {
                id: uuid.v4(),
                title: 'NodeJS Programming',
                category: 'backend',
                running: 0
            },
            {
                id: uuid.v4(),
                title: 'CSS',
                category: 'frontend',
                running: 0
            },
        ],
    };

    handleCreateFormSubmit = (attrs) => {
        this.createCard(attrs);
    };

    handleEditFormSubmit = (attrs) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === attrs.id) {
                    return {...card, title: attrs.title, category: attrs.category};
                } else {
                    return card;
                }
            })
        })
    };

    handleTrashClick = (cardId) => {
        this.setState({
            cards: this.state.cards.filter((card) => card.id !== cardId)
        });
    };

    handleStartClick = (cardId) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === cardId) {
                    return {...card, running: 1};
                } else {
                    return card;
                }
            })
        })
    };

    handleInProgressClick = (cardId) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === cardId) {
                    return {...card, running: 2};
                } else {
                    return card;
                }
            })
        })
    };

    handleDoneClick = (cardId) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === cardId) {
                    return {...card, running: 3};
                } else {
                    return card;
                }
            })
        })
    };

    createCard = (attrs) => {
        const card = {
            id: uuid.v4(),
            title: attrs.title,
            category: attrs.category,
            running: 0
        };
        this.setState({
            cards: this.state.cards.concat(card),
        })
    };

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableCardList cards={this.state.cards}
                                      onFormSubmit={this.handleEditFormSubmit}
                                      onTrashClick={this.handleTrashClick}
                                      onStartClick={this.handleStartClick}
                                      onInProgressClick={this.handleInProgressClick}
                                      onDoneClick={this.handleDoneClick}
                    />
                    <ToggleableCardForm onFormSubmit={this.handleCreateFormSubmit}/>
                </div>
            </div>
        )
    }
}