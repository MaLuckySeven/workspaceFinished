import React, { Component } from 'react';
import './style.css';

export default class TodoList extends Component{
    handlerEnter = (e) => {
        const {addTodo}=this.props;
        if(e.keyCode === 13){
            addTodo(e.target.value);
            e.target.value='';
        }
    }

    handlerChange = (item) =>{
        const {toggleCheck}=this.props;
        toggleCheck(item)
    }


    render() {
        const {todoitems}=this.props;
        return(
            <div className='todo'>
                <h2>TodoList</h2>
                <input onKeyDown={this.handlerEnter} className='todo--input'/>
                <ul>
                    {
                        todoitems.map((item,index) => (<TodoItem key={item.name} handlerChange={this.handlerChange} item={item}/>))
                    }
                </ul>
            </div>
        )
    }
    
}


class TodoItem extends Component{

    handlerChange = () => {
        const {handlerChange}=this.props;
        const {item}=this.props;
        handlerChange(item);
    }

    render(){
        const {item}=this.props;
        return(
            <li className='todo-item'>
                <input type='checkbox' onChange={this.handlerChange}  checked={!item.active} />
                <span className={!item.active && 'del'}>{item.name}</span>
            </li>
        )
       
    }
}
