import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

import { auth } from "@/auth";

export async function GET() {
  const session = await auth(); // ✅ Get session data

  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user info" },
      { status: 500 }
    );
  }
}
