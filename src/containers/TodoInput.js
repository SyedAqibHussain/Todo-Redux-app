import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/index";
import Footer from '../components/Footer';
import { FaPlus } from 'react-icons/fa';

const TodoInput = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
  };

  return (
    <div className="my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            name="todo"
            value={text}
            onChange={event => setText(event.target.value)}
          />
          <div className="input-group-prepend">
            <button className="input-group-text bg-custom text-white" type="submit" onClick={handleSubmit}>
              <FaPlus />
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default TodoInput;
