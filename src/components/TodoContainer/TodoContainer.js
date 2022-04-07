import React from "react";
import './TodoContainer.css';
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
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