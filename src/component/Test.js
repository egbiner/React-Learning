import React,{Component} from 'react';

//数据绑定
class Test extends Component{
    render(){
        return(
            <div>{this.props.content}</div>
        )
    }
}

export default Test;