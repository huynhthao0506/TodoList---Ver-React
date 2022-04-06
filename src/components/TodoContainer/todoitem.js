import React from "react";
import './todoitem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="todo-item-container">
            <span className="todo-item-toggle">
                <img src={this.props.src} alt="tick" />
            </span>
            <div className="todo-item-content completed">{this.props.title}</div>
            <div className="todo-item-options">
                <span className="icon-btn">
                <img src="assets/edit.svg" alt="edit" />
                </span>
                <span className="icon-btn">
                <img src="assets/delete.svg" alt="close" />
                </span>
            </div>
        </div>
        )
    }
}
export default TodoItem