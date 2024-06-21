import React, { useState, useEffect } from "react";

const PaginatedTodos = () => {
  const [dataall, setDataall] = useState([]);
  const [loding, setloding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloding(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const result = await response.json();
        setloding(false);
        setDataall(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {loding ? (
        <h1 style={{ textAlign: "center" }}>Loding...</h1>
      ) : (
        <ul>
          {dataall.map((item) => (
            <li className="List" key={item.id}>
              {" "}
              {item.title}
              {item.completed ? (
                <div className="status-comp">Completed</div>
              ) : (
                <div className="status-pend">Pending</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaginatedTodos;
