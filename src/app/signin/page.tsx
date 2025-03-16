"use client";

import { googleSigninAction, githubSigninAction } from "@/actions/authActions";
import AuthButton from "@/components/AuthButton";

export default function SigninPage() {
  return (
    <div>
      <form action={googleSigninAction}>
        <AuthButton text="Google" />
      </form>
      <form action={githubSigninAction}>
        <AuthButton text="GitHub" />
      </form>
    </div>
  );
}
