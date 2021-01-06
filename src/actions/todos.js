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

export const updateTodo = (todo) => {
    return dispatch => {
        dispatch({type: "UPDATE_TODO"})
        fetch(`/todos/${todo.id}`, {
          method: "PATCH",
          body: JSON.stringify(todo),
          headers: {
              'Content-Type': 'application/json',
              "Accept": 'application/json'
          }  
        })
         .then(res => res.json())
         .then(res => {console.log(res)
        return res})
         .then(newTodo => dispatch({type: "TODO_UPDATED", payload: newTodo, oldTodoId: todo.id}))

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

export const selectedForEdit = (id) => {
    return dispatch => {
        dispatch({type: "SELECTED_FOR_EDIT", payload: id})
    }
}

export const selectedTodoValueChange = (value) => {
    return dispatch => {
        dispatch({type: "SELECTED_TODO_VALUE", payload: value})
    }
}
