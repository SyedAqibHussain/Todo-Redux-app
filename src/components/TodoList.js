import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { clearTodoList } from "../actions/index";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return (
    <div>
      <ul className="list-group my-5">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo}  />
        ))}
      </ul>
      {
        (todos.length) > 0 ? (<button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={handleClearList}
        >
          clear list
        </button>) : null 
      }
    </div>
  );
};

export default TodoList;
