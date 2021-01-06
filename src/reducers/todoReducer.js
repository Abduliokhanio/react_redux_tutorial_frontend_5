const reducer = (state = {todos: [], loading: false}, action) =>  {
    switch(action.type){
        case("LOADING_TODOS"):
            return {...state, loading: true}


        case("TODOS_LOADED"):
            return {...state, loading: false, todos: action.payload }


        case("ADDING_TODO"):
            return {...state, loading: true}

            
        case("TODO_ADDED"):
            return {...state, loading: false, todos:[...state.todos, action.payload] }

            
        case("UPDATE_TODO"):
            return {...state, loading: true}

            
        case("TODO_UPDATED"):
            const newTodos = state.todos.splice(state.todos.indexOf(action.oldTodoId),1)
            console.log(newTodos)
            //filter by id instead of splice
            //remove old input for todo edit
            //instead of spreadign state.todo spread new todos.
            // add the action payload
            // very similar to line31
            return {...state, loading: false, todos:[...state.todos, action.payload] }

            
        case("DELETING_TODO"):
            return {...state, loading: true}

            
        case("TODO_DELETED"):
            return {...state, loading: false,todos: state.todos.filter(todo => todo.id !== parseInt(action.payload))}

            
        case("SELECTED_FOR_EDIT"):
            return {...state, selectedForEdit: action.payload}

            
        case("SELECTED_TODO_VALUE"):
            return {...state, selectedTodoValue: action.payload}

            
        default:
            return state
    }
}

export default reducer