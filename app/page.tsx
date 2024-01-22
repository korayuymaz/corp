import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </div>
      <div>Home Page</div>
    </div>
  );
}
