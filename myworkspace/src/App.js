import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './componet/TodoList/TodoList.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todoitems:[

      ]
    }
  }
  addTodo = (value) => {
    const todoitems = [...this.state.todoitems];
    todoitems.push({
      name:value,
      active:true,
    });
    this.setState({
      todoitems,
    })
  }

  toggleCheck = (item) => {
    const todoitems=[...this.state.todoitems];
    const index=todoitems.findIndex(i=> i.name === item.name);
    todoitems[index].active = !todoitems[index].active;
    this.setState({
      todoitems,
    })
  }
  render() {
    return (
      <div className="App">
        <TodoList
          todoitems={this.state.todoitems}
          addTodo={this.addTodo}
          toggleCheck={this.toggleCheck}></TodoList>
      </div>
    )
  }

  
}

export default App;
