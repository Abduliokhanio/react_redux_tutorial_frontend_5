//action object creater function

export const getTodos = () => {
    return dispatch => {
        dispatch({type: "LOADING_TODOS"})
        fetch("/todos")
        .then(res => res.json())
        .then(todos => dispatch({type: "TODOS_LOADED", payload: todos}))
    }
}

export const addTodo = (todo) => {
    return dispatch => {
        dispatch({type: "ADDING_TODO"})
        fetch("/todos", {
          method: "POST",
          body: JSON.stringify(todo),
          headers: {
              'Content-Type': 'application/json',
              "Accept": 'application/json'
          }  
        })
         .then(res => res.json())
         .then(todo => dispatch({type: "TODO_ADDED", payload: todo}))

    }
}

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch({type: "DELETING_TODO"})
        fetch(`/todos/${id}`, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              "Accept": 'application/json'
          }  
        })
        .then(() => dispatch({type: "TODO_DELETED", payload: id}))
  
        
    }
}
