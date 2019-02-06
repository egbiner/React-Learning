import React,{Component} from 'react'
import store from '../store'
import {getChangeInputAction,getAddTodoItemAction,getDeleteItemAction} from '../store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList2 extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.hanleStoreChange = this.hanleStoreChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
           <TodoListUI 
                inputValue={this.state.inputValue}
                list = {this.state.list}
                handleChange = {this.handleChange}
                handleButton = {this.handleButton}
                handleDelete = {this.handleDelete}
           />
        )
    }
}

export default TodoList2;