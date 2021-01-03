export default (state = {todos: [], loading: false}, action) =>  {
    switch(action.type){
        case("LOADING_TODOS"):
            return {...state, loading: true}
        case("TODOS_LOADED"):
            return {...state, loading: false, todos: action.payload }
        case("ADDING_TODO"):
            return {...state, loading: true}
        case("TODO_ADDED"):
            return {...state, loading: false, todos:[...state.todos, action.payload] }
        case("DELETING_TODO"):
            return {...state, loading: true}
        case("TODO_DELETED"):
            return {...state, loading: false, 
                    todos: state.todos.filter(todo => todo.id != action.payload)}
        default:
            return state
    }
}