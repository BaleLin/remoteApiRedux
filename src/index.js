import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './reducers/index'
import {Provider} from "react-redux"
import todoApi from "./API/TodoApi";
const store = createStore(rootReducer)
const rootEl = document.getElementById('root')
todoApi.initData(store.dispatch,"INIT_SERVICE");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)