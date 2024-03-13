import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Landing Page</h1>
      <Link href="/sign-up">Get Started</Link>
      <p>
        Already a member? <Link href="/sign-in">Sign in</Link>
      </p>
    </main>
  );
}
