import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const login = JSON.parse(localStorage.getItem("user"));
  // console.log(login);
  return <>{!login ? <Navigate to={"Login1"} /> : props.children}</>;
};

export default PrivateRoute;
