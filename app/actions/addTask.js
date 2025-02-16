import axios from "axios";

export async function addTaskToDB(title) {
  try {
    const response = await axios.post("/api/tasks", { title }); // ✅ Send task to API
    return response.data;
  } catch (error) {
    console.error(
      "❌ Axios Error adding task:",
      error.response?.data || error.message
    );
    return { error: "Failed to add task" };
  }
}
