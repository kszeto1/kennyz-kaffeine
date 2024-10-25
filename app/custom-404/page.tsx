// app/not-found.tsx

import Link from "next/link";
import Header from "../components/header";
import SubHeader from "../components/subheader";

export default function NotFound() {
  return (
    <div>
      <Header />
      <SubHeader />
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p className="text-2xl pb-4">Could not find requested resource</p>
      <Link href="/" className="text-lg font-semibold">
        Return Home
      </Link>
    </div>
    </div>
  );
}
