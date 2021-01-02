//action object creater function

export const getTodos = () => {
    return dispatch => {
        dispatch({type: "LOADING_TODOS"})
        fetch("/todos")
        .then(res => res.json())
        .then(todos => dispatch({type: "TODOS_LOADED", payload: todos}))
    }
}
