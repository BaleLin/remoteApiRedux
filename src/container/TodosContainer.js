import {connect} from 'react-redux'
import Todos from "../components/Todos";
import {changeCheck, changeContent} from "../actions";
import todoApi from "../API/TodoApi"
const mapStateToProps = (state, ownProps) =>{
    return {
        todos: state.todos,
        status: state.allStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        toggleActiveHandler:(viewId) => {
            const todosObject = todoApi.toggleActive(viewId);
            dispatch(changeCheck(todosObject)) } ,
        updateItemContent:(viewId,name) => {
            const todosObject = todoApi.updateItem(viewId,name);
            dispatch(changeContent(todosObject))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)