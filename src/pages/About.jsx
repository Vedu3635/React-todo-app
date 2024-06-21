import React, { useContext } from "react";
import "./About.css";

import { useSelector } from "react-redux";

const About = () => {
  const redmode = useSelector((state) => state.toggleMode.value);
  return (
    <>
      {/* {`${mode !== "dark" ? "homelight" : "homedark"} `} */}
      <dir className={`${redmode === "dark" ? "home" : "home-light"}`}>
        <div className="content flex">
          <div className="titleAbout flex">
            <div>About ToDo</div>
            <div className="after"></div>
          </div>
          <div className="desc">
            A to-do list is a list of items that
            <span className="text-red"> need to be completed</span>. A to-do
            list is a list of items that. The items on the list can range from
            simple activities like replying to an email, to more complex tasks
            like creating project briefs.
          </div>

          <div className="desc">
            The items on a to-do list are usually
            <span className="text-red"> action-oriented</span>, such as
            “Schedule a meet with the R&D team” or “Call back customer X.” Some
            lists include more abstract goals, such as “improve your time
            management skills” or “learn how to use a new software program.”
          </div>
        </div>
      </dir>
    </>
  );
};

export default About;
