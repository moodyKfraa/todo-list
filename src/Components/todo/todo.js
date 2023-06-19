import React, { Component } from "react";
import "./todo.css"
class Todo extends Component{
    handleComplete =(e)=>{
        e.target.classList.toggle("completed");
    }
    render(){
        return(
            <div className="todo" >
            <p onClick={this.handleComplete}>
                {this.props.todo.text}
            </p>
            <button onClick={()=>this.props.handleDel(this.props.todo)}>X</button>
            </div>
        )
    }
}
export default Todo