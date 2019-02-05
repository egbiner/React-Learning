import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:[]
        }
    }

    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
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

    render(){
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleButton.bind(this)}>New Task</button> 
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((item,index) =>{
                                return(                       
                                    <TodoItem 
                                        index={index}
                                        item={item} 
                                        handleDelete = {this.handleDelete.bind(this)}
                                     />
                                )
                            } )
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default TodoList;
