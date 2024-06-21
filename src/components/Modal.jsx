import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Modal = ({ closeModal, logoutHandler }) => {
  const redmode = useSelector((state) => state.toggleMode.value);

  return (
    <>
      <div className="backDrop" onClick={closeModal}></div>
      {createPortal(
        <div
          className={` ${redmode === "dark" ? "alert" : "alert-light"} flex`}
        >
          <div className="message">Are you sure you want to logout?</div>
          <div className="btn-grp">
            <button className="btn-red" onClick={closeModal}>
              Cancle
            </button>
            <Link to="/Login1">
              <button className="btn-ylw" onClick={logoutHandler}>
                Logout
              </button>
            </Link>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
