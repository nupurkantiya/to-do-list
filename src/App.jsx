import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = () => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...tasks].sort((a, b) =>
      order === "asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
    );
    setTasks(sorted);
    setSortOrder(order);
  };

  const filteredTasks =
    filter === "completed"
      ? tasks.filter((t) => t.completed)
      : filter === "incomplete"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button onClick={handleSort}>Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}</button>
      </div>

      <div className="task-list">
        {filteredTasks.map((t, index) => (
          <Task key={index} task={t} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;


