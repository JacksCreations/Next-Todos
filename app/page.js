"use client";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Logbook from "./components/Logbook";

import { getTasksFromDB } from "./actions/getTasks.js"; // ✅ Fetch via API
import { useSession } from "next-auth/react"; // ✅ Fetch session in client components

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const { data: session, status } = useSession(); // ✅ Client-side session check

  useEffect(() => {
    const fetchTasks = async () => {
      if (!session) {
        return;
      }
      try {
        const res = await getTasksFromDB();
        setTasks(res); // ✅ Set tasks correctly
      } catch (error) {
        console.error;
      }
    };

    fetchTasks();
  }, [session]);

  return (
    <>
      {session ? (
        <>
          <div className="flex justify-center items-center p-10 text-3xl">
            <h1 className="text-center">Hello, {session.user.name}</h1>
          </div>

          <AddTask tasks={tasks} setTasks={setTasks} />
          <Tasks tasks={tasks} setTasks={setTasks} />
        </>
      ) : (
        <h1 className="text-white">Please login to see tasks</h1>
      )}
    </>
  );
}
