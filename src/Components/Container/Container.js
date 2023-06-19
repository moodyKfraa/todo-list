import React, { Component , Fragment} from "react";
import "./Container.css"

class Container extends Component{
    state = {
        text : "",
    }
    handleSubmition = (e)=>{
        e.preventDefault()
        this.props.onSubmit({
            id : Math.floor(Math.random() * 10000),
            text : this.state.text,
            completed : false,
        })
        this.setState({text :""})
    }
    render(){
        return(
            <Fragment>
            <div className= "input-section">
            <form className="container" onSubmit={this.handleSubmition}>
                <textarea placeholder="Enter your Todo:" onChange={(e)=> this.setState({text : e.target.value})} value={this.state.text} ></textarea>
                <input type="submit" value="Add New Task" onClick={this.handleSubmition}></input>
            </form>
            </div>
            </Fragment>
        )
    }w
}
export default Container 