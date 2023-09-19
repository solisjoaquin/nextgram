import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed py-5 px-5 lg:px-12 z-2 w-full text-gray-900 bg-white bg-opacity-50 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-50">
      <div>
        <Link href="/" className="text-xl font-bold text-black">
          <span className="text-blue-500">Mismo</span>
          <span className="text-green-500">depa</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
