import React from "react";
import './TodoForm.css';

class TodoForm extends React.Component{
    constructor(){
        super()
    }
    render() {
        return(
            <div className="todo-form-container">
                <form>
                    <input type="text" placeholder="What need to be done?" />
                </form>
            </div>
        )
    }
}
export default TodoForm