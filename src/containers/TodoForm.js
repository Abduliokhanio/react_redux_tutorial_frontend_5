import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

class TodoForm extends Component {
    state = {
        description: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const todo = { description: this.state.description }
        this.props.addTodo(todo)
        this.setState({
            description: ""
        })
    }

    handleChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" value={this.state.description} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodo } )(TodoForm)
