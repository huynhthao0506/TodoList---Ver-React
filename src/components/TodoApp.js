import React from "react";
import './TodoApp.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TodoContainer from "./TodoContainer/TodoContainer";
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