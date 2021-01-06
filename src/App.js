import './App.css';

//my own imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodo,selectedForEdit, updateTodo, selectedTodoValueChange } from "./actions/todos"
import TodoForm from './containers/TodoForm';

class App extends Component {

  componentDidMount(){
    this.props.getTodos()
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.deleteTodo(event.target.id)
  }

  handleEdit = (todo) => {
    //event.preventDefault()
    this.props.selectedTodoValueChange(todo.description)
    this.props.selectedForEdit(todo.id)

  }

  handleEditChange = (event) => {
    event.preventDefault()
    this.props.selectedTodoValueChange(event.target.value)
  }

  handleSave = (todo) => {
    // const temp = {...todo, description: this.props.selectedTodoValue }
    // console.log(temp)
    this.props.updateTodo({...todo, description: this.props.selectedTodoValue })
  }

  render(){
      const {selected, selectedTodoValue, todos} = this.props
      const todolist = todos.map((todo, i) => {
                return selected == todo.id
                ?(
                  <li key = {i}><input value = {selectedTodoValue} onChange = {this.handleEditChange} />
                    <button id={todo.id} onClick={this.handleClick}>X</button>
                    <button id={todo.id} onClick={()=>{this.handleSave(todo)}}>SAVE</button>
                    <button id={todo.id} >Read</button>
                 </li>)
                 :(
                  <li key = {i}>{todo.description + " "}
                    <button id={todo.id} onClick={this.handleClick}>X</button>
                    <button id={todo.id} onClick={()=>{this.handleEdit(todo)}}>Edit</button>
                    <button id={todo.id} >Read</button>
                 </li>)
      })

      return (
      <div className="App">
        <header className="App-header">
          <h3>Make a todo!</h3>
          <TodoForm/>
          <h1>Todo list</h1>
          <ul>{this.props.loading ? <h3>Loading...</h3> : todolist}</ul>
        </header>
      </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    loading: state.todoReducer.loading,
    selected: state.todoReducer.selectedForEdit,
    selectedTodoValue: state.todoReducer.selectedTodoValue
  }
}

export default connect(mapStateToProps, {getTodos, deleteTodo,selectedForEdit, updateTodo, selectedTodoValueChange  })(App);
