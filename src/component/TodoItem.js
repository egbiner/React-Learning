import React,{Component} from 'react'

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        const {index,handleDelete} = this.props;
        handleDelete(index);
        //this.props.handleDelete(this.props.index);
    }

    render(){
        const { item } = this.props;
        return(
            <li onClick={this.handleDelete}>{item}</li>
        )
    }
}

export default TodoItem;