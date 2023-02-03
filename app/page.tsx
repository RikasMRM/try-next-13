import Link from "next/link";

export default function Home() {
  return (
    <main className="py-10 px-48">
      <Link href={"/dashboard"}>Go to the dashboard</Link>
    </main>
  );
}
