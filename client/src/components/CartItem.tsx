/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import { Trash2 } from "lucide-react";
import { CartItemType } from "../types";
import Image from "next/image";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  return (
    <div className="flex items-center justify-between">
      {/* Product Image and details*/}
      <div className="flex">
        <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={cartItem.images[cartItem.selectedColor]}
            alt={cartItem.name}
            fill
            className="object-contain"
          />
        </div>
        {/* Details */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{cartItem.name}</p>
            <p className="text-xs text-gray-500">
              Quantity: {cartItem.quantity}
            </p>
            <p className="text-xs text-gray-500">
              Size: {cartItem.selectedSize.toUpperCase()}
            </p>
            <p className="text-xs text-gray-500">
              Color: {cartItem.selectedColor}
            </p>
          </div>
          <p className="font-medium">{cartItem.price.toFixed(2)}€</p>
        </div>
      </div>
      {/* Delete button */}

      <button className="w-8 h-8 flex items-center justify-center cursor-pointer bg-red-100 hover:bg-red-200 text-red-400 rounded-full">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CartItem;
