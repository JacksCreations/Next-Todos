import axios from "axios";

export async function deleteTaskFromDB(id) {
  try {
    const response = await axios.delete("/api/tasks", { data: { id } }); // ✅ Send ID to API
    return response.data;
  } catch (error) {
    console.error(
      "❌ Axios Error deleting task:",
      error.response?.data || error.message
    );
    return { error: "Failed to delete task" };
  }
}
