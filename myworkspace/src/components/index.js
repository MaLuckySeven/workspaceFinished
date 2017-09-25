import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends Component{
    constructor(){
        super();
        this.state={
            isLiked:false
        }
    }
    hanlerClick=()=>{
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render(){
        const {isLiked}=this.props;
        return(
            <button onClick={this.hanlerClick.bind(this)}>
                {this.state.isLiked? '取消':'点赞'}
            </button>
        )
    }
}

export default class Index extends Component{
    render(){
        return(
            <LikeButton />
        )
    }
}
