// components/Cards.js
import React from "react";
import "./Cards.css";
import { MdOutlineDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Cards = ({
  item,
  checkHandler,
  editHandler,
  deleteHandler,
  isCompleted,
  id,
}) => {
  const navigate = useNavigate();
  const detailHandler = (id) => {
    // console.log(id);
    navigate(`/todo/${id}`);
  };
  return (
    <>
      <div className="card ">
        <div className={isCompleted ? "line-through" : ""}>{item}</div>

        <div className="buttons flex">
          <div className="complete-btn flex" onClick={() => checkHandler(id)}>
            <MdDone />
          </div>
          <div className="edit-btn flex" onClick={() => editHandler(id)}>
            <FaEdit />
          </div>
          <div className="delete-btn flex" onClick={() => deleteHandler(id)}>
            <MdOutlineDelete />
          </div>

          <div className="more-btn flex" onClick={() => detailHandler(id)}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
