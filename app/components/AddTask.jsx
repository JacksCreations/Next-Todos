import React from "react";
import { useState } from "react";
import { addTaskToDB } from "../actions/addTask.js";

const AddTask = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  //Function for adding task and resetting input
  const addTask = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Task cannot be empty!");
      return;
    }

    try {
      const newTask = await addTaskToDB(input); // Wait for API call
      if (newTask.status === 201) {
        console.log(`${newTask.title} was added`);
      }
      setTasks([...tasks, newTask]); // Update state only after successful API response
      setInput(""); // Reset input field
    } catch (err) {
      console.log("Failed to add task. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={addTask}>
        <div className="flex items-center space-x-4 max-w-[300px] mx-auto mb-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="add a task..."
            className="text-black flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            // onSubmit={addTask}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTask;
