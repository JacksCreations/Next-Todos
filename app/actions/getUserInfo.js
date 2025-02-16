export async function getUserInfo() {
  try {
    const response = await fetch("/api/user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // ✅ Ensures fresh data every time
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error in getUserInfo:", error);
    return null;
  }
}
