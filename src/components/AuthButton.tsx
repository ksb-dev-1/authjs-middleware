"use client";

import { useFormStatus } from "react-dom";

export default function AuthButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button className="px-4 py-2 border rounded w-32">
      {pending ? "..." : text}
    </button>
  );
}
