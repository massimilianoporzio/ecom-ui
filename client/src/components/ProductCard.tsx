/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
"use client";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }: { product: ProductType }) {
  const [productSize, setProductSize] = React.useState(product.sizes[0]);
  const [productColor, setProductColor] = React.useState(product.colors[0]);
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productColor]} // Usa il colore selezionato
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 250px"
          />
        </div>
      </Link>
      {/* Details */}
      <div className="flex flex-col p-4 gap-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* Product types */}
        <div className="flex items-center gap-4 text-xs">
          {/* Sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              value={productSize}
              onChange={(e) => setProductSize(e.target.value)}
              className="ring ring-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option value={size} key={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* Colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer border-1 ${
                    productColor === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } rounded-full p-[1.2px]`}
                  key={color}
                  onClick={() => setProductColor(color)}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Price and add to cart*/}
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg">{product.price.toFixed(2)}€</p>
          <button className="ring-1 ring-gray-200 shadow-lg text-sm cursor-pointer px-2 py-1 rounded-md hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
