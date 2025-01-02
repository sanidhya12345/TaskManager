/** @format */

import "./Task.css";
import React from "react";

function Task(props) {
  const { title } = props;
  return (
    <div className="task" id={title}>
      {title}
    </div>
  );
}

export default Task;
