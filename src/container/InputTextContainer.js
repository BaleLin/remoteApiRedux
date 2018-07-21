import {connect} from 'react-redux'
import InputText from "../components/InputText";
import {addTodo, changeCheck} from "../actions";
import "../model/Todo"
import Todo from "../model/Todo";
import todoApi from "../API/TodoApi"
const mapStateToProps = (state, ownProps) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
            addHandler:(id,name) => {
            const todo = new Todo(id,name);
             const todosObject = todoApi.addItem(todo) ;
            dispatch(addTodo(todosObject));
        }


    }
};


export default connect(mapStateToProps, mapDispatchToProps)(InputText)