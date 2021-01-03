import './App.css';

//my own imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodo } from "./actions/todos"
import TodoForm from './containers/TodoForm';

class App extends Component {

  componentDidMount(){
    this.props.getTodos()
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.deleteTodo(event.target.id)
  }

  render(){
      const todos = this.props.todos.map((todo, i) => {
          return <li key = {i}>{todo.description + " "}
                    <button id={todo.id} onClick={this.handleClick}>X</button>
                 </li>
      })

      return (
      <div className="App">
        <header className="App-header">
          <h3>Make a todo!</h3>
          <TodoForm/>
          <h1>Todo list</h1>
          <ul>{this.props.loading ? <h3>Loading...</h3> : todos}</ul>
        </header>
      </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    loading: state.todoReducer.loading
  }
}

export default connect(mapStateToProps, {getTodos, deleteTodo})(App);
