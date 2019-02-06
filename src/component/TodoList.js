import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:[]
        }
        this.handleButton = this.handleButton.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // componentDidMount(){
    //     const api = 'https://easy-mock.com/mock/5c5a1d7b3583f80aa06939c7/example/api';
    //     axios.get(api).then((res)=>{
    //         console.log(res);
    //         this.setState({
    //             list:[...res.data]
    //         })
    //     }).catch(()=>{
    //         alert('fail')
    //     })
    // }

    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })

        // const value = e.target.value;
        // this.setState(()=>({
        //         inputValue:value
        //     })
        // )
    }

    handleButton(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }

    handleDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);

        this.setState({
            list:list
        })
    }

    getTodoItem(){
        return this.state.list.map((item,index) =>{
            return(                       
                <TodoItem 
                    index={index}
                    item={item} 
                    handleDelete = {this.handleDelete}
                 />
            )
        } )
    }

    render(){
        return(
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange} 
                        ref = {(input) => {
                            this.input = input
                        }}
                    />
                    <button onClick={this.handleButton}>New Task</button> 
                </div>
                <div>
                    <ul>{this.getTodoItem()}</ul>
                </div>
            </Fragment>
        )
    }
}

export default TodoList;
