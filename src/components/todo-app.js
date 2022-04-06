import React from "react";
import './todo-app.css';
import Header from "./header";
import Footer from "./footer";
import TodoContainer from "./TodoContainer/todocontainer";
class TodoApp extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div id="todo-app">
                <Header />
                <TodoContainer />
                <Footer />
            </div>
        )
    }
}
export default TodoApp