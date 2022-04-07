import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';

const Root = () => {
  return(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
  )
}


ReactDOM.render(<Root />, document.querySelector('#root'))
