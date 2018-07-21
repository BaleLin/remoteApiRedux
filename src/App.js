import React, {Component} from 'react';
import './todo.css';
import AddTodo from './container/InputTextContainer'
import Todos from './container/TodosContainer'
import FilterTodo from './container/FilterTodoContainer'

class App extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Jquery To Do List</h2>
                    <p>
                        <em>Simple Todo List with adding and filter by diff status.</em>
                    </p>
                </div>
                <AddTodo />
                <Todos />
                <FilterTodo />
            </div>);
    }
}

export default App;
