import {connect} from 'react-redux'
import Todos from "../components/Todos";
import {changeCheck, changeContent} from "../actions";
import todoApi from "../API/TodoApi"
const filterUrl=(todos,status)=>{
    console.log(JSON.stringify(todos));
    if (status == 'all'||status===undefined) {
        return todos;
    } else if (status == 'active') {
       return todos.filter(item => item.status === 'active')
    } else {
        return todos.filter(item => item.status === "completed")
    }
}
const mapStateToProps = (state, ownProps) =>{
    console.log(state)
    const todos = state.todos;
    console.log("state.todos:"+state.todos);
    const {match:{params:{status}}} = ownProps;
    const currentTodos = filterUrl(todos,status);
    console.log("currentTodos"+currentTodos);
    return {
        todos: currentTodos
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        toggleActiveHandler:(viewId,status) => {
            const todosObject = todoApi.toggleActive(viewId,status,dispatch);
            } ,
        updateItemContent:(viewId,name) => {
            const todosObject = todoApi.updateItem(viewId,name,dispatch);

        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)