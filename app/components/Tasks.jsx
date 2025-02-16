import React from "react";
import Task from "./Task";

// takes in array of tasks
const Tasks = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <Task key={index} tasks={tasks} task={task} setTasks={setTasks} />
        );
      })}
    </div>
  );
};

export default Tasks;
