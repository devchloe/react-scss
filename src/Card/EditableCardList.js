import React from 'react';

import EditableCard from './EditableCard';

const EditableCardList = (props) => {
    const cardComponents = props.cards.map((card) => (
        <EditableCard key={card.id}
                      id={card.id}
                      title={card.title}
                      category={card.category}
                      running={card.running}
                      onFormSubmit={props.onFormSubmit}
                      onTrashClick={props.onTrashClick}
                      onStartClick={props.onStartClick}
                      onInProgressClick={props.onInProgressClick}
                      onDoneClick={props.onDoneClick}
        />
    ));

    return (
        <div id="cards">
            {cardComponents}
        </div>
    )
};

export default EditableCardList;