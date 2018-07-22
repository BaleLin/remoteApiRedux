import {connect} from 'react-redux'
import FilterTodo from "../components/FilterTodo";
import {filterTodo} from "../actions";
import todoApi from "../API/TodoApi";

const mapStateToProps = (state, ownProps) =>{
    return {
        allStatus: state.allStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        changeStatusHandler:(ViewStatus) => {
            const todosObject = todoApi.changeStatus(ViewStatus,dispatch);
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)