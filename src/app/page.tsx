import React from "react";

import { userSignOut } from "@/actions/authActions";
import AuthButton from "@/components/AuthButton";

export default function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <form action={userSignOut}>
        <AuthButton text="Sign out" />
      </form>
    </div>
  );
}
