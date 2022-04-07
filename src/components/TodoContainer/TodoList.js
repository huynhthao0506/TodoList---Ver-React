import React from "react";
import './TodoList.css';
import TodoItem from "./TodoItem";
class TodoList extends React.Component {
    constructor() {
        super()     
    }
    render() {
        return(
            <div className="todo-list-container">
                <TodoItem 
                    title="Ăn bánh mì"
                    src="assets/complete-tick.svg"
                />
                <TodoItem 
                    title="Uống một tách trà nóng"
                    src="assets/active-tick.svg"
                />
                <TodoItem 
                    title="Đến Academy học lập trình"
                    src="assets/active-tick.svg"
                />
                <TodoItem 
                    title="Ăn trưa cùng crush"
                    src="assets/active-tick.svg"
                />
                <TodoItem 
                    title="Thực hành lập trình"
                    src="assets/active-tick.svg"
                />
            </div>
        )
    }
}
export default TodoList