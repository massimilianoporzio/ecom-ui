/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import Image from "next/image";
import Link from "next/link";

/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="TrendMassi" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            TREND-MASSI.
          </p>
        </Link>
        <p className="text-sm text-gray-400">&copy; 2025 Massimiliano Porzio</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-amber-50 text-sm">Links</p>
        <Link href="/" className="hover:text-white">
          Homepage
        </Link>
        <Link href="/" className="hover:text-white">
          Contact
        </Link>
        <Link href="/" className="hover:text-white">
          Terms of Service
        </Link>
        <Link href="/" className="hover:text-white">
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-amber-50 text-sm">Products</p>
        <Link href="/" className="hover:text-white">
          All Products
        </Link>
        <Link href="/" className="hover:text-white">
          New Arrivals
        </Link>
        <Link href="/" className="hover:text-white">
          Best Sellers
        </Link>
        <Link href="/" className="hover:text-white">
          Sale
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-amber-50 text-sm">Company</p>
        <Link href="/" className="hover:text-white">
          About
        </Link>
        <Link href="/" className="hover:text-white">
          Contact
        </Link>
        <Link href="/" className="hover:text-white">
          Blog
        </Link>
        <Link href="/" className="hover:text-white">
          Affiiliate Programs
        </Link>
      </div>
    </div>
  );
};

export default Footer;
