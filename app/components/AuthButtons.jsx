"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButtons({ session }) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // ✅ Prevents full-page reload
    router.refresh(); // ✅ Forces UI update for session
  };

  return session ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <button onClick={() => signIn("github")}>Login</button>
  );
}
