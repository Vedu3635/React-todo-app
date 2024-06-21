import React, { useState, useEffect, useContext } from "react";
import "./Alltodos.css";
import "./About.css";
import PaginatedTodos from "../components/PaginatedTodos";
import { useSelector } from "react-redux";
const Alltodos = () => {
  const redmode = useSelector((state) => state.toggleMode.value);

  return (
    <div className={`${redmode === "dark" ? "container" : "container-light"}`}>
      <div className="backgroundAllList flex">
        <div className="allListTitle flex">
          <h1>List of ToDos</h1>
          <div className="after"> </div>
        </div>
        <div className="listallToDo">
          <PaginatedTodos />
        </div>
      </div>
    </div>
  );
};

export default Alltodos;
