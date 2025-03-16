"use client";

import { googleSigninAction, githubSigninAction } from "@/actions/authActions";
import AuthButton from "@/components/AuthButton";
import Container from "@/components/Container";

export default function SigninPage() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-4">
        <form action={googleSigninAction}>
          <AuthButton text="Google" />
        </form>
        <form action={githubSigninAction}>
          <AuthButton text="GitHub" />
        </form>
      </div>
    </Container>
  );
}
