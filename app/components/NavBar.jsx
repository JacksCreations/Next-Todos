import { auth } from "@/auth";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

const NavBar = async () => {
  const session = await auth(); //retrieves the user’s session data (e.g., if the user is logged in or not).
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link className="text-black font-sans font-bold" href="/">
          Todos
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <Link href={`/user`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <span>Not logged in</span>
          )}
          <AuthButtons session={session} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
