/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { ProductList } from "@/components";
import React from "react";

async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category || "all";
  return (
    <div className="">
      <ProductList category={category} page="products" />
    </div>
  );
}

export default ProductPage;
