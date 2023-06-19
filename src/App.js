import { Component } from 'react';
import './App.css';
import Container from './Components/Container/Container';
import Todo from './Components/todo/todo';

class App extends Component{
  state={
    todos :JSON.parse(localStorage.getItem("todos")) || [],
  }

  handleDel = (delTodo)=>{
    this.setState({todos:this.state.todos.filter((todo)=>(JSON.stringify(todo) !== JSON.stringify(delTodo)))})
  }

  handelSubmit = (todo)=>{
    this.setState({todos : [todo , ...this.state.todos]})
  }

  componentDidUpdate(){ 
    localStorage.setItem("todos" , JSON.stringify(this.state.todos));
  }

  render(){
    return(
      <div className="app">
      <Container onSubmit={this.handelSubmit}/>
      {
        <button className='delAll' onClick={()=>{this.setState({todos : []})}}>Delete All</button>
      }
      {
      this.state.todos.map((todo)=>(
        todo.text ? <Todo todo={todo} key={todo.id} handleDel={this.handleDel}/> : null
      ))
      }
    </div>
    )
  }
}

export default App;
