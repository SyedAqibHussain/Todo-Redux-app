import React from 'react';
import TodoInput from '../containers/TodoInput';
import VisibleTodoList from '../containers/VisibleTodoList';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center text-white">Your todo list</h3>
          <TodoInput />
          <VisibleTodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
