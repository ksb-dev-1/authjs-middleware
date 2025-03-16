import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-5xl w-full mt-[7rem] sm:mt-[9rem] px-4">
      {children}
    </section>
  );
}
