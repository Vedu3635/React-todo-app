import React, { useState, useEffect } from "react";
import "./Input.css";
import { FaCheckSquare } from "react-icons/fa";
const Input = ({ getInputdata, editData, taskEdis, isEdit, allData }) => {
  const styletick = { color: "gold", height: 30, width: 30 };
  const [enteredTodo, setEnteredTodo] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  useEffect(() => {
    if (taskEdis && taskEdis.title !== undefined) {
      setEnteredTodo(taskEdis.title);
    } else {
      setEnteredTodo(""); // Ensure enteredTodo is always a string
    }
  }, [taskEdis]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTodo === "") {
      return;
    }
    getInputdata(enteredTodo);
    setEnteredTodo("");
  };

  const editHandler = (e) => {
    e.preventDefault();
    // console.log("Entered Todo:", enteredTodo);
    // console.log("Task Edit Title:", taskEdis.title);
    if (enteredTodo === "") {
      return;
    }
    let index = allData.indexOf(taskEdis);
    let newTodos = [...allData];
    newTodos[index].title = enteredTodo;
    setEnteredTodo("");
    editData(newTodos);
  };
  // console.log(isEdit);

  return (
    <>
      <div className="todo-form flex">
        <div className="titleHome flex">
          My Todos
          <span>
            <FaCheckSquare style={styletick} />
          </span>
        </div>

        <form onSubmit={isEdit ? editHandler : submitHandler}>
          <input
            className="task-input"
            type="text"
            name="todoInput"
            id="todoInput"
            value={enteredTodo}
            placeholder="Enter your task..."
            onChange={inputChangeHandler}
          />
          <button className="form-btn">{isEdit ? "Update" : "Add"}</button>
        </form>
      </div>
    </>
  );
};

export default Input;

// const arr = [1,2,3,4,6]
// arr[3] = {id, title: new title}
