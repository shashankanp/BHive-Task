import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href={"/"}>Logo</Link>
      <ul>
        <Link className="py-2 px-4">Join Now!</Link>
      </ul>
    </nav>
  );
}
