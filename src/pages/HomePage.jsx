import React, { useEffect, useContext } from "react";
import Input from "../components/Input";
import Cards from "../components/Cards";
import "./HomePage.css";
import { useState } from "react";

import { useSelector } from "react-redux";

const HomePage = () => {
  const redmode = useSelector((state) => state.toggleMode.value);

  const [allData, setallData] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  // {title:"",id:"", completed: true/false }

  const [isEdit, setisEdit] = useState(false);
  // console.log(isEdit);

  const [taskEdis, settaskEdis] = useState("");

  const getInputdata = (value) => {
    setallData((prevValue) => [
      ...prevValue,
      { title: value, id: Math.random().toString(), isCompleted: false },
    ]);

    // console.log(allData);
    localStorage.setItem("todoData", JSON.stringify(allData));
  };

  const editHandler = (id) => {
    // console.log(id);
    setisEdit(true);
    const t = allData.filter((e) => e.id === id);
    settaskEdis(t[0]);
  };

  const editData = (newTodos) => {
    setallData(newTodos);
    setisEdit(false);
    localStorage.setItem("todoData", JSON.stringify(allData));
  };

  const deleteHandler = (id) => {
    // console.log(id);
    const filteredData = allData.filter((item) => item.id !== id);
    setallData(filteredData);
  };

  const checkHandler = (id) => {
    // console.log(e);
    let index = allData.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...allData];

    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    setallData(newTodos);
  };

  useEffect(() => {
    // console.log("useeffect running");
    // console.log(allData);
    localStorage.setItem("todoData", JSON.stringify(allData));
  }, [allData]);

  return (
    <>
      <div className={`${redmode !== "dark" ? "homelight" : "homedark"} `}>
        <div
          className={` ${redmode === "dark" ? "todoDark" : "todoLight"} flex`}
        >
          {/* <div className="titleHome flex">
            My Todos
            <span>
              <FaCheckSquare style={styletick} />
            </span>
          </div> */}
          {/* <div className="inputField"> */}
          <Input
            getInputdata={getInputdata}
            editData={editData}
            taskEdis={taskEdis}
            isEdit={isEdit}
            allData={allData}
          />
          {/* </div> */}

          <div className="todo-list flex">
            {allData.map((allData) => (
              <Cards
                item={allData.title}
                checkHandler={checkHandler}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                isCompleted={allData.isCompleted}
                key={allData.id}
                id={allData.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

// parent to child --> props
// child to parent --> function

// function sum(a, b) {
//   return a + b;
// }

// sum(5, 10);
