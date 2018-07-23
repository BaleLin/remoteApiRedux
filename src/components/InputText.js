import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Button ,message, } from 'antd';
import 'antd/dist/antd.css';
export default class InputText extends React.Component {
    constructor() {
        super();
         this.textValue = React.createRef();

    }

    addItem = () => {
        const inputValue = this.textValue.current.value
        if (inputValue===""){
        this.info();
        } else {
            this.props.addHandler(this.generateUUID(),inputValue)
            this.textValue.current.value = ""
            this.success();
        }

    }
    success = () => {
        message.success('添加成功咯!', 3);
    };
     info = () => {
        message.info('输入框不能为空哦!');
    };

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
                <input className="input-text" ref={this.textValue} />
                <Button type="primary" onClick={this.addItem} size={"samll"}>Add</Button>
            </div>

        );
    }
}