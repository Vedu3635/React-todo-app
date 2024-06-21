import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const allTodos = JSON.parse(localStorage.getItem("todoData"));
  const params = useParams();
  // console.log(params);

  const currTask = allTodos.filter((item) => item.id === params.todoId);
  // console.log(currTask);
  return (
    <div>
      TodoDetail:{params.todoId}
      {currTask.map((item) => (
        <div className="title " key={item.id} style={{ textAlign: "center" }}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default TodoDetail;
