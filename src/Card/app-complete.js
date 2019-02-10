import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import uuid from "uuid";

class TodosDashboard extends Component {
    state = {
        todos: [
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
        this.createTodo(attrs);
    };

    handleEditFormSubmit = (attrs) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === attrs.id) {
                    return {...todo, title: attrs.title, category: attrs.category};
                } else {
                    return todo;
                }
            })
        })
    };

    handleTrashClick = (todoId) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== todoId)
        });
    };

    handleStartClick = (todoId) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === todoId) {
                    return {...todo, running: 1};
                } else {
                    return todo;
                }
            })
        })
    };

    handleInProgressClick = (todoId) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === todoId) {
                    return {...todo, running: 2};
                } else {
                    return todo;
                }
            })
        })
    };

    handleDoneClick = (todoId) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === todoId) {
                    return {...todo, running: 3};
                } else {
                    return todo;
                }
            })
        })
    };

    createTodo = (attrs) => {
        const todo = {
            id: uuid.v4(),
            title: attrs.title,
            category: attrs.category,
            running: 0
        };
        this.setState({
            todos: this.state.todos.concat(todo),
        })
    };

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTodoList todos={this.state.todos}
                                      onFormSubmit={this.handleEditFormSubmit}
                                      onTrashClick={this.handleTrashClick}
                                      onStartClick={this.handleStartClick}
                                      onInProgressClick={this.handleInProgressClick}
                                      onDoneClick={this.handleDoneClick}
                    />
                    <ToggleableTodoForm onFormSubmit={this.handleCreateFormSubmit}/>
                </div>
            </div>
        )
    }
}

class EditableTodoList extends Component {
    render() {
        const todoComponents = this.props.todos.map((todo) => (
            <EditableTodo key={todo.id}
                          id={todo.id}
                          title={todo.title}
                          category={todo.category}
                          running={todo.running}
                          onFormSubmit={this.props.onFormSubmit}
                          onTrashClick={this.props.onTrashClick}
                          onStartClick={this.props.onStartClick}
                          onInProgressClick={this.props.onInProgressClick}
                          onDoneClick={this.props.onDoneClick}
            />
        ));
        return (
            <div id="todos">
                {todoComponents}
            </div>
        )
    }
}

class ToggleableTodoForm extends Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({isOpen: true});
    };

    handleFormClose = () => {
        this.setState({isOpen: false});
    };

    handleFormSubmit = (todo) => {
        this.props.onFormSubmit(todo);
        this.setState({isOpen: false});
    };

    render() {
        if (this.state.isOpen) {
            return <TodoForm onFormClose={this.handleFormClose}
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

class EditableTodo extends Component {
    state = {
        editFormOpen: false,
    };

    handleEditClick = () => {
        this.setState({editFormOpen: true});
    };

    handleFormClose = () => {
        this.setState({editFormOpen: false});
    };

    handleFormSubmit = (todo) => {
        this.props.onFormSubmit(todo);
        this.setState({editFormOpen: false});
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <TodoForm id={this.props.id}
                          title={this.props.title}
                          category={this.props.category}
                          onFormSubmit={this.handleFormSubmit}
                          onFormClose={this.handleFormClose}
                />
            )
        } else {
            return (
                <Todo id={this.props.id}
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

class Todo extends Component {

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
                <TodoActionButton status={this.props.running}
                                  onStartClick={this.handleStartClick}
                                  onInProgressClick={this.handleInProgressClick}
                                  onDoneClick={this.handleDoneClick}
                />
            </div>
        )
    }
}

class TodoActionButton extends Component {

    render() {
        const status = this.props.status;

        switch (status) {
            case 1:
                return (
                    <div className="ui bottom attached green basic button" onClick={this.props.onInProgressClick}>
                        In Progress
                    </div>
                );
            case 2:
                return (
                    <div className="ui bottom attached red basic button" onClick={this.props.onDoneClick}>
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
                    <div className="ui bottom attached blue basic button" onClick={this.props.onStartClick}>
                        Start
                    </div>
                )
        }
    }
}

class TodoForm extends Component {
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

ReactDOM.render(<TodosDashboard/>, document.getElementById('content'));