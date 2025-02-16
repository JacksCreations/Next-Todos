import { deleteTaskFromDB } from "@/actions/deleteTask.js";
import React from "react";

const Task = ({ task, tasks, setTasks }) => {
  const deleteTask = () => {
    deleteTaskFromDB(task.id);
    const indexToRemove = tasks.indexOf(task);
    setTasks(tasks.filter((_, index) => index != indexToRemove));
  };

  return (
    <div
      onClick={deleteTask}
      className="bg-blue-500 hover:bg-green-500 flex justify-between items-center max-w-[300px] py-2 px-4 rounded w-full mt-5 mx-auto transition-colors duration-300"
    >
      <div className="text-white text-left">{task.title}</div>
      <button
        onClick={deleteTask}
        className="text-white hover:text-gray-300 focus:outline-none"
      >
        x
      </button>
    </div>
  );
};

// return (
//   <div className="bg-blue-500 flex justify-between items-center max-w-[300px] py-2 px-4 rounded w-full mt-5 mx-auto">
//     <div className="text-white text-left">{task.title}</div>
//     <button
//       onClick={deleteTask}
//       className="text-white hover:text-gray-300 focus:outline-none"
//     >
//       x
//     </button>
//   </div>
// );

export default Task;
