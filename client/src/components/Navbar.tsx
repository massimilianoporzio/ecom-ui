/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import Image from "next/image";
import Link from "next/link";
import { SearchBar, ShoppingCartIcon } from ".";
import { Bell, Home } from "lucide-react";

const NavBar = () => {
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
        <p className="hidden md:block text-md font-medium tracking-wider">
          TREND-MASSI.
        </p>
      </Link>

      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="h-4 w-4 text-gray-600" />
        </Link>
        <Bell className="h-4 w-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
};

export default NavBar;
