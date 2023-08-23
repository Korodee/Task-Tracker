import React, { useState } from "react";
import Header from "./NewComponents/Header";
import Tasks from "./NewComponents/Tasks";
const NewApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    { id: "2", text: "Go to Gym", day: "Feb 6th at 10:00am", reminder: true },
    { id: "3", text: "Study React", day: "Feb 7th at 4:00pm", reminder: true },
  ]);
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
};

export default NewApp;