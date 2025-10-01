/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="TrendMassi"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md font-medium tracking-wider">TREND-MASSI.</p>
      </Link>
      <div className="">{/* Navigation Links */}</div>
      <div className="">RIGHT</div>
    </nav>
  );
};

export default Navbar;
