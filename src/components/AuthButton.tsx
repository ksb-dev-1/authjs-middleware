"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function AuthButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button className="px-4 py-2 border rounded w-full flex items-center justify-center">
      {pending ? (
        <div className="flex items-center">
          {text}
          <Loader2 className="animate-spin ml-4" />
        </div>
      ) : (
        text
      )}
    </button>
  );
}
