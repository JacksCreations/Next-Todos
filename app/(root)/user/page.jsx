"use client";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "@/actions/getUserInfo";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const [user, setUser] = useState();
  const { data: session, status } = useSession(); // ✅ Client-side session check

  useEffect(() => {
    const fetchUser = async () => {
      if (!session) {
        setUser();
        return;
      }
      try {
        const res = await getUserInfo();
        setUser(res);
      } catch (error) {
        console.error;
      }
    };
    fetchUser();
  }, [session]);

  return (
    <div>
      {user ? (
        <ul>
          {Object.entries(user).map(([key, value]) => (
            <li key={key} className="text-white">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h1>Please sign in</h1>
        </>
      )}
    </div>
  );
};

export default UserInfo;
