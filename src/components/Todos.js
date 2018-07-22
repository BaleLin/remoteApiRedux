import React, { Component } from 'react';

export default class ListContent extends Component {
    constructor(props) {
        super(props);
    } 

    changeToEditable(event) {
        event.target.setAttribute('contentEditable', 'true');
        event.target.focus();
    }

    changeToOnlyRead(event,id) {
        const keycode = (event.keyCode
            ? event.keyCode
            : event.which);
        if(keycode===13) {
            event.target.setAttribute('contentEditable', 'false');
            event.target.focus();
            this.props.updateItemContent(id, event.target.innerHTML);
        }

 }
    toggleActive = (id,status) => {
        this.props.toggleActiveHandler(id,status);
    }

    render() {
        return (
            <div >
                <ol>
                    {this.props.todos.map(item =>
                        <li className = {item.status==="completed" ? 'checked':''}>
                            <input
                                type="checkbox"
                                className="done-todo"
                                // defaultChecked={item.isCompleted}
                                checked={item.status==="completed"?'checked':''}
                                onClick={e => this.toggleActive(item.id,item.status)}
                            />

                            <span onKeyPress={e => this.changeToOnlyRead(e,item.id)} onDoubleClick={e => this.changeToEditable(e)}>
                                {item.content}
                                  </span>
                        </li>
                    )}
                   
                </ol>
            </div>             
        );
    }
}
