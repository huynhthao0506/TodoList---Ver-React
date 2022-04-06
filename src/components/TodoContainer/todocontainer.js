import React from "react";
import './todocontainer.css';
import TodoForm from "./todoform";
import TodoFilter from "./todofilter";
import TodoList from "./todolist";
class TodoContainer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className="todo-container-wrapper">
                <div className="todo-container">
                    <TodoForm />
                    <TodoFilter />
                    <TodoList />
                </div>
            </div>
        )
    }
}
export default TodoContainer