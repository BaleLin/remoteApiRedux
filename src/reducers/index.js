import Todo from "../model/Todo";

export default  (state={todos:[],allStatus:Todo.ALL}, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = [...action.todosObject.afeterHandleTodos];
            console.log("add"+JSON.stringify(newState));
            return newState
        }
        case 'TOGGLE_TODO':{
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = [...action.todosObject.afeterHandleTodos];
            console.log("勾选"+JSON.stringify(newState));
            return newState
        }
        case 'CHANGE_TODO': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = [...action.todosObject.afeterHandleTodos];
            console.log("内容改变"+JSON.stringify(newState));
            return newState
        }
        case 'FILTER_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState.allStatus = [...action.todosObject.filter];
            newState.todos = [...action.todosObject.afeterHandleTodos];
            console.log("筛选"+JSON.stringify(newState));
            return newState
        }
        default:
            return state
    }
}

