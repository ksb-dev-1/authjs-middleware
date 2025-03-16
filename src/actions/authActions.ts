"use server";

import { signIn } from "@/auth";

export async function googleSigninAction() {
  return await signIn("google", { redirectTo: "/" });
}

export async function githubSigninAction() {
  return await signIn("github", { redirectTo: "/" });
}
