"use server";

import { signIn, signOut } from "@/auth";

export async function googleSigninAction() {
  return await signIn("google", { redirectTo: "/" }); // Redirect to home after login
}

export async function githubSigninAction() {
  return await signIn("github", { redirectTo: "/" }); // Redirect to home after login
}

export async function userSignOut() {
  return await signOut({ redirectTo: "/signin" }); // Redirect to home after logout (optional)
}
