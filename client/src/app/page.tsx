/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */

import ProductList from "@/components/ProductList";
import Image from "next/image";
const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || "all";
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} />
    </div>
  );
};

export default Homepage;
