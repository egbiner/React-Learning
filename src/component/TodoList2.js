import React,{Component} from 'react'
import store from '../store'
import 'antd/dist/antd.css'
import {Input,Button,List } from 'antd'

class TodoList2 extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
    }

    render(){
        return(
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input value={this.state.inputValue} style={{width:'300px',marginRight:'5px'}} />
                <Button>Default</Button>
                <List
                    style={{width:'300px',marginTop:'10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList2;