import React, { Component } from 'react';


export default class InputText extends React.Component {
    constructor() {
        super();
         this.textValue = React.createRef();
    }

    addItem = () => {
        const inputValue = this.textValue.current.value
        this.props.addHandler(this.generateUUID(),inputValue)
        this.textValue.current.value = ""
    }

    generateUUID =()=> {
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }



    render() {       
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" ref={this.textValue}/>
                <div id="button" onClick={this.addItem}>Add</div>
            </div>
        );
    }
}