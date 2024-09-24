'use client'
import Link from "next/link";

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);

  return (
    <div>
    <div></div>
    <button>
      <Link href="/">

      <b>Something went wrong, try again!</b> Go back to home 

      </Link>
    </button>
    </div>
  );
}