import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-200 h-12 sticky top-0 z-50">
      <div className="flex flex-row mx-auto max-w-7xl h-full space-x-4 items-center ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
