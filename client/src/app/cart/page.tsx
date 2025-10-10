/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
"use client";
import { CartItem, PaymentForm, ShippingForm } from "@/components";
import { CartItemsType } from "@/types";
import { ArrowRight, Car, Ship } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

import { title } from "process";
import { useState } from "react";

//interattività lato client
const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
];
//TEMPORARY
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

const ShoppingCartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  const [shippingDetails, setShippingDetails] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE*/}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`border-b-2 flex items-center gap-2 pb-4 ${
              step.id === activeStep ? "text-gray-800" : "text-gray-400"
            }`}
          >
            <div
              className={`w-6 h-6 text-white rounded-full p-4 flex items-center justify-center
              ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}
            >
              {step.id}
            </div>
            <p className="text-sm font-medium">{step.title}</p>
          </div>
        ))}
      </div>
      {/* STEP AND DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* STEP CONTENT */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            <div className="flex flex-col gap-2">
              {cartItems.map((item) => (
                <CartItem cartItem={item} key={item.id} />
              ))}
            </div>
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 && shippingDetails ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Please complete the shipping form first
            </p>
          )}
        </div>
        {/* DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex  justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
                €
              </p>
            </div>
            <div className="flex  justify-between text-sm">
              <p className="text-gray-500">Discount (10%)</p>
              <p className="font-medium text-red-400">
                {(
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) * 0.1
                ).toFixed(2)}
                €
              </p>
            </div>
            <div className="flex  justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="font-medium">10€</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex  justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium">
                {(
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) -
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) *
                    0.1 +
                  10
                ).toFixed(2)}
                €
              </p>
            </div>
          </div>
          {activeStep == 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
