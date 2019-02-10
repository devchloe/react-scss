import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

class CardsDashboard extends Component {

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableCardList />
                    <ToggleableCardForm isOpen={false}/>
                </div>
            </div>
        )
    }
}

class EditableCardList extends Component {
    render() {
        return (
                <div id="cards">
                    <EditableCard title="React Programming" category="Frontend" running={false} editFormOpen={false}/>
                    <EditableCard title="NodeJS Programming" category="Backend" running={true} editFormOpen={false} />
                </div>
        )
    }
}

class ToggleableCardForm extends Component {
    render() {
        if (this.props.isOpen) {
            return <CardForm/>;
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button className="ui basic button icon">
                        <i className="plus icon"/>
                    </button>
                </div>
            )
        }
    }
}

class EditableCard extends Component {
    render() {
        if (this.props.editFormOpen) {
            return (
                <CardForm title={this.props.title} category={this.props.category} />
            )
        } else {
            return (
                <Card title={this.props.title} category={this.props.category} running={this.props.running} />
            )
        }
    }
}

class Card extends Component {
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
                        <span className="right floated edit icon">
                            <i className='edit icon'/>
                        </span>
                        <span className="right floated trash icon">
                            <i className='trash icon'/>
                        </span>
                    </div>
                </div>
                <CardActionButton isRunning={this.props.running}/>
            </div>
        )
    }
}

class CardActionButton extends Component {
    render() {
        if (this.props.isRunning) {
            return (
                <div className="ui bottom attached red basic button">
                    Stop
                </div>
            )
        } else {
            return (
                <div className="ui bottom attached blue basic button">
                    Start
                </div>
            )
        }
    }
}

class CardForm extends Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" defaultValue={this.props.title} />
                        </div>
                        <div className="field">
                            <label>Category</label>
                            <input type="text" defaultValue={this.props.category} />
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button">
                                {submitText}
                            </button>
                            <button className="ui basic red button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// ReactDOM.render(<CardsDashboard/>, document.getElementById('content'));