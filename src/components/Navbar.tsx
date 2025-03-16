import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Link href="/">Home</Link>
      <Link href="/questions">Questions</Link>
      <Link href="/questions/1">Question Details</Link>
      <Link href="/saved">Saved</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
