import React, {Component} from 'react';
import './todo.css';
import AddTodo from './container/InputTextContainer'
import Todos from './container/TodosContainer'
import FilterTodo from './container/FilterTodoContainer'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
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
                <Router>
                    <div>
                        <Route exact path="/" component={Todos}></Route>
                        <Route exact path="/:status" component={Todos}></Route>
                    </div>

                </Router>
                <FilterTodo />
            </div>);
    }
}

export default App;
