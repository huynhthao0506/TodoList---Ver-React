import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/todo-app';
class Root extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
      <React.StrictMode>
          <TodoApp />
      </React.StrictMode>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'))
