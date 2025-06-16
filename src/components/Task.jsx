import React from "react";
import "./Task.css";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button className="delete-btn" onClick={onDelete}>
        ✕
      </button>
    </div>
  );
}

export default Task;
