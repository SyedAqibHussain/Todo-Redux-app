import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/index";
import { FaCheckSquare } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#D5D5D5" : "#ffffff",
    color: completed ? "#777777" : "#000000"
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      style={styled}
      className="list-group-item text-capitalize d-flex justify-content-between my-1"
    >
      <h6>
        {/* {id} : {text} */}
        {text}

      </h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <FaCheckSquare
            className="fas fa-check-circle todo-item-icon"
            onClick={hanldeToggle}
          />
        </span>
        <span className="mx-2 text-danger">
          <FaTrash
            className="fas fa-trash todo-item-icon"
            onClick={handleDelete}
          />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
