import React, {  useState } from "react";
import "./Navbar.css";
import { FaCheckSquare } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import Modal from "./Modal";
import "../pages/About.css";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/toggleMode/toggleMode";

const Navbar = () => {
  const styletick = { color: "gold", height: 25, width: 25 };
  const stylemode = { color: "white", height: 25, width: 25 };
  const dispatch = useDispatch();
  const redmode = useSelector((state) => state.toggleMode.value);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(mode);

  const logoutHandler = () => {
    localStorage.removeItem("user");
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal closeModal={closeModal} logoutHandler={logoutHandler} />
      )}
      <nav>
        <div className="navbar flex">
          <div className="logo flex">
            <Link to="/">TODO</Link>
            <span>
              <FaCheckSquare style={styletick} />
            </span>
          </div>
          <ul>
            {/* <Link to="/">Home</Link> */}
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              About
            </NavLink>
            <NavLink
              to={"/allTodos"}
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              All Todos
            </NavLink>
          </ul>
          <div className="logout flex">
            <span onClick={() => dispatch(toggle())}>
              {redmode === "dark" ? (
                <BsFillCloudSunFill style={stylemode} />
              ) : (
                <BsMoonStarsFill style={stylemode} />
              )}
            </span>
            {/* <button className="btn">Logout</button> */}

            {/* <Link to="/Login1"> */}
            <button className="btn" onClick={openModal}>
              Logout
            </button>
            {/* </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
