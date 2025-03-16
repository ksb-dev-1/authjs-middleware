"use client";

import Link from "next/link";
//import AuthButton from "./AuthButton";
import { useSession, signOut } from "next-auth/react";
import { Loader2 } from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="fixed top-0 left-0 right-0 h-[4.5rem] flex justify-center border-b bg-white">
      <nav className="max-w-5xl w-full px-4 flex items-center justify-between">
        <Link href="/">Home</Link>

        <div className="flex items-center">
          <Link href="/products">Products</Link>
          <Link href="/saved" className="mx-16">
            Saved
          </Link>
          <Link href="/profile">Profile</Link>
        </div>
        {status === "loading" ? (
          <button className="py-2 rounded border w-24 flex justify-center">
            <Loader2 className="animate-spin" />
          </button>
        ) : session?.user?.id ? (
          <button
            onClick={() => signOut()}
            className="py-2 rounded border w-24"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/signin"
            className="py-2 rounded border w-24 flex justify-center"
          >
            Sign in
          </Link>
        )}
      </nav>
    </div>
  );
}
