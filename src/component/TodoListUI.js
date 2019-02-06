import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List } from 'antd'

const TodoListUI = (props) => {
    return(
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <Input onChange={props.handleChange} value={props.inputValue} style={{width:'300px',marginRight:'5px'}} />
        <Button onClick={props.handleButton}>Default</Button>
        <List
            style={{width:'300px',marginTop:'10px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleDelete(index)}}>{item}</List.Item>)}
        />
        </div>
    )
}

// class TodoListUI extends Component{
//     render(){
//         return (
//             <div style={{marginTop:'10px',marginLeft:'10px'}}>
//             <Input onChange={this.props.handleChange} value={this.props.inputValue} style={{width:'300px',marginRight:'5px'}} />
//             <Button onClick={this.props.handleButton}>Default</Button>
//             <List
//                 style={{width:'300px',marginTop:'10px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleDelete(index)}}>{item}</List.Item>)}
//             />
//             </div>
//         )
//     }
// }

export default TodoListUI;