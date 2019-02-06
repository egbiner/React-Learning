import React,{Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //提升性能
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.item !== this.props.item){
            return true;
        }else{
            return false;
        }
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

TodoItem.PropTypes = {
    //test:PropTypes.string.isRequired,
    item:PropTypes.string,
    index:PropTypes.number,
    handleDelete:PropTypes.func
}

TodoItem.defaultProps = {
    //test:'default value'
}

export default TodoItem;