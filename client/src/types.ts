/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};
export type ProductsType = ProductType[];
