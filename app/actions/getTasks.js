import axios from "axios";

export async function getTasksFromDB() {
  try {
    const response = await axios.get("/api/tasks"); // ✅ Fetch from Next.js API
    return response.data; // ✅ Returns JSON tasks
  } catch (error) {
    console.error("❌ Error fetching tasks:", error);
    return { error: "Failed to fetch tasks" };
  }
}
