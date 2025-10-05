/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
"use client";
import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

function Categories() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";
  const router = useRouter();
  const pathname = usePathname();

  function handleChangeCategory(slug: string): void {
    //recupero il path corrente
    const currentPath = pathname;
    //ricostruisco la rotta con la nuova categoria creando un nuovo parametro di ricerca
    const params = new URLSearchParams(searchParams);
    //setto il nuovo parametro di ricerca e questo modificherà SOLO la categoria nella query string
    params.set("category", slug);
    router.push(`${currentPath}?${params.toString()}`, { scroll: false }); //impedisco lo scroll to top
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 mb-4 rounded-lg text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md 
            ${
              selectedCategory === category.slug ? "bg-white" : "text-gray-500"
            }`}
          key={category.slug}
          onClick={() => handleChangeCategory(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
