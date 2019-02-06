import React,{Component} from 'react'
import store from '../store'
import {getChangeInputAction,getAddTodoItemAction,getDeleteItemAction} from '../store/actionCreators'
import 'antd/dist/antd.css'
import {Input,Button,List } from 'antd'

class TodoList2 extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.hanleStoreChange = this.hanleStoreChange.bind(this);
        store.subscribe(this.hanleStoreChange);
    }

    handleChange(e){
        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getChangeInputAction(e.target.value);
        store.dispatch(action);
    }

    handleButton(){
        // const action = {
        //     type:ADD_TODO_ITEM
        // }
        const action = getAddTodoItemAction();
        store.dispatch(action);
    }

    hanleStoreChange(){
        this.setState(store.getState());
    }

    handleDelete(index){
        // const action = {
        //     type:DELETE_TODO_ITEM,
        //     index:index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    render(){
        return(
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input onChange={this.handleChange} value={this.state.inputValue} style={{width:'300px',marginRight:'5px'}} />
                <Button onClick={this.handleButton}>Default</Button>
                <List
                    style={{width:'300px',marginTop:'10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList2;