import React, { Component } from 'react';

export default class CardForm extends Component {
    state = {
        title: this.props.title || '',
        category: this.props.category || '',
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    };

    handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value,
        })
    };

    handleFormSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            category: this.state.category,
        })
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                        </div>
                        <div className="field">
                            <label>Category</label>
                            <input type="text" value={this.state.category} onChange={this.handleCategoryChange}/>
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button" onClick={this.handleFormSubmit}>
                                {submitText}
                            </button>
                            <button className="ui basic red button" onClick={this.props.onFormClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}