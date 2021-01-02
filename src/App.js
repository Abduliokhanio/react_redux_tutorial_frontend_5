import './App.css';

//my own imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos } from "./actions/todos"

class App extends Component {

  componentDidMount(){
    this.props.getTodos()
  }

  render(){
      const todos = this.props.todos.map((todo, i) => {
          return <li key = {i}>{todo.description}</li>
      })

      return (
      <div className="App">
        <header className="App-header">
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

export default connect(mapStateToProps, {getTodos})(App);
