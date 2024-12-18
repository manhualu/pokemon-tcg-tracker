import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Welcome to your Pokemon TCG Tracker!</div>
      <div>Click on one of the following sets to view your cards:</div>
      <ul>
        <li>
          <Link href="/paldeanFates" className="underline">
            Paldean Fates
          </Link>
        </li>
        <li>
          <Link href="/paldeanEvolved" className="underline">
            Paldean Evolved
          </Link>
        </li>
      </ul>
    </>
  );
}
