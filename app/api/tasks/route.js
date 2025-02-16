import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

// ✅ API Route to Fetch Tasks
export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("❌ Error fetching tasks:", error);
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}

// ✅ Handle POST requests (add a new task)
export async function POST(req) {
  try {
    const { title } = await req.json(); // ✅ Get task data from request body

    if (!title) {
      return NextResponse.json(
        { error: "Task title is required" },
        { status: 400 }
      );
    }

    const newTask = await prisma.task.create({
      data: { title },
    });

    return NextResponse.json(newTask, { status: 201 }); // ✅ Return newly created task
  } catch (error) {
    console.error("❌ Error adding task:", error);
    return NextResponse.json({ error: "Failed to add task" }, { status: 500 });
  }
}

// ✅ Handle DELETE requests (delete task by ID)
export async function DELETE(req) {
  try {
    const { id } = await req.json(); // ✅ Get task ID from request body

    if (!id) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    await prisma.task.delete({
      where: { id: parseInt(id) }, // ✅ Ensure ID is an integer
    });

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error deleting task:", error);
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 500 }
    );
  }
}
